import { useState } from 'react'
import Badge from './Badge'
import Greeting from './Greeting'
import UserList from './UserList'
import TodoItem from './TodoItem'
import Layout from './Layout'
import Status from './Status'

const JsxLab = () => {
  const [done, setIsDone] = useState(false)

  return (
    <Layout footer={<footer>footer</footer>} title="title">
      <div>
        <Greeting name="Ada" age={0} />
        <Badge count={0} />
        <Badge count={3} />
        <UserList users={[{ id: '1', name: 'wqh', online: false }]} />
        <TodoItem
          done={done}
          text="Todo Item"
          onToggle={() => setIsDone((prev) => !prev)}
        />
        <Status status="loading" />
      </div>
    </Layout>
  )
}

export default JsxLab
