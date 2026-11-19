# 练习项目

每个项目独立目录，目录内自带 `README.md`，至少包含：

- 目标与对应课时
- 技术栈与运行方式
- 关键设计决策（为什么这样选）
- 验收清单
- 已知问题与后续改进

## 项目清单

| 项目 | 目录 | 对应课时 | 主题 | 核心验收 |
|---|---|---|---|---|
| A · 笔记卡片 | `note-cards/` | 011 | 组件、props、列表、条件、样式 | 搜索/筛选/空状态/组件拆分 |
| B · 任务面板 | `task-board/` | 018、024、047 | 状态、reducer、Context、重构 | CRUD/筛选/状态设计/无 bug |
| C · 搜索列表 | `search-list/` | 029 | Effect、自定义 Hook、测试 | 防抖/取消/加载错误态/测试 |
| D · 评论流 | `comment-stream/` | 042 | Actions、乐观更新、Suspense | 乐观增删/回滚/错误恢复 |
| E · Dashboard 数据层 | `dashboard-data/` | 054 | TanStack Query、分页、缓存 | 缓存/分页/乐观更新/实时 |
| F · Admin 应用 | `admin/` | 060–066 | 路由、表单、表格、测试、CI | 可上线，含测试与部署 |
| G · 全栈笔记 | `fullstack-notes/` | 072–077 | Next.js、RSC、Server Actions | 鉴权/RSC/缓存/部署 |
| Capstone | `capstone/` | 097–102 | 综合 | 线上可访问，测试/监控/性能 |

## 推荐技术栈

- 构建：Vite + React + TypeScript（G/Capstone 可用 Next.js）
- 样式：CSS Modules 或 Tailwind（二选一，避免混用）
- 测试：Vitest + React Testing Library；E2E 用 Playwright
- 请求：项目 A–D 用原生 fetch 理解机制；E 之后用 TanStack Query
- 状态：A–C 用原生 Hooks/Context；D 之后按需引入 Zustand/RTK
- 质量：ESLint + Prettier + TypeScript strict

## 通用规则

1. **先能跑，再重构**：每个项目先完成最小闭环，再补测试和优化。
2. **README 先行**：开始前写清目标和验收标准。
3. **不抄完整答案**：卡住时向 Claude 要提示，不直接要终稿。
4. **每个项目至少一次 self-review**：检查状态设计、Effect 使用、组件边界、可访问性。
5. **项目完成后不要删除**，它们是后续面试的项目素材。
