import { FC, ReactNode } from 'react'

const AdminSessionLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={'w-full min-h-screen p-4'}>{children}</div>
}

export default AdminSessionLayout
