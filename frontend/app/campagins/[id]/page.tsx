import Header from '@/components/shared/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { User2Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { SiStoryblok } from 'react-icons/si'

const page = () => {
  return (
    <div>
      {/* <div className=' px-4'>
        <Header/>
      </div> */}
      <div className='grid grid-cols-4 px-8 h-5/6 mt-4'>
        <div className=' flex flex-col w-2/4 '>
          <div className=' w-full bg-slate-700 text-center rounded-t-md text-white text-6xl'>
            6
          </div>
          <div className=' w-full bg-slate-800 text-center rounded-b-md text-slate-500 tracking-tighter'>
            Days Left
          </div>
        </div>

        <div className=' flex flex-col w-2/4 '>
          <div className=' w-full bg-slate-700 text-center rounded-t-md text-white text-6xl'>
            5
          </div>
          <div className=' w-full bg-slate-800 text-center rounded-b-md text-slate-500 tracking-tighter'>
            Raised of 10
          </div>
        </div>

        <div className=' flex flex-col w-2/4 '>
          <div className=' w-full bg-slate-700 text-center rounded-t-md text-white text-6xl'>
            1
          </div>
          <div className=' w-full bg-slate-800 text-center rounded-b-md text-slate-500 tracking-tighter'>
            Total Doners
          </div>
        </div>

        <div className=' flex flex-col w-full h-full '>
          <div className=' h-full w-full bg-slate-700 text-center rounded-t-md text-white text-6xl'>
            <Input placeholder='ETH 0.1' className=' bg-slate-700 border-none h-full'/>
          </div>
          <Button className=' w-full bg-violet-700 hover:bg-violet-600 text-white text-center rounded-b-md  tracking-tighter text-xl'>
            Fund
          </Button>
        </div>
        
        <div className=' col-span-2 rounded-md'>
          <Image src='/campagins/campagin1.jpg' alt='logo' width={500} height={500} className=' w-full py-8 pr-6 rounded-md'/>
        </div>
        <div className=' flex flex-col py-8 col-span-2 w-full'>
          <div className=' bg-slate-700 rounded-md p-4 w-full'>
            <h1 className=' text-white'>Creator</h1>
            <div className=' flex flex-row gap-4 mt-4'>
              <User2Icon className=' text-slate-400'/>
              <h1 className=' text-slate-400'>0x4chgtknstybjsfeytjshfjshfjfgfg67</h1>
            </div>
          </div>

          <div className=' bg-slate-700 rounded-md p-4 mt-4'>
            <h1 className=' text-white'>Story</h1>
            <div className=' flex flex-row gap-4 mt-4'>
              <h1 className=' text-slate-400'>Empower the future with clean energy</h1>
            </div>
          </div>

          <div className=' bg-slate-700 rounded-md p-4 mt-4 h-44 overflow-y-scroll'>
            <h1 className=' text-white'>List of Donators</h1>
            <div className=' grid grid-cols-3 gap-4 mt-4'>
              <h1 className=' col-span-2 text-slate-500'>1. 0x4chgtknstybjsfeytjshfjshfjfgfg67</h1>
              <h2 className=' col-span-1 text-slate-500'>0.01 Eth</h2>

              <h1 className=' col-span-2 text-slate-500'>2. 0x4chgtknstybjsfeytjshfjshfjfgfg67</h1>
              <h2 className=' col-span-1 text-slate-500'>0.01 Eth</h2>

              <h1 className=' col-span-2 text-slate-500'>3. 0x4chgtknstybjsfeytjshfjshfjfgfg67</h1>
              <h2 className=' col-span-1 text-slate-500'>0.01 Eth</h2>

              <h1 className=' col-span-2 text-slate-500'>4. 0x4chgtknstybjsfeytjshfjshfjfgfg67</h1>
              <h2 className=' col-span-1 text-slate-500'>0.01 Eth</h2>

              <h1 className=' col-span-2 text-slate-500'>5. 0x4chgtknstybjsfeytjshfjshfjfgfg67</h1>
              <h2 className=' col-span-1 text-slate-500'>0.01 Eth</h2>
              
            </div>
          </div>
        </div>
        
      </div>

      
    </div>
  )
}

export default page
