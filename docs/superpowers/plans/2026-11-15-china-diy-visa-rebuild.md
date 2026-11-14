# 中国公民 DIY 出国签证指南（工程化重构）Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将原本 3,106 行的单文件 HTML 应用重构为基于 React 19 + TypeScript + Vite + Tailwind CSS + React Router 的现代模块化前端工程，并将 102 个国家的签证数据展开为按大洲拆分的标准化 TypeScript 数据层，支持独立 URL 路由、本地化世界矢量底图与 Cloudflare Workers 一键部署。

**Architecture:** 工程划分为四个高内聚层：统一静态数据层（`src/types/visa.ts` + `src/data/regions/*.ts`）、状态与工具层（`src/hooks/*` + `src/utils/*`）、独立 UI 与可视化组件层（`src/components/layout/*`、`src/components/globe/*`、`src/components/country/*`）以及顶层路由协调器（`src/App.tsx` + `src/main.tsx`）。所有 102 个国家的签证通道、子签证分支、避坑提示、官方链接与招聘门户全部静态展开存储，并通过 Vitest 进行全量数据完整性及交互测试。

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v3, React Router v7, D3 (`d3` + `@types/d3`), `topojson-client`, `world-atlas`, Vitest, Testing Library, Cloudflare Workers (`wrangler.jsonc`).

---

## File Structure Map

```text
e:\AI-based-project\game/
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
├── wrangler.jsonc
├── public/
│   └── world-110m.json
├── scripts/
│   └── extract-visa-data.mjs          # 一次性无损迁移脚本（提取 102 国数据并验证后保留或清理）
├── src/
│   ├── index.css
│   ├── main.tsx
│   ├── App.tsx
│   ├── types/
│   │   └── visa.ts
│   ├── data/
│   │   ├── categories.ts
│   │   ├── index.ts
│   │   └── regions/
│   │       ├── asia-pacific.ts
│   │       ├── europe.ts
│   │       ├── americas.ts
│   │       └── middle-east-africa.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useChecklist.ts
│   ├── utils/
│   │   ├── formLinks.ts
│   │   └── worldAtlas.ts
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx
│       │   ├── SearchDropdown.tsx
│       │   ├── Footer.tsx
│       │   └── Toast.tsx
│       ├── globe/
│       │   ├── GlobeView.tsx
│       │   ├── GlobeCanvas.tsx
│       │   └── GlobeOverlays.tsx
│       └── country/
│           ├── CountryDetailView.tsx
│           ├── CountryHeader.tsx
│           ├── PathwayOverviewCard.tsx
│           ├── PitfallsCard.tsx
│           ├── WorkflowStepsCard.tsx
│           ├── ResourceLinksCard.tsx
│           └── ChecklistCard.tsx
└── tests/
    ├── setup.ts
    ├── smoke.test.ts
    ├── data.test.ts
    ├── hooks-and-utils.test.ts
    ├── layout.test.tsx
    ├── globe.test.tsx
    ├── country-detail.test.tsx
    └── app-routing.test.tsx
```

---

### Task 1: Project Scaffolding, Dependencies, Tailwind & Vitest Setup

**Files:**
- Create: `.gitignore`
- Create: `package.json`
- Create: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Create: `vite.config.ts`, `vitest.config.ts`
- Create: `tailwind.config.js`, `postcss.config.js`
- Create: `wrangler.jsonc`
- Create: `index.html`, `src/index.css`
- Create: `public/world-110m.json` (copied from `node_modules/world-atlas/countries-110m.json`)
- Create: `tests/setup.ts`, `tests/smoke.test.ts`

- [ ] **Step 1: Create `.gitignore` and `package.json`**

`.gitignore`:
```gitignore
node_modules
dist
.wrangler
.DS_Store
*.local
```

`package.json`:
```json
{
  "name": "china-diy-visa",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc -b --noEmit"
  },
  "dependencies": {
    "d3": "^7.9.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.1.0",
    "topojson-client": "^3.1.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/d3": "^7.4.3",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@types/topojson-client": "^3.1.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "jsdom": "^26.0.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3",
    "vite": "^6.1.0",
    "vitest": "^3.0.5",
    "world-atlas": "^2.0.2"
  }
}
```

- [ ] **Step 2: Install npm packages and copy `countries-110m.json` to `public/world-110m.json`**

Run:
```powershell
npm install
Copy-Item "node_modules/world-atlas/countries-110m.json" "public/world-110m.json" -Force
```
Expected: `node_modules` installed cleanly, `public/world-110m.json` exists (> 100 KB).

- [ ] **Step 3: Create TypeScript, Vite, Vitest, Tailwind, PostCSS, and Wrangler configs**

`tsconfig.json`:
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

`tsconfig.app.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "tests"]
}
```

`tsconfig.node.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true
  },
  "include": ["vite.config.ts", "vitest.config.ts"]
}
```

`vite.config.ts`:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

`vitest.config.ts`:
```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
  },
});
```

`tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

`postcss.config.js`:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

`wrangler.jsonc`:
```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "china-diy-visa",
  "compatibility_date": "2026-11-01",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

- [ ] **Step 4: Create `index.html` and `src/index.css` preserving light/dark theme variables and animations**

`index.html`:
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>中国公民 DIY 出国签证指南</title>
    <meta
      name="description"
      content="覆盖全球 102 个国家与地区的中国公民 DIY 出国签证指南：支持 3D 交互式地球浏览，包含留学、工作、移民、旅游、探亲/商务五大类全流程步骤、避坑提醒、官方直达与材料核对清单。"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

`src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-paper: #F6F4EF;
  --bg-card: #FFFFFF;
  --bg-muted: #ECEAE4;
  --bg-soft: #F9F8F4;
  --border: #DDD9D0;
  --border-soft: #ECEAE4;
  --accent-red: #C82D32;
  --teal: #4A7B82;
  --sage: #789882;
  --ochre: #C2AD7E;
  --terracotta: #B97D63;
  --slate: #6C7888;
  --ocean: #E3ECEE;
  --text-main: #1F2328;
  --text-sub: #5C636A;
}

html[data-theme="dark"] {
  --bg-paper: #121518;
  --bg-card: #1A1F24;
  --bg-muted: #22282F;
  --bg-soft: #161B20;
  --border: #2E3640;
  --border-soft: #262D35;
  --accent-red: #E0484D;
  --teal: #5A9AA3;
  --sage: #88AD92;
  --ochre: #D4BE8C;
  --terracotta: #CC8F75;
  --slate: #8D99A8;
  --ocean: #0D1B24;
  --text-main: #ECEFF4;
  --text-sub: #9AA4B0;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--bg-paper);
  color: var(--text-main);
  font-family: 'Noto Sans SC', 'Inter', -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

body, header, footer, .hairline-card, .muted-panel, input, button {
  transition: background-color 0.22s ease, color 0.2s ease, border-color 0.2s ease;
}

html[data-theme="dark"] header,
html[data-theme="dark"] footer {
  background-color: var(--bg-paper) !important;
  border-color: var(--border) !important;
}

html[data-theme="dark"] .bg-white,
html[data-theme="dark"] .bg-white\/92,
html[data-theme="dark"] .bg-white\/90,
html[data-theme="dark"] .bg-white\/85 {
  background-color: rgba(26, 31, 36, 0.94) !important;
}

html[data-theme="dark"] .bg-\[\#F6F4EF\]\/95 {
  background-color: rgba(18, 21, 24, 0.95) !important;
}

html[data-theme="dark"] .bg-\[\#F6F4EF\] {
  background-color: var(--bg-paper) !important;
}

html[data-theme="dark"] .bg-\[\#F9F8F4\] {
  background-color: var(--bg-soft) !important;
}

html[data-theme="dark"] .bg-\[\#ECEAE4\],
html[data-theme="dark"] .bg-\[\#ECEAE4\]\/60 {
  background-color: var(--bg-muted) !important;
}

html[data-theme="dark"] .border-\[\#DDD9D0\],
html[data-theme="dark"] .border-\[\#ECEAE4\] {
  border-color: var(--border) !important;
}

html[data-theme="dark"] .text-\[\#1F2328\] {
  color: var(--text-main) !important;
}

html[data-theme="dark"] .text-\[\#5C636A\] {
  color: var(--text-sub) !important;
}

html[data-theme="dark"] .text-\[\#4A7B82\] {
  color: var(--teal) !important;
}

html[data-theme="dark"] .text-\[\#C82D32\] {
  color: var(--accent-red) !important;
}

html[data-theme="dark"] .step-badge {
  background-color: #2E3640 !important;
  color: #ECEFF4 !important;
}

html[data-theme="dark"] .copy-btn-primary {
  background-color: #ECEFF4 !important;
  color: #121518 !important;
}

html[data-theme="dark"] .copy-btn-primary:hover {
  background-color: var(--teal) !important;
  color: #FFFFFF !important;
}

.font-mono-num {
  font-family: 'IBM Plex Mono', 'Inter', monospace;
  font-variant-numeric: tabular-nums;
}

.editorial-subtitle {
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hairline-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
}

.muted-panel {
  background: var(--bg-muted);
  border: 1px solid var(--border);
}

.cat-pill {
  transition: all 0.18s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text-main);
}

.cat-pill:hover {
  border-color: var(--teal);
  background: #F0F5F5;
  transform: translateY(-1px);
}

.cat-pill.active {
  background: var(--text-main);
  color: #FFFFFF;
  border-color: var(--text-main);
}

.cat-pill.active .cat-dot {
  background: var(--accent-red) !important;
}

html[data-theme="dark"] .cat-pill {
  background: var(--bg-card);
  color: var(--text-main);
  border-color: var(--border);
}

html[data-theme="dark"] .cat-pill:hover {
  background: var(--bg-muted);
  border-color: var(--teal);
}

html[data-theme="dark"] .cat-pill.active {
  background: #ECEFF4;
  color: #121518;
  border-color: #ECEFF4;
}

#globe-stage {
  position: relative;
  width: 100%;
  height: calc(100vh - 140px);
  min-height: 480px;
  max-height: 760px;
  cursor: grab;
  user-select: none;
  touch-action: none;
  overflow: hidden;
}

#globe-stage:active {
  cursor: grabbing;
}

.globe-tooltip {
  position: absolute;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.97);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent-red);
  padding: 8px 12px;
  font-size: 12px;
  box-shadow: 0 6px 20px rgba(31, 35, 40, 0.10);
  z-index: 30;
  opacity: 0;
  transition: opacity 0.14s ease, transform 0.14s ease;
  max-width: 240px;
}

html[data-theme="dark"] .globe-tooltip {
  background: rgba(26, 31, 36, 0.96);
  border-color: var(--border);
  color: var(--text-main);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
}

@keyframes viewEnter {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.988);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes viewExit {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.975);
  }
}

@keyframes tabFadeSlide {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-view-enter {
  animation: viewEnter 0.34s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.animate-view-exit {
  animation: viewExit 0.22s cubic-bezier(0.4, 0, 1, 1) forwards;
}

.animate-tab-swap {
  animation: tabFadeSlide 0.26s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.check-item input:checked + span {
  text-decoration: line-through;
  color: var(--text-sub);
}

.toast-banner {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: var(--text-main);
  color: #FFFFFF;
  padding: 10px 16px;
  font-size: 13px;
  border-left: 4px solid var(--accent-red);
  z-index: 100;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: all 0.2s ease;
}

html[data-theme="dark"] .toast-banner {
  background: #22282F;
  color: #ECEFF4;
  border-top: 1px solid var(--border);
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.toast-banner.show {
  opacity: 1;
  transform: translateY(0);
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: var(--bg-paper);
}
::-webkit-scrollbar-thumb {
  background: #C9C3B8;
}
```

- [ ] **Step 5: Write `tests/setup.ts` and `tests/smoke.test.ts` and run test**

`tests/setup.ts`:
```ts
import '@testing-library/jest-dom/vitest';
```

`tests/smoke.test.ts`:
```ts
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('Project scaffolding', () => {
  it('includes valid local world-110m.json TopoJSON asset', () => {
    const raw = readFileSync(resolve(__dirname, '../public/world-110m.json'), 'utf8');
    const json = JSON.parse(raw);
    expect(json.type).toBe('Topology');
    expect(json.objects).toHaveProperty('countries');
  });
});
```

Run: `npm test`
Expected: PASS (`tests/smoke.test.ts`).

- [ ] **Step 6: Commit Task 1**

```bash
git add .gitignore package.json package-lock.json tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts vitest.config.ts tailwind.config.js postcss.config.js wrangler.jsonc index.html src/index.css public/world-110m.json tests/setup.ts tests/smoke.test.ts docs/
git commit -m "chore: scaffold React + TS + Vite + Tailwind project with local world-atlas"
```

---

### Task 2: Types, Categories, and 102-Country Standardized Data Layer

**Files:**
- Create: `src/types/visa.ts`
- Create: `src/data/categories.ts`
- Create: `src/data/regions/asia-pacific.ts`
- Create: `src/data/regions/europe.ts`
- Create: `src/data/regions/americas.ts`
- Create: `src/data/regions/middle-east-africa.ts`
- Create: `src/data/index.ts`
- Create: `tests/data.test.ts`

- [ ] **Step 1: Write `tests/data.test.ts` first (TDD red phase)**

```ts
import { describe, expect, it } from 'vitest';
import { CATEGORIES, PATHWAY_CATEGORIES } from '../src/data/categories';
import {
  COUNTRIES_DATA,
  findCountryByCode,
  findCountryById,
  filterCountries,
} from '../src/data';
import { ASIA_PACIFIC_COUNTRIES } from '../src/data/regions/asia-pacific';
import { EUROPE_COUNTRIES } from '../src/data/regions/europe';
import { AMERICAS_COUNTRIES } from '../src/data/regions/americas';
import { MIDDLE_EAST_AFRICA_COUNTRIES } from '../src/data/regions/middle-east-africa';

describe('Visa categories & 102-country standardized dataset', () => {
  it('defines all 6 navigation categories and 5 pathway categories', () => {
    expect(CATEGORIES.map((c) => c.id)).toEqual([
      'all',
      'study',
      'work',
      'immigration',
      'tourism',
      'other',
    ]);
    expect(PATHWAY_CATEGORIES.map((c) => c.id)).toEqual([
      'study',
      'work',
      'immigration',
      'tourism',
      'other',
    ]);
  });

  it('contains all 102 unique countries split cleanly across 4 region modules', () => {
    const regionSum =
      ASIA_PACIFIC_COUNTRIES.length +
      EUROPE_COUNTRIES.length +
      AMERICAS_COUNTRIES.length +
      MIDDLE_EAST_AFRICA_COUNTRIES.length;
    expect(regionSum).toBe(102);
    expect(COUNTRIES_DATA).toHaveLength(102);

    const ids = new Set(COUNTRIES_DATA.map((c) => c.id));
    const codes = new Set(COUNTRIES_DATA.map((c) => c.code));
    expect(ids.size).toBe(102);
    expect(codes.size).toBe(102);
  });

  it('has complete unified fields and non-empty 5 pathways for every country', () => {
    const tabs = ['study', 'work', 'immigration', 'tourism', 'other'] as const;
    for (const country of COUNTRIES_DATA) {
      expect(country.id).toMatch(/^\d{3}$/);
      expect(country.code).toMatch(/^[A-Z]{3}$/);
      expect(country.nameZh.length).toBeGreaterThan(0);
      expect(country.nameEn.length).toBeGreaterThan(0);
      expect(country.pitfalls.length).toBeGreaterThanOrEqual(3);
      expect(country.links.length).toBeGreaterThanOrEqual(1);
      expect(country.jobLinks.length).toBeGreaterThanOrEqual(2);

      for (const tab of tabs) {
        const subVisas = country.pathways[tab];
        expect(subVisas.length).toBeGreaterThanOrEqual(1);
        for (const sv of subVisas) {
          expect(sv.id.length).toBeGreaterThan(0);
          expect(sv.title.length).toBeGreaterThan(0);
          expect(sv.fee.length).toBeGreaterThan(0);
          expect(sv.desc.length).toBeGreaterThan(0);
          expect(sv.tips.length).toBeGreaterThan(0);
          expect(sv.steps.length).toBeGreaterThanOrEqual(1);
          expect(sv.checklist.length).toBeGreaterThanOrEqual(1);
        }
      }
    }
  });

  it('preserves dedicated multi-visa pathways and avoids accidental slash splitting', () => {
    const nzl = findCountryByCode('NZL')!;
    expect(nzl.pathways.work.map((s) => s.id)).toEqual(['aewv', 'whv']);

    const deu = findCountryByCode('DEU')!;
    expect(deu.pathways.work.map((s) => s.id)).toEqual([
      'bluecard',
      'chancenkarte',
      'ausbildung',
    ]);

    const usa = findCountryByCode('USA')!;
    expect(usa.pathways.work).toHaveLength(3);
    expect(usa.pathways.tourism).toHaveLength(1); // B1/B2 should remain one unified visa

    const mys = findCountryByCode('MYS')!;
    expect(mys.pathways.tourism).toHaveLength(1);
    expect(mys.pathways.work).toHaveLength(1);
  });

  it('supports lookup by code/id and keyword filtering across pathways', () => {
    expect(findCountryByCode('jpn')?.nameZh).toBe('日本');
    expect(findCountryById('392')?.code).toBe('JPN');
    expect(findCountryByCode('XXX')).toBeUndefined();

    const blueCardMatches = filterCountries('work', '蓝卡');
    expect(blueCardMatches.some((c) => c.code === 'DEU')).toBe(true);

    const whvMatches = filterCountries('all', 'WHV');
    expect(whvMatches.some((c) => c.code === 'NZL')).toBe(true);
    expect(whvMatches.some((c) => c.code === 'AUS')).toBe(true);
  });
});
```

Run: `npm test` -> expected FAIL (`Cannot find module '../src/data/categories'`).

- [ ] **Step 2: Create `src/types/visa.ts` and `src/data/categories.ts`**

`src/types/visa.ts`:
```ts
export type ThemeMode = 'light' | 'dark';

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
  id: string;
  code: string;
  nameZh: string;
  nameEn: string;
  region: string;
  coords: [number, number];
  badge: string;
  tierColor: '#4A7B82' | '#789882';
  labelPriority: boolean;
  processing: string;
  submission: string;
  summary: string;
  pitfalls: string[];
  links: ExternalLink[];
  jobLinks: ExternalLink[];
  pathways: Record<PathwayCategoryId, SubVisaItem[]>;
}
```

`src/data/categories.ts`:
```ts
import type { CategoryMeta, PathwayCategoryId } from '../types/visa';

export const CATEGORIES: CategoryMeta[] = [
  { id: 'all', label: '全部国家', en: 'ALL', color: '#1F2328' },
  { id: 'study', label: '留学', en: 'STUDY', color: '#4A7B82', darkColor: '#5A9AA3' },
  { id: 'work', label: '工作', en: 'WORK', color: '#3B6E9C', darkColor: '#4D8AC2' },
  { id: 'immigration', label: '移民', en: 'IMMIGRATION', color: '#C2AD7E', darkColor: '#D4BE8C' },
  { id: 'tourism', label: '旅游', en: 'TOURISM', color: '#789882', darkColor: '#88AD92' },
  { id: 'other', label: '其他', en: 'OTHER', color: '#B97D63', darkColor: '#CC8F75' },
];

export const PATHWAY_CATEGORIES = CATEGORIES.filter(
  (c): c is CategoryMeta & { id: PathwayCategoryId } => c.id !== 'all'
);

export const PATHWAY_IDS: PathwayCategoryId[] = [
  'study',
  'work',
  'immigration',
  'tourism',
  'other',
];
```

- [ ] **Step 3: Write deterministic data extraction script `scripts/extract-visa-data.mjs` and generate the 4 standardized region files (`src/data/regions/*.ts`)**

The extraction script reads `C:/Users/23902/.gemini/antigravity/brain/0022fea6-24f8-43ec-b0ab-0ca982e152cd/scratch/site.html`, evaluates `FLAGSHIP_COUNTRIES`, `EXTRA_COUNTRY_SPECS`, `buildExpandedCountry`, `SUB_VISAS_DATA`, `COUNTRY_PITFALLS`, `JOB_PORTALS_BY_CODE`, expands every country into unified `CountryData` (only splitting flagship titles on `' / '` with spaces around slash, excluding `Subclass 189 / 190 / 491 技术移民`, while preserving all `SUB_VISAS_DATA` entries and keeping expanded generic templates unsplit), partitions into `asia-pacific.ts`, `europe.ts`, `americas.ts`, and `middle-east-africa.ts`, and generates formatted TypeScript files importing `CountryData` from `'../../types/visa'`.
After generating and verifying, delete `scripts/extract-visa-data.mjs` (or keep if useful — since the spec doesn't list a scratch extraction script in final repo, clean up temporary script after generation if not needed, or keep `src/data/regions/*.ts` clean).

- [ ] **Step 4: Create `src/data/index.ts` and run `npm test`**

`src/data/index.ts`:
```ts
import type { CategoryId, CountryData, PathwayCategoryId } from '../types/visa';
import { ASIA_PACIFIC_COUNTRIES } from './regions/asia-pacific';
import { EUROPE_COUNTRIES } from './regions/europe';
import { AMERICAS_COUNTRIES } from './regions/americas';
import { MIDDLE_EAST_AFRICA_COUNTRIES } from './regions/middle-east-africa';

export const COUNTRIES_DATA: CountryData[] = [
  ...ASIA_PACIFIC_COUNTRIES,
  ...EUROPE_COUNTRIES,
  ...AMERICAS_COUNTRIES,
  ...MIDDLE_EAST_AFRICA_COUNTRIES,
];

const BY_CODE = new Map<string, CountryData>(
  COUNTRIES_DATA.map((c) => [c.code.toUpperCase(), c])
);
const BY_ID = new Map<string, CountryData>(COUNTRIES_DATA.map((c) => [c.id, c]));

export function findCountryByCode(code: string | undefined): CountryData | undefined {
  if (!code) return undefined;
  return BY_CODE.get(code.trim().toUpperCase());
}

export function findCountryById(id: string | undefined): CountryData | undefined {
  if (!id) return undefined;
  return BY_ID.get(id.trim().padStart(3, '0'));
}

export function filterCountries(activeCategory: CategoryId, searchQuery: string): CountryData[] {
  const q = searchQuery.trim().toLowerCase();
  return COUNTRIES_DATA.filter((c) => {
    const catMatch =
      activeCategory === 'all' ||
      (c.pathways[activeCategory as PathwayCategoryId]?.length ?? 0) > 0;
    if (!catMatch) return false;
    if (!q) return true;

    const baseMatch =
      c.nameZh.toLowerCase().includes(q) ||
      c.nameEn.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.badge.toLowerCase().includes(q) ||
      c.region.toLowerCase().includes(q);
    if (baseMatch) return true;

    if (activeCategory !== 'all') {
      const subVisas = c.pathways[activeCategory as PathwayCategoryId];
      return subVisas.some(
        (sv) =>
          sv.title.toLowerCase().includes(q) ||
          sv.desc.toLowerCase().includes(q) ||
          sv.tips.toLowerCase().includes(q)
      );
    }

    return Object.values(c.pathways).some((subVisas) =>
      subVisas.some(
        (sv) =>
          sv.title.toLowerCase().includes(q) ||
          sv.desc.toLowerCase().includes(q) ||
          sv.tips.toLowerCase().includes(q)
      )
    );
  });
}
```

Run: `npm test` and `npm run typecheck`
Expected: PASS.

- [ ] **Step 5: Commit Task 2**

```bash
git add src/types/ src/data/ tests/data.test.ts
git commit -m "feat: add unified visa TypeScript types, categories, and 102-country data layer"
```

---

### Task 3: Utilities & Custom Hooks (`formLinks.ts`, `useTheme.ts`, `useChecklist.ts`)

**Files:**
- Create: `src/utils/formLinks.ts`
- Create: `src/hooks/useTheme.ts`
- Create: `src/hooks/useChecklist.ts`
- Create: `tests/hooks-and-utils.test.ts`

- [ ] **Step 1: Write `tests/hooks-and-utils.test.ts` (TDD red phase)**

Test `getFormDownloadLink` (specific rules + generic fallback + null), `useTheme` (default light, toggle dark/light, updates `data-theme` on `<html>`, persists to `china_diy_visa_theme_v1`), and `useChecklist` (toggle, counts, reset current sub-visa without clearing others, format copy text, persists to `china_diy_visa_checklist_v1`).

- [ ] **Step 2: Implement `src/utils/formLinks.ts`, `src/hooks/useTheme.ts`, `src/hooks/useChecklist.ts`**

`src/utils/formLinks.ts`:
```ts
import type { CountryData } from '../types/visa';

export interface FormDownloadLink {
  label: string;
  url: string;
}

const SPECIFIC_FORM_RULES: Array<{ keywords: string[]; link: FormDownloadLink }> = [
  { keywords: ['ds-160', 'ds-260'], link: { label: '官网填报/下载 ↗', url: 'https://ceac.state.gov/genniv/' } },
  { keywords: ['inz 1027', 'inz 1025'], link: { label: '官网下载表格 ↗', url: 'https://www.immigration.govt.nz/visas/' } },
  { keywords: ['videx'], link: { label: '官网在线填表 ↗', url: 'https://digital.diplo.de/' } },
  {
    keywords: ['sgac'],
    link: {
      label: '官方免费填报 ↗',
      url: 'https://www.ica.gov.sg/information-and-e-services/entry-and-departure/entering-singapore/sg-arrival-card-with-electronic-health-declaration',
    },
  },
  { keywords: ['mdac'], link: { label: '官方免费填报 ↗', url: 'https://imigresen-online.imi.gov.my/mdac/main' } },
  {
    keywords: ['avats'],
    link: {
      label: '官网在线填表 ↗',
      url: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/application-forms/',
    },
  },
  { keywords: ['france-visas'], link: { label: '官网填表下载 ↗', url: 'https://france-visas.gouv.fr/chine' } },
  { keywords: ['gov.uk'], link: { label: '官网下载/填报 ↗', url: 'https://www.gov.uk/apply-to-come-to-the-uk' } },
];

const GENERIC_FORM_KEYWORDS = [
  '申请表',
  '申请书',
  '补充表',
  '调查表',
  '清单',
  '确认页',
  '摘要表',
  '表格',
  'checklist',
  '回执',
  '许可',
];

export function getFormDownloadLink(
  itemText: string,
  country: Pick<CountryData, 'links'>
): FormDownloadLink | null {
  const lower = itemText.toLowerCase();
  for (const rule of SPECIFIC_FORM_RULES) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.link;
    }
  }
  if (GENERIC_FORM_KEYWORDS.some((kw) => lower.includes(kw))) {
    const primaryUrl = country.links?.[0]?.url;
    if (primaryUrl) {
      return { label: '前往官网下载 ↗', url: primaryUrl };
    }
  }
  return null;
}
```

- [ ] **Step 3: Run `npm test` and commit Task 3**

---

### Task 4: Layout Components (`Header.tsx`, `SearchDropdown.tsx`, `Footer.tsx`, `Toast.tsx`)

**Files:**
- Create: `src/components/layout/SearchDropdown.tsx`
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/Toast.tsx`
- Create: `tests/layout.test.tsx`

- [ ] **Step 1: Write `tests/layout.test.tsx` (TDD red phase)**
- [ ] **Step 2: Implement the 4 layout components matching original markup, aria labels, responsive mobile grid, and search dropdown behavior**
- [ ] **Step 3: Run `npm test` and commit Task 4**

---

### Task 5: 3D Interactive Globe (`worldAtlas.ts`, `GlobeOverlays.tsx`, `GlobeCanvas.tsx`, `GlobeView.tsx`)

**Files:**
- Create: `src/utils/worldAtlas.ts`
- Create: `src/components/globe/GlobeOverlays.tsx`
- Create: `src/components/globe/GlobeCanvas.tsx`
- Create: `src/components/globe/GlobeView.tsx`
- Create: `tests/globe.test.tsx`

- [ ] **Step 1: Write `tests/globe.test.tsx` (TDD red phase)**
- [ ] **Step 2: Implement `worldAtlas.ts` (cached `/world-110m.json` loader), `GlobeOverlays.tsx`, `GlobeCanvas.tsx` (D3 `geoOrthographic`, HiDPI scaling, drag/wheel/pinch zoom, hover tooltip, auto-spin, focus region tween, fly-to animation), and `GlobeView.tsx`**
- [ ] **Step 3: Run `npm test` and commit Task 5**

---

### Task 6: Country Detail Page Components

**Files:**
- Create: `src/components/country/CountryHeader.tsx`
- Create: `src/components/country/PathwayOverviewCard.tsx`
- Create: `src/components/country/PitfallsCard.tsx`
- Create: `src/components/country/WorkflowStepsCard.tsx`
- Create: `src/components/country/ResourceLinksCard.tsx`
- Create: `src/components/country/ChecklistCard.tsx`
- Create: `src/components/country/CountryDetailView.tsx`
- Create: `tests/country-detail.test.tsx`

- [ ] **Step 1: Write `tests/country-detail.test.tsx` (TDD red phase)**
- [ ] **Step 2: Implement all 7 country detail components preserving exact card hierarchy, sticky checklist, copy-to-clipboard with fallback, and tab animations**
- [ ] **Step 3: Run `npm test` and commit Task 6**

---

### Task 7: Routing, State Coordination, SEO Titles, and Full Build Verification

**Files:**
- Create: `src/App.tsx`
- Create: `src/main.tsx`
- Create: `tests/app-routing.test.tsx`

- [ ] **Step 1: Write `tests/app-routing.test.tsx` covering `/`, `/?cat=work`, `/country/JPN?tab=work&sub=gijinkoku`, invalid country redirect + toast, and dynamic `document.title`**
- [ ] **Step 2: Implement `src/App.tsx` and `src/main.tsx` (`BrowserRouter` + view transitions + URL sync)**
- [ ] **Step 3: Run `npm run typecheck`, `npm test`, `npm run build`, and inspect production bundle & preview server**
- [ ] **Step 4: Commit Task 7**
