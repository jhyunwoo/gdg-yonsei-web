import Link from 'next/link'
import { FC } from 'react'

const HomePage: FC = () => {
  return (
    <div className={'flex flex-col h-screen w-full items-center justify-center'}>
      <h1 className={'text-4xl font-bold'}>GDG on Campus Yonsei</h1>
      <Link href={'/admin'}>Admin Page</Link>
    </div>
  )
}

export default HomePage
