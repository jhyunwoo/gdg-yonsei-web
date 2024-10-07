import { signIn } from '@/auth'
import { FC } from 'react'

const SignInButton: FC = () => {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github', { redirect: true, redirectTo: '/admin' })
      }}
    >
      <button type="submit">Sign in with Github</button>
    </form>
  )
}

export default SignInButton
