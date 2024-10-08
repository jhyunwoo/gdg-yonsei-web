import getProjects from '@/lib/server/getProjects'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const take = searchParams.get('take')
  const skip = searchParams.get('skip')

  const projects = await getProjects(Number(take), Number(skip))
  return NextResponse.json(projects)
}
