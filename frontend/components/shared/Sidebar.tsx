import React from 'react'
import SidebarItems from './SidebarItems'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='py-2 flex flex-col gap-4'>
      <div className='h-full w-16 bg-slate-800 border-r-2 border-slate-700 py-8 rounded-md flex '>
        <SidebarItems/>
      </div>
    </div>
  )
}

export default Sidebar
