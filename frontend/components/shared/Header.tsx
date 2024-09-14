import React from 'react'
import NavItems from './NavItems'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { AiOutlineNotification, AiTwotoneNotification } from 'react-icons/ai'
import { BellDotIcon } from 'lucide-react'
import { SiBlockchaindotcom, SiCrowdin, SiCrowdsource, SiHiveBlockchain } from 'react-icons/si'

const Header = () => {
  return (
    <div className='  w-full h-20  grid grid-cols-12 items-center bg-none px-4 '>
      <div className=' col-span-1 flex flex-col items-center justify-self-start'>
        <SiCrowdsource className=' text-4xl text-violet-600'/>
        <h1 className=' text-white font-mono tracking-tighter'>FundVerse</h1>
      </div>
      <div className=' w-full bg-slate-800 h-fit p-3 flex flex-row gap-20 rounded-full items-center justify-center col-span-9 text-white border-slate-700 border-b-2 border-l-2 border-r-2'>
        <Link className=' hover:text-violet-600' href='/'>Home</Link>
        <Link className=' hover:text-violet-600' href='#aboutus'>About Us</Link>
        <Link className=' hover:text-violet-600' href='#'>FAQs</Link>
        <Link className=' hover:text-violet-600' href='#contactus'>Contact Us</Link>
        <BellDotIcon className=' hover:text-violet-600' />
      </div>
      <Button className=' bg-violet-800 font-semibold h-fit p-3 tracking-tighter hover:bg-violet-600 rounded-full col-span-2 ml-2 border-violet-400 border-b-2'>
        Connect Wallet
      </Button>
    </div>
  )
}

export default Header
