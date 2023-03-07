import type { FormEvent } from 'react'
import { useState } from 'react'
import { supabaseClient } from '../utils/supabaseClient'

export function LoginPage() {
  const [email, setEmail] = useState('')
  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    supabaseClient.auth.signInWithOtp({ email })
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}
