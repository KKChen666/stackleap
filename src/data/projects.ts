export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  coverImage: string;
  images: string[];
  projectUrl?: string;
  githubUrl?: string;
  localPath: string;
  highlights: string[];
  timeline: TimelineItem[];
  featured: boolean;
  createdAt: string;
}

export const projects: Project[] = [
  {
    id: 'collision',
    name: 'Idea Collision',
    description: 'Next.js 创意协作工作台，将产品创意转化为可视化的思维导图、评论和工作迭代。',
    longDescription: 'Idea Collision 是一个基于 Next.js App Router 的创意协作平台。用户可以在画布式工作台上自由组织产品创意，通过流程编辑器绘制蓝图，利用便签条进行上下文标注，支持评论转节点的评审流程，以及 AI 提示词导出面板。平台内置作品反馈循环机制，帮助团队高效迭代产品设计。采用 MySQL 持久化存储，支持 Docker 容器化部署。',
    techStack: ['Next.js', 'React', 'Fluent UI', 'MySQL', 'Docker'],
    category: 'Web 应用',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative+collaboration+workbench+canvas+flow+editor+dark+blue+purple+neon+glow+design+tool&image_size=landscape_16_9',
    images: [],
    localPath: 'D:\\code\\Collision',
    highlights: [
      '画布式创意工作台，自由拖拽组织节点',
      '蓝图流程编辑器，可视化产品设计路径',
      '评论转节点的评审工作流',
      'AI 提示词导出面板，智能总结创意内容',
      '作品反馈循环，持续迭代优化',
      'httpOnly Cookie 安全认证，速率限制防护',
    ],
    timeline: [
      { date: '2025-05', title: '架构设计', description: '确定 Next.js App Router + MySQL 技术方案' },
      { date: '2025-06', title: '核心开发', description: '实现画布工作台、流程编辑器、便签系统' },
      { date: '2025-06', title: 'AI 集成', description: '接入 AI 提示词导出与智能摘要功能' },
      { date: '2025-06', title: '发布上线', description: 'Docker 容器化部署，完成安全加固' },
    ],
    featured: true,
    createdAt: '2025-06-15',
  },
  {
    id: 'old-z',
    name: 'Old Z（老周）',
    description: 'AI 驱动的个人数字大脑，融合笔记、待办、文件管理与知识图谱。',
    longDescription: 'Old Z（老周）是一款融合笔记、待办、文件管理、AI 助手与个人数字大脑的效率应用。核心理念是"用户只负责拖入内容，AI 负责理解、整理、关联、提醒"。支持全局拖拽系统，可将文件、图片、PDF、网页链接快速转化为知识资产。内置知识图谱自动建立笔记、文件、待办之间的关联关系，AI 聊天可访问用户授权数据进行智能问答。前端采用 React + TypeScript + Vite，后端使用 Express.js。',
    techStack: ['React', 'TypeScript', 'Express', 'Vite', 'Tailwind CSS', 'Zustand'],
    category: '桌面应用',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=digital+brain+knowledge+graph+AI+assistant+dark+interface+nodes+connections+neon+blue+purple+glow&image_size=landscape_16_9',
    images: [],
    localPath: 'D:\\code\\Old Z',
    highlights: [
      '全局拖拽系统，快速导入任意内容',
      'AI 自动解析、分类、生成标签与待办',
      '知识图谱可视化，发现内容间的隐藏关联',
      'AI 聊天智能问答，基于用户授权数据',
      'AI 主动提醒，监督目标与习惯',
      '时间轴自动聚合活动记录',
    ],
    timeline: [
      { date: '2025-03', title: '需求分析', description: '完成产品定位与功能规划' },
      { date: '2025-04', title: '前端架构', description: 'React + Vite + Zustand 状态管理搭建' },
      { date: '2025-05', title: '后端开发', description: 'Express API、数据库设计、AI 集成' },
      { date: '2025-06', title: '功能完善', description: '知识图谱、时间轴、数字分身功能上线' },
    ],
    featured: true,
    createdAt: '2025-06-01',
  },
  {
    id: 't-note',
    name: 'T-Note',
    description: '功能强大的 Electron 富文本笔记编辑器，支持多页面管理、云同步、分屏编辑。',
    longDescription: 'T-Note 是一款基于 Electron 的桌面端富文本笔记编辑器。基于 Quill 2.0 编辑器提供强大的富文本编辑能力，支持多级标题、代码块、链接、图片等。独创双 Tab 栏设计支持灵活的分屏编辑，可同时查看和编辑多个页面。支持 OneDrive 和百度网盘云同步，内置冲突检测与解决机制。提供智能标签系统、全文搜索、书签管理、TODO 管理和回收站功能。采用自定义 .note 文件格式，数据本地存储安全可靠。',
    techStack: ['Electron', 'React', 'TypeScript', 'Quill', 'Ant Design', 'Vite'],
    category: '桌面应用',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=electron+desktop+note+editor+split+screen+dark+theme+rich+text+tabs+blue+purple+neon+glow&image_size=landscape_16_9',
    images: [],
    githubUrl: 'https://github.com/DBAA-LCT/T-NOTE',
    localPath: 'D:\\code\\T-Note',
    highlights: [
      '基于 Quill 2.0 的富文本编辑，支持代码块、图片、链接',
      '双 Tab 栏分屏编辑，左右独立工作',
      'OneDrive + 百度网盘云同步，冲突自动检测',
      '智能标签系统与全文搜索',
      '自定义 .note 文件格式，本地安全存储',
      '自动更新机制，支持多更新源切换',
    ],
    timeline: [
      { date: '2025-01', title: '项目启动', description: '确定 Electron + React + Quill 技术方案' },
      { date: '2025-02', title: '编辑器开发', description: '实现富文本编辑、多页面管理、Tab 栏系统' },
      { date: '2025-03', title: '云同步模块', description: '集成 OneDrive 与百度网盘同步能力' },
      { date: '2025-04', title: '功能迭代', description: '分屏编辑、书签、TODO、回收站等功能上线' },
    ],
    featured: true,
    createdAt: '2025-04-10',
  },
  {
    id: 'tongxiao',
    name: 'TongXiao（考研背诵）',
    description: '考研英语与政治闪卡背诵应用，支持 Web 和 Android 端，内置 AI 学习助手。',
    longDescription: 'TongXiao 是一款面向考研学生的闪卡背诵应用，支持英语和政治科目的高效复习。采用艾宾浩斯遗忘曲线算法安排复习计划，通过翻转卡片交互实现沉浸式学习。内置 AI 聊天助手可解答知识点疑问，支持 CSV/JSON/TXT 多格式导入自定义卡片。后端采用 FastAPI（Python）+ 自研 Flyway 风格数据库迁移引擎，支持 MySQL 和 SQLite 双数据库。前端使用 React + Vite 构建，支持 PWA 离线使用，并通过 Capacitor 打包为 Android 原生应用。',
    techStack: ['React', 'Python', 'FastAPI', 'Capacitor', 'MySQL', 'Vite'],
    category: '移动应用',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flashcard+learning+app+mobile+dark+theme+vocabulary+cards+spaced+repetition+neon+blue+green+glow&image_size=landscape_16_9',
    images: [],
    localPath: 'D:\\code\\TongXiao',
    highlights: [
      '艾宾浩斯遗忘曲线算法，科学安排复习',
      '翻转卡片 + Web Speech API 语音朗读',
      'AI 聊天助手，实时解答知识疑问',
      'CSV/JSON/TXT 多格式批量导入',
      'PWA 离线支持 + Android 原生应用',
      '自研 Flyway 风格数据库迁移引擎',
    ],
    timeline: [
      { date: '2025-02', title: '需求与架构', description: '确定闪卡系统与数据模型设计' },
      { date: '2025-03', title: '后端开发', description: 'FastAPI + 自研迁移引擎 + 双数据库支持' },
      { date: '2025-04', title: '前端开发', description: 'React 闪卡交互、AI 聊天、学习统计' },
      { date: '2025-05', title: '移动端适配', description: 'Capacitor 打包 Android 应用，PWA 离线支持' },
    ],
    featured: true,
    createdAt: '2025-05-20',
  },
];

export const categories = ['全部', 'Web 应用', '桌面应用', '移动应用'];
