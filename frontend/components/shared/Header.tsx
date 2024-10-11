// components/Header.tsx
'use client';

import React from 'react';
import { Button } from '../ui/button';
import { SiCrowdsource } from 'react-icons/si';
import { useWallet } from '@/context/WalletContext'; // Import the custom hook

const Header = () => {
  const { walletAddress, connectWallet } = useWallet(); // Use the global wallet state

  return (
    <div className='w-full h-20 grid grid-cols-12 items-center bg-none px-4'>
      <div className='col-span-1 flex flex-col items-center justify-self-start ml-3'>
        <SiCrowdsource className='text-4xl text-violet-600' />
        <h1 className='text-white font-mono tracking-tighter'>FundVerse</h1>
      </div>

      <div className='w-full col-span-11 flex items-center justify-end border-b border-violet-500 p-4'>
        <Button
          onClick={connectWallet}
          className='bg-violet-800 font-semibold h-fit p-3 px-10 tracking-tighter hover:bg-violet-600 rounded-md col-span-2 ml-2 border-violet-400 border-b-2'>
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
        </Button>
      </div>
    </div>
  );
};

export default Header;
