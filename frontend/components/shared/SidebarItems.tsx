"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react' // Import useState
import Image from 'next/image'
import { LayoutDashboard, LogOutIcon } from 'lucide-react'
import { MdAdd, MdOutlineCampaign, MdPersonOutline } from "react-icons/md";
import { useRouter } from 'next/navigation'
import { SiTicktick } from 'react-icons/si'
import LoadingScreen from '@/components/shared/LoadingScreen'; // Import the loading screen component

const SidebarItems = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [loading, setLoading] = useState(false); // State for loading

    const handleNavigation = async (path: string) => {
        setLoading(true); // Set loading to true before navigation
        await router.push(path); // Wait for the navigation to complete
        setLoading(false); // Reset loading state after navigation
    };

    if (loading) {
        return <LoadingScreen />; // Show loading screen if loading is true
    }

    return (
        <>
            <br></br>
            <ul className='flex flex-col items-start ml-4 w-full gap-12 font-mono'>
                <div title='Dashboard'>
                    <MdOutlineCampaign onClick={() => handleNavigation('/')} className=' text-white hover:text-violet-600 text-3xl cursor-pointer'/>
                </div>
                <div title='Past Campaigns'>
                    <SiTicktick onClick={() => handleNavigation('/pastCampagin')} className=' text-white hover:text-violet-600 text-2xl cursor-pointer'/>
                </div>
                <div title='Create Campaign'>
                    <MdAdd onClick={() => handleNavigation('/createCampaign')} className=' text-white hover:text-violet-600 text-3xl cursor-pointer'/>
                </div>
                <div title='Profile'>
                    <MdPersonOutline onClick={() => handleNavigation('/profile')} className=' text-white hover:text-violet-600 text-3xl cursor-pointer'/>
                </div>
                <div title='Logout'>
                    <LogOutIcon onClick={() => handleNavigation('/')} className=' text-white hover:text-violet-600 text-xl cursor-pointer'/>
                </div>
            </ul>
        </>
    );
}

export default SidebarItems;
