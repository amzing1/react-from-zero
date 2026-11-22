import styles from './TagFilter.module.scss'
interface Props {
  tags: string[]
  selected: string[]
  toggleSelected: (id: string) => void
}

const TagFilter = ({ tags, selected, toggleSelected }: Props) => {
  return (
    <div className={styles['tag-filter']}>
      {tags.map((v) => (
        <div
          className={`${styles['tag-item']} ${selected.includes(v) ? styles['active'] : ''}`}
          key={v}
          onClick={() => toggleSelected(v)}
        >
          {v}
        </div>
      ))}
    </div>
  )
}

export default TagFilter
