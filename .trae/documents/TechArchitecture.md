# 项目介绍网站 - 技术架构文档

## 1. 架构设计

```mermaid
flowchart "架构设计图"
    subgraph "前端层"
        A["React + TypeScript"]
        B["Tailwind CSS"]
        C["Three.js"]
        D["React Router"]
        E["Framer Motion"]
    end
    subgraph "数据层"
        F["本地JSON数据"]
        G["Mock数据"]
    end
    subgraph "构建部署"
        H["Vite"]
        I["静态部署"]
    end
    A --> B
    A --> C
    A --> D
    A --> E
    F --> A
    G --> F
    H --> A
    I --> H
```

## 2. 技术描述

- **前端框架**：React@18 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS@3 + CSS Variables
- **路由**：React Router DOM@6
- **动画库**：Framer Motion（页面过渡、滚动动画、hover效果）
- **3D/动态背景**：Three.js + @react-three/fiber + @react-three/drei + @react-three/postprocessing
- **状态管理**：Zustand（筛选状态、搜索状态）
- **图标库**：Lucide React
- **数据来源**：本地JSON mock数据（静态项目数据）

## 3. 路由定义

| 路由 | 用途 |
|------|------|
| `/` | 首页，Hero动态背景 + 精选项目 + 关于简介 |
| `/projects` | 项目列表页，筛选 + 搜索 + 项目网格 |
| `/projects/:id` | 项目详情页，完整项目信息 + 动态背景 |
| `/about` | 关于我/团队页 |
| `/contact` | 联系我们页 |

## 4. 项目结构

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # 顶部导航栏
│   │   └── Footer.tsx          # 底部页脚
│   ├── three/
│   │   ├── ParticleBackground.tsx  # Three.js粒子背景
│   │   └── SceneBackground.tsx     # 项目详情页场景背景
│   ├── home/
│   │   ├── HeroSection.tsx     # Hero区域
│   │   ├── FeaturedProjects.tsx # 精选项目展示
│   │   └── AboutPreview.tsx    # 关于简介
│   ├── projects/
│   │   ├── ProjectCard.tsx     # 项目卡片
│   │   ├── ProjectGrid.tsx     # 项目网格
│   │   ├── FilterBar.tsx       # 筛选栏
│   │   └── SearchBox.tsx       # 搜索框
│   ├── project-detail/
│   │   ├── ProjectBanner.tsx   # 项目Banner
│   │   ├── TechStack.tsx       # 技术栈展示
│   │   └── Timeline.tsx        # 开发时间线
│   ├── about/
│   │   ├── ProfileCard.tsx     # 个人资料卡
│   │   └── SkillChart.tsx      # 技能图谱
│   └── contact/
│       └── ContactForm.tsx     # 联系表单
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/
│   └── projects.ts             # Mock项目数据
├── hooks/
│   ├── useScrollAnimation.ts   # 滚动动画Hook
│   └── useMousePosition.ts     # 鼠标位置Hook
├── stores/
│   └── filterStore.ts          # 筛选/搜索状态
├── utils/
│   └── helpers.ts              # 工具函数
├── App.tsx
├── main.tsx
└── index.css                   # 全局样式 + Tailwind
```

## 5. 组件架构

```mermaid
flowchart "组件层级图"
    A["App"] --> B["Navbar"]
    A --> C["Routes"]
    A --> D["Footer"]
    C --> E["Home"]
    C --> F["Projects"]
    C --> G["ProjectDetail"]
    C --> H["About"]
    C --> I["Contact"]
    E --> J["ParticleBackground"]
    E --> K["HeroSection"]
    E --> L["FeaturedProjects"]
    E --> M["AboutPreview"]
    F --> N["FilterBar"]
    F --> O["SearchBox"]
    F --> P["ProjectGrid"]
    P --> Q["ProjectCard"]
    G --> R["SceneBackground"]
    G --> S["ProjectBanner"]
    G --> T["TechStack"]
    G --> U["Timeline"]
    H --> V["ProfileCard"]
    H --> W["SkillChart"]
    I --> X["ContactForm"]
```

## 6. 关键技术实现方案

### 6.1 Three.js 粒子动态背景

- 使用 `@react-three/fiber` 的 Canvas 组件渲染3D场景
- PointsMaterial 创建粒子系统，支持颜色渐变和大小变化
- 鼠标移动通过 `useFrame` 更新相机位置实现视差
- 后处理使用 `@react-three/postprocessing` 的 Bloom效果
- 性能优化：使用 `useMemo` 缓存粒子位置，`useCallback` 缓存事件处理

### 6.2 滚动动画

- Framer Motion 的 `whileInView` 实现元素进入视口时的动画
- `useScroll` + `useTransform` 实现滚动视差效果
- 导航栏滚动时背景透明度变化通过 `useScroll` + CSS transition

### 6.3 响应式布局

- Tailwind CSS 断点：`sm:640px` `md:768px` `lg:1024px` `xl:1280px`
- 项目卡片网格：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 移动端导航：汉堡菜单 + 全屏覆盖式导航

### 6.4 筛选与搜索

- Zustand store 管理筛选状态（技术栈、项目类型、搜索关键词）
- 实时搜索通过 `useMemo` 过滤项目数据
- 筛选标签切换时卡片动画过渡（AnimatePresence + layout动画）
