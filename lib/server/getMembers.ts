import { prisma } from '@/lib/prisma'
import { $Enums } from '@prisma'
import Role = $Enums.Role

/**
 * 멤버 리스트를 가져오는 함수
 */
export default async function getMembers({ stage, part, role }: { stage?: string; part?: string; role?: Role }) {
  return prisma.user.findMany({
    where: {
      NOT: {
        role: 'USER',
      },
      AND: [stage ? { stage } : {}, part ? { part } : {}, role ? { role } : {}],
    },
  })
}
