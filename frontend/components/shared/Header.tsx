'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { AiOutlineNotification, AiTwotoneNotification } from 'react-icons/ai'
import { BellDotIcon } from 'lucide-react'
import { SiBlockchaindotcom, SiCrowdin, SiCrowdsource, SiHiveBlockchain } from 'react-icons/si'
import { ethers } from 'ethers'
import { CiMenuFries } from "react-icons/ci";


const Header = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () =>{
    if(typeof window.ethereum !== 'undefined'){
      try{
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send('eth_requestAccounts',[]);

        const signer = provider.getSigner();
        const address = (await signer).getAddress()
        setWalletAddress(await address);
      }catch(error){
        console.log(error)
      }
    }else{
      alert("Metamask is not installed")
    }
  }

  return (
    <div className='  w-full h-20  grid grid-cols-12 items-center bg-none px-4 '>
      <div className=' col-span-1 flex flex-col items-center justify-self-start ml-3'>
        <SiCrowdsource className=' text-4xl text-violet-600'/>
        <h1 className=' text-white font-mono tracking-tighter'>FundVerse</h1>
      </div>
      {/* <div className=' w-full bg-slate-800 h-fit p-3 flex flex-row gap-20 rounded-full items-center justify-center col-span-9 text-white border-slate-700 border-b-2 border-l-2 border-r-2'>
        <Link className=' hover:text-violet-600' href='/'>Home</Link>
        <Link className=' hover:text-violet-600' href='#aboutus'>About Us</Link>
        <Link className=' hover:text-violet-600' href='#'>FAQs</Link>
        <Link className=' hover:text-violet-600' href='#contactus'>Contact Us</Link>
        <BellDotIcon className=' hover:text-violet-600' />
      </div> */}
      <div className='w-full col-span-11 flex items-center justify-end border-b border-violet-500 p-4'>
        <Button onClick={connectWallet} className=' bg-violet-800 font-semibold h-fit p-3 px-10 tracking-tighter hover:bg-violet-600 rounded-md col-span-2 ml-2 border-violet-400 border-b-2'>
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
        </Button>
      </div>

    </div>
  )
}

export default Header
