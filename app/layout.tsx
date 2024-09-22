import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'GDG on Campus Yonsei',
  description: '24-25 GDG on Campus Yonsei',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={'bg-neutral-50'}>{children}</body>
    </html>
  )
}
