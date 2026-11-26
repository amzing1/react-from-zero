import { useState } from 'react'
import { useTasks } from './TaskContext'
import StatusSummary from './StatusSummary'
import TaskList from './TaskList'
import TaskToolbar from './TaskToolbar'
import { countByStatus, selectVisibleTasks } from './taskSelectors'
import type { TaskFilter } from './types'

const EMPTY_FILTER: TaskFilter = {
  keyword: '',
  status: 'all',
  priority: 'all',
}

const TaskBoard = () => {
  const tasks = useTasks()
  const [filter, setFilter] = useState<TaskFilter>(EMPTY_FILTER)

  const visibleTasks = selectVisibleTasks(tasks, filter)
  const counts = countByStatus(tasks)

  return (
    <section className="task-board">
      <TaskToolbar filter={filter} onChangeFilter={setFilter} />
      <StatusSummary
        counts={counts}
        total={tasks.length}
        visible={visibleTasks.length}
      />
      {tasks.length === 0 ? (
        <p className="task-empty">还没有任务，点击「新建任务」开始。</p>
      ) : visibleTasks.length === 0 ? (
        <p className="task-empty">
          没有匹配的任务。
          <button onClick={() => setFilter({ ...EMPTY_FILTER })}>清除筛选</button>
        </p>
      ) : (
        <TaskList list={visibleTasks} />
      )}
    </section>
  )
}

export default TaskBoard
