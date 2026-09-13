import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reference = process.argv[2];
if (!reference) throw new Error('Pass the supplied seven-logo reference image path.');
const output = path.join(root, 'public/textures/about/skills');
await mkdir(output, { recursive: true });
const logos = [
    { id: 'stata', rect: [60, 234, 210, 68], color: [61, 135, 175] },
    { id: 'spss', rect: [351, 167, 199, 203], color: [64, 143, 194] },
    { id: 'workbuddy', rect: [621, 151, 229, 232], color: [72, 180, 141] },
    { id: 'codex', rect: [65, 485, 191, 205], color: [109, 166, 165] },
    { id: 'midjourney', rect: [348, 497, 205, 177], color: [172, 136, 172] },
    { id: 'python', rect: [73, 808, 183, 189], color: [229, 190, 82] },
    { id: 'office', rect: [352, 802, 191, 201], color: [222, 128, 106] },
];

// Flood out the pale app-tile background, retaining enclosed white logo details.
async function extractLogo(rect) {
    const [left, top, width, height] = rect;
    const { data, info } = await sharp(reference).extract({ left, top, width, height }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const seen = new Uint8Array(width * height);
    const queue = [];
    const add = (x, y) => {
        const i = y * width + x;
        if (seen[i]) return;
        const p = i * 4;
        const hi = Math.max(data[p], data[p + 1], data[p + 2]);
        const lo = Math.min(data[p], data[p + 1], data[p + 2]);
        if (lo > (left === 621 ? 90 : 155) && hi - lo < 40) { seen[i] = 1; queue.push(i); }
    };
    for (let x = 0; x < width; x++) { add(x, 0); add(x, height - 1); }
    for (let y = 0; y < height; y++) { add(0, y); add(width - 1, y); }
    for (let q = 0; q < queue.length; q++) {
        const i = queue[q], x = i % width, y = Math.floor(i / width);
        data[i * 4 + 3] = 0;
        if (x) add(x - 1, y);
        if (x + 1 < width) add(x + 1, y);
        if (y) add(x, y - 1);
        if (y + 1 < height) add(x, y + 1);
    }
    return sharp(data, { raw: info }).trim().png().toBuffer();
}

// Keep the original hand-drawn outline and string; clear only the GSAP lettering.
const { data: base, info } = await sharp(path.join(root, 'public/textures/about/GSAPduzybalon.webp')).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let y = 411; y < 650; y++) for (let x = 391; x < 998; x++) {
    const p = (y * info.width + x) * 4;
    base[p] = base[p + 1] = base[p + 2] = 255;
}

for (const item of [...logos, { id: 'cet6', color: [126, 153, 189] }, { id: 'interview', color: [167, 173, 109] }]) {
    let icon;
    if (item.rect) {
        icon = await extractLogo(item.rect);
        await sharp(icon).toFile(path.join(output, `${item.id}-logo.png`));
        icon = await sharp(icon).resize({ width: 490, height: 415, fit: 'inside' }).png().toBuffer();
    }
    for (const painted of [false, true]) {
        const pixels = Buffer.from(base);
        if (painted) {
            for (let y = 85; y < 1080; y++) for (let x = 315; x < 1050; x++) {
                const p = (y * info.width + x) * 4;
                if (!pixels[p + 3]) continue;
                const light = Math.min(pixels[p], pixels[p + 1], pixels[p + 2]) / 255;
                const highlight = Math.max(0, 1 - Math.hypot((x - 535) / 600, (y - 290) / 950));
                for (let c = 0; c < 3; c++) pixels[p + c] = Math.round(light * (item.color[c] + (255 - item.color[c]) * (0.48 + highlight * 0.3)));
            }
        }
        const layers = [];
        if (icon) {
            const mark = painted ? icon : await sharp(icon).greyscale().png().toBuffer();
            const meta = await sharp(mark).metadata();
            layers.push({ input: mark, left: Math.round(690 - meta.width / 2), top: Math.round(525 - meta.height / 2) });
        }
        const composite = await sharp(pixels, { raw: info }).composite(layers).png().toBuffer();
        await sharp(composite).resize(696, 696).webp({ quality: 92 }).toFile(path.join(output, `${item.id}${painted ? '-painted' : ''}.webp`));
    }
}
console.log('Created nine pairs of skill balloon textures and seven reference logos.');
