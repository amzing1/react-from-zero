import { useId, useState, type SubmitEvent } from 'react'
import { TASK_PRIORITIES, type Task } from './types'

export type TaskFormValues = Pick<
  Task,
  'title' | 'desc' | 'dueDate' | 'priority'
>

type Props =
  | {
      type: 'add'
      onSubmit: (values: TaskFormValues) => void
      onCancel: () => void
    }
  | {
      type: 'edit'
      task: Task
      onSubmit: (values: TaskFormValues) => void
      onCancel: () => void
    }

const EMPTY_FORM: TaskFormValues = {
  title: '',
  desc: '',
  dueDate: null,
  priority: 'low',
}

const TaskForm = (props: Props) => {
  const uid = useId()
  const [form, setForm] = useState<TaskFormValues>(
    props.type === 'edit'
      ? {
          title: props.task.title,
          desc: props.task.desc,
          dueDate: props.task.dueDate,
          priority: props.task.priority,
        }
      : EMPTY_FORM,
  )

  const handleChange = (patch: Partial<TaskFormValues>) => {
    setForm((prev) => ({ ...prev, ...patch }))
  }

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const title = form.title.trim()
    if (!title) {
      return
    }
    props.onSubmit({
      ...form,
      title,
      desc: form.desc.trim(),
      dueDate: form.dueDate || null,
    })
    if (props.type === 'add') {
      setForm({ ...EMPTY_FORM })
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form__field">
        <label htmlFor={`${uid}-title`}>标题</label>
        <input
          id={`${uid}-title`}
          value={form.title}
          placeholder="必填"
          onChange={(event) => handleChange({ title: event.target.value })}
        />
      </div>

      <div className="task-form__field">
        <label htmlFor={`${uid}-desc`}>描述</label>
        <input
          id={`${uid}-desc`}
          value={form.desc}
          onChange={(event) => handleChange({ desc: event.target.value })}
        />
      </div>

      <div className="task-form__field">
        <label htmlFor={`${uid}-due`}>截止日期</label>
        <input
          id={`${uid}-due`}
          type="date"
          value={form.dueDate ?? ''}
          onChange={(event) =>
            handleChange({ dueDate: event.target.value || null })
          }
        />
      </div>

      <fieldset className="task-form__field">
        <legend>优先级</legend>
        {TASK_PRIORITIES.map((priority) => (
          <label key={priority}>
            <input
              type="radio"
              name={`${uid}-priority`}
              value={priority}
              checked={form.priority === priority}
              onChange={() => handleChange({ priority })}
            />
            {priority}
          </label>
        ))}
      </fieldset>

      <div className="task-form__actions">
        <button type="submit" disabled={!form.title.trim()}>
          {props.type === 'edit' ? '保存' : '创建'}
        </button>
        <button type="button" onClick={props.onCancel}>
          取消
        </button>
      </div>
    </form>
  )
}

export default TaskForm
