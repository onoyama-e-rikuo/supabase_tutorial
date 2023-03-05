import type { User } from './domains'

export function getUsers(): Promise<User[]> {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => json)
}
