# 中国公民 DIY 出国签证指南 — 平铺世界地图视觉重构与全量修复设计文档

> **日期**：2026-11-15  
> **目标仓库**：`Chain813/china-diy-visa`  
> **基线提交**：`a75b8bc`

---

## 1. 背景与目标

本轮重构在既有 React 19 + TypeScript + Vite 6 + Tailwind CSS v3 + React Router v7 工程基础上，一次性解决数据准确度、链接有效性、分类过滤真实度、移动端适配、首屏打包体积等全部遗留问题，并**全面重构前端视觉与交互方式**：淘汰自动旋转的 3D 球体地球，替换为基于同源 50m 矢量底图的 **Atlas Bento 现代编辑风地图集工作台 + Natural Earth 平铺世界地图**。

---

## 2. 总体架构变化

### 2.1 数据层拆分与按需懒加载

为了解决当前主包体积过大（`1,124.50 kB`）及“全部国家均亮起、分类筛选无区分度”的问题，将数据层拆分为两层：

1. **轻量首屏索引层（[`src/data/directory.ts`](src/data/directory.ts) + [`src/data/index.ts`](src/data/index.ts)）**：
   - 导出 `COUNTRY_DIRECTORY: CountrySummary[]`（全 102 国轻量元数据：id、code、中文名、英文名、大洲、坐标、badge、tierColor、labelPriority、各通道预览标题、`diyCategories: PathwayCategoryId[]` 与精简 `searchCorpus`）。
   - 首屏地图、全局搜索、顶部五大类筛选与可折叠国家目录仅依赖此轻量索引，不再打包完整步骤、避坑指南、链接与材料清单。
   - 对 90 个扩展国严格分层：`diySupport: 'diy' | 'advisory'`。旅游及已核验标准电子签/免签/数字游民签标记为 `'diy'`；需雇主/学校/律师主导的扩展国留学、工作、移民通道标为 `'advisory'`。顶部五大类过滤仅展示并高亮对应通道 `diySupport === 'diy'` 的国家。

2. **按大洲懒加载详情层（`src/data/regions/*.ts`）**：
   - [`src/data/index.ts`](src/data/index.ts) 提供 `loadCountryByCode(code)` 与内存缓存：根据国家索引所属片区，通过动态 `import()` 按需加载对应区域模块，将详情数据自动分割为 4 个独立 Vite Chunk，主入口包降至 `500 kB` 以下。
   - **子签证字段下沉（[`src/types/visa.ts`](src/types/visa.ts)）**：为 `SubVisaItem` 增加 `processing: string`、`submission: string`、`diySupport: DiySupportLevel`、`advisoryNote?: string`。详情页卡片动态展示当前选中 `selectedSubVisa` 的办理周期与递交方式，彻底消除工作/留学 Tab 展示旅游签周期的问题。
   - 复核全部 32 组多子签证通道，合并无实质步骤/费率差异的简略分卡，仅保留真实独立路径。

---

### 3. 2026 年政策费率与外链精确勘误

1. **政策与费率更新**：
   - **土耳其 (`TUR`)**：更新为 2026 年 1 月起中国普通护照旅游/过境**免签入境（每 180 天内累计不超 90 天）**政策及免签费用说明，保留长期工作/留学须贴签提示。
   - **俄罗斯 (`RUS`)**：补充双边 **30 天免签**安排及 **30 天停留（120 天有效期）统一电子签（`evisa.kdmid.ru`）** 最新口径与费用。
   - **澳大利亚 (`AUS`)**：更新 2026 年 7 月 1 日调价后的主要子类别 VAC 费率：`Subclass 600`（`250 AUD` 境外）、`Subclass 500`（`2,500 AUD`）、`Subclass 485`（`5,750 AUD`）、`Subclass 482`（`4,015 AUD`）、`Subclass 462`（`840 AUD`）、`Subclass 189`（`6,135 AUD`）、`Subclass 190 / 491`（`6,140 AUD`）。
   - **日本 (`JPN`)**：更新 2026 年 10 月 1 日入管局（ISA）调价：**永住许可手续费 `200,000 JPY`（窗口基准）及在留更新/变更阶梯费率（`10,000–75,000 JPY`）**，并拆清留学/工作/旅游/永住各自 `processing` 与 `submission`。
2. **失效外链替换**（基于全量 182 条外链检测结果）：
   - `CYP`：`moi.gov.cy` 旧页 -> `https://www.mip.gov.cy/` 及 `https://www.gov.cy/`
   - `MDG`：补充并切换官方入口 `https://evisamada.gov.mg/`
   - `ITA`：`vistoperitalia.esteri.it/home/en` -> `https://vistoperitalia.esteri.it/`
   - `CHE`：`sem.admin.ch/sem/en/home.html` -> `https://www.sem.admin.ch/`
   - `AUT`：替换为有效的 `https://www.migration.gv.at/` 与 `https://www.bmeia.gv.at/`
   - `ARG`：`migraciones.gob.ar/ave/index.htm` -> `https://www.argentina.gob.ar/interior/migraciones/ave`
3. **表单链接匹配收紧（[`src/utils/formLinks.ts`](src/utils/formLinks.ts)）**：
   - 删除过宽关键词（`'许可'`、`'清单'`、`'回执'`、`'摘要表'`），仅保留真正指向空白表格/在线填报入口的关键词。
   - 为 `SPECIFIC_FORM_RULES` 增加国家 `code` 精确作用域校验（例如 `DS-160/260` 仅匹配 `USA`，`SGAC` 仅匹配 `SGP`，`MDAC` 仅匹配 `MYS`，`VIDEX` 仅匹配 `DEU`，`INZ` 仅匹配 `NZL`，`AVATS` 仅匹配 `IRL`，`france-visas` 仅匹配 `FRA`，`gov.uk` 仅匹配 `GBR`），消除全量 141 处误匹配。

---

### 4. 平铺世界地图与 Atlas Bento 前端重构

1. **50m 本地矢量底图（[`public/world-50m.json`](public/world-50m.json) + [`src/utils/worldAtlas.ts`](src/utils/worldAtlas.ts)）**：
   - 将原 `world-110m.json`（177 个多边形）升级并替换为同源静态 `public/world-50m.json`（241 个多边形，同步更新 [`tests/smoke.test.ts`](tests/smoke.test.ts) 校验包含 `'702'`/`'480'`/`'048'`），彻底补全**新加坡 (`702`)、毛里求斯 (`480`)、巴林 (`048`)** 的真实轮廓与点击命中能力。
   - **顶栏控件升级（[`Header.tsx`](src/components/layout/Header.tsx)）**：移除 `toggle-spin-btn`，改为「国家目录」抽屉/侧栏开关按钮（`aria-expanded`，仅在首页展示或在详情页点击时直达首页目录）；搜索结果直接基于轻量 `COUNTRY_DIRECTORY` 渲染。
2. **平铺交互地图组件（`src/components/map/`，取代原 `src/components/globe/`）**：
   - [`mapRenderer.ts`](src/components/map/mapRenderer.ts)：采用 `d3.geoNaturalEarth1()` 拟合容器尺寸；把 `d3.geoGraticule10()` 移入带 `try/catch` 的懒计算保护函数，避免外设或几何计算异常影响搜索与列表；统一在 Canvas 上应用 `d3.zoomTransform`（平滑缩放 `1.0x–8.0x` 与边界受控拖拽平移），渲染海洋底色、经纬网格、三态国家着色（DIY 可行/仅原则提示/过滤置灰）、优先城市点位及不重叠标签。
   - [`mapHitTest.ts`](src/components/map/mapHitTest.ts)：先反算缩放平移矩阵命中点位坐标圆域（`14px`），未命中再经 `projection.invert` + `d3.geoContains` 命中 50m 国家多边形。
   - [`MapCanvas.tsx`](src/components/map/MapCanvas.tsx)：接管 `d3.zoom` 滚轮/拖拽/双指捏合、6 大区域平滑定位、点击后 `flyToCountry` 居中放大飞入（同时处理 `'end'`/`'interrupt'`/`'cancel'`，彻底避免过渡锁死），支持 `ResizeObserver` 自适应重绘。
   - [`MapOverlays.tsx`](src/components/map/MapOverlays.tsx)：展示顶部数据统计与图例胶囊（网申/签证中心、免签/电子签、仅原则提示）、右上角缩放与重置条（`+`、`−`、`↻`、倍率徽章）、底部 6 大区域快捷跳转条（带 `whitespace-nowrap shrink-0` 与移动端横向滚动）。
   - [`CountryDirectory.tsx`](src/components/map/CountryDirectory.tsx)：可折叠国家目录工作台面板（桌面端默认作为地图右侧 Bento 栏可开关，移动端作为可折叠列表抽屉），按四大区域分组、支持键盘浏览、显示实时筛选计数与 DIY 标签。
3. **详情页 Bento 升级与交互细节（`src/components/country/*` + [`src/App.tsx`](src/App.tsx) + [`src/index.css`](src/index.css)）**：
   - `#map-stage` 使用 `height: calc(100dvh - 140px)`（前附 `100vh` 兼容兜底）。
   - 黑夜模式 `html[data-theme="dark"] .toast-banner` 反转背景为 `var(--text-main)`、文字色为 `#121518`，提升夜间提示可读性。
   - `WorkflowStepsCard` 升级为纵向连接线时间线卡片；`ChecklistCard` 增加进度百分比读数与更紧凑的交互排布；`CountryHeader` 动态读取子签证级 `processing`/`submission` 并渲染 DIY 状态提示条。
   - 点击「← 返回世界地图」或顶栏「全部国家」回到首页时自动清理旧搜索过滤词，并在此前存在搜索词时通过 Toast 明确提示已恢复全部国家视图。

---

### 5. 验证标准

- `COUNTRY_DIRECTORY` 与 4 大洲懒加载详情数据完整对齐（102 国全量 5 大通道及每条子签证 `processing`/`submission`/`diySupport` 通过校验），主包体积降至 `500 kB` 以下且 `dist/world-50m.json` 包含 `'702'`/`'480'`/`'048'`。
- `getFormDownloadLink` 覆盖误匹配回归测试；`AUS` / `JPN` / `TUR` / `RUS` 与修正后的官方链接进入数据校验。
- `npm run typecheck`、`npm test` 全部零错误/全绿通过，`npm run build` 无 chunk 体积超限报错（或显式拆分完成且首屏主 chunk `< 500 kB`），本地 `vite preview` 冒烟正常。
