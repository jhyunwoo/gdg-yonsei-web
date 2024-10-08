import getProjects from '@/lib/server/getProjects'
import { NextResponse } from 'next/server'

/**
 * 프로젝트 리스트를 반환하는 API
 * @param request
 */
export async function GET(request: Request) {
  // url에서 searchParams을 가져옴
  const { searchParams } = new URL(request.url)

  // searchParams에서 take, skip을 가져옴
  const take = searchParams.get('take')
  const skip = searchParams.get('skip')

  // getProjects 함수를 호출하여 프로젝트 리스트를 가져옴
  const projects = await getProjects(Number(take), Number(skip))
  return NextResponse.json(projects)
}
