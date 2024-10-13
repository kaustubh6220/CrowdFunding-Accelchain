'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface WalletContextType {
  walletAddress: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Function to connect wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await (await signer).getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.log(error);
        alert('Failed to connect wallet.');
      }
    } else {
      alert('Metamask is not installed.');
    }
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    setWalletAddress(null); // Clear wallet address in frontend
    if (typeof window.ethereum !== 'undefined') {
      window.location.reload();  // Reload the page to reset connection
    }
  };

  // Check if wallet is connected when the app loads
  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            const signer = provider.getSigner();
            const address = await (await signer).getAddress();
            setWalletAddress(address);
          }
        } catch (error) {
          console.log('Error checking wallet connection:', error);
        }
      }
    };
    checkIfWalletIsConnected();
  }, []);

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook for accessing the Wallet context
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
