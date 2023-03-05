import { useState, useEffect } from 'react'
import type { User } from '../../api/domains'
import { getUsers } from '../../api/users'

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    getUsers().then((res) => setUsers(res))
  }, [])

  return { users }
}
