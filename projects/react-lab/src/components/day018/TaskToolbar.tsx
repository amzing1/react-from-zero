import { TASK_PRIORITIES, TASK_STATUSES, type TaskFilter } from './types'

const STATUS_OPTIONS = ['all', ...TASK_STATUSES] as const
const PRIORITY_OPTIONS = ['all', ...TASK_PRIORITIES] as const

const STATUS_LABELS: Record<(typeof STATUS_OPTIONS)[number], string> = {
  all: '全部',
  todo: '待办',
  doing: '进行中',
  done: '已完成',
}

const PRIORITY_LABELS: Record<(typeof PRIORITY_OPTIONS)[number], string> = {
  all: '全部',
  low: '低',
  medium: '中',
  high: '高',
}

interface Props {
  filter: TaskFilter
  onChangeFilter: (next: TaskFilter) => void
}

const TaskToolbar = ({ filter, onChangeFilter }: Props) => {
  return (
    <div className="task-toolbar">
      <label className="task-toolbar__search">
        搜索
        <input
          value={filter.keyword}
          placeholder="标题或描述"
          onChange={(event) =>
            onChangeFilter({ ...filter, keyword: event.target.value })
          }
        />
      </label>

      <fieldset className="task-toolbar__group">
        <legend>状态</legend>
        {STATUS_OPTIONS.map((status) => (
          <label key={status}>
            <input
              type="radio"
              name="task-filter-status"
              value={status}
              checked={filter.status === status}
              onChange={() => onChangeFilter({ ...filter, status })}
            />
            {STATUS_LABELS[status]}
          </label>
        ))}
      </fieldset>

      <fieldset className="task-toolbar__group">
        <legend>优先级</legend>
        {PRIORITY_OPTIONS.map((priority) => (
          <label key={priority}>
            <input
              type="radio"
              name="task-filter-priority"
              value={priority}
              checked={filter.priority === priority}
              onChange={() => onChangeFilter({ ...filter, priority })}
            />
            {PRIORITY_LABELS[priority]}
          </label>
        ))}
      </fieldset>

      <button
        onClick={() =>
          onChangeFilter({ keyword: '', status: 'all', priority: 'all' })
        }
      >
        清除筛选
      </button>
    </div>
  )
}

export default TaskToolbar
