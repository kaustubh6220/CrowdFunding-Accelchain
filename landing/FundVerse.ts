export const abi = [
    {
      "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "name": "campaigns",
      "outputs": [
        { "internalType": "address", "name": "creator", "type": "address" },
        { "internalType": "string", "name": "title", "type": "string" },
        { "internalType": "string", "name": "description", "type": "string" },
        { "internalType": "string", "name": "image", "type": "string" },
        { "internalType": "uint256", "name": "targetAmount", "type": "uint256" },
        { "internalType": "uint256", "name": "amountCollected", "type": "uint256" },
        { "internalType": "uint256", "name": "deadline", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "signature": "0x141961bc"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" },
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "name": "campaignsByUser",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function",
      "signature": "0x4675ec1a"
    },
    {
      "inputs": [
        { "internalType": "string", "name": "_title", "type": "string" },
        { "internalType": "string", "name": "_description", "type": "string" },
        { "internalType": "string", "name": "_image", "type": "string" },
        { "internalType": "uint256", "name": "_targetAmount", "type": "uint256" },
        { "internalType": "uint256", "name": "_deadline", "type": "uint256" }
      ],
      "name": "createCampaign",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "signature": "0x980f2e66"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_campaignId", "type": "uint256" }],
      "name": "fundCampaign",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "signature": "0x92bd38bc"
    },
    {
      "inputs": [],
      "name": "getAllCampaigns",
      "outputs": [
        {
          "components": [
            { "internalType": "uint256", "name": "id", "type": "uint256" },
            { "internalType": "address", "name": "creator", "type": "address" },
            { "internalType": "string", "name": "title", "type": "string" },
            { "internalType": "string", "name": "description", "type": "string" },
            { "internalType": "string", "name": "image", "type": "string" },
            { "internalType": "uint256", "name": "targetAmount", "type": "uint256" },
            { "internalType": "uint256", "name": "amountCollected", "type": "uint256" },
            { "internalType": "uint256", "name": "deadline", "type": "uint256" },
            { "internalType": "uint256", "name": "daysLeft", "type": "uint256" }
          ],
          "internalType": "struct contractFundverse.CampaignDetails[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "signature": "0x86cdf604"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_campaignId", "type": "uint256" }],
      "name": "getCampaignDetails",
      "outputs": [
        { "internalType": "string", "name": "title", "type": "string" },
        { "internalType": "string", "name": "description", "type": "string" },
        { "internalType": "string", "name": "image", "type": "string" },
        { "internalType": "uint256", "name": "targetAmount", "type": "uint256" },
        { "internalType": "uint256", "name": "amountCollected", "type": "uint256" },
        { "internalType": "uint256", "name": "daysLeft", "type": "uint256" },
        { "internalType": "address[]", "name": "donators", "type": "address[]" }
      ],
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd993de62"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
      "name": "getTotalCampaignsByUser",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9827640e"
    },
    {
      "inputs": [],
      "name": "getTotalCampaignsOnPlatform",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function",
      "signature": "0x21ae9c43"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
      "name": "getTotalDonatedByUser",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1adf22df"
    },
    {
      "inputs": [],
      "name": "getTotalFundingRaised",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9245b570"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
      "name": "getTotalFundingReceivedByUser",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function",
      "signature": "0xe6335237"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
      "name": "getUserCampaigns",
      "outputs": [
        {
          "components": [
            { "internalType": "uint256", "name": "id", "type": "uint256" },
            { "internalType": "address", "name": "creator", "type": "address" },
            { "internalType": "string", "name": "title", "type": "string" },
            { "internalType": "string", "name": "description", "type": "string" },
            { "internalType": "string", "name": "image", "type": "string" },
            { "internalType": "uint256", "name": "targetAmount", "type": "uint256" },
            { "internalType": "uint256", "name": "amountCollected", "type": "uint256" },
            { "internalType": "uint256", "name": "deadline", "type": "uint256" },
            { "internalType": "uint256", "name": "daysLeft", "type": "uint256" }
          ],
          "internalType": "struct contractFundverse.CampaignDetails[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "signature": "0x0ea10ffb"
    }
  ];