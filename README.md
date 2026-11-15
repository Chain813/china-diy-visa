# 中国公民 DIY 出国签证指南 (`china-diy-visa`)

面向中国大陆普通护照持有者的 DIY 出国签证全流程参考指南，覆盖全球 **102 个国家与地区**、**五大签证通道（留学 / 工作 / 移民 / 旅游 / 探亲与商务其他）**，内置基于 D3 Orthographic 投影的 3D 交互式地球、国家详情与子签证分支、避坑提醒、官方直达入口及可持久化材料核对清单。

> 在线站点参考：[china-diy-visa.routeking.workers.dev](https://china-diy-visa.routeking.workers.dev/)

---

## 核心特性

- **3D 交互式矢量地球**：
  - 使用本地内置的 TopoJSON 世界地图（[`public/world-110m.json`](public/world-110m.json)，源自 `world-atlas`），无外部地图 CDN 运行时依赖。
  - HiDPI Canvas 渲染，支持自动旋转开关、鼠标拖拽与移动端单指旋转、滚轮与双指捏合缩放（`0.75x` – `6.0x`）、六大区域快捷聚焦、悬浮信息卡及 `460ms` 3D 飞入动画。
- **102 国全量静态展开数据层**：
  - 按四大地理片区拆分在 [`src/data/regions/`](src/data/regions/) 下（亚太、欧洲、美洲、中东与非洲），统一基于 TypeScript 强类型 [`CountryData`](src/types/visa.ts) 结构。
  - 支持同一签证通道下的多子签证分支切换（如日本工签、德国蓝卡/机会卡、澳洲技术移民、韩国五年多次等）。
- **材料核对清单与明暗双主题**：
  - 材料勾选状态与深浅主题偏好自动持久化到 `localStorage`（兼容键名 `china_diy_visa_checklist_v1`、`china_diy_visa_theme_v1`），支持进度条统计、一键复制纯文本清单（含 `textarea` 降级）与重置当前子签证进度。
- **独立 SPA URL 路由与动态标题**：
  - 支持首页分类筛选 `/?cat=work`、国家详情直达与分享 `/country/JPN?tab=work&sub=gijinkoku`（国家代码大小写不敏感），动态更新 `document.title`，无效路径自动回退并给出 Toast 提示。
- **可访问性（A11y）**：
  - 全局搜索框具备 `combobox` / `listbox` / `option` ARIA 语义；国家详情页标签页支持完整 WAI-ARIA Tabs 键盘方向键切换（`ArrowLeft` / `ArrowRight` / `Home` / `End`）。

---

## 技术栈

- **框架与路由**：React 19、TypeScript、React Router v7
- **构建与样式**：Vite 6、Tailwind CSS v3 + CSS Variables
- **地图与几何**：D3 (`d3-geo` / `d3-selection` / `d3-drag` / `d3-timer` / `d3-transition` / `d3-interpolate`)、`topojson-client`、`world-atlas`
- **测试体系**：Vitest + `@testing-library/react` + `jsdom`（覆盖全量数据完整性、Hooks、布局、3D 地球交互、国家详情与路由状态同步）
- **部署目标**：Cloudflare Workers Static Assets（配置见 [`wrangler.jsonc`](wrangler.jsonc)）

---

## 目录结构

```text
china-diy-visa/
├── public/
│   └── world-110m.json                 # 本地内置 110m 世界地图 TopoJSON
├── src/
│   ├── types/visa.ts                   # 核心数据结构与类型定义
│   ├── data/
│   │   ├── categories.ts               # 签证分类与明暗主题配色
│   │   ├── index.ts                    # 检索、按 code/id 查找与分类校验
│   │   └── regions/                    # 102 国分片数据（asia-pacific / europe / americas / middle-east-africa）
│   ├── hooks/
│   │   ├── useTheme.ts                 # 明暗主题切换与 localStorage 同步
│   │   └── useChecklist.ts             # 材料清单勾选状态管理与格式化文本导出
│   ├── utils/
│   │   ├── formLinks.ts                # 常见官方申请表与声明表直达匹配
│   │   └── worldAtlas.ts               # TopoJSON 解析、校验与缓存加载
│   ├── components/
│   │   ├── layout/                     # Header、SearchDropdown、Footer、Toast
│   │   ├── globe/                      # GlobeView、GlobeCanvas、globeRenderer、globeHitTest、GlobeOverlays
│   │   └── country/                    # CountryDetailView 与详情信息卡片组件
│   ├── App.tsx                         # SPA 路由与页面转场状态协调
│   ├── main.tsx                        # 应用入口（BrowserRouter）
│   └── index.css                       # 主题 CSS 变量与动画样式
├── tests/                              # Vitest 单元与集成测试套件
├── index.html                          # 页面模板（非阻塞 Google Fonts + 内联 SVG 图标）
├── wrangler.jsonc                      # Cloudflare Workers Static Assets 配置
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 本地开发与验证

需要 **Node.js 18+**（建议 Node 20+）及 npm。

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务器
npm run dev

# 3. 严格类型检查
npm run typecheck

# 4. 运行全部自动化测试
npm test

# 5. 构建生产环境产物（输出至 dist/）
npm run build

# 6. 本地预览生产环境产物
npm run preview
```

---

## 部署到 Cloudflare Workers

项目已配置 [`wrangler.jsonc`](wrangler.jsonc)（启用 `not_found_handling: "single-page-application"` 以支持 `/country/:code` 刷新直达）：

```bash
npm run build
npx wrangler deploy
```

---

## 免责声明

本站整理的签证流程、费用、材料清单与官方网址（截至 2026 年 11 月公开指引校对）仅作出行前自助准备参考。各国出入境政策、申请费率与递签规则可能随时调整，正式递签前请务必以目的国使领馆、移民局及官方指定签证中心官网实时公告为准。

---

## 开源协议与使用署名规范（Licensing & Attribution）

本项目采用**代码与内容双许可**模式，具体范围如下：

| 范围 | 目录 / 文件 | 适用协议 | 核心要求 |
| :--- | :--- | :--- | :--- |
| **应用程序源代码** | `src/` 下除 `src/data/` 外的全部代码、样式、测试与构建配置 | [MIT License](LICENSE) | 保留原作者版权声明与 MIT 许可声明 |
| **102 国签证数据与攻略文案** | [`src/data/`](src/data/)、[`docs/`](docs/) | [CC BY 4.0（署名 4.0 国际）](LICENSE-DATA)（[协议全文](https://creativecommons.org/licenses/by/4.0/)） | 使用、转载、二次整理或公开展示**必须注明来源并说明是否修改** |
| **完整声明文件** | [`NOTICE`](NOTICE) | — | 分发或二次部署时须保留 [`NOTICE`](NOTICE) 归属说明 |

### 注明来源（Attribution）要求

无论是基于本项目源码进行**公开网站部署 / 二次开发**，还是引用、转载、封装本项目中的 **102 国签证通道步骤、避坑提醒或材料清单数据**，均须在显眼位置（如网页页脚、项目 README、文章末尾或致谢说明）注明以下来源信息（如做过改动，请一并标明）：

- **原作者**：`RouteKing`
- **开源仓库**：`https://github.com/Chain813/china-diy-visa`
- **在线原站**：`https://china-diy-visa.routeking.workers.dev/`

#### 可直接使用的署名示例

**Markdown 格式：**
```markdown
数据与源码来源：[china-diy-visa](https://github.com/Chain813/china-diy-visa)（作者：RouteKing，原站：https://china-diy-visa.routeking.workers.dev/），内容基于 CC BY 4.0 协议、代码基于 MIT 协议使用。
```

**HTML 页脚格式：**
```html
<span>
  来源：<a href="https://github.com/Chain813/china-diy-visa">china-diy-visa</a> by RouteKing（代码 MIT / 数据 CC BY 4.0）
</span>
```
