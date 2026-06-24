export type Locale = 'zh' | 'en'

export type NavItem = {
  id: string
  label: string
}

export type Project = {
  id: string
  name: string
  desc: string
  tags: string[]
  year: string
  role: string
  challenge: string
  solution: string
  outcome: string
  metrics: string[]
  githubUrl?: string
  projectUrl?: string
  highlights: string[]
  timeline: { date: string; title: string }[]
  downloadReady?: boolean
}

export type Capability = {
  label: string
  techs: string
  detail: string
}

export type SiteContent = {
  nav: NavItem[]
  hero: {
    marquee: string
    tag: string
    title: string
    mutedTitle: string
    desc: string
    primaryCta: string
    secondaryCta: string
  }
  about: {
    label: string
    title: string
    paragraphs: string[]
    note: string
  }
  work: {
    label: string
    title: string
    openProject: string
    closeProject: string
    sections: {
      challenge: string
      solution: string
      outcome: string
      metrics: string
      role: string
      highlights: string
      timeline: string
      links: string
      download: string
      downloadSoon: string
    }
    projects: Project[]
  }
  capabilities: {
    label: string
    title: string
    items: Capability[]
  }
  contact: {
    label: string
    title: string
    mutedTitle: string
    desc: string
    email: string
    form: {
      name: string
      email: string
      projectType: string
      message: string
      submit: string
      submitting: string
      success: string
      required: string
      emailError: string
      options: string[]
    }
  }
}

export const content: Record<Locale, SiteContent> = {
  zh: {
    nav: [
      { id: 'about', label: '关于' },
      { id: 'work', label: '作品' },
      { id: 'capabilities', label: '能力' },
      { id: 'contact', label: '联系' },
    ],
    hero: {
      marquee: 'STACKLEAP · 技术驱动创新 · STACKLEAP · 技术驱动创新 · STACKLEAP · 技术驱动创新 · ',
      tag: '技术团队 · Est. 2023',
      title: '构建未来',
      mutedTitle: '创造价值',
      desc: '以技术为核心驱动力，在 Web、AI、云原生领域持续创造有价值的产品。',
      primaryCta: '查看作品',
      secondaryCta: '联系我们',
    },
    about: {
      label: '关于',
      title: '关于我们',
      paragraphs: [
        'StackLeap 是一支专注于全栈技术的团队。我们相信好的技术应该像空气一样，你感受不到它的存在，但它支撑着一切。',
        '从 Web 应用到人工智能，从云原生架构到物联网平台，我们在多个领域积累了深厚的工程经验。每一个项目，我们都追求优雅的解决方案和卓越的用户体验。',
      ],
      note: '我们不追逐热点，只解决真正的问题。',
    },
    work: {
      label: '作品',
      title: '精选项目',
      openProject: '查看详情',
      closeProject: '关闭项目详情',
      sections: {
        challenge: '挑战',
        solution: '方案',
        outcome: '结果',
        metrics: '关键指标',
        role: '我们的角色',
        highlights: '项目亮点',
        timeline: '开发历程',
        links: '项目链接',
        download: '下载',
        downloadSoon: '即将上线',
      },
      projects: [
        {
          id: 'collision',
          name: 'Idea Collision',
          desc: 'Next.js 创意协作工作台，将产品创意转化为可视化的思维导图、评论和工作迭代。',
          tags: ['Next.js', 'React', 'Fluent UI', 'MySQL', 'Docker'],
          year: '2025',
          role: '全栈架构、画布工作台、AI 集成',
          challenge: '团队在产品创意阶段缺乏结构化的协作工具，创意散落在聊天记录和文档中，难以汇聚和迭代。',
          solution: '构建了画布式创意工作台，支持节点拖拽、流程编辑、便签标注和评论转节点的评审流程，并集成了 AI 提示词导出面板。',
          outcome: '创意从散乱到结构化，团队可以快速在画布上组织、评审和迭代产品设计，显著提升了创意协作效率。',
          metrics: ['画布节点 < 50ms 响应', 'AI 摘要生成 < 3s', '支持 Docker 一键部署'],
          githubUrl: undefined,
          projectUrl: undefined,
          highlights: ['画布式创意工作台，自由拖拽组织节点', '蓝图流程编辑器，可视化产品设计路径', '评论转节点的评审工作流', 'AI 提示词导出面板，智能总结创意内容', 'httpOnly Cookie 安全认证，速率限制防护'],
          timeline: [
            { date: '2025-05', title: '架构设计' },
            { date: '2025-06', title: '核心开发' },
            { date: '2025-06', title: 'AI 集成' },
            { date: '2025-06', title: '发布上线' },
          ],
          downloadReady: false,
        },
        {
          id: 'old-z',
          name: 'Old Z（老周）',
          desc: 'AI 驱动的个人数字大脑，融合笔记、待办、文件管理与知识图谱。',
          tags: ['React', 'TypeScript', 'Express', 'Zustand', 'Tailwind CSS'],
          year: '2025',
          role: '全栈开发、AI 集成、知识图谱设计',
          challenge: '个人知识和任务散落在多个应用中，用户需要手动整理和关联，效率低下且容易遗漏重要信息。',
          solution: '打造"拖入即整理"的全局拖拽系统，AI 自动解析内容、生成标签和待办，并通过知识图谱建立笔记、文件、待办之间的关联。',
          outcome: '用户只需拖入内容，AI 负责理解、整理、关联和提醒，极大降低了知识管理的认知负担。',
          metrics: ['全局拖拽 < 200ms 响应', 'AI 分类准确率 89%', '知识图谱实时关联'],
          githubUrl: undefined,
          projectUrl: undefined,
          highlights: ['全局拖拽系统，快速导入任意内容', 'AI 自动解析、分类、生成标签与待办', '知识图谱可视化，发现内容间的隐藏关联', 'AI 聊天智能问答，基于用户授权数据', '时间轴自动聚合活动记录'],
          timeline: [
            { date: '2025-03', title: '需求分析' },
            { date: '2025-04', title: '前端架构' },
            { date: '2025-05', title: '后端开发' },
            { date: '2025-06', title: '功能完善' },
          ],
          downloadReady: false,
        },
        {
          id: 't-note',
          name: 'T-Note',
          desc: '功能强大的 Electron 富文本笔记编辑器，支持多页面管理、云同步、分屏编辑。',
          tags: ['Electron', 'React', 'TypeScript', 'Quill', 'Ant Design'],
          year: '2025',
          role: '桌面端架构、编辑器开发、云同步模块',
          challenge: '市面上的笔记工具要么过于简单缺乏高级编辑功能，要么过于复杂且依赖云端，本地数据安全性无法保障。',
          solution: '基于 Electron + Quill 2.0 构建桌面端富文本编辑器，支持双 Tab 栏分屏编辑、OneDrive/百度网盘云同步、智能标签和全文搜索。',
          outcome: '提供了兼具强大编辑能力和本地数据安全的笔记方案，分屏编辑大幅提升多文档工作效率。',
          metrics: ['双 Tab 分屏编辑', 'OneDrive + 百度网盘同步', '.note 格式本地安全存储'],
          githubUrl: 'https://github.com/DBAA-LCT/T-NOTE',
          projectUrl: undefined,
          highlights: ['Quill 2.0 富文本编辑，支持代码块、图片、链接', '双 Tab 栏分屏编辑，左右独立工作', 'OneDrive + 百度网盘云同步，冲突自动检测', '智能标签系统与全文搜索', '自动更新机制，支持多更新源切换'],
          timeline: [
            { date: '2025-01', title: '项目启动' },
            { date: '2025-02', title: '编辑器开发' },
            { date: '2025-03', title: '云同步模块' },
            { date: '2025-04', title: '功能迭代' },
          ],
          downloadReady: true,
        },
        {
          id: 'tongxiao',
          name: 'TongXiao（考研背诵）',
          desc: '考研英语与政治闪卡背诵应用，支持 Web 和 Android 端，内置 AI 学习助手。',
          tags: ['React', 'Python', 'FastAPI', 'Capacitor', 'MySQL'],
          year: '2025',
          role: '全栈开发、移动端适配、AI 助手集成',
          challenge: '考研学生需要高效的记忆工具，但市面上的背诵 App 缺乏科学的复习算法和个性化学习支持。',
          solution: '采用艾宾浩斯遗忘曲线算法安排复习计划，通过翻转卡片实现沉浸式学习，内置 AI 聊天助手实时解答疑问，支持批量导入自定义卡片。',
          outcome: '帮助考研学生科学安排复习节奏，AI 助手降低了知识疑问的解决成本，支持 Web + Android 多端使用。',
          metrics: ['艾宾浩斯遗忘曲线算法', 'PWA 离线支持', 'Android 原生应用'],
          githubUrl: undefined,
          projectUrl: undefined,
          highlights: ['艾宾浩斯遗忘曲线算法，科学安排复习', '翻转卡片 + 语音朗读', 'AI 聊天助手，实时解答知识疑问', 'CSV/JSON/TXT 多格式批量导入', 'PWA 离线 + Android 原生应用'],
          timeline: [
            { date: '2025-02', title: '需求与架构' },
            { date: '2025-03', title: '后端开发' },
            { date: '2025-04', title: '前端开发' },
            { date: '2025-05', title: '移动端适配' },
          ],
          downloadReady: true,
        },
      ],
    },
    capabilities: {
      label: '能力',
      title: '技术能力',
      items: [
        { label: '前端', techs: 'React · Vue · Next.js · TypeScript', detail: '从设计系统到复杂业务界面，构建可维护、可扩展的前端体验。' },
        { label: '后端', techs: 'Node.js · Go · Python · FastAPI', detail: '设计稳定的服务边界、数据模型和 API，让产品能力可靠增长。' },
        { label: '云原生', techs: 'Docker · Kubernetes · Terraform', detail: '搭建部署、观测和自动化基础设施，降低上线与运维成本。' },
        { label: '人工智能', techs: 'TensorFlow · PyTorch · LLM', detail: '把模型能力嵌入真实工作流，关注可解释、可迭代和可交付。' },
      ],
    },
    contact: {
      label: '联系',
      title: '一起做点',
      mutedTitle: '有意思的事',
      desc: '如果你有想法、有项目、或者只是想聊聊技术，欢迎联系我们。',
      email: 'hello@stackleap.dev',
      form: {
        name: '姓名',
        email: '邮箱',
        projectType: '项目类型',
        message: '简单说说你的想法',
        submit: '发送需求',
        submitting: '发送中...',
        success: '已记录。我们会通过邮件继续沟通。',
        required: '请补充这个信息',
        emailError: '请输入有效邮箱',
        options: ['Web 产品', 'AI 应用', '云原生平台', '技术咨询'],
      },
    },
  },
  en: {
    nav: [
      { id: 'about', label: 'About' },
      { id: 'work', label: 'Work' },
      { id: 'capabilities', label: 'Capabilities' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      marquee: 'STACKLEAP · TECHNOLOGY THAT MOVES · STACKLEAP · TECHNOLOGY THAT MOVES · STACKLEAP · ',
      tag: 'Product engineering · Est. 2023',
      title: 'Build what is next',
      mutedTitle: 'create what matters',
      desc: 'We design and ship valuable products across web, AI, and cloud-native systems.',
      primaryCta: 'View work',
      secondaryCta: 'Contact us',
    },
    about: {
      label: 'About',
      title: 'About us',
      paragraphs: [
        'StackLeap is a full-stack technology team. We believe good engineering should feel almost invisible: quiet, dependable, and holding everything together.',
        'From web applications to AI products, from cloud-native architecture to connected platforms, we bring product thinking and engineering discipline into every build.',
      ],
      note: 'We do not chase noise. We solve real problems.',
    },
    work: {
      label: 'Work',
      title: 'Selected projects',
      openProject: 'View details',
      closeProject: 'Close project details',
      sections: {
        challenge: 'Challenge',
        solution: 'Solution',
        outcome: 'Outcome',
        metrics: 'Signals',
        role: 'Our role',
        highlights: 'Highlights',
        timeline: 'Timeline',
        links: 'Links',
        download: 'Download',
        downloadSoon: 'Coming soon',
      },
      projects: [
        {
          id: 'collision',
          name: 'Idea Collision',
          desc: 'A Next.js collaborative workbench for turning product ideas into maps, comments, prompt exports, and work iterations.',
          tags: ['Next.js', 'React', 'Fluent UI', 'MySQL', 'Docker'],
          year: '2025',
          role: 'Full-stack architecture, canvas workbench, AI integration',
          challenge: 'Teams lacked structured collaboration tools during the idea phase — creativity was scattered across chats and docs.',
          solution: 'Built a canvas-based workspace with node dragging, flow editing, sticky notes, comment-to-node review, and an AI prompt export panel.',
          outcome: 'Ideas moved from scattered to structured. Teams can quickly organize, review, and iterate product designs on the canvas.',
          metrics: ['Canvas node < 50ms', 'AI summary < 3s', 'Docker one-click deploy'],
          githubUrl: undefined,
          projectUrl: undefined,
          highlights: ['Canvas workspace with free drag-and-drop', 'Blueprint flow editor for visual design paths', 'Comment-to-node review workflow', 'AI prompt export panel', 'httpOnly cookie auth with rate limiting'],
          timeline: [
            { date: '2025-05', title: 'Architecture design' },
            { date: '2025-06', title: 'Core development' },
            { date: '2025-06', title: 'AI integration' },
            { date: '2025-06', title: 'Production launch' },
          ],
          downloadReady: false,
        },
        {
          id: 'old-z',
          name: 'Old Z',
          desc: 'An AI-powered personal digital brain combining notes, todos, file management, and knowledge graphs.',
          tags: ['React', 'TypeScript', 'Express', 'Zustand', 'Tailwind CSS'],
          year: '2025',
          role: 'Full-stack development, AI integration, knowledge graph design',
          challenge: 'Personal knowledge and tasks were scattered across multiple apps, requiring manual organization and missing connections.',
          solution: 'Built a drag-in-and-organize system where AI auto-parses content, generates tags and todos, and connects notes, files, and tasks via knowledge graphs.',
          outcome: 'Users just drag content in — AI handles understanding, organizing, connecting, and reminding, greatly reducing cognitive load.',
          metrics: ['Global drag < 200ms', 'AI classification 89%', 'Real-time knowledge graph'],
          githubUrl: undefined,
          projectUrl: undefined,
          highlights: ['Global drag system for quick import', 'AI auto-parse, classify, tag and todo', 'Knowledge graph visualization', 'AI chat with authorized data access', 'Timeline auto-aggregation'],
          timeline: [
            { date: '2025-03', title: 'Requirements analysis' },
            { date: '2025-04', title: 'Frontend architecture' },
            { date: '2025-05', title: 'Backend development' },
            { date: '2025-06', title: 'Feature completion' },
          ],
          downloadReady: false,
        },
        {
          id: 't-note',
          name: 'T-Note',
          desc: 'A powerful Electron rich-text note editor with multi-page management, cloud sync, and split-screen editing.',
          tags: ['Electron', 'React', 'TypeScript', 'Quill', 'Ant Design'],
          year: '2025',
          role: 'Desktop architecture, editor development, cloud sync module',
          challenge: 'Note tools were either too simple or too complex and cloud-dependent, with no guarantee of local data security.',
          solution: 'Built an Electron + Quill 2.0 desktop editor with dual-tab split-screen, OneDrive/Baidu Pan sync, smart tags, and full-text search.',
          outcome: 'Delivered a solution combining powerful editing with local data security. Split-screen editing significantly improved multi-document workflows.',
          metrics: ['Dual-tab split-screen', 'OneDrive + Baidu Pan sync', '.note format local storage'],
          githubUrl: 'https://github.com/DBAA-LCT/T-NOTE',
          projectUrl: undefined,
          highlights: ['Quill 2.0 rich-text editing', 'Dual-tab split-screen editing', 'OneDrive + Baidu Pan cloud sync', 'Smart tag system and full-text search', 'Auto-update with multiple sources'],
          timeline: [
            { date: '2025-01', title: 'Project kickoff' },
            { date: '2025-02', title: 'Editor development' },
            { date: '2025-03', title: 'Cloud sync module' },
            { date: '2025-04', title: 'Feature iterations' },
          ],
          downloadReady: true,
        },
        {
          id: 'tongxiao',
          name: 'TongXiao (Exam Flashcards)',
          desc: 'A flashcard study app for exam prep, supporting Web and Android with an AI study assistant.',
          tags: ['React', 'Python', 'FastAPI', 'Capacitor', 'MySQL'],
          year: '2025',
          role: 'Full-stack development, mobile adaptation, AI assistant integration',
          challenge: 'Students needed efficient memorization tools, but existing apps lacked scientific review algorithms and personalized learning support.',
          solution: 'Implemented Ebbinghaus spaced repetition for review scheduling, flip-card interaction for immersive learning, and an AI chat assistant for instant Q&A.',
          outcome: 'Helped students plan review schedules scientifically. AI assistant reduced the cost of resolving knowledge questions. Supports Web + Android.',
          metrics: ['Ebbinghaus spaced repetition', 'PWA offline support', 'Android native app'],
          githubUrl: undefined,
          projectUrl: undefined,
          highlights: ['Ebbinghaus algorithm for scientific review', 'Flip cards with speech synthesis', 'AI chat assistant for instant Q&A', 'CSV/JSON/TXT batch import', 'PWA offline + Android native'],
          timeline: [
            { date: '2025-02', title: 'Requirements & architecture' },
            { date: '2025-03', title: 'Backend development' },
            { date: '2025-04', title: 'Frontend development' },
            { date: '2025-05', title: 'Mobile adaptation' },
          ],
          downloadReady: true,
        },
      ],
    },
    capabilities: {
      label: 'Capabilities',
      title: 'Technical capabilities',
      items: [
        { label: 'Frontend', techs: 'React · Vue · Next.js · TypeScript', detail: 'Maintainable product interfaces, from design systems to dense operational tools.' },
        { label: 'Backend', techs: 'Node.js · Go · Python · FastAPI', detail: 'Service boundaries, data models, and APIs that let product capability grow reliably.' },
        { label: 'Cloud native', techs: 'Docker · Kubernetes · Terraform', detail: 'Deployment, observability, and automation foundations that reduce operational load.' },
        { label: 'AI systems', techs: 'TensorFlow · PyTorch · LLM', detail: 'Model capabilities embedded into real workflows with an eye for iteration and delivery.' },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Let us build',
      mutedTitle: 'something useful',
      desc: 'Have an idea, a product, or a technical challenge? Send us a note and we will take it from there.',
      email: 'hello@stackleap.dev',
      form: {
        name: 'Name',
        email: 'Email',
        projectType: 'Project type',
        message: 'Tell us what you are thinking',
        submit: 'Send brief',
        submitting: 'Sending...',
        success: 'Received. We will continue by email.',
        required: 'Please fill this in',
        emailError: 'Enter a valid email',
        options: ['Web product', 'AI application', 'Cloud platform', 'Technical consulting'],
      },
    },
  },
}
