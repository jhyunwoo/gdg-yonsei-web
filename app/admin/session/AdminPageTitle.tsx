import { FC, ReactNode } from 'react'

const AdminPageTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className={'text-3xl font-bold'}>{children}</h1>
}

export default AdminPageTitle
