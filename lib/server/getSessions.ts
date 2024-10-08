import { prisma } from '@/lib/prisma'

/**
 * 세션 리스트를 가져오는 함수
 * 기본으로 10개를 가져오며, take, skip을 통해 조절 가능
 * @param take - 가져올 세션의 개수
 * @param skip - 건너뛸 세션의 개수
 */
export default async function getSessions(take: number = 10, skip: number = 0) {
  return prisma.sessionEvent.findMany({
    take,
    skip,
  })
}
