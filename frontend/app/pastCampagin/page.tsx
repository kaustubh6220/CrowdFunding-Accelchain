'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { UserIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getAllCampaigns as fetchAllCampaigns } from '@/services/fundVerse'; 
import { useWallet } from '@/context/WalletContext'
import FadeLoader from 'react-spinners/FadeLoader'; 
import LoadingScreen from '@/components/shared/LoadingScreen';

const Campaigns = () => {
  const router = useRouter();
  const { walletAddress, connectWallet } = useWallet(); 
  const [campaigns, setCampaigns] = useState<any[]>([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const campaignsPerPage = 6;
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (!walletAddress) return;

      try {
        setLoading(true);
        const campaignsData = await fetchAllCampaigns(); 
        console.log(campaignsData);
        setCampaigns(campaignsData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch campaigns');
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [walletAddress]); 

  const ongoingCampaigns = campaigns.filter(campaign => {
    const remainingDays = Math.ceil((Number(campaign.deadline) - Date.now() / 1000) / 86400);
    return remainingDays <= 0;
  });

  const indexOfLastCampaign = currentPage * campaignsPerPage;
  const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
  const currentCampaigns = ongoingCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);
  const totalPages = Math.ceil(ongoingCampaigns.length / campaignsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      router.push('#campaign');
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      router.push('#campaign');
    }
  };

  const handleCardClick = (creatorId: string, campaignId: string) => {
    setLoading(true);
    router.push(`campagins/${creatorId}/${campaignId}`);
  };

  if (!walletAddress) {
    return (
      <div className="text-center mt-4 w-full h-full flex flex-col items-center justify-center ">
        <FadeLoader color="#ffffff" loading={loading} /> 
        <p className="text-white text-center mt-4">
          Please connect your wallet to get started.
        </p>
      </div>
    );
  }

  if (loading) {
    return <LoadingScreen/>
  }

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  return (
    <>
    <div className='p-6'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-white px-4 pt-6">
        Past Campaigns
      </h1>

      <div className="w-full grid grid-cols-3 mt-4">
        {currentCampaigns.map((campaign, index) => (
          <Card
            key={campaign._id} 
            onClick={() => handleCardClick(campaign.creator, campaign.id)} 
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
              <CardDescription className="text-gray-300 mt-2 line-clamp-3">
                {campaign.description}...
              </CardDescription>
              <CardContent className="mt-4 w-full grid grid-cols-2 gap-4 p-0">
                <div className="text-gray-400">
                  <p className="text-lg font-medium">{campaign.amountCollected} ETH</p>
                  <p className="text-lg font-medium">raised of {campaign.targetAmount} ETH</p>
                </div>
                <div className="text-right text-gray-400">
                  <p className="text-lg font-medium">
                    {Math.max(
                      Math.ceil((Number(campaign.deadline) - Date.now() / 1000) / 86400) ,
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
        ))}
      </div>

      <div className="w-full flex justify-between mt-4">
        <button
          onClick={goToPreviousPage}
          className="text-white bg-gray-800 px-4 py-2 rounded-md"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          className="text-white bg-gray-800 px-4 py-2 rounded-md"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default Campaigns;
