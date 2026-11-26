import type { Task } from "../types";

const mockTasks: Task[] = [
  {
    id: 'task-001',
    title: '设计登录页面',
    desc: '完成登录页的 UI 稿与交互说明，包含表单校验和错误提示。',
    status: 'todo',
    priority: 'high',
    dueDate: '2025-06-10',
    createdAt: '2025-05-28T09:15:00.000Z',
  },
  {
    id: 'task-002',
    title: '搭建项目脚手架',
    desc: '初始化 Vite + React + TypeScript 项目，配置 ESLint 与 Prettier。',
    status: 'done',
    priority: 'high',
    dueDate: null,
    createdAt: '2025-05-20T02:30:00.000Z',
  },
  {
    id: 'task-003',
    title: '实现任务列表组件',
    desc: '按状态分组展示任务，支持拖拽排序。',
    status: 'doing',
    priority: 'high',
    dueDate: '2025-06-05',
    createdAt: '2025-05-29T13:45:00.000Z',
  },
  {
    id: 'task-004',
    title: '编写单元测试',
    desc: '为工具函数补充 Vitest 测试用例，覆盖率不低于 80%。',
    status: 'todo',
    priority: 'medium',
    dueDate: '2025-06-15',
    createdAt: '2025-05-30T08:00:00.000Z',
  },
  {
    id: 'task-005',
    title: '优化首屏加载速度',
    desc: '路由懒加载 + 图片压缩，将 LCP 控制在 2.5s 以内。',
    status: 'doing',
    priority: 'medium',
    dueDate: null,
    createdAt: '2025-05-27T06:20:00.000Z',
  },
  {
    id: 'task-006',
    title: '更新 README',
    desc: '补充本地启动步骤和环境变量说明。',
    status: 'done',
    priority: 'low',
    dueDate: '2025-05-25',
    createdAt: '2025-05-22T10:10:00.000Z',
  },
  {
    id: 'task-007',
    title: '修复移动端样式错位',
    desc: '375px 宽度下任务卡片溢出，需调整 flex 布局。',
    status: 'todo',
    priority: 'low',
    dueDate: '2025-06-01',
    createdAt: '2025-05-31T03:55:00.000Z',
  },
  {
    id: 'task-008',
    title: '接入错误监控',
    desc: '集成 Sentry，捕获未处理异常与接口错误。',
    status: 'done',
    priority: 'medium',
    dueDate: null,
    createdAt: '2025-05-26T12:40:00.000Z',
  },
]

export {
  mockTasks
}