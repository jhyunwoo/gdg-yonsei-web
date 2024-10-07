import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { FC } from 'react'
import SignOutButton from '@/app/admin/SignOutButton'

const AdminPage: FC = async () => {
  // 사용자의 로그인 정보(session)를 가져옴
  const session = await auth()

  // 사용자가 로그인 되어 있지 않다면, 로그인 페이지로 이동
  if (!session) {
    redirect('/admin/auth/sign-in')
  }
  // DB에서 사용자 데이터를 조회
  const userData = await prisma.user.findUnique({
    where: {
      id: session.user?.id,
    },
  })
  // 사용자의 권한이 Admin이 아니라면, 홈 페이지로 이동
  if (userData?.permission !== 'Admin') redirect('/')

  return (
    <div className={'w-full min-h-screen flex flex-col items-center justify-center'}>
      <div>Admin Page</div>
      <Link href={'/'}>Home Page</Link>
      <SignOutButton />
    </div>
  )
}

export default AdminPage
