import { useState } from 'react'
import Modal from './Modal'
import UserList from './UserList'
import Card from './Card'

const SlotLab = () => {
  const [open, setIsOpen] = useState(false)

  return (
    <div>
      <UserList
        users={[
          {
            id: '1',
            name: 'wqh',
          },
        ]}
        renderItem={(user) => <div>{user.name}</div>}
      />
      <Card
        title="Card title"
        footer={<footer>card footer</footer>}
        actions={<button>action</button>}
      >
        <p>card body</p>
      </Card>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal
        title="slotLab"
        open={open}
        onClose={() => setIsOpen(false)}
        footer={<footer>footer</footer>}
      >
        <div>slotLab</div>
      </Modal>
    </div>
  )
}

export default SlotLab
