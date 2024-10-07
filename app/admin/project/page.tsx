import { FC } from 'react'

// TODO: 방준현 - 프로젝트 관리 페이지 구현
// TODO: 방준현 - 프로젝트 추가 페이지 생성 및 구현
// TODO: 방준현 - 프로젝트 수정 페이지 생성 및 구현
// TODO: 방준현 - 프로젝트 필터 기능 구현

// 페이지 구조
// /admin/project - project 관리 페이지
// /admin/project/create - project 추가 페이지
// /admin/project/[id] - project 상세 페이지
// /admin/project/[id]/edit - project 수정 페이지

/**
 * 프로젝트 데이터 타입
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ProjectType = {
  id: string
  title: string
  description: string
  mainImage: File
  images: File[]
  date: Date
  parts: string[]
}

const ProjectPage: FC = () => {
  return (
    <div>
      <div>Project Page</div>
    </div>
  )
}

export default ProjectPage
