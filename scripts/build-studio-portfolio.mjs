import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONTENT_DATA, PLATFORM_CONFIG } from '../src/components/canvas/rooms/Studio/contentData.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = process.argv[2];
if (!source) throw new Error('Pass the folder containing the six supplied images.');
const output = path.join(root, 'public/textures/studio/portfolio');
await mkdir(output, { recursive: true });
const files = {
    'poster-lotr': '魔戒.jpg', 'poster-lotr-2': '魔戒1.jpg', 'poster-silmaril': '精灵宝钻.jpg',
    'drawing-1': '写轮眼.png', 'drawing-2': '写轮眼2.png', 'drawing-3': '写轮眼3.png',
};
const screens = {
    monitor: { x: 45, y: 42, width: 933, height: 408, ratio: 1.6 / 2 },
    tv: { x: 235, y: 166, width: 1200, height: 565, ratio: (1.6 / 1.187) / 2 },
    phone: { x: 55, y: 202, width: 910, height: 1642, ratio: (0.6 / 1.139) / 0.5 },
};
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const selectedItems = process.argv[3] ? CONTENT_DATA.filter(item => item.id === process.argv[3]) : CONTENT_DATA;
if (!selectedItems.length) throw new Error('Unknown screen id.');
for (const item of selectedItems) {
    const screen = screens[item.device];
    const displayWidth = Math.round(screen.width * screen.ratio);
    let artwork;
    if (item.media?.poster) {
        artwork = await sharp(path.join(root, 'public', item.media.poster)).png().toBuffer();
    }
    if (item.image) {
        artwork = await sharp(path.join(source, files[item.id])).rotate().webp({ quality: 94 }).toBuffer();
        await sharp(artwork).toFile(path.join(output, `${item.id}-image.webp`));
    }
    for (const painted of [false, true]) {
        let content;
        if (artwork) {
            let image = sharp(artwork);
            if (!painted) image = image.greyscale();
            content = await image.resize(displayWidth, screen.height, { fit: 'contain', background: '#ffffff' }).png().toBuffer();
        } else {
            const color = painted ? PLATFORM_CONFIG[item.platform].color : '#303639';
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${displayWidth}" height="${screen.height}"><rect width="100%" height="100%" fill="white"/><g font-family="Microsoft YaHei, sans-serif" fill="${color}"><text x="48" y="62" font-size="24">${escape(PLATFORM_CONFIG[item.platform].label)}</text><path d="M48 88h${displayWidth-96}" stroke="${color}" stroke-width="3"/>${item.screenLines.map((line,i)=>`<text x="48" y="${166+i*76}" font-size="${i?32:46}" font-weight="${i?400:700}">${escape(line)}</text>`).join('')}</g></svg>`;
            content = await sharp(Buffer.from(svg)).png().toBuffer();
        }
        // Compensate for the existing device geometry's texture aspect ratio.
        content = await sharp(content).resize(screen.width, screen.height, { fit: 'fill' }).png().toBuffer();
        const layers = [{ input: content, left: screen.x, top: screen.y }];
        if (item.device === 'monitor') layers.push({input:await sharp({create:{width:130,height:39,channels:4,background:'#ffffff'}}).png().toBuffer(),left:449,top:465});
        const base = path.join(root, `public/textures/studio/${item.device}_front.webp`);
        await sharp(base).composite(layers).webp({quality:91}).toFile(path.join(output, `${item.id}-front${painted?'-painted':''}.webp`));
    }
}
console.log(`Generated ${selectedItems.length} screen designs.`);
