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
        {/* <Header/> */}
        <div className='w-full rounded-md flex justify-between items-center mt-4'>
          <div className="text-left w-8/12 flex flex-col ml-4 p-2">
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">Crowdfunding made easy.</p>
            <p className="scroll-m-20 text-xl font-semibold tracking-tight mt-5 text-white">Let's make a difference together.</p>
            <p className="scroll-m-20 text-xl font-semibold tracking-tight mt-1 text-white">
              You can raise or make a donation, and our platform will let you do that effortlessly anywhere in the world.
            </p>
            <div className='flex flex-row gap-4 mt-8'>
              <Button asChild className=' bg-transparent hover:border-violet-600 hover:bg-transparent border-2 rounded-md'>
                <Link className='' href='#campagin'> 
                  Donate
                </Link>
              </Button>
              <Button onClick={(e)=> router.push('/createCampaign')} className='bg-transparent hover:border-violet-600 hover:bg-transparent border-2  rounded-md'>
                Create Campaign
              </Button>
            </div>
          </div>
          <Lottie className="" animationData={animationData} />
        </div>
        <div id='campagin' className="mt-8"> 
          <Campagins/>
        </div>

        <div id='aboutus' className=' mt-20 '>
          <AboutUs/>
        </div>

        <div id='contactus' className=' mt-20 w-full border-t-2 border-emerald-500'>
          <ContactUs/>
        </div>
      </div>
    </div>
  )
}

export default Page
