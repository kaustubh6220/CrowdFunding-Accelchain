'use client'

import React from 'react'
import Lottie from 'lottie-react'
import { Button } from '@/components/ui/button'
import Campagins from '@/components/shared/Campagins'
import Header from '@/components/shared/Header'
import animationData from '../public/assets/bitcoin.json';
import Link from 'next/link'

const Page = () => {
  return (
    <div className='flex flex-row w-full gap-4 h-screen p-4'>
      <div className='flex flex-col w-full h-full scroll-smooth'>
        <Header/>
        <div className='w-full shadow-md shadow-slate-700 bg-slate-700 rounded-md flex justify-between items-center mt-4'>
          <div className="text-left w-8/12 flex flex-col ml-4 p-2">
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">Crowdfunding made easy.</p>
            <p className="scroll-m-20 text-xl font-semibold tracking-tight mt-5 text-white">Let's make a difference together.</p>
            <p className="scroll-m-20 text-xl font-semibold tracking-tight mt-1 text-white">
              You can raise or make a donation, and our platform will let you do that effortlessly anywhere in the world.
            </p>
            <div className='flex flex-row gap-4 mt-8'>
              <Button asChild className='bg-green-500 hover:bg-green-600'>
                <Link href='#campagin'>
                  Donate
                </Link>
              </Button>
              <Button className='bg-green-500 hover:bg-green-600'>Create Campaign</Button>
            </div>
          </div>
          <Lottie className="" animationData={animationData} />
        </div>
        <div id='campagin'>
          <Campagins/>
        </div>
      </div>
    </div>
  )
}

export default Page
