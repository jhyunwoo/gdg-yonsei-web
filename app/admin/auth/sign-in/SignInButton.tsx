import { signIn } from '@/auth'

export function SignInButton() {
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
