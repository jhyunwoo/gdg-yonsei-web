import { prisma } from '@/lib/prisma'

/**
 * 멤버 리스트를 가져오는 함수
 */
export default async function getMembers() {
  return prisma.user.findMany({
    where: {
      NOT: {
        role: 'USER',
      },
    },
  })
}
