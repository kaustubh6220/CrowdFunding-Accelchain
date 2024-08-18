import React from 'react'
import NavItems from './NavItems'
import Image from 'next/image'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='  w-full h-20  flex items-center justify-end bg-slate-900'>
        <Button className=' bg-green-500 font-semibold tracking-tighter hover:bg-green-600'>Connect Wallet</Button>
        {/* <ConnectButton/> */}
    </div>
  )
}

export default Header
