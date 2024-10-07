import { FC } from 'react'

// TODO: 이주현 - 멤버 관리 페이지 구현
// TODO: 이주현 - 멤버 추가 페이지 생성 및 구현
// TODO: 이주현 - 멤버 수정 페이지 생성 및 구현
// TODO: 이주현 - 멤버 필터 기능 구현

// 페이지 구조
// /admin/member - member 관리 페이지
// /admin/member/create - member 추가 페이지
// /admin/member/[id] - member 상세 페이지
// /admin/member/[id]/edit - member 수정 페이지

/**
 * 멤버 데이터 타입
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MemberType = {
  id: string
  name: string // 이름
  email: string // 이메일
  role: 'Lead' | 'Core' | 'Member' // 역할
  part: string // 파트 (Frontend, Backend, Design, etc)
  stage: string // 기수
  github: string // 깃허브 url
  linkedin: string // 링크드인 url
  image: File // 프로필 이미지
}

const MemberPage: FC = () => {
  return (
    <div>
      <div>Member Page</div>
    </div>
  )
}

export default MemberPage
