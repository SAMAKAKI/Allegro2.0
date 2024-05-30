import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components'

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-zinc-200/50">
        <div className="container mx-auto py-5">
          <Outlet />
        </div>
      </div>
    </>
  )
}
