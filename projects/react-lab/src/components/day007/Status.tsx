interface Props {
  status: StatusType
}

export type StatusType = 'idle' | 'loading' | 'success' | 'error'

const statusMap: Record<StatusType, string> = {
  idle: '正常',
  loading: '加载中',
  success: '成功',
  error: '失败',
}

const Status = (props: Props) => {
  return <div>{statusMap[props.status]}</div>
}

export default Status
