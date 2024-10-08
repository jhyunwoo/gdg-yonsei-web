import getSessions from '@/lib/server/getSessions'
import { NextResponse } from 'next/server'
import { Request } from 'next/dist/compiled/@edge-runtime/primitives'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const take = searchParams.get('take')
  const skip = searchParams.get('skip')

  const sessions = await getSessions(Number(take), Number(skip))
  return NextResponse.json(sessions)
}
