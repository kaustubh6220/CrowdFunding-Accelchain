'use client'

import React, { useState } from 'react'
import Lottie from 'lottie-react'
import { Button } from '@/components/ui/button'
import Campagins from '@/components/shared/Campagins'
import Header from '@/components/shared/Header'
import animationData from '../public/assets/bitcoin.json';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AboutUs from '@/components/shared/AboutUs'
import ContactUs from '@/components/shared/ContactUs'

const Page = () => {
  const [loading,setLoading] = useState(false)
  const router= useRouter()
  
  return (
    <div className='flex flex-row w-full gap-4 h-screen p-4 scroll-smooth'> {/* Apply smooth scrolling here */}
      <div className='flex flex-col w-full h-full'>
        <div id='campagin' className="mt-2"> 
          <Campagins/>
        </div>
      </div>
    </div>
  )
}

export default Page
