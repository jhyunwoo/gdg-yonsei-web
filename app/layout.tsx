import type { Metadata } from 'next'
import './globals.css'
import { FC, ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'GDG on Campus Yonsei',
  description: '24-25 GDG on Campus Yonsei',
}

const RootLayout: FC<
  Readonly<{
    children: ReactNode
  }>
> = ({ children }) => {
  {
    return (
      <html lang="ko">
        <body>{children}</body>
      </html>
    )
  }
}

export default RootLayout
