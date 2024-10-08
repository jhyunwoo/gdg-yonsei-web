import getMembers from '@/lib/server/getMembers'
import { NextResponse } from 'next/server'

/**
 * 멤버 리스트를 반환하는 API
 */
export async function GET() {
  const members = await getMembers()
  return NextResponse.json(members)
}
