import { PORTFOLIO_DOCUMENTS } from './portfolioDocuments.js';

export const ADDED_GALLERY_PROJECTS = [
    {
        id: 'senior-care', title: '银发关怀', category: '社区关怀',
        description: '持续记录城中村长者的健康情况，并定期开展慰问。',
        points: ['持续记录长者健康情况', '定期慰问城中村长者'],
    },
    {
        id: 'rainfall-website', title: '雨谱', category: '交互网站',
        url: 'https://yupu.vercel.app/',
        description: '雨谱：将降雨量数据可视化，提供可交互浏览的降雨信息。',
        points: ['降雨量数据的可视化呈现', '通过网页交互浏览降雨信息'],
    },
    {
        id: 'science-foundation', title: '自然基金', category: '课题研究',
        documents: [PORTFOLIO_DOCUMENTS.scienceManuscript],
        description: '系统整理大量外文研究报告，构建衡量城市群科技创新实力的完整指标体系。',
        points: ['系统整理外文研究报告', '构建城市群科技创新实力的评价指标体系'],
    },
    {
        id: 'school-archives', title: '档案馆', category: '管理实践',
        description: '负责学校档案的日常核对、盖章、分类和归档，检查材料的完整性与规范性，按要求完成档案整理。',
        points: ['日常核对、盖章、分类和归档', '检查材料的完整性与规范性', '按要求完成学校档案整理'],
    },
].map(project => ({
    ...project,
    front: `/textures/gallery/portfolio/${project.id}.webp`,
    painted: `/textures/gallery/portfolio/${project.id}-painted.webp`,
    techStack: [],
    layout: 'portfolio_sections',
    sections: [{ title: project.category, description: project.description, points: project.points }],
}));
