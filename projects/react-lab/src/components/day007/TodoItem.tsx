interface Props {
  text: string
  done: boolean
  onToggle: () => void
}

const TodoItem = (props: Props) => {
  return (
    <div>
      <input type="checkbox" checked={props.done} onChange={props.onToggle} />
      <span
        style={{
          textDecoration: props.done ? 'line-through' : 'none',
        }}
      >
        {props.text}
      </span>
    </div>
  )
}

export default TodoItem
