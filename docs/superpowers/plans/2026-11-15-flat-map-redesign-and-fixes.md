# 中国公民 DIY 出国签证指南 — 平铺世界地图重构与全量修复 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将项目的所有待修复问题（`processing/submission` 路径下沉、2026 政策费率与 404 链接修复、`getFormDownloadLink` 精准化、90 国 DIY 分层过滤、`50m` 矢量底图补全、数据按需懒加载、返回清理搜索、`100dvh`/黑夜 Toast 对比度）一次性全部修完，同时彻底重构首页与详情页视觉，将自转 3D 球体替换为 **Atlas Bento 工作台 + `d3.geoNaturalEarth1()` 平铺世界地图 + 可折叠国家目录**。

**Architecture:** 先锁定基础设施层（50m 地图资源、升级后 `visa.ts` 类型、严格 `formLinks.ts`），再升级并拆包 102 国数据为轻量首屏索引 `src/data/directory.ts` 与四大片区动态懒加载模块；随后并行重构 UI 层三大互不相交目录（`layout/*` + `index.css`、`map/*` + `worldAtlas.ts`、`country/*`），最后由 `src/App.tsx` 完成异步加载路由集成与全量构建验证。

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v3, React Router v7, D3 (`geoNaturalEarth1`, `zoom`, `transition`), `topojson-client`, `world-atlas` (`countries-50m.json`), Vitest + Testing Library + `jsdom`.

---

## File Structure Map

```text
china-diy-visa/
├── public/
│   └── world-50m.json                      # 从 world-atlas/countries-50m.json 复制（替换 world-110m.json）
├── src/
│   ├── types/visa.ts                       # 新增 DiySupportLevel, RegionId, CountrySummary；SubVisaItem 下沉 processing/submission/diySupport
│   ├── utils/
│   │   ├── formLinks.ts                    # 收紧关键词并限制 SPECIFIC_FORM_RULES 国家作用域
│   │   └── worldAtlas.ts                   # 改用 /world-50m.json 与 findSummaryById
│   ├── data/
│   │   ├── directory.ts                    # 102 国轻量首屏索引（仅含坐标/名称/徽章/diyCategories/搜索语料）
│   │   ├── index.ts                        # COUNTRY_DIRECTORY、filterCountrySummaries、异步 loadCountryByCode（按片区 dynamic import）
│   │   └── regions/*.ts                    # 102 国全量数据（剔除 25 处伪多卡、全员补齐通道周期/方式/diySupport、更新 2026 政策与链接）
│   ├── components/
│   │   ├── layout/                         # Header（目录开关替代自转开关）、SearchDropdown、Footer、Toast
│   │   ├── map/                            # 替代 globe/*：WorldMapView、MapCanvas、mapRenderer、mapHitTest、MapOverlays、CountryDirectory
│   │   └── country/                        # CountryHeader（子签证周期/DIY横幅）、WorkflowStepsCard（时间线）、ChecklistCard（完成率）
│   ├── App.tsx                             # 对接 COUNTRY_DIRECTORY + loadCountryByCode + 返回自动清搜索提示 + WorldMapViewHandle
│   └── index.css                           # 100dvh 地图舞台、暗色反转 .toast-banner、时间线样式与 Atlas Bento 质感微调
└── tests/                                  # smoke / hooks-and-utils / data / layout / world-map / country-detail / app-routing
```

---

### Task 1: Foundation Assets, Types & `formLinks.ts` Hardening

**Files:**
- Remove: `public/world-110m.json`
- Create: `public/world-50m.json` (copy from `node_modules/world-atlas/countries-50m.json`)
- Modify: `src/types/visa.ts`
- Modify: `src/utils/formLinks.ts`
- Modify: `tests/smoke.test.ts`
- Modify: `tests/hooks-and-utils.test.ts`

- [ ] **Step 1: Replace `world-110m.json` with `world-50m.json` and update `tests/smoke.test.ts`**
  Verify `public/world-50m.json` exists, parses as TopoJSON `Topology`, and contains IDs `'702'` (Singapore), `'480'` (Mauritius), `'048'` (Bahrain).

- [ ] **Step 2: Upgrade `src/types/visa.ts`**
  Add:
  ```ts
  export type DiySupportLevel = 'diy' | 'advisory';
  export type RegionId = 'asia-pacific' | 'europe' | 'americas' | 'middle-east-africa';

  export interface CountrySummary {
    id: string;
    code: string;
    regionId: RegionId;
    region: string;
    nameZh: string;
    nameEn: string;
    coords: [number, number];
    badge: string;
    tierColor: '#4A7B82' | '#789882';
    labelPriority: boolean;
    diyCategories: PathwayCategoryId[];
    previewTitles: Record<PathwayCategoryId, string>;
    searchText: string;
  }
  ```
  Update `SubVisaItem` with:
  ```ts
  export interface SubVisaItem {
    id: string;
    title: string;
    fee: string;
    processing: string;
    submission: string;
    diySupport: DiySupportLevel;
    advisoryNote?: string;
    desc: string;
    tips: string;
    steps: VisaStep[];
    checklist: string[];
  }
  ```

- [ ] **Step 3: Harden `src/utils/formLinks.ts` and expand `tests/hooks-and-utils.test.ts`**
  Add `countryCodes: readonly string[]` on each `SPECIFIC_FORM_RULES` entry (`USA`, `NZL`, `DEU`, `SGP`, `MYS`, `IRL`, `FRA`, `GBR`) and remove broad generic terms (`'许可'`, `'清单'`, `'回执'`, `'摘要表'`) from `GENERIC_FORM_KEYWORDS`, keeping true form terms (`'签证申请表'`, `'申请表'`, `'申请表格'`, `'补充表'`, `'电子签申请表'`). Add regression tests ensuring `'工作许可批准函'` / `'体检回执'` / `'5年出入境清单'` / cross-country keywords return `null`.

- [ ] **Step 4: Run targeted tests & typecheck**
  Run `npx vitest run tests/smoke.test.ts tests/hooks-and-utils.test.ts` -> PASS.

---

### Task 2: 102-Country Data Audit Fixes, Splitting (`directory.ts` + Lazy Regions) & Data Tests

**Files:**
- Modify: `src/data/regions/asia-pacific.ts`, `src/data/regions/europe.ts`, `src/data/regions/americas.ts`, `src/data/regions/middle-east-africa.ts`
- Create: `src/data/directory.ts`
- Modify: `src/data/index.ts`
- Modify: `tests/data.test.ts`

- [ ] **Step 1: Write `tests/data.test.ts` assertions first for all upgraded invariants**
  - `COUNTRY_DIRECTORY` length is `102`, unique IDs/codes.
  - Async `loadAllCountries()` returns `102` full `CountryData` objects matching `COUNTRY_DIRECTORY`.
  - Every `SubVisaItem` has non-empty `processing`, `submission`, and `diySupport in ['diy', 'advisory']`.
  - Zero pseudo-split multi-sub-visas: whenever `country.pathways[cat].length > 1`, `steps` or `checklist` differ between cards (exactly the 7 handcrafted multi-card channels remain).
  - Strict DIY category filtering: `filterCountrySummaries('study', '').length < 102`, `filterCountrySummaries('work', '').length < 102`, `filterCountrySummaries('immigration', '').length < 102`.
  - Verified 2026 updates & URL fixes:
    - `TUR.pathways.tourism[0].title` / `fee` reflects 90-day visa-free policy.
    - `RUS.pathways.tourism[0]` reflects bilateral visa-free & 30-day e-Visa.
    - `AUS` fees updated to July 2026 rates (`250 AUD`, `2,500 AUD`, `5,750 AUD`, `4,015 AUD`, `840 AUD`, `6,135 AUD`, `6,140 AUD`).
    - `JPN` immigration fees reflect Oct 2026 `200,000 JPY` revision, and `JPN` work/study `processing` differs from tourism.
    - Updated valid URLs on `CYP`, `MDG`, `ITA`, `CHE`, `AUT`, `ARG`.

- [ ] **Step 2: Deterministically upgrade the 4 region files and generate `src/data/directory.ts`**
  Run a verified script (cleaned up afterward) to transform the 4 region files cleanly:
  1. Collapse the 25 cloned pseudo-split multi-sub-visa arrays back to single unified cards while keeping the 7 verified distinct sets (`JPN:work`, `AUS:work`, `KOR:tourism`, `NZL:work`, `DEU:work`, `IRL:work`, `CAN:work`).
  2. Assign accurate `processing`, `submission`, `diySupport` (and `advisoryNote`) to every `SubVisaItem` across 12 flagship + 90 expanded countries (strict DIY stratification).
  3. Apply exact 2026 updates (`TUR`, `RUS`, `AUS`, `JPN`) and verified working links (`CYP` -> `mip.gov.cy`, `MDG` -> `evisamada.gov.mg`, `ITA` -> `vistoperitalia.esteri.it/`, `CHE` -> `sem.admin.ch/`, `AUT` -> `migration.gv.at/` & `bmeia.gv.at/`, `ARG` -> `argentina.gob.ar/interior/migraciones/ave`).
  4. Generate `src/data/directory.ts` with precomputed `diyCategories`, `previewTitles`, `searchText`, `regionId`.

- [ ] **Step 3: Refactor `src/data/index.ts` for zero eager import of `regions/*.ts`**
  Expose:
  - `COUNTRY_DIRECTORY`, `isPathwayCategoryId`, `findSummaryByCode`, `findSummaryById`, `filterCountrySummaries`
  - `loadCountryByCode(code?: string): Promise<CountryData | undefined>` with region-level `import()` cache
  - `loadAllCountries(): Promise<CountryData[]>` (for bulk inspection/tests)

- [ ] **Step 4: Run `npx vitest run tests/data.test.ts` and `npm run typecheck`**

---

### Task 3 (Wave 2 Parallel): Theme CSS, `100dvh`, Inverted Dark Toast & Layout Refactor

**Files (strictly disjoint):**
- Modify: `src/index.css`
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/SearchDropdown.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `tests/layout.test.tsx`

- [ ] **Step 1: Update `src/index.css`**
  - Add subtle Atlas background dot/grid utility styling & timeline helper `.timeline-track`.
  - Fix `.toast-banner` dark theme to invert cleanly (`background: var(--text-main); color: #121518;` under `html[data-theme="dark"]` with crisp contrast).
  - Replace `#globe-stage` with `#map-stage` using `height: calc(100vh - 140px); height: calc(100dvh - 140px); min-height: 460px; max-height: 780px;`.
- [ ] **Step 2: Update `Header.tsx`, `SearchDropdown.tsx`, `Footer.tsx`**
  - Switch `searchResults` type to `CountrySummary[]` (`CountrySummary` prop interface).
  - Replace `isSpinning` / `onToggleSpin` with `isDirectoryOpen` / `onToggleDirectory` (`id="toggle-directory-btn"`, `aria-expanded`, `aria-pressed`).
  - Refine editorial Bento header pill styling and subtle live DIY indicator.
- [ ] **Step 3: Update & run `tests/layout.test.tsx`** (`npx vitest run tests/layout.test.tsx`).

---

### Task 4 (Wave 2 Parallel): Flat Natural Earth World Map, 50m Atlas & Collapsible Country Directory

**Files (strictly disjoint):**
- Remove: `src/components/globe/*`, `tests/globe.test.tsx`
- Modify: `src/utils/worldAtlas.ts`
- Create: `src/components/map/mapRenderer.ts`
- Create: `src/components/map/mapHitTest.ts`
- Create: `src/components/map/MapOverlays.tsx`
- Create: `src/components/map/MapCanvas.tsx`
- Create: `src/components/map/CountryDirectory.tsx`
- Create: `src/components/map/WorldMapView.tsx`
- Create: `tests/world-map.test.tsx`

- [ ] **Step 1: Update `src/utils/worldAtlas.ts`** to fetch `/world-50m.json` and enrich features with `findSummaryById`.
- [ ] **Step 2: Implement `mapRenderer.ts` & `mapHitTest.ts`**
  - `d3.geoNaturalEarth1()` fitted cleanly (`fitExtent([[padding, padding], [width - padding, height - padding]], SPHERE_DATA)`).
  - Wrap `d3.geoGraticule10()` in a lazy `try/catch` `getGraticuleData()` helper returning `null` if unavailable.
  - Transform-aware pan/zoom rendering (`ctx.translate(transform.x, transform.y); ctx.scale(transform.k, transform.k)` with zoom-compensated crisp line widths).
  - Three-state land color: DIY available (`tierColor`), advisory-only (`activeCategory !== 'all'`, soft muted tint), non-matching/filtered (`filteredOut`).
  - Zoom-aware pointer hit-testing (`14px` screen-radius dot hit first, `projection.invert` + `d3.geoContains` fallback second).
- [ ] **Step 3: Implement `MapCanvas.tsx`, `MapOverlays.tsx`, `CountryDirectory.tsx`, `WorldMapView.tsx`**
  - `d3.zoom()` (`scaleExtent([1, 8])`, clamped `translateExtent([[0, 0], [width, height]])`) with wheel, pan, touch pinch, `focusRegion`, `reset`, and `flyToCountry(summary): Promise<void>` handling `'end'`, `'interrupt'`, AND `'cancel'`.
  - Collapsible `CountryDirectory` sidebar/drawer grouped into 4 regions (`亚太与大洋洲`, `欧洲`, `美洲`, `中东与非洲`), showing DIY status tags, search/category synchronized counts, and keyboard-navigable buttons.
- [ ] **Step 4: Write & run `tests/world-map.test.tsx`** (`npx vitest run tests/world-map.test.tsx`).

---

### Task 5 (Wave 2 Parallel): Country Detail Bento Upgrade (`CountryHeader`, Timeline Steps & Progress Checklist)

**Files (strictly disjoint):**
- Modify: `src/components/country/CountryHeader.tsx`, `WorkflowStepsCard.tsx`, `ChecklistCard.tsx`, `PathwayOverviewCard.tsx`, `PitfallsCard.tsx`, `ResourceLinksCard.tsx`, `CountryDetailView.tsx`
- Modify: `tests/country-detail.test.tsx`

- [ ] **Step 1: Upgrade `CountryHeader.tsx` & `CountryDetailView.tsx`**
  - Display `selectedSubVisa?.processing ?? country.processing` & `selectedSubVisa?.submission ?? country.submission` dynamically!
  - Render clear DIY vs Advisory banner (`diySupport === 'diy'` badge vs `'advisory'` info/warning banner with `advisoryNote`).
- [ ] **Step 2: Upgrade `WorkflowStepsCard.tsx`, `ChecklistCard.tsx`, and Bento card polish**
  - Convert workflow steps to vertical milestone timeline layout.
  - Add completion percentage badge to `ChecklistCard.tsx` (`{pct}%`) and refine editorial card elevation.
- [ ] **Step 3: Expand & run `tests/country-detail.test.tsx`** (`npx vitest run tests/country-detail.test.tsx`).

---

### Task 6 (Wave 3 Sequential): App Coordination, Async Detail Loading, Return-to-Map Search Reset, Build & GitHub Push

**Files:**
- Modify: `src/App.tsx`
- Modify: `tests/app-routing.test.tsx`

- [ ] **Step 1: Update `src/App.tsx`**
  - Wire `COUNTRY_DIRECTORY`, `filterCountrySummaries`, `findSummaryByCode`, and async `loadCountryByCode` with loading/error fallback cards on `/country/:code` (no static import of `regions/*.ts`).
  - Wire `WorldMapView` + `WorldMapViewHandle` and collapsible `isDirectoryOpen` state (desktop default open, mobile toggleable via `#toggle-directory-btn`).
  - Returning to `/` (`← 返回世界地图` or header `'all'`) clears `searchQuery` and triggers Toast `"已清空搜索过滤，恢复全球视图"` if a search query had been active, while keeping `rememberedHomeCategory`.
- [ ] **Step 2: Update `tests/app-routing.test.tsx`** covering async detail loading, directory toggle, StrictMode invalid-code redirect, return search cleanup Toast, and route transitions.
- [ ] **Step 3: Full Verification + Build Analysis + Preview + Push**
  - Run `npm run typecheck`, `npm test`, `npm run build` (verify main chunk `< 500 kB`, separate region chunks, `dist/world-50m.json`), `vite preview` smoke check (`/` + `/country/JPN` + `/world-50m.json`), commit all changes cleanly, and `git push` to `https://github.com/Chain813/china-diy-visa`.
