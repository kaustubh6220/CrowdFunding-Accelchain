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

// Initialize the contract instance
const getContract = async (): Promise<ethers.Contract> => {
  if (!window.ethereum) {
    throw new Error("No crypto wallet found. Please install it.");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner(); // Await the signer properly
  return new ethers.Contract(contractAddress, abi, signer);
};

//create campagin
export const createCampaign = async (
  name: string,
  description: string,
  goal: string,   
  deadline: number,
  imageURL: string
) => {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    const targetAmount = ethers.parseEther(goal);  
    const tx = await contract.createCampaign(
      name,          
      description,   
      imageURL,      
      targetAmount,  
      deadline,      
      {
        value: ethers.parseEther("0.001"), 
      }
    );

    await tx.wait();

    return tx;
  } catch (error) {
    console.error("Error creating campaign:", error);
    throw error;
  }
};


// Fund Campaign
export const fundCampaign = async (campaignId: number, amount: string): Promise<void> => {
    try {
      const contract = await getContract();
      const tx = await contract.fundCampaign(campaignId, {
        value: ethers.parseEther(amount), // Convert amount to ETH in wei
      });
      await tx.wait();
      console.log("Campaign funded successfully!");
    } catch (error) {
      console.error("Error funding campaign:", error);
    }
  };
  

// Get All Campaigns
export const getAllCampaigns = async (): Promise<any[]> => { // Return array of campaigns
  try {
    const contract = await getContract();
    const campaigns = await contract.getAllCampaigns();
    const formattedCampaigns = campaigns.map((campaign: Campaign) => ({
        id: campaign.id,
        creator: campaign.creator,
        title: campaign.title,
        description: campaign.description,
        targetAmount: ethers.formatEther(campaign.targetAmount), // Convert to ETH
        deadline: campaign.deadline,
        amountCollected: ethers.formatEther(campaign.amountCollected), // Convert to ETH
        image: campaign.image,
      }));
    return formattedCampaigns; // Ensure return value
  } catch (error) {
    console.error("Error fetching all campaigns:", error);
    return []; // Return empty array on error
  }
};

// Get Campaign Details

export const getCampaignDetails = async (campaignId: number): Promise<any | null> => {
    try {
        const contract = await getContract();
        const campaign = await contract.getCampaignDetails(campaignId);

        const formattedCampaign = {
            id: campaignId,
            title: campaign[0], // title is the first return value
            description: campaign[1], // description is the second return value
            image: campaign[2], // image is the third return value
            targetAmount: ethers.formatEther(campaign[3]), // Convert targetAmount (4th return value) to ETH
            amountCollected: ethers.formatEther(campaign[4]), // Convert amountCollected (5th return value) to ETH
            daysLeft: Number(campaign[5]), // daysLeft is the sixth return value
            donators: campaign[6], // donators is the last return value
            totalDonators: Number(campaign[6].length) // Get the number of donators by counting the addresses
        };

        console.log(formattedCampaign);
        return formattedCampaign;
    } catch (error) {
        console.error("Error fetching campaign details:", error);
        return null;
    }
};


// Get User Campaigns
export const getUserCampaigns = async (userAddress: string): Promise<any[]> => {
  try {
    const contract = await getContract();
    const campaigns = await contract.getUserCampaigns(userAddress);
    const formattedCampaigns = campaigns.map((campaign: Campaign) => ({
        id: campaign.id,
        creator: campaign.creator,
        title: campaign.title,
        description: campaign.description,
        targetAmount: ethers.formatEther(campaign.targetAmount), // Convert to ETH
        deadline: campaign.deadline,
        amountCollected: ethers.formatEther(campaign.amountCollected), // Convert to ETH
        image: campaign.image,
      }));
    return formattedCampaigns; // Ensure return value
  } catch (error) {
    console.error("Error fetching user campaigns:", error);
    return []; // Return empty array on error
  }
};

// Get Total Campaigns By User
export const getTotalCampaignsByUser = async (userAddress: string): Promise<number> => {
  try {
    const contract = await getContract();
    const totalCampaigns = await contract.getTotalCampaignsByUser(userAddress);
    return Number(totalCampaigns); // Ensure return value
  } catch (error) {
    console.error("Error fetching total campaigns by user:", error);
    return 0; // Return 0 on error
  }
};

// Get Total Donations By User
export const getTotalDonatedByUser = async (userAddress: string): Promise<number> => {
  try {
    const contract = await getContract();
    const totalDonated = await contract.getTotalDonatedByUser(userAddress);
    return totalDonated; // Ensure return value
  } catch (error) {
    console.error("Error fetching total donated by user:", error);
    return 0; // Return 0 on error
  }
};

// Get Total Funding Received By User
export const getTotalFundingReceivedByUser = async (userAddress: string): Promise<number> => {
  try {
    const contract = await getContract();
    const totalFundingReceived = await contract.getTotalFundingReceivedByUser(userAddress);
    return totalFundingReceived; // Ensure return value
  } catch (error) {
    console.error("Error fetching total funding received by user:", error);
    return 0; // Return 0 on error
  }
};

// Get Total Campaigns On Platform
export const getTotalCampaignsOnPlatform = async (): Promise<number> => {
  try {
    const contract = await getContract();
    const totalCampaigns = await contract.getTotalCampaignsOnPlatform();
    return totalCampaigns; // Ensure return value
  } catch (error) {
    console.error("Error fetching total campaigns on platform:", error);
    return 0; // Return 0 on error
  }
};

// Get Total Funding Raised
export const getTotalFundingRaised = async (): Promise<number> => {
  try {
    const contract = await getContract();
    const totalFundingRaised = await contract.getTotalFundingRaised();
    return totalFundingRaised; // Ensure return value
  } catch (error) {
    console.error("Error fetching total funding raised:", error);
    return 0; // Return 0 on error
  }
};
