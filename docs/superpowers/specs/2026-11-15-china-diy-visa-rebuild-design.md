# 中国公民 DIY 出国签证指南（工程化重构）设计规范

- **日期**：2026-11-15
- **原站参考**：`https://china-diy-visa.routeking.workers.dev/`
- **目标部署平台**：Cloudflare Workers (Static Assets)

---

## 1. 背景与目标

原网站是一个约 3,106 行、226 KB 的单文件 HTML 应用，集成了样式、D3.js 3D 地球仪渲染逻辑、页面交互逻辑以及 102 个国家的签证数据。其中 12 个主力国家采用完整数据结构，另外 90 个国家通过精简配置在运行时拼接生成，同时子签证（`SUB_VISAS_DATA`）、避坑指南（`COUNTRY_PITFALLS`）与求职门户（`JOB_PORTALS_BY_CODE`）分散在脚本各处。

本次重新构建的核心目标：
1. **现代前端工程化**：使用 **React 19 + TypeScript + Vite + Tailwind CSS** 重构，按职责拆分为清晰的布局、地球仪、国家详情组件、自定义 Hooks 与工具函数。
2. **统一标准化数据层**：将全部 **102 个国家** 的所有数据（基础信息、五大签证通道、多子签证分支、避坑清单、官方链接、求职网站）合并并展开为统一 Schema，按区域拆分为独立 TypeScript 数据文件，彻底消除运行时模板拼接逻辑，实现“改哪个国家就直接编辑对应数据文件”。
3. **体验与路由升级**：
   - 保持原有的纸感编辑风（Editorial Paper Theme）视觉及日间/黑夜主题切换。
   - 引入 URL 路由与查询参数同步（例如 `/?cat=work`、`/country/JPN?tab=work&sub=gijinkoku`），支持页面刷新保持状态、浏览器前进/后退以及直链分享，同时动态更新页面 `document.title`。
   - 完整保留并优化 3D 地球点击国家“旋转放大飞入（Fly-to）”至详情页、以及从详情页平滑返回地球的动画过渡。
   - 本地化打包 `world-110m.json` 全球矢量底图与前端依赖，消除外部 CDN 在国内网络环境下的加载失败风险。
4. **Cloudflare Workers 一键部署**：内置 `wrangler.jsonc` 配置，支持 SPA 路由回退与静态资源托管。

---

## 2. 技术栈选型

- **核心框架**：React 19 + TypeScript
- **构建工具**：Vite 6
- **路由管理**：React Router v7（或轻量 URL History 同步器，支持 `/` 与 `/country/:code` 路由及 Query 参数联动）
- **样式方案**：Tailwind CSS v3 + CSS Variables（精准还原 `--bg-paper` 等日/夜双主题色彩系统）
- **地图与可视化**：`d3-geo`、`d3-selection`、`d3-drag`、`d3-timer`、`d3-transition`、`d3-interpolate` + `topojson-client` + 本地内置 `world-atlas` (`countries-110m.json`)
- **部署平台**：Cloudflare Workers Static Assets (`wrangler`)

---

## 3. 目录结构设计

```text
e:\AI-based-project\game/
├── public/
│   └── world-110m.json                 # 本地化的 TopoJSON 全球矢量地图数据
├── src/
│   ├── types/
│   │   └── visa.ts                     # 核心 TypeScript 类型定义
│   ├── data/
│   │   ├── categories.ts               # 五大类签证定义（全部/留学/工作/移民/旅游/其他）与配色
│   │   ├── regions/
│   │   │   ├── asia-pacific.ts         # 亚太与大洋洲国家完整数据
│   │   │   ├── europe.ts               # 欧洲（申根与非申根）国家完整数据
│   │   │   ├── americas.ts             # 美洲（北美、拉美、加勒比）国家完整数据
│   │   │   └── middle-east-africa.ts   # 中东、中亚、高加索与非洲国家完整数据
│   │   └── index.ts                    # 汇总导出 COUNTRIES_DATA (102国) 及查询辅助函数
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # 顶部响应式导航栏（品牌、分类胶囊、自转开关、主题切换、搜索框）
│   │   │   ├── SearchDropdown.tsx      # 浮动搜索结果列表
│   │   │   ├── Footer.tsx              # 底部版权说明与 @routeking_ 链接
│   │   │   └── Toast.tsx               # 右下角操作反馈通知条
│   │   ├── globe/
│   │   │   ├── GlobeView.tsx           # 首页 3D 地球仪容器与悬浮控制层
│   │   │   └── GlobeCanvas.tsx         # D3 Orthographic Canvas 渲染、拖拽、缩放、命中检测与飞入动画
│   │   └── country/
│   │       ├── CountryDetailView.tsx   # 国家详情页主视图
│   │       ├── CountryHeader.tsx       # 面包屑返回、国家概览、周期/方式、五大类 Tab 与子签证选择卡片
│   │       ├── PathwayOverviewCard.tsx # 签证类别标题、费用、简介与核心门槛
│   │       ├── PitfallsCard.tsx        # 常见踩坑与必须避免的雷区
│   │       ├── WorkflowStepsCard.tsx   # DIY 全流程步骤（01, 02...）
│   │       ├── ResourceLinksCard.tsx   # 官方入口链接 + 当地雇主与招聘网站
│   │       └── ChecklistCard.tsx       # 交互式材料核对清单（进度条、官网表格直链、一键复制、重置进度）
│   ├── hooks/
│   │   ├── useTheme.ts                 # 日/夜模式切换与 localStorage ('china_diy_visa_theme_v1') 持久化
│   │   └── useChecklist.ts             # 材料勾选进度与 localStorage ('china_diy_visa_checklist_v1') 持久化
│   ├── utils/
│   │   └── formLinks.ts                # 根据材料条目文本智能匹配官方表格下载链接
│   ├── App.tsx                         # 顶层状态、URL 路由同步与视图切换动画编排
│   ├── main.tsx                        # React 挂载入口
│   └── index.css                       # 字体引入、Tailwind 指令、日/夜主题 CSS 变量与过渡动画
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-11-15-china-diy-visa-rebuild-design.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── wrangler.jsonc
```

---

## 4. 统一数据模型规范（`src/types/visa.ts`）

所有 102 个国家的数据统一采用以下完整结构，不再区分“主力国家”与“精简模板国家”的运行时转换：

```ts
export type CategoryId = 'all' | 'study' | 'work' | 'immigration' | 'tourism' | 'other';
export type PathwayCategoryId = Exclude<CategoryId, 'all'>;

export interface CategoryMeta {
  id: CategoryId;
  label: string;
  en: string;
  color: string;
  darkColor?: string;
}

export interface VisaStep {
  title: string;
  detail: string;
}

export interface ExternalLink {
  title: string;
  url: string;
  desc: string;
}

export interface SubVisaItem {
  id: string;
  title: string;
  fee: string;
  desc: string;
  tips: string;
  steps: VisaStep[];
  checklist: string[];
}

export interface CountryData {
  id: string;              // ISO 3166-1 numeric (3位字符串，对应 TopoJSON feature.id，如 '392')
  code: string;            // ISO 3166-1 alpha-3 (如 'JPN')
  nameZh: string;          // 中文名称（如 '日本'）
  nameEn: string;          // 英文名称（如 'Japan'）
  region: string;          // 所属区域标识（如 '东亚 / EAST ASIA'）
  coords: [number, number];// [经度, 纬度]
  badge: string;           // 核心签证特性短标签
  tierColor: '#4A7B82' | '#789882'; // 地球着色分类（网申/中心 vs 互免/电子签）
  labelPriority: boolean;  // 是否在默认缩放层级优先展示地球标签
  processing: string;      // 常规办理周期
  submission: string;      // 办理方式
  summary: string;         // 国家签证总览说明
  pitfalls: string[];      // 该国专属避坑指南
  links: ExternalLink[];   // 官方入口与实用链接
  jobLinks: ExternalLink[];// 当地雇主与招聘门户链接
  pathways: Record<PathwayCategoryId, SubVisaItem[]>; // 五大类别，每类包含 1~N 个独立子签证
}
```

### 数据标准化规则
1. 原 `FLAGSHIP_COUNTRIES`（12 国）与 `EXTRA_COUNTRY_SPECS`（90 国）全部静态展开为完整的 `CountryData` 对象。
2. 原 `SUB_VISAS_DATA`（如 `NZL:work`、`DEU:work`、`CAN:work`、`JPN:work`、`AUS:work`、`IRL:work`、`KOR:tourism`）以及原本含 `/` 多签证标题的类别，直接作为 `pathways[cat]` 下的 `SubVisaItem[]` 数组存储。当 `pathways[cat].length > 1` 时，界面自动渲染“子签证选择卡片”。
3. 原 `COUNTRY_PITFALLS` 与 `JOB_PORTALS_BY_CODE` 直接写入各国的 `pitfalls` 和 `jobLinks` 字段中，方便按国家独立维护。

---

## 5. 核心功能与交互流程设计

### 5.1 路由与状态同步
- **首页地球视图**：URL 为 `/`（可选 `?cat=study` 等分类过滤参数）。
- **国家详情视图**：URL 为 `/country/:code`（不区分大小写，如 `/country/JPN`），支持查询参数 `?tab=work&sub=gijinkoku`。
- **浏览器历史支持**：
  - 从首页点击地球上的国家或搜索下拉框项：先触发地球仪 460ms 3D 旋转放大飞入动画（`d3.transition`），动画结束后 `pushState` 跳转至 `/country/:code` 并执行视图淡入动画。
  - 点击详情页左上角「← 返回 3D 全球地球」或浏览器后退按钮：平滑退出详情页并恢复首页地球视图。
  - 直接访问 `/country/JPN?tab=work` 链接：直接渲染对应国家详情页与指定 Tab，并动态设置页面标题为 `日本 - 工作签证 DIY 指南 | 中国公民 DIY 出国签证指南`。

### 5.2 3D 交互式地球仪 (`GlobeCanvas.tsx`)
- **HiDPI Canvas 渲染**：自适应容器尺寸与 `devicePixelRatio`（上限 1.5 保证帧率）。
- **手势与交互**：
  - 鼠标拖拽旋转、滚轮缩放（`0.75x` – `6.0x`）。
  - 移动端单指拖拽旋转、双指捏合缩放（Pinch-to-zoom）。
  - 指针悬停命中检测（优先检测 14px 半径内的国家坐标点，其次通过 `projection.invert` + `d3.geoContains` 检测国家多边形），显示毛玻璃悬浮提示卡。
  - 右上角缩放按钮组（`+`、`−`、`↻` 重置、倍率徽章）、左下角状态胶囊与图例、右下角六大区域（亚太、欧洲、北美、拉美、中东/非、澳新）平滑旋转聚焦按钮。

### 5.3 材料核对清单与持久化 (`ChecklistCard.tsx` + `useChecklist.ts`)
- 保持原版 `localStorage` 键名：
  - 主题键名：`china_diy_visa_theme_v1`
  - 清单勾选键名：`china_diy_visa_checklist_v1`（条目键格式为 `${country.id}:${tab}:${subVisa.id}:${idx}`，与原版完全兼容）。
- 支持勾选进度实时百分比计算、进度条动画、官方表格直达按钮、一键复制格式化文本到剪贴板（带 `navigator.clipboard` 与 `textarea` 降级）及重置当前签证勾选进度。

---

## 6. 错误处理与测试验证

1. **地图资源容错**：将 `countries-110m.json` 内置到 `public/world-110m.json`，避免外部 CDN 劫持或超时；若极端情况下加载失败，展示友好的降级提示并引导使用顶部全局搜索框。
2. **URL 参数容错**：若用户访问不存在的国家代码（如 `/country/INVALID`）或无效的 `tab`/`sub` 参数，自动回退到默认有效分类或返回首页并弹出 Toast 提示。
3. **验证标准**：
   - 全部 102 个国家数据完整性自动化校验（确保每个国家均包含完整的 5 大通道、非空步骤、材料清单、避坑提示与链接）。
   - TypeScript 严格模式编译零错误（`tsc -b`）。
   - Vite 生产环境打包成功（`vite build`）且本地预览功能与原站 100% 对齐。
