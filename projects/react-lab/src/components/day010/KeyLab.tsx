import { useState } from 'react'

interface ListItem {
  id: string
  name: string
}

const List = ({ useId }: { useId: boolean }) => {
  const [list, setList] = useState<ListItem[]>([])

  function handleInsert() {
    setList((prev) => [
      {
        id: Math.random().toString(),
        name: ``,
      },
      ...prev,
    ])
  }

  function handleDelete() {
    setList((prev) => {
      if (prev.length) {
        const res = [...prev]
        res.splice(0, 1)
        return res
      } else {
        return prev
      }
    })
  }

  function handleReverse() {
    setList((prev) => {
      return prev.toReversed()
    })
  }

  return (
    <div>
      <div>
        {list.map((v, idx) => (
          <div key={useId ? v.id : idx}>
            <input defaultValue={v.name} />
          </div>
        ))}
      </div>
      <button onClick={handleInsert}>insert</button>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleReverse}>reverse</button>
    </div>
  )
}

const KeyLab = () => {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <List useId={false} />
      <List useId={true} />
    </div>
  )
}

export default KeyLab
