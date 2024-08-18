import React from 'react'
import SidebarItems from './SidebarItems'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='py-4 flex flex-col gap-4'>
      <div className=' ml-1'>
        <Image src='/assets/logo.svg' alt='logo' height={40} width={40}/>
      </div>
      <div className='h-full w-16 mt-4 bg-slate-700 py-8 rounded-r-full flex '>
        <SidebarItems/>
      </div>
    </div>
  )
}

export default Sidebar
