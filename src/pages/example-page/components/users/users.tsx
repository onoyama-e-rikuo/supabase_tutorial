import { useUsers } from './use-users'

export function Users() {
  const { users } = useUsers()

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
