import { FC } from 'react'
import SessionList from '@/app/admin/session/SessionList'
import Link from 'next/link'
import AdminPageTitle from '@/app/admin/session/AdminPageTitle'

// TODO: 전현우 - session 관리 페이지 구현
// TODO: 전현우 - session 추가 페이지 생성 및 구현
// TODO: 전현우 - session 상세 페이지 구현
// TODO: 전현우 - session 수정 페이지 생성 및 구현
// TODO: 전현우 - session 필터 기능 구현

// 페이지 구조
// /admin/session - session 관리 페이지
// /admin/session/create - session 추가 페이지
// /admin/session/[id] - session 상세 페이지
// /admin/session/[id]/edit - session 수정 페이지

const SessionPage: FC = () => {
  return (
    <>
      <div className={'flex gap-4 items-center pb-4'}>
        <AdminPageTitle>Session</AdminPageTitle>
        <Link
          href={'/admin/session/create'}
          className={'text-base p-1 rounded-lg px-3 bg-sky-600 text-white hover:bg-sky-700 transition-colors'}
        >
          Create
        </Link>
      </div>
      <SessionList />
    </>
  )
}

export default SessionPage
