"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getCampaignDetails, fundCampaign } from '@/services/fundVerse'; // Import fundCampaign function
import { Progress } from "@/components/ui/progress"
import { AiFillProfile } from 'react-icons/ai';
import { MdCampaign, MdPeople, MdPerson, MdPersonOutline } from 'react-icons/md';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaEthereum } from 'react-icons/fa';
import { Calendar } from 'lucide-react';
import FadeLoader from 'react-spinners/FadeLoader';
import LoadingScreen from '@/components/shared/LoadingScreen';


type CampaignId = {
  params: {
    creator: string;
    campaginId: string; // Change to string if the ID is not guaranteed to be a number
  };
};

const CampaignDetails = ({ params: { creator, campaginId } }: CampaignId) => {
  const [campaign, setCampaign] = useState<any | null>(null); // State to store campaign details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [donationAmount, setDonationAmount] = useState<string>(''); // State to store donation amount
  const [donationLoading, setDonationLoading] = useState(false); // Donation loading state
  const [isTargetMet, setIsTargetMet] = useState(false); // Check if target is already met

  console.log(creator, campaginId);

  useEffect(() => {
    const fetchCampaignDetails = async () => {
      if (campaginId) {
        try {
          setLoading(true);
          const campaignData = await getCampaignDetails(Number(campaginId)); // Fetch campaign details
          setCampaign(campaignData);
          
          // Check if the target amount has been reached
          if (campaignData.amountCollected >= campaignData.targetAmount) {
            setIsTargetMet(true); // Disable funding if target is reached
          }
        } catch (err) {
          setError('Failed to fetch campaign details');
        } finally {
          setLoading(false); // Ensure loading is set to false regardless of success or failure
        }
      }
    };

    fetchCampaignDetails();
  }, [campaginId]);

  const handleDonate = async () => {
    try {
      setDonationLoading(true);
      
      // Check if donation amount is valid and does not exceed the remaining amount
      const remainingAmount = Number(campaign.targetAmount) - Number(campaign.amountCollected);
      if (!donationAmount || isNaN(Number(donationAmount)) || Number(donationAmount) <= 0) {
        alert('Please enter a valid donation amount');
        return;
      }
      if (Number(donationAmount) > remainingAmount) {
        alert(`Please enter an amount less than or equal to the remaining amount: ${remainingAmount} ETH`);
        return;
      }

      await fundCampaign(Number(campaginId), donationAmount); // Call fundCampaign function
      alert('Campaign funded successfully!');
      window.location.reload(); // Reload page to update campaign details
    } catch (err: any) {
      alert('Error funding campaign: ' + err.message);
    } finally {
      setDonationLoading(false);
    }
  };

  if (loading) {
    return <LoadingScreen/>
  }

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  // Check if campaign data is available
  if (!campaign) {
    return <p className="text-red-500 text-center mt-4">Campaign not found</p>;
  }

  const remainingAmount = Number(campaign.targetAmount) - Number(campaign.amountCollected); // Remaining amount to reach the target

  return (
    <div className="p-6">
        <div className=' w-full grid grid-cols-5'>

            <div className='col-span-5 w-full grid grid-cols-4 mt-4'>
                <div className='px-3'>
                    <Card x-chunk="dashboard-01-chunk-0" className='w-full bg-slate-800 text-white border-none'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total
                        </CardTitle>
                        <FaEthereum className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{campaign.amountCollected} Eth</div>
                        <p className="text-xs text-muted-foreground">
                        raised of {campaign.targetAmount}
                        </p>
                    </CardContent>
                    </Card>
                </div>
                <div className='px-3'>
                    <Card x-chunk="dashboard-01-chunk-0" className='w-full bg-slate-800 text-white border-none'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                        Total 
                        </CardTitle>
                        <FaEthereum className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className=''>
                        <div className="text-2xl font-bold line-clamp-1">{remainingAmount} Eth</div>
                        <p className="text-xs text-muted-foreground">
                        remaining
                        </p>
                    </CardContent>
                    </Card>
                </div>
                <div className='px-3'>
                    <Card x-chunk="dashboard-01-chunk-0" className='w-full bg-slate-800 text-white border-none'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                        Total 
                        </CardTitle>
                        <MdPeople className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{campaign.totalDonators} </div>
                        <p className="text-xs text-muted-foreground">
                            donators contributed
                        </p>
                    </CardContent>
                    </Card>
                </div>
                <div className='px-3'>
                    <Card x-chunk="dashboard-01-chunk-0" className='w-full bg-slate-800 text-white border-none'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                        Total 
                        </CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{campaign.daysLeft+1} Days</div>
                        <p className="text-xs text-muted-foreground">
                        left for the campagin
                        </p>
                    </CardContent>
                    </Card>
                </div>
            </div>

            <div className=' w-full col-span-2 p-2 mt-10'>
                <Image src={campaign.image} alt={campaign.title} width={600} height={400} className=" rounded-md h-full" />
            </div>


            <div className=' w-full col-span-3 p-2 mt-10'>
                <div className=' flex gap-2 items-center'>
                    <h1 className="text-sm text-white">Creator :</h1>
                    <MdPersonOutline className='text-white text-xl border-white border-2 rounded-full'/>
                    <h2 className="text-lg font-bold text-white">{creator}</h2>
                </div>
                <h2 className="text-4xl font-bold text-white mt-8">{campaign.title}</h2>
                <p className="text-gray-300 text-md mt-4 line-clamp-6 text-justify">{campaign.description}</p>

                <Progress 
                value={((campaign.amountCollected / campaign.targetAmount) * 100)} 
                max={100} 
                className='my-6 h-2' 
                />
            </div>



            <div className=" min-h-24 my-10 mr-6 bg-slate-800 p-4 rounded-md col-span-2">
                <h2 className="text-xl font-bold text-white">Donators:</h2>
                <ul className="text-gray-300 mt-2">
                    {campaign.donators.map((donator: string, index: number) => (
                        <li key={index} className="break-words">
                            {index + 1}. {donator}
                        </li>
                    ))}
                </ul>
            </div>



            {/* Donation section */}
            <div className="my-8 w-full flex justify-end px-4 col-span-3">
                {/* <h3 className="text-xl font-bold text-white mr-10">Fund</h3> */}
                <div className=' w-1/2 flex flex-col'>
                    {/* <p className="text-gray-400">Remaining amount needed: {remainingAmount} ETH</p> */}
                    <input
                        type="text"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        placeholder="Enter amount in ETH"
                        className="mt-2 p-2 rounded bg-gray-700 text-white"
                    />
                    <button
                        onClick={handleDonate}
                        className="mt-4 px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"
                        disabled={donationLoading || isTargetMet} // Disable if loading or target is already met
                    >
                    {isTargetMet ? 'Target Reached' : donationLoading ? 'Processing...' : 'Fund Campaign'}
                    </button>
                </div>
                
            </div>
        </div>

      
    </div>
  );
};

export default CampaignDetails;
