'use client';

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Image from 'next/image';
import { DollarSign, UserIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  getUserCampaigns,
  getTotalCampaignsByUser,
  getTotalDonatedByUser,
  getTotalFundingReceivedByUser
} from '@/services/fundVerse';
import { MdCampaign } from 'react-icons/md';
import { FaDonate, FaEthereum } from 'react-icons/fa';
import LoadingScreen from '@/components/shared/LoadingScreen'; // Import the loading screen component
import { useRouter } from 'next/navigation'; // Make sure to import useRouter

const Profile = () => {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [totalCampaigns, setTotalCampaigns] = useState<number>(0);
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [totalFundingReceived, setTotalFundingReceived] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true); // Initialize loading to true

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await (await signer).getAddress();
      setWalletAddress(address);

      fetchUserData(address);
    } else {
      alert("Please install MetaMask to use this feature!");
    }
  };

  const fetchUserData = async (userAddress: string) => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const campaignsCreated = await getUserCampaigns(userAddress);
      setCampaigns(campaignsCreated);

      const totalUserCampaigns = await getTotalCampaignsByUser(userAddress);
      setTotalCampaigns(totalUserCampaigns);

      const totalDonationsByUser = await getTotalDonatedByUser(userAddress);
      setTotalDonations(totalDonationsByUser);

      const totalFundingReceivedByUser = await getTotalFundingReceivedByUser(userAddress);
      setTotalFundingReceived(totalFundingReceivedByUser);
    } catch (err) {
      console.error("Error fetching user data: ", err);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  const handleCardClick = (creator:string,campaginId:number)=>{
    setLoading(true);
    router.push(`campagins/${creator}/${campaginId}`);
  }

  if (loading) {
    return <LoadingScreen />; // Show loading screen if loading is true
  }

  return (
    <div>
      {walletAddress && (
        <div className='p-4'>
          <div className='w-full flex gap-4 justify-center p-4'>
            <Card className='w-full bg-slate-800 text-white border-slate-500'>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total</CardTitle>
                <MdCampaign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalCampaigns} Campaigns</div>
                <p className="text-xs text-muted-foreground">raised by you</p>
              </CardContent>
            </Card>
            <Card className='w-full bg-slate-800 text-white border-slate-500'>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total donation of</CardTitle>
                <FaEthereum className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{ethers.formatEther(totalDonations.toString())} ETH</div>
                <p className="text-xs text-muted-foreground">made by you</p>
              </CardContent>
            </Card>
            <Card className='w-full bg-slate-800 text-white border-slate-500'>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total funding of</CardTitle>
                <FaEthereum className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{ethers.formatEther(totalFundingReceived.toString())} ETH</div>
                <p className="text-xs text-muted-foreground">donated to you</p>
              </CardContent>
            </Card>
          </div>

          <div className='mt-4 p-4'>
            <h3 className='text-white scroll-m-20 text-xl font-semibold tracking-tight'>Campaigns Created:</h3>
            <div className="w-full grid grid-cols-3 mt-4">
              {campaigns.length > 0 ? (
                campaigns.map((campaign, index) => (
                  <Card
                    onClick={() => handleCardClick(campaign.creator, campaign.id)}
                    key={campaign.id}
                    className={`bg-slate-900 border-slate-700 border-2 rounded-md shadow-md w-11/12 m-2 hover:bg-slate-800 cursor-pointer ${
                      index % 3 === 0
                        ? 'justify-self-start'
                        : index % 3 === 1
                        ? 'justify-self-center'
                        : 'justify-self-end'
                    }`}
                  >
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      height={400}
                      width={500}
                      className="w-full h-48 rounded-md"
                    />
                    <div className="p-4 w-full">
                      <CardTitle className="scroll-m-20 text-xl font-semibold tracking-tight text-white">
                        {campaign.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 mt-2 line-clamp-1">
                        {campaign.description}...
                      </CardDescription>
                      <CardContent className="mt-4 w-full grid grid-cols-2 gap-4">
                        <div className="text-gray-400">
                          <p className="text-lg font-medium">{campaign.amountCollected} ETH</p>
                          <p className="text-lg font-medium">raised of {campaign.targetAmount} ETH</p>
                        </div>
                        <div className="text-right text-gray-400">
                          <p className="text-lg font-medium">
                            {Math.max(
                              Math.ceil((Number(campaign.deadline) - Date.now() / 1000) / 86400)-1,
                              0
                            )}{' '}
                            Days Left
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="w-full mt-4 text-gray-300">
                        <div className="w-full flex items-start overflow-clip">
                          <UserIcon className="text-2xl text-white" />
                          <label className="text-sm font-medium">Creator: {campaign.creator}</label>
                        </div>
                      </CardFooter>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-white">No campaigns created</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
