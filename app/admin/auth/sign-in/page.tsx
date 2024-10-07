import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { FC } from 'react'
import SignInButton from '@/app/admin/auth/sign-in/SignInButton'

const SignInPage: FC = async () => {
  const session = await auth()
  if (session) redirect('/admin')

  return (
    <div className={'w-full h-screen flex items-center justify-center flex-col'}>
      <h1 className={'text-xl font-semibold'}>Sign In Page</h1>
      <SignInButton />
    </div>
  )
}

export default SignInPage
