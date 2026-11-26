import type { Task, TaskFilter, TaskStatus } from './types'

function selectVisibleTasks(tasks: Task[], filter: TaskFilter): Task[] {
  const keyword = filter.keyword.trim().toLowerCase()

  return tasks
    .filter((task) => {
      if (filter.status !== 'all' && task.status !== filter.status) {
        return false
      }
      if (filter.priority !== 'all' && task.priority !== filter.priority) {
        return false
      }
      if (!keyword) {
        return true
      }
      return (
        task.title.toLowerCase().includes(keyword) ||
        task.desc.toLowerCase().includes(keyword)
      )
    })
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

function countByStatus(tasks: Task[]): Record<TaskStatus, number> {
  const counts: Record<TaskStatus, number> = { todo: 0, doing: 0, done: 0 }
  for (const task of tasks) {
    counts[task.status] += 1
  }
  return counts
}

export { selectVisibleTasks, countByStatus }
