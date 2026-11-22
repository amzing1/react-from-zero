import styles from './EmptyState.module.scss'

interface Props {
  onClearTags: () => void
}
const EmptyState = ({ onClearTags }: Props) => {
  return (
    <div className={styles['empty-state']}>
      <p>没有结果</p>
      <button onClick={onClearTags}>清除筛选</button>
    </div>
  )
}

export default EmptyState
