import getMembers from '@/lib/server/getMembers'
import { NextResponse } from 'next/server'
import { Request } from 'next/dist/compiled/@edge-runtime/primitives'
import { $Enums } from '@prisma'
import Role = $Enums.Role

/**
 * 멤버 리스트를 반환하는 API
 */
export async function GET(request: Request) {
  // searchParams를 사용하여 stage, part, role을 가져옴
  const { searchParams } = new URL(request.url)
  const stage = searchParams.get('stage')
  const part = searchParams.get('part')
  const role = searchParams.get('role')

  // Role 타입으로 변환
  let userRole: Role = Role.MEMBER
  if (role === 'Lead') {
    userRole = Role.LEAD
  } else if (role === 'Core') {
    userRole = Role.CORE
  } else if (role === 'Member') {
    userRole = Role.MEMBER
  }

  // 조건에 부합한 멤버 리스트를 가져옴
  const members = await getMembers({
    stage: stage ? stage : undefined,
    part: part ? part : undefined,
    role: role ? userRole : undefined,
  })

  return NextResponse.json(members)
}
