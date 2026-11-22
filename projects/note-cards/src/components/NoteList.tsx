import type { Note } from '@/types'
import styles from './NoteList.module.scss'
import NoteCard from './NoteCard'

const NoteList = ({ list }: { list: Note[] }) => {
  return (
    <div className={styles['note-list']}>
      {list.map((v) => (
        <NoteCard note={v} key={v.id} />
      ))}
    </div>
  )
}

export default NoteList
