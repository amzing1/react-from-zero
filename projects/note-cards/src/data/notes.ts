import type { Note } from '@/types'

export const notes: Note[] = [
  {
    id: 'note-1',
    title: 'React 的渲染模型',
    content:
      'UI = f(state)。render 阶段执行组件函数、生成元素树并 reconcile；commit 阶段按 flags 更新 DOM。',
    tags: ['React', '原理'],
    createdAt: '2026-11-18',
  },
  {
    id: 'note-2',
    title: '状态是快照',
    content:
      '每次 render 的 state 是常量快照。事件处理闭包读到的是当次 render 的值，setState 只是把更新排队。',
    tags: ['React', '状态'],
    createdAt: '2026-11-17',
  },
  {
    id: 'note-3',
    title: 'key 是身份，不是位置',
    content:
      'index key 在列表重排时会把位置当成身份，导致 DOM 和 state 复用错位。优先使用稳定的数据 id。',
    tags: ['React', '列表'],
    createdAt: '2026-11-16',
  },
  {
    id: 'note-4',
    title: 'TypeScript 的 strict 家族',
    content:
      'strict 包含 8 项；noUncheckedIndexedAccess 是独立开关，索引访问返回 T | undefined。',
    tags: ['TypeScript', '工程化'],
    createdAt: '2026-11-15',
  },
  {
    id: 'note-5',
    title: 'Vite 8 的两条链',
    content:
      'dev 由 Oxc 按需转换、浏览器原生 ESM 加载；build 由 Rolldown 打包、tree-shaking、chunk 拆分，压缩由 Oxc 完成。',
    tags: ['工程化', 'Vite'],
    createdAt: '2026-11-14',
  },
  {
    id: 'note-6',
    title: 'Vue 与 React 的更新粒度',
    content:
      'Vue 的依赖追踪是属性级，精确通知读过该属性的 effect；React 没有依赖追踪，只有组件树边界，默认重渲染子树。',
    tags: ['Vue', 'React', '原理'],
    createdAt: '2026-11-13',
  },
  {
    id: 'note-7',
    title: '受控与非受控',
    content:
      '受控组件用 value + onChange 把输入交给 React state；非受控用 defaultValue + ref 交给 DOM。不要混用。',
    tags: ['React', '表单'],
    createdAt: '2026-11-12',
  },
  {
    id: 'note-8',
    title: 'CSS Modules',
    content:
      'CSS Modules 把类名局部化，避免全局污染；Vite 原生支持 *.module.css，类型由 vite/client 提供。',
    tags: ['CSS', '工程化'],
    createdAt: '2026-11-11',
  },
]
