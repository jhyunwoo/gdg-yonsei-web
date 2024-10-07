import { FC, ReactNode } from 'react'

const AdminLayout: FC<{ children: ReactNode }> = ({ children }) => {
  // TODO: 이주현 - 관리자 페이지 네비게이션 바를 추가 (우측에 붙어 있는 네이비게이션 바)
  // TODO: 이주현 - 관리자 페이지 네비게이션 바 모바일 최적화
  // 페이지 리스트: 멤버 관리 페이지, session 관리 페이지, project 관리 페이지, recruit 관리 페이지

  return <div>{children}</div>
}

export default AdminLayout
