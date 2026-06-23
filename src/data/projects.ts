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
  highlights: string[];
  timeline: TimelineItem[];
  featured: boolean;
  createdAt: string;
}

export const projects: Project[] = [
  {
    id: 'ai-dashboard',
    name: 'AI 智能分析仪表盘',
    description: '基于机器学习的实时数据可视化平台，支持多维度数据分析与智能预警。',
    longDescription: '这是一个集成了机器学习算法的智能数据分析平台，能够实时处理海量数据并生成可视化报告。平台采用微服务架构，支持自定义仪表盘配置，内置多种预警规则引擎。',
    techStack: ['React', 'TypeScript', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    category: '全栈应用',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic+AI+dashboard+dark+blue+interface+data+visualization+glowing+neon&image_size=landscape_16_9',
    images: [],
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    highlights: [
      '实时数据处理延迟 < 100ms',
      '支持 10+ 种图表类型',
      '内置 AI 异常检测算法',
      '自适应响应式布局',
    ],
    timeline: [
      { date: '2024-01', title: '需求分析与架构设计', description: '完成技术选型与系统架构设计' },
      { date: '2024-03', title: '核心功能开发', description: '实现数据采集、处理与可视化模块' },
      { date: '2024-06', title: 'AI 模块集成', description: '集成机器学习模型，实现智能分析' },
      { date: '2024-08', title: '上线与优化', description: '系统上线，持续性能优化' },
    ],
    featured: true,
    createdAt: '2024-08-15',
  },
  {
    id: 'cloud-deploy',
    name: 'CloudDeploy 云原生部署平台',
    description: '一键部署容器化应用到多云环境，支持 Kubernetes 编排与自动扩缩容。',
    longDescription: 'CloudDeploy 是一个面向开发者的云原生应用部署平台，简化了从代码到生产的部署流程。支持 Docker 容器化、Kubernetes 编排、多云环境管理，以及自动化 CI/CD 流水线。',
    techStack: ['Vue 3', 'Go', 'Docker', 'Kubernetes', 'Terraform', 'gRPC'],
    category: 'DevOps 工具',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cloud+deployment+infrastructure+kubernetes+containers+dark+theme+blue+purple+glow&image_size=landscape_16_9',
    images: [],
    githubUrl: 'https://github.com',
    highlights: [
      '支持 AWS/GCP/Azure 多云部署',
      'Kubernetes 集群一键管理',
      '自动化 CI/CD 流水线',
      '实时部署状态监控',
    ],
    timeline: [
      { date: '2024-02', title: '项目启动', description: '确定技术路线与核心功能' },
      { date: '2024-05', title: '核心引擎开发', description: '实现容器编排与部署引擎' },
      { date: '2024-08', title: '多云支持', description: '扩展支持主流云服务商' },
      { date: '2024-11', title: '公测发布', description: '开放公测，收集用户反馈' },
    ],
    featured: true,
    createdAt: '2024-11-20',
  },
  {
    id: 'ecommerce-app',
    name: 'ShopFlow 智能电商平台',
    description: '全栈电商解决方案，集成推荐算法、实时库存管理与多支付渠道。',
    longDescription: 'ShopFlow 是一个现代化的电商平台，采用微服务架构，集成了智能推荐算法、实时库存同步、多支付渠道对接等功能，为用户提供流畅的购物体验。',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Tailwind CSS'],
    category: 'Web 应用',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern+ecommerce+interface+dark+theme+product+cards+neon+blue+accent+shopping&image_size=landscape_16_9',
    images: [],
    projectUrl: 'https://example.com',
    highlights: [
      '页面加载速度 < 1.5s',
      'AI 商品推荐准确率 85%+',
      '支持 5+ 支付渠道',
      '实时库存同步',
    ],
    timeline: [
      { date: '2024-03', title: '架构设计', description: '微服务架构与数据库设计' },
      { date: '2024-06', title: '前端开发', description: '完成商城前台与管理后台' },
      { date: '2024-09', title: '支付集成', description: '对接多种支付渠道' },
      { date: '2024-12', title: '正式上线', description: '系统上线运营' },
    ],
    featured: true,
    createdAt: '2024-12-01',
  },
  {
    id: 'devtools-ide',
    name: 'CodePilot 开发者工具集',
    description: 'VS Code 扩展插件集，提供代码生成、审查、测试一体化开发体验。',
    longDescription: 'CodePilot 是一套 VS Code 扩展插件集合，通过 AI 辅助提升开发效率，包括智能代码补全、自动化代码审查、一键测试生成等功能。',
    techStack: ['TypeScript', 'VS Code API', 'OpenAI API', 'Jest', 'ESLint'],
    category: '开发工具',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vscode+extension+code+editor+dark+theme+AI+assistant+neon+purple+glow+developer+tools&image_size=landscape_16_9',
    images: [],
    githubUrl: 'https://github.com',
    highlights: [
      'AI 驱动的代码补全',
      '自动化代码审查',
      '智能测试生成',
      '支持 20+ 编程语言',
    ],
    timeline: [
      { date: '2024-04', title: '立项与设计', description: '确定插件功能与架构' },
      { date: '2024-07', title: '核心开发', description: '实现代码补全与审查功能' },
      { date: '2024-10', title: '测试与优化', description: '全面测试与性能优化' },
      { date: '2025-01', title: '发布上线', description: 'VS Code Marketplace 发布' },
    ],
    featured: false,
    createdAt: '2025-01-10',
  },
  {
    id: 'mobile-fitness',
    name: 'FitTrack 健身追踪应用',
    description: '跨平台健身追踪应用，支持运动识别、数据分析与个性化训练计划。',
    longDescription: 'FitTrack 是一款基于 React Native 的跨平台健身应用，利用设备传感器实现运动自动识别，结合 AI 算法生成个性化训练计划。',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'TensorFlow Lite', 'HealthKit'],
    category: '移动应用',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fitness+tracker+mobile+app+dark+theme+workout+statistics+neon+green+blue+glow&image_size=landscape_16_9',
    images: [],
    projectUrl: 'https://example.com',
    highlights: [
      '支持 iOS/Android 双平台',
      'AI 运动自动识别',
      '个性化训练计划',
      '社交互动功能',
    ],
    timeline: [
      { date: '2024-05', title: '产品设计', description: '完成产品原型与 UI 设计' },
      { date: '2024-08', title: '开发实现', description: '跨平台核心功能开发' },
      { date: '2024-11', title: '内测优化', description: '封闭测试与功能迭代' },
      { date: '2025-02', title: '应用商店上线', description: 'App Store / Google Play 上架' },
    ],
    featured: false,
    createdAt: '2025-02-15',
  },
  {
    id: 'iot-platform',
    name: 'SmartHub IoT 管理平台',
    description: '物联网设备管理平台，支持设备接入、数据采集、远程控制与告警。',
    longDescription: 'SmartHub 是一个企业级 IoT 设备管理平台，支持海量设备接入、实时数据采集与分析、远程设备控制、智能告警等功能。',
    techStack: ['React', 'Go', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
    category: 'IoT 平台',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=IoT+platform+connected+devices+dark+blue+interface+sensor+data+monitoring+neon+glow&image_size=landscape_16_9',
    images: [],
    highlights: [
      '支持 10 万+ 设备并发',
      'MQTT 协议接入',
      '实时数据可视化',
      '智能告警规则引擎',
    ],
    timeline: [
      { date: '2024-06', title: '需求调研', description: '深入了解 IoT 行业需求' },
      { date: '2024-09', title: '平台开发', description: '核心平台功能开发' },
      { date: '2025-01', title: '客户试点', description: '选取客户进行试点部署' },
      { date: '2025-04', title: '正式发布', description: '平台正式商业化运营' },
    ],
    featured: false,
    createdAt: '2025-04-01',
  },
];

export const techStacks = [
  'React', 'Vue', 'TypeScript', 'Next.js', 'Node.js', 'Go', 'Python',
  'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Three.js', 'React Native',
];

export const categories = [
  '全部', 'Web 应用', '移动应用', '全栈应用', 'DevOps 工具', '开发工具', 'IoT 平台',
];
