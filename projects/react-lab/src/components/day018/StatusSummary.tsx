import { TASK_STATUSES, type TaskStatus } from './types'

const STATUS_LABELS: Record<TaskStatus, string> = {
  todo: '待办',
  doing: '进行中',
  done: '已完成',
}

interface Props {
  counts: Record<TaskStatus, number>
  total: number
  visible: number
}

const StatusSummary = ({ counts, total, visible }: Props) => {
  return (
    <div className="status-summary">
      {TASK_STATUSES.map((status) => (
        <span
          key={status}
          className={`status-summary__item status-summary__item--${status}`}
        >
          {STATUS_LABELS[status]} {counts[status]}
        </span>
      ))}
      <span className="status-summary__total">
        显示 {visible} / 共 {total}
      </span>
    </div>
  )
}

export default StatusSummary
