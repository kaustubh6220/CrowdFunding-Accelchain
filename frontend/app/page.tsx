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
        <div id='campagin' className=""> 
          <Campagins/>
        </div>
  )
}

export default Page
