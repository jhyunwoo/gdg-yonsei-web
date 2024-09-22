import { signOut } from '@/auth'

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button
        className={'px-4 p-2 rounded-xl bg-neutral-900 text-neutral-50 hover:bg-neutral-950 transition-colors'}
        type="submit"
      >
        Sign Out
      </button>
    </form>
  )
}
