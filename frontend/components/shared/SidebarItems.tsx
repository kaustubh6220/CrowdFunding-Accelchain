"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdAdd, MdOutlineCampaign, MdPersonOutline } from 'react-icons/md';
import { SiTicktick } from 'react-icons/si';
import { LogOutIcon } from 'lucide-react';
import LoadingScreen from '@/components/shared/LoadingScreen';
import { useWallet } from '@/context/WalletContext';  
import { ProviderEvent } from 'ethers';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

const SidebarItems = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { disconnectWallet } = useWallet();  

    const handleNavigation = async (path: string) => {
        setLoading(true);
        router.push(path);
        setLoading(false);
    };

    const handleLogout = async () => {
        try {

          if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
            window.ethereum.on('disconnect', (error: ProviderEvent) => {
              console.log('Wallet disconnected:', error);
              alert('Wallet has been disconnected.');
            });
          }
      
          // handleNavigation('/');
      
          // window.location.reload(); 
        } catch (error) {
          console.error('Error disconnecting wallet:', error);
        }
      };
      

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <br />
            <ul className='flex flex-col items-start ml-4 w-full gap-12 font-mono'>
                <div>
                    <HoverCard openDelay={100}>
                        <HoverCardTrigger>
                            <MdOutlineCampaign onClick={() => handleNavigation('/')} className='text-white hover:text-violet-600 text-3xl cursor-pointer'/>
                        </HoverCardTrigger>
                        <HoverCardContent side='left' className=' w-fit px-2'>
                            Ongoing Campagins
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div>
                    <HoverCard openDelay={100}>
                        <HoverCardTrigger>
                            <SiTicktick onClick={() => handleNavigation('/pastCampagin')} className='text-white hover:text-violet-600 text-2xl cursor-pointer'/>
                        </HoverCardTrigger>
                        <HoverCardContent side='left' className=' w-fit px-2'>
                            Past Campagins
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div>
                    <HoverCard openDelay={100}>
                        <HoverCardTrigger>
                            <MdAdd onClick={() => handleNavigation('/createCampaign')} className='text-white hover:text-violet-600 text-3xl cursor-pointer'/>
                        </HoverCardTrigger>
                        <HoverCardContent side='left' className=' w-fit px-2'>
                            Create Campaign
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div>
                    <HoverCard openDelay={100}>
                        <HoverCardTrigger>
                            <MdPersonOutline onClick={() => handleNavigation('/profile')} className='text-white hover:text-violet-600 text-3xl cursor-pointer'/>
                        </HoverCardTrigger>
                        <HoverCardContent side='left' className=' w-fit px-2'>
                            Profile
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div>
                    <HoverCard openDelay={100}>
                        <HoverCardTrigger>
                            <LogOutIcon onClick={handleLogout} className='text-white hover:text-violet-600 text-xl cursor-pointer'/>
                        </HoverCardTrigger>
                        <HoverCardContent side='left' className=' w-fit px-2'>
                            Disconnect Wallet
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </ul>
        </>
    );
}

export default SidebarItems;
