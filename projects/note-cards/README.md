# 项目 A · 笔记卡片

> 对应课时：011 | 技术栈：Vite + React 19 + TypeScript + CSS Modules

## 目标

用组件、props、列表、条件渲染和样式完成一个可搜索、可按标签筛选的笔记卡片列表。

## 运行

```bash
cd projects/note-cards
pnpm install
pnpm dev
```

检查：`pnpm typecheck && pnpm lint && pnpm build`

## 功能

- 搜索标题/内容（大小写不敏感，忽略首尾空格）
- 标签多选（OR）；不选任何标签 = 全部，与搜索组合（AND）
- 空状态 + 清除筛选
- 结果计数
- 卡片显示标题、摘要、标签、日期
- 点击卡片标签可直接筛选（可选）

## 组件拆分（建议）

- `NoteBoard`：持有 keyword / selectedTag，派生 tags、filteredNotes
- `SearchBar`：受控输入
- `TagFilter`：标签列表 + 选中态
- `NoteList`：map + `key={note.id}`，空状态
- `NoteCard`：单张卡片
- `EmptyState`：空状态 + 清除按钮

## 设计决策

- 过滤结果是**派生数据**，render 时计算，不放进 useState
- 列表 key 用 `note.id`，不用 index
- 搜索输入受控；不使用 useMemo（列表小，先保持简单）
- 样式用 SCSS Modules，避免全局类名冲突

## 验收清单

- [x] `pnpm typecheck` / `pnpm lint` / `pnpm build` 通过
- [x] 搜索 + 标签筛选可组合
- [x] 无结果时显示空状态，清除后恢复
- [x] 组件拆分合理，NoteBoard 不臃肿
- [x] 控制台无 key warning / 报错
- [ ] 320px 宽度可用（样式与 a11y 本次跳过，待后续）

## 已知问题与后续改进

- 数据为本地静态数据；异步请求在 020/029 引入
- 尚未加测试；028 引入 Vitest + RTL
- 样式与可访问性未打磨（本次聚焦 React；标签用 `div`，未加键盘/aria）
- 未提供「全部」按钮；不选标签即全部
- 过滤逻辑内联在 `NoteBoard`；028 可抽成纯函数并测试
- 样式可继续打磨（暗色模式、动画）
