"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdAdd, MdOutlineCampaign, MdPersonOutline } from 'react-icons/md';
import { SiTicktick } from 'react-icons/si';
import { LogOutIcon } from 'lucide-react';
import LoadingScreen from '@/components/shared/LoadingScreen';
import { useWallet } from '@/context/WalletContext';  
import { ProviderEvent } from 'ethers';

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
                <div title='Dashboard'>
                    <MdOutlineCampaign onClick={() => handleNavigation('/')} className='text-white hover:text-violet-600 text-3xl cursor-pointer'/>
                </div>
                <div title='Past Campaigns'>
                    <SiTicktick onClick={() => handleNavigation('/pastCampagin')} className='text-white hover:text-violet-600 text-2xl cursor-pointer'/>
                </div>
                <div title='Create Campaign'>
                    <MdAdd onClick={() => handleNavigation('/createCampaign')} className='text-white hover:text-violet-600 text-3xl cursor-pointer'/>
                </div>
                <div title='Profile'>
                    <MdPersonOutline onClick={() => handleNavigation('/profile')} className='text-white hover:text-violet-600 text-3xl cursor-pointer'/>
                </div>
                <div title='Logout'>
                    <LogOutIcon onClick={handleLogout} className='text-white hover:text-violet-600 text-xl cursor-pointer'/>
                </div>
            </ul>
        </>
    );
}

export default SidebarItems;
