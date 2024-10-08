'use client'

import { FC } from 'react'
import useSessions from '@/lib/hooks/useSessions'
import Link from 'next/link'
import Image from 'next/image'

const SessionList: FC = () => {
  const { sessionData } = useSessions({ take: 10, skip: 0 })

  return (
    <div className={'w-full grid grid-cols-1 md:grid-cols-3'}>
      {sessionData?.map(session => (
        <Link
          href={`/admin/session/${session.id}`}
          key={session.id}
          className={'w-full flex rounded-lg bg-neutral-100'}
        >
          <Image src={session.mainImage!} alt={'dd'} width={300} height={300} className={'rounded-l-lg w-1/2'} />
          <div className={'p-2'}>
            <h2 className={'text-lg font-semibold'}>{session.title}</h2>
            {session.date ? <p>{new Intl.DateTimeFormat('ko-KR').format(new Date(session.date))}</p> : <p />}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SessionList
