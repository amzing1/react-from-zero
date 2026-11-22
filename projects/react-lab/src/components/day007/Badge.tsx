const Badge = (props: { count: number }) => {
  return <div>{props.count > 0 ? <div>{props.count}</div> : '暂无消息'}</div>
}

export default Badge
