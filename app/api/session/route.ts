import getSessions from '@/lib/server/getSessions'
import { NextResponse } from 'next/server'
import { Request } from 'next/dist/compiled/@edge-runtime/primitives'

/**
 * 세션 리스트를 반환하는 API
 * Params: take:number , skip:number
 * @param request
 */
export async function GET(request: Request) {
  // url에서 searchParams을 가져옴
  const { searchParams } = new URL(request.url)

  // searchParams에서 take, skip을 가져옴
  const take = searchParams.get('take')
  const skip = searchParams.get('skip')

  // getSessions 함수를 호출하여 세션 리스트를 가져옴
  const sessions = await getSessions(Number(take), Number(skip))
  return NextResponse.json(sessions)
}
