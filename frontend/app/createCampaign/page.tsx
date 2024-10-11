'use client'

import React from 'react';
import { useWallet } from '@/context/WalletContext'; // Import your wallet context
import FadeLoader from 'react-spinners/FadeLoader'; // Import loader component
import CampaginForm from '@/components/shared/CampaginForm';

const Page = () => {
  const { walletAddress, connectWallet } = useWallet(); // Use wallet context to get wallet address

  return (
    <div>
      {walletAddress ? (
        <CampaginForm />
      ) : (
        <div className="text-center mt-4 flex flex-col items-center justify-center ">
          <FadeLoader color="#ffffff" />
          <p className="text-white text-center mt-4">
            Please connect your wallet to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
