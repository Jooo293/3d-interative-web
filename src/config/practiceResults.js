import { PORTFOLIO_DOCUMENTS } from './portfolioDocuments.js';
import { HEXACO_MINI_PROGRAM } from './miniPrograms.js';

export const PRACTICE_RESULTS = {
    research: {
        id: 'practice-research',
        layout: 'portfolio_sections',
        title: '研究成果',
        icon: '/textures/about/results/research.svg',
        sections: [{
            title: '毕业论文实证研究',
            documents: [PORTFOLIO_DOCUMENTS.thesis],
            description: '运用 Stata 开展实证研究，将裁决书资料整理为可分析的研究样本。',
            points: ['裁决书编码与样本整理', '残差分析与匹配度检验'],
        }, {
            title: '自然基金',
            description: '系统整理大量外文研究报告，构建衡量城市群科技创新实力的完整指标体系。',
            points: ['外文研究报告的系统梳理', '城市群科技创新实力评价指标体系的构建'],
            documents: [PORTFOLIO_DOCUMENTS.scienceManuscript],
        }],
    },
    management: {
        id: 'practice-management',
        layout: 'portfolio_sections',
        title: '管理实践',
        icon: '/textures/about/results/management.svg',
        sections: [{
            title: '人事实习实践',
            description: '在人事助理实习中参与日常人事事务与员工服务。',
            points: ['人事档案整理与管理', '薪酬福利材料审核', '员工服务及跨科室协作'],
        }, {
            title: '教育局实习记录',
            description: '教育局实习期间的工作记录与总结。',
            documents: [PORTFOLIO_DOCUMENTS.educationInternship],
        }],
    },
    projects: {
        id: 'practice-projects',
        layout: 'portfolio_sections',
        title: '项目成果',
        icon: '/textures/about/results/projects.svg',
        sections: [{
            title: '悦味之家',
            documents: [PORTFOLIO_DOCUMENTS.campusPlan],
            description: '高校餐饮休娱一体化运营方案。',
            points: ['SWOT 分析与组织架构', '招聘流程及十个核心岗位设计'],
        }, {
            title: '六因素人格镜',
            miniProgram: HEXACO_MINI_PROGRAM,
            description: '基于 HEXACO 人格模型的微信小程序。',
            points: ['借助 AI 工具完成小程序设计与开发', '微信小程序上线实践'],
        }, {
            title: '雨谱',
            description: '将降雨量数据可视化，提供可交互浏览的降雨信息。',
            points: ['降雨量数据的可视化呈现', '通过网页交互浏览降雨信息'],
            url: 'https://yupu.vercel.app/',
        }],
    },
};
