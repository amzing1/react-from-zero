import { useState } from 'react'

const ProfileForm = ({ user }: { user: { name: string } }) => {
  const [name, setName] = useState('')

  return (
    <div>
      <div>{user.name}</div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

const userA = {
  name: 'userA',
  id: 'a',
}

const userB = {
  name: 'userB',
  id: 'b',
}

const ResetWithKey = () => {
  const [user, setUser] = useState(userA)

  function toggleUser() {
    setUser((prev) => (prev === userA ? userB : userA))
  }
  return (
    <div>
      user: {user.name}
      <button onClick={toggleUser}>toggleUser</button>
      <ProfileForm user={user} key={user.id} />
    </div>
  )
}

export default ResetWithKey
