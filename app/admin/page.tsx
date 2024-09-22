import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'

export default async function AdminPage() {
  // Get session from Auth.js
  const session = await auth()
  // if user is not logged in, redirect to sign-in page
  if (!session) {
    redirect('/admin/auth/sign-in')
  }
  // Find user data
  const userData = await prisma.user.findUnique({
    where: {
      id: session.user?.id,
    },
  })
  // if user permission is not Admin, redirect to home page
  if (userData?.permission !== 'Admin') redirect('/')

  return (
    <div className={'w-full min-h-screen flex flex-col items-center justify-center'}>
      <div>Admin Page</div>
    </div>
  )
}
