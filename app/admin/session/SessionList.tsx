'use client'

import { FC } from 'react'
import useSessions from '@/lib/hooks/useSessions'
import Link from 'next/link'

const SessionList: FC = () => {
  const { sessionData } = useSessions({ take: 10, skip: 0 })
  console.log(sessionData)
  return (
    <div>
      {sessionData?.map(session => (
        <Link href={`/admin/session/${session.id}`} key={session.id}>
          <div>{session.title}</div>
        </Link>
      ))}
    </div>
  )
}

export default SessionList
