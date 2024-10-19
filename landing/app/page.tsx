'use client'

import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/shared/Header'
import animationData from '../public/assets/bitcoin.json';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ContactUs from '@/components/shared/ContactUs'
import AboutUs from '@/components/shared/AboutUs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {MdCampaign} from 'react-icons/md'
import { getTotalCampaignsOnPlatform, getTotalFundingRaised } from '@/services/fundVerse'
import { ethers } from 'ethers'

const Page = () => {
  const [totalCampaigns, setTotalCampaigns] = useState<number | null>(null);
  const [totalFunding, setTotalFunding] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchPlatformData = async () => {
      setLoading(true);
      try {
        const campaigns = await getTotalCampaignsOnPlatform();
        const funding = await getTotalFundingRaised();

        setTotalCampaigns(campaigns);
        setTotalFunding(funding); // Convert to ETH
      } catch (error) {
        console.error('Error fetching platform data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlatformData();
  }, []);

  
  
  return (
    <div className='flex flex-row w-full gap-4 h-screen p-4 scroll-smooth'> 
      <div className='flex flex-col w-full h-full'>
        {/* <Header/> */}
        <div className='w-full rounded-md flex flex-col justify-center items-center mt-12'>
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl text-white">
            Our  Mission  is  to  Help  Bring
          </h1>
          <div className=' flex gap-2 mt-2'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-violet-700">
              Creative  Projects 
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
              to  Life
            </h1>
          </div>  

          <div className=' w-full mt-8 text-center'>
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-white">
              Campaigns make ideas into reality. It's where creator share new visions for
            </h4>   
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-white">
              creative work with the communities that will come together to fund them.
            </h4>   
          </div>  

          <div className=' flex gap-8 mt-8 w-full justify-center'>
              <Card className='w-fit px-6 bg-transparent text-white border-emerald-500 rounded-md '>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  {/* <CardTitle className="text-sm font-medium text-center w-full">Total</CardTitle> */}
                </CardHeader>
                <CardContent className=' w-full text-center'>
                  <div className="text-2xl font-bold">{loading ? "Loading..." : `Total ${totalCampaigns ?? 0} Campaigns`}</div>
                  <p className="text-sm text-muted-foreground">raised on our platform</p>
                </CardContent>
              </Card>

              <Card className='w-fit bg-transparent text-white border-emerald-500 rounded-md '>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  {/* <CardTitle className="text-sm font-medium w-full text-center">Total</CardTitle> */}
                </CardHeader>
                <CardContent className=' w-full text-center'>
                  <div className="w-full text-2xl font-bold">{loading ? "Loading..." : `Total ${totalFunding ?? 0} Ethereum`}</div>
                  <p className=" w-full text-sm text-muted-foreground">funding raised on out platform</p>
                </CardContent>
              </Card>

          </div>   
          <div className=' w-full flex justify-center mt-8'>
            <Button onClick={(e)=>router.push('https://crowd-funding-accelchain.vercel.app/')} className=' bg-violet-700 hover:bg-violet-900 text-xl px-4 tracking-tighter'> Get Started</Button>
          </div>
        </div>


        <div id='aboutus' className=' mt-20 w-full '>
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