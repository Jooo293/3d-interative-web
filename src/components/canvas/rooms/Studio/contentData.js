import { PORTFOLIO_DOCUMENTS } from '../../../../config/portfolioDocuments.js';
import { HEXACO_MINI_PROGRAM } from '../../../../config/miniPrograms.js';

export const PLATFORM_CONFIG = {
    research: { label: '研究', shape: 'monitor', color: '#46788a', accentColor: '#315765' },
    poster: { label: 'image-2 电影海报', shape: 'phone', color: '#8a6955', accentColor: '#665142' },
    artwork: { label: '个人手绘', shape: 'tv', color: '#a35158', accentColor: '#793d43' },
    project: { label: '数字项目', shape: 'monitor', color: '#567d65', accentColor: '#3a5946' },
    music: { label: 'Lyria 音乐', shape: 'tv', color: '#7a5266', accentColor: '#563c4b' },
};

const entries = [
    {
        id: 'lyria-slowest-release', platform: 'music', title: 'THE SLOWEST RELEASE',
        media: { src: '/media/lyria/the-slowest-release.mp4', poster: '/media/lyria/the-slowest-release-cover.webp' },
        description: '极其舒缓、冥想般的环境氛围。音乐节奏缓慢，主要由带有空灵混响的柔和原声钢琴，以及宽广而温暖的合成器铺垫构成，没有打击乐或强烈的低音，营造出一种极其宁静、祥和且充满空间感的纯粹听觉体验。',
        sectionTitle: '冥想氛围', points: ['使用 Lyria 制作', '柔和原声钢琴、空灵混响与温暖合成器铺垫', '缓慢节奏，无打击乐或强烈低音'],
    },
    {
        id: 'lyria-geometry-storm', platform: 'music', title: 'GEOMETRY OF THE STORM',
        media: { src: '/media/lyria/germetry-of-the-storm.mp4', poster: '/media/lyria/germetry-of-the-storm-cover.webp' },
        description: '以舒缓清新的现代古典与氛围音乐（Modern Classical / Ambient）为主调，融合柔和的原声钢琴与深情的小提琴旋律，辅以微弱灵动的电子粒子音效与空灵的弦乐铺底。整首音乐节奏缓慢、空间感极强，既体现雨水的自然流动与惬意，也贴合数据可视化界面的科技感与高级质感。',
        sectionTitle: '现代古典与氛围音乐', points: ['使用 Lyria 制作', '原声钢琴、小提琴、电子粒子音效与弦乐铺底', '雨水意象与数据可视化的听觉氛围'],
    },
    {
        id: 'campus-plan', platform: 'research', title: '悦味之家',
        documents: [PORTFOLIO_DOCUMENTS.campusPlan],
        screenLines: ['悦味之家', '高校餐饮娱乐休闲', '一体化方案想象设计'],
        description: '高校餐饮、娱乐与休闲一体化方案的想象设计。',
        sectionTitle: '方案设计', points: ['围绕高校场景，构想餐饮、娱乐与休闲相结合的服务方案。'],
    },
    {
        id: 'innovation-indicators', platform: 'research', title: '自然基金',
        documents: [PORTFOLIO_DOCUMENTS.scienceManuscript],
        screenLines: ['自然基金', '城市群科技创新', '指标体系研究'],
        description: '系统整理大量外文研究报告，构建衡量城市群科技创新实力的完整指标体系。',
        sectionTitle: '指标体系构建', points: ['外文研究报告的系统梳理', '城市群科技创新实力的指标体系构建'],
    },
    {
        id: 'interdisciplinary-thesis', platform: 'research', title: '毕业论文',
        documents: [PORTFOLIO_DOCUMENTS.thesis],
        screenLines: ['毕业论文', '社会学与法学', '公共管理问题研究'],
        description: '运用社会学方法研究法学问题，旨在解决公共管理问题的跨学科论文。',
        sectionTitle: '跨学科研究', points: ['研究方法：社会学', '研究对象：法学问题', '问题导向：公共管理'],
    },
    {
        id: 'journal-translation', platform: 'research', title: '期刊翻译',
        documents: [PORTFOLIO_DOCUMENTS.prisonTranslation],
        screenLines: ['期刊翻译', '社会心理学', '行为经济学'],
        description: '独立翻译两篇英文顶刊文章，跨越社会心理学与行为经济学领域。',
        sectionTitle: '学术翻译', points: [
            '《改造与社会行为：监狱实验》原刊 Games and Economic Behavior 119 (2020)',
            '《相对剥夺：理论和元分析评述》原刊 Personality and Social Psychology Review 16(3) (2016)',
        ],
    },
    {
        id: 'ebike-policy', platform: 'research', title: '电动车政策管理',
        screenLines: ['电动车政策管理', '问卷调查与 SPSS', '政策类型诊断'],
        description: '结合问卷调查与 SPSS 分析，对电动车管理政策进行政策类型诊断。',
        sectionTitle: '政策研究', points: ['问卷调查', 'SPSS 数据分析', '政策类型诊断'],
    },
    {
        id: 'poster-lotr', platform: 'poster', title: '魔戒',
        description: '利用 image-2 生成的电影风格海报。', sectionTitle: '电影海报',
        image: '/textures/studio/portfolio/poster-lotr-image.webp', points: ['创作方式：image-2 生成'],
    },
    {
        id: 'poster-lotr-2', platform: 'poster', title: '魔戒1',
        description: '利用 image-2 生成的第二张魔戒主题电影风格海报。', sectionTitle: '电影海报',
        image: '/textures/studio/portfolio/poster-lotr-2-image.webp', points: ['创作方式：image-2 生成'],
    },
    {
        id: 'poster-silmaril', platform: 'poster', title: '精灵宝钻',
        description: '利用 image-2 生成的精灵宝钻主题电影风格海报。', sectionTitle: '电影海报',
        image: '/textures/studio/portfolio/poster-silmaril-image.webp', points: ['创作方式：image-2 生成'],
    },
    {
        id: 'drawing-1', platform: 'artwork', title: '写轮眼',
        description: '个人绘制的美术作品，探索图案、线条与色彩的组合。', sectionTitle: '个人美术作品',
        image: '/textures/studio/portfolio/drawing-1-image.webp', points: ['创作方式：个人手绘'],
    },
    {
        id: 'drawing-2', platform: 'artwork', title: '写轮眼1',
        description: '个人绘制的第二张美术作品。', sectionTitle: '个人美术作品',
        image: '/textures/studio/portfolio/drawing-2-image.webp', points: ['创作方式：个人手绘'],
    },
    {
        id: 'drawing-3', platform: 'artwork', title: '写轮眼2',
        description: '个人绘制的第三张美术作品。', sectionTitle: '个人美术作品',
        image: '/textures/studio/portfolio/drawing-3-image.webp', points: ['创作方式：个人手绘'],
    },
    {
        id: 'hexaco-program', platform: 'project', title: '六因素人格镜',
        miniProgram: HEXACO_MINI_PROGRAM,
        screenLines: ['六因素人格镜', 'HEXACO 人格模型', '人格测试小程序'],
        description: '基于 HEXACO 模型开发的人格测试小程序。',
        sectionTitle: '微信小程序', points: ['围绕 HEXACO 六因素人格模型构建测试体验。'],
    },
    {
        id: 'rainfall-site', platform: 'project', title: '雨谱',
        url: 'https://yupu.vercel.app/',
        screenLines: ['雨谱', '降雨量可视化', '交互式数据展示'],
        description: '雨谱：将降雨量可视化的交互网站。',
        sectionTitle: '数据可视化', points: ['通过交互式网页呈现降雨量信息。'],
    },
];

export const CONTENT_DATA = entries.map(entry => ({
    ...entry,
    layout: 'portfolio_sections',
    device: PLATFORM_CONFIG[entry.platform].shape,
    platformConfig: PLATFORM_CONFIG[entry.platform],
    frontTexture: `/textures/studio/portfolio/${entry.id}-front.webp`,
    paintedFrontTexture: `/textures/studio/portfolio/${entry.id}-front-painted.webp`,
    sections: [{ title: entry.sectionTitle, description: entry.description, points: entry.points }],
}));

export const getContentByPlatform = platform => platform === 'all' ? CONTENT_DATA : CONTENT_DATA.filter(item => item.platform === platform);
