import type { Note } from '@/types'
import styles from './NoteCard.module.scss'

const NoteCard = ({ note }: { note: Note }) => {
  return (
    <div className={styles['note-card']}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <footer className={styles['flex-between']}>
        <div className={styles['flex']}>
          {note.tags.map((v) => (
            <div className={styles['tag']} key={v}>
              {v}
            </div>
          ))}
        </div>
        <div className={styles['desc']}>{note.createdAt}</div>
      </footer>
    </div>
  )
}

export default NoteCard
