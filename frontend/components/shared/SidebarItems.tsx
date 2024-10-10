"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import { LayoutDashboard, LogOutIcon } from 'lucide-react'
import { MdAdd, MdOutlineCampaign, MdPersonOutline } from "react-icons/md";
import { useRouter } from 'next/navigation'
import { SiTicktick } from 'react-icons/si'

const SidebarItems = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <>
        <br></br>
        <ul className='flex flex-col items-start ml-4 w-full gap-12 font-mono'>
            <div title='Dashboard'>
                <MdOutlineCampaign onClick={()=>router.push('/')} className=' text-white hover:text-violet-600 text-3xl cursor-pointer'/>
            </div>
            <div title='Past Campaigns'>
                <SiTicktick onClick={()=>router.push('/pastCampagin')} className=' text-white hover:text-violet-600 text-2xl cursor-pointer'/>
            </div>
            <div title='Create Campaign'>
                <MdAdd onClick={()=>router.push('/createCampaign')} className=' text-white hover:text-violet-600 text-3xl cursor-pointer'/>
            </div>
            <div title='Profile'>
                <MdPersonOutline onClick={()=>router.push('/profile')} className=' text-white hover:text-violet-600 text-3xl cursor-pointer'/>
            </div>
            <div title='Logout'>
                <LogOutIcon onClick={()=>router.push('/')} className=' text-white hover:text-violet-600 text-xl cursor-pointer'/>
            </div>
        </ul>
    </>
    )
}

export default SidebarItems
