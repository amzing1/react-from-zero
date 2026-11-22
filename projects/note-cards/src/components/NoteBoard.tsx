import { useState } from 'react'
import { notes } from '../data/notes'
import SearchBar from './SearchBar'
import TagFilter from './TagFilter'
import NoteList from './NoteList'
import EmptyState from './EmptyState'
import styles from './NoteBoard.module.scss'

const ALL_TAGS = [...new Set(notes.flatMap((note) => note.tags))]

const NoteBoard = () => {
  const [searchKey, setSearchKey] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const keyword = searchKey.trim().toLowerCase()
  const list = notes.filter((v) => {
    const matchKeyword =
      keyword === '' ||
      v.title.toLowerCase().includes(keyword) ||
      v.content.toLowerCase().includes(keyword)
    const matchTags =
      selectedTags.length === 0 || selectedTags.some((s) => v.tags.includes(s))
    return matchKeyword && matchTags
  })

  function handleToogleSelected(value: string) {
    setSelectedTags((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  function handleClearFilter() {
    setSelectedTags([])
    setSearchKey('')
  }

  return (
    <div className={styles['note-board']}>
      <SearchBar searchKey={searchKey} onChangeSearchKey={setSearchKey} />
      <TagFilter
        tags={ALL_TAGS}
        selected={selectedTags}
        toggleSelected={handleToogleSelected}
      />
      {list.length > 0 ? (
        <>
          <NoteList list={list} />
          <p>共 {list.length} 条</p>
        </>
      ) : (
        <EmptyState onClearTags={handleClearFilter} />
      )}
    </div>
  )
}

export default NoteBoard
