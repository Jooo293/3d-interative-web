import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { ADDED_GALLERY_PROJECTS } from '../src/config/galleryProjects.js';
import { illustratedProjects } from './gallery-cover-illustrations.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'public/textures/gallery/portfolio');
await mkdir(output, { recursive: true });
const imageProjects = [
    { id: 'hexaco-mini-program', source: process.argv[2] },
    { id: 'rainfall-website', source: process.argv[3] },
];
for (const project of imageProjects) {
    if (project.source) {
        await sharp(project.source).rotate().webp({ quality: 95 })
            .toFile(path.join(output, `${project.id}-image.webp`));
    }
}
const paper = await sharp(path.join(root, 'public/textures/gallery/tylkartki.webp'))
    .extract({ left: 0, top: 0, width: 1024, height: 1080 }).resize(768, 1024).png().toBuffer();
const drawings = {
    'senior-care': '<path d="M384 650 225 496C121 385 292 287 384 418 476 287 647 385 543 496Z"/><path d="M224 505h83l39-77 59 147 42-70h100"/>',
    'rainfall-website': '<path d="M231 425c-81-43-23-158 54-125 6-123 201-139 223-8 107-25 132 118 36 133Z"/><path d="m290 460-22 48m112-48-22 48m112-48-22 48M225 555v133h332M279 652v-38m77 38v-76m77 76v-49m77 49V549"/>',
    'science-foundation': '<rect x="176" y="485" width="114" height="170"/><rect x="331" y="394" width="110" height="261"/><rect x="482" y="306" width="110" height="349"/><path d="m206 384 167-96 168-99m-54 0h54v54M209 532h44m-44 56h44m108-134h49m-49 66h49m103-147h43m-43 66h43m-43 66h43"/>',
    'school-archives': '<path d="M205 354h141l41 50h181v256H205Z"/><path d="M251 354v-81h204l63 62v69m-63-131v63h63M275 481h208m-208 61h133"/><circle cx="474" cy="584" r="48"/><path d="m451 582 17 18 31-34"/>',
};
const colors = ['#48745b', '#367c9d', '#735993', '#ad5555'];
for (const [index, project] of [...ADDED_GALLERY_PROJECTS, imageProjects[0], ...illustratedProjects].entries()) {
    for (const painted of [false, true]) {
        const imagePath = path.join(output, `${project.id}-image.webp`);
        if (existsSync(imagePath)) {
            let image = sharp(imagePath);
            if (!painted) image = image.greyscale();
            const cover = await image.resize(684, 704, { fit: 'contain', background: '#ffffff' }).png().toBuffer();
            await sharp(paper).composite([{ input: cover, left: 42, top: 214 }]).webp({ quality: 95 })
                .toFile(path.join(output, `${project.id}${painted ? '-painted' : ''}.webp`));
            continue;
        }
        if (!drawings[project.id] && !project.draw) continue;
        const color = painted ? project.color || colors[index] : '#333333';
        const drawing = project.draw ? project.draw(painted) : drawings[project.id];
        const caption = project.caption || ['健康记录 · 定期慰问', '降雨数据 · 交互呈现', '外文研究 · 指标体系', '核对分类 · 规范归档'][index];
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="768" height="1024"><g fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">${drawing}</g><g fill="${color}" font-family="Microsoft YaHei, sans-serif" text-anchor="middle"><text x="384" y="795" font-size="40">${project.category}</text><text x="384" y="855" font-size="28">${caption}</text></g></svg>`;
        await sharp(paper).composite([{ input: Buffer.from(svg) }]).webp({ quality: 93 })
            .toFile(path.join(output, `${project.id}${painted ? '-painted' : ''}.webp`));
    }
}
console.log('Generated gallery covers with monochrome and color versions.');
