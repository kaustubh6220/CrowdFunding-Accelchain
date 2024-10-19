'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { AiOutlineNotification, AiTwotoneNotification } from 'react-icons/ai'
import { BellDotIcon } from 'lucide-react'
import { SiBlockchaindotcom, SiCrowdin, SiCrowdsource, SiHiveBlockchain } from 'react-icons/si'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  return (
    <div className='  w-full grid grid-cols-12 items-center bg-none py-2 px-4 '>
      <div className=' col-span-1 flex items-center justify-self-start'>
        <div className=' flex flex-col items-center justify-center'>
          <SiCrowdsource className=' text-4xl text-violet-600'/>
          <h1 className=' text-white font-mono tracking-tighter'>FundVerse</h1>
        </div>  
        {/* <Image src='/assets/accelchain.png' alt='logo' height={50} width={100} className=' '/> */}
      </div>
      <div className=' w-full  h-fit p-3 flex flex-row gap-20 items-center justify-center col-span-9 text-white '>
        <Link className=' hover:text-violet-600' href='/'>Home</Link>
        <Link className=' hover:text-violet-600' href='#aboutus'>About Us</Link>
        <Link className=' hover:text-violet-600' href='#'>FAQs</Link>
        <Link className=' hover:text-violet-600' href='#contactus'>Contact Us</Link>
        <BellDotIcon className=' hover:text-violet-600' />
      </div>
      <Button onClick={(e)=>router.push('https://crowd-funding-accelchain.vercel.app/')} className=' text-xl bg-violet-800 font-semibold h-fit px-3 tracking-tighter hover:bg-violet-600 rounded-md col-span-2 ml-2 border-violet-400 border-b-2'>
        Get Started
      </Button>
    </div>
  )
}

export default Header