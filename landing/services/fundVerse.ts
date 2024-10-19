import { ethers } from 'ethers';
import { abi } from '@/FundVerse'; // Adjust the path as necessary

export interface Campaign {
    id: string;
    creator: string;
    title: string;
    description: string;
    targetAmount: string;
    deadline: string;
    amountCollected: string;
    image: string;
}

// Contract Address (Replace with your deployed contract address)
const contractAddress = '0xF3546Af93E137E6d5695A25Bb24b2E26F5Fd2B3a';

// JSON-RPC Provider (Read-only access)
const rpcProviderUrl = 'https://sepolia.infura.io/v3/d00f5961014f4a3994340745a98f4216'; // Replace with your preferred provider (e.g., Infura, Alchemy, etc.)
const readOnlyProvider = new ethers.JsonRpcProvider(rpcProviderUrl);

// Initialize the contract instance with read-only access
const getReadOnlyContract = (): ethers.Contract => {
  return new ethers.Contract(contractAddress, abi, readOnlyProvider);
};

// Get Total Donations On Platform (Read-Only, no wallet connection required)
export const getTotalFundingRaised = async (): Promise<number> => {
  try {
    const contract = getReadOnlyContract();
    const totalDonations = await contract.getTotalFundingRaised();
    return parseFloat(ethers.formatEther(totalDonations)); // Convert to number using parseFloat
  } catch (error) {
    console.error("Error fetching total donations on platform:", error);
    return 0; // Return 0 on error
  }
};

// Get Total Campaigns On Platform (Read-Only, no wallet connection required)
export const getTotalCampaignsOnPlatform = async (): Promise<number> => {
  try {
    const contract = getReadOnlyContract();
    const totalCampaigns = await contract.getTotalCampaignsOnPlatform();
    return Number(totalCampaigns); // Ensure return value
  } catch (error) {
    console.error("Error fetching total campaigns on platform:", error);
    return 0; // Return 0 on error
  }
};
