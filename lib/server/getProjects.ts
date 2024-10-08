import { prisma } from '@/lib/prisma'

/**
 * 프로젝트 리스트를 가져오는 함수
 * @param take - 가져올 프로젝트의 개수(기본으로 10개 가져옴)
 * @param skip - 건너뛸 프로젝트의 개수
 */
export default async function getProjects(take: number = 10, skip: number = 0) {
  return prisma.project.findMany({
    take,
    skip,
  })
}
