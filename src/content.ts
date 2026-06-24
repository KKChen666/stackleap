export type Locale = 'zh' | 'en'

export type NavItem = {
  id: string
  label: string
}

export type Project = {
  name: string
  desc: string
  tags: string[]
  year: string
  role: string
  challenge: string
  solution: string
  outcome: string
  metrics: string[]
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
      },
      projects: [
        {
          name: 'AI 智能分析仪表盘',
          desc: '基于机器学习的实时数据可视化平台，支持多维度分析与智能预警。',
          tags: ['React', 'Python', 'TensorFlow', 'D3.js'],
          year: '2024',
          role: '产品架构、前端工程、模型服务集成',
          challenge: '业务团队需要在高频数据中快速发现异常，但原有报表只能提供滞后的静态视图。',
          solution: '我们搭建了实时指标流、异常检测服务和可组合的数据看板，让分析人员可以按场景快速追踪问题。',
          outcome: '平台上线后，关键异常从小时级发现缩短到分钟级，分析团队减少了大量手工对账工作。',
          metrics: ['异常识别时间 -72%', '核心看板加载 < 1.2s', '覆盖 18 个业务指标'],
        },
        {
          name: 'CloudDeploy 云原生平台',
          desc: '一键部署容器化应用到多云环境，支持 Kubernetes 编排与自动扩缩容。',
          tags: ['Vue 3', 'Go', 'Docker', 'K8s'],
          year: '2024',
          role: '平台设计、后端服务、DevOps 自动化',
          challenge: '多团队部署链路分散，环境差异导致发布风险高、回滚成本高。',
          solution: '我们统一了应用模板、环境变量、部署审批和集群观测，把发布能力封装成可复用平台能力。',
          outcome: '研发团队可以自助完成发布、回滚和扩容，基础设施团队从重复支持工作中释放出来。',
          metrics: ['部署耗时 -64%', '回滚窗口 < 3min', '支持 4 类环境模板'],
        },
        {
          name: 'ShopFlow 智能电商平台',
          desc: '全栈电商解决方案，集成推荐算法、实时库存管理与多支付渠道。',
          tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
          year: '2024',
          role: '全栈开发、交易链路、推荐策略落地',
          challenge: '增长团队希望提升复购和转化，但库存、推荐和支付链路彼此割裂。',
          solution: '我们重构了商品、库存和订单模型，并接入轻量推荐策略，让运营可以基于实时信号调整活动。',
          outcome: '平台具备了更稳定的交易基础和更灵活的增长实验能力。',
          metrics: ['结账转化 +18%', '库存同步延迟 < 5s', '支持 6 类促销策略'],
        },
        {
          name: 'OpsPilot 运维智能助手',
          desc: '面向平台团队的事件响应工具，聚合告警、日志和运行手册。',
          tags: ['React', 'FastAPI', 'OpenTelemetry', 'LLM'],
          year: '2025',
          role: '产品原型、告警聚合、AI 辅助排障',
          challenge: '告警来源分散，值班人员需要在多个系统之间切换，定位问题耗时且依赖经验。',
          solution: '我们把告警、链路、日志和运行手册汇总到统一工作台，并用 LLM 生成排查建议。',
          outcome: '值班团队可以更快形成初步判断，新成员也能按照结构化路径处理常见事件。',
          metrics: ['平均响应 -38%', '整合 5 类告警源', '覆盖 42 条运行手册'],
        },
        {
          name: 'FactoryLink 工业数据中台',
          desc: '连接设备、产线和质量数据的实时工业数据平台。',
          tags: ['TypeScript', 'Go', 'MQTT', 'TimescaleDB'],
          year: '2025',
          role: '数据建模、实时链路、运营看板',
          challenge: '设备数据格式不统一，质量追溯依赖人工导出和离线表格。',
          solution: '我们设计了统一事件模型和流式采集链路，把产线状态、质量指标和异常记录串联起来。',
          outcome: '生产团队获得了实时质量追踪能力，并能快速定位异常批次和影响范围。',
          metrics: ['数据延迟 < 3s', '接入 120+ 设备', '追溯耗时 -55%'],
        },
        {
          name: 'FinSight 风控工作台',
          desc: '为金融运营团队构建的风险信号分析与审核协作平台。',
          tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
          year: '2025',
          role: '审核流程、规则引擎、数据可视化',
          challenge: '风险审核流程分散，规则命中结果难以解释，人工复核负担高。',
          solution: '我们搭建了规则命中解释、案件流转和风险信号看板，让审核人员能快速判断优先级。',
          outcome: '团队在不牺牲合规审查的前提下，提高了高风险案件处理效率。',
          metrics: ['复核效率 +31%', '规则解释覆盖 87%', '高危案件优先级自动排序'],
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
      },
      projects: [
        {
          name: 'AI Insight Dashboard',
          desc: 'A real-time analytics platform with machine-learning alerts and multidimensional reporting.',
          tags: ['React', 'Python', 'TensorFlow', 'D3.js'],
          year: '2024',
          role: 'Product architecture, frontend engineering, model-service integration',
          challenge: 'The business team needed to spot anomalies in high-frequency data, but reports were static and delayed.',
          solution: 'We built real-time metric streams, anomaly detection services, and composable dashboards for focused investigation.',
          outcome: 'Critical signals moved from hours to minutes, and analysts removed a large amount of manual reconciliation.',
          metrics: ['Anomaly detection -72%', 'Core dashboard < 1.2s', '18 business metrics covered'],
        },
        {
          name: 'CloudDeploy Platform',
          desc: 'A cloud-native deployment platform for containerized apps across multiple environments.',
          tags: ['Vue 3', 'Go', 'Docker', 'K8s'],
          year: '2024',
          role: 'Platform design, backend services, DevOps automation',
          challenge: 'Deployment flows were fragmented across teams, increasing release risk and rollback cost.',
          solution: 'We unified templates, environment config, approvals, and cluster observability into one self-service platform.',
          outcome: 'Product teams gained self-service deploy, rollback, and scaling while infrastructure support load dropped.',
          metrics: ['Deployment time -64%', 'Rollback window < 3min', '4 environment templates'],
        },
        {
          name: 'ShopFlow Commerce',
          desc: 'A full-stack commerce system with recommendations, real-time inventory, and payment orchestration.',
          tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
          year: '2024',
          role: 'Full-stack delivery, checkout flow, recommendation rollout',
          challenge: 'Growth teams wanted better conversion, but inventory, recommendations, and checkout were disconnected.',
          solution: 'We rebuilt the product, inventory, and order models, then connected lightweight recommendation signals.',
          outcome: 'The platform gained a stronger transaction foundation and more flexible growth experiments.',
          metrics: ['Checkout +18%', 'Inventory sync < 5s', '6 promotion strategies'],
        },
        {
          name: 'OpsPilot Assistant',
          desc: 'An incident-response workspace that brings alerts, logs, traces, and runbooks together.',
          tags: ['React', 'FastAPI', 'OpenTelemetry', 'LLM'],
          year: '2025',
          role: 'Product prototype, alert aggregation, AI-assisted triage',
          challenge: 'On-call teams were switching across tools and relying on memory to diagnose recurring incidents.',
          solution: 'We unified alert streams, traces, logs, and runbooks into a single workspace with generated triage hints.',
          outcome: 'Teams reached first diagnosis faster, and new responders had clearer paths through common incidents.',
          metrics: ['Response time -38%', '5 alert sources unified', '42 runbooks covered'],
        },
        {
          name: 'FactoryLink Platform',
          desc: 'A real-time industrial data platform connecting devices, production lines, and quality signals.',
          tags: ['TypeScript', 'Go', 'MQTT', 'TimescaleDB'],
          year: '2025',
          role: 'Data modeling, streaming pipeline, operations dashboards',
          challenge: 'Device data was fragmented, and quality tracing depended on manual exports and offline sheets.',
          solution: 'We designed a unified event model and streaming ingestion layer across line state, quality, and exceptions.',
          outcome: 'Operations teams gained live quality tracking and faster batch-level traceability.',
          metrics: ['Data latency < 3s', '120+ devices connected', 'Trace time -55%'],
        },
        {
          name: 'FinSight Console',
          desc: 'A risk-signal analysis and review collaboration platform for financial operations teams.',
          tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
          year: '2025',
          role: 'Review workflows, rules engine, data visualization',
          challenge: 'Risk reviews were scattered, rule hits were hard to explain, and manual review load kept growing.',
          solution: 'We built rule explanations, case routing, and risk dashboards so reviewers could prioritize with confidence.',
          outcome: 'The team improved high-risk case handling speed without weakening compliance review.',
          metrics: ['Review efficiency +31%', 'Rule explanations 87%', 'High-risk queues prioritized'],
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
