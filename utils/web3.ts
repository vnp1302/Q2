import { ethers } from "ethers"
import type { WalletConnection, Token } from "../types"

// Network configurations
export const SUPPORTED_NETWORKS = {
  1: {
    name: "Ethereum Mainnet",
    rpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
    blockExplorer: "https://etherscan.io",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
  56: {
    name: "BSC Mainnet",
    rpcUrl: "https://bsc-dataseed.binance.org",
    blockExplorer: "https://bscscan.com",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
  },
  137: {
    name: "Polygon Mainnet",
    rpcUrl: "https://polygon-rpc.com",
    blockExplorer: "https://polygonscan.com",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  },
}

// Wallet connection functions
export const connectWallet = async (): Promise<WalletConnection> => {
  if (typeof window === "undefined") {
    throw new Error("Window object not available")
  }

  if (!window.ethereum) {
    throw new Error("MetaMask not installed. Please install MetaMask to continue.")
  }

  try {
    // Request account access
    await window.ethereum.request({ method: "eth_requestAccounts" })

    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const address = await signer.getAddress()
    const network = await provider.getNetwork()

    return {
      address,
      chainId: Number(network.chainId),
      isConnected: true,
      provider,
      signer,
    }
  } catch (error: any) {
    console.error("Error connecting wallet:", error)
    throw new Error(error.message || "Failed to connect wallet")
  }
}

export const disconnectWallet = (): void => {
  // Clear wallet connection state
  if (typeof window !== "undefined") {
    localStorage.removeItem("walletConnected")
    localStorage.removeItem("walletAddress")
  }
}

export const switchNetwork = async (chainId: number): Promise<void> => {
  if (!window.ethereum) {
    throw new Error("MetaMask not available")
  }

  const chainIdHex = `0x${chainId.toString(16)}`

  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainIdHex }],
    })
  } catch (error: any) {
    // If network doesn't exist, add it
    if (error.code === 4902) {
      const network = SUPPORTED_NETWORKS[chainId as keyof typeof SUPPORTED_NETWORKS]
      if (network) {
        await addNetwork(chainId)
      }
    } else {
      throw error
    }
  }
}

export const addNetwork = async (chainId: number): Promise<void> => {
  const network = SUPPORTED_NETWORKS[chainId as keyof typeof SUPPORTED_NETWORKS]
  if (!network || !window.ethereum) {
    throw new Error("Network not supported or MetaMask not available")
  }

  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: `0x${chainId.toString(16)}`,
        chainName: network.name,
        rpcUrls: [network.rpcUrl],
        blockExplorerUrls: [network.blockExplorer],
        nativeCurrency: network.nativeCurrency,
      },
    ],
  })
}

// Token functions
export const getTokenBalance = async (
  tokenAddress: string,
  userAddress: string,
  provider: ethers.Provider,
): Promise<string> => {
  const tokenABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
  ]

  const contract = new ethers.Contract(tokenAddress, tokenABI, provider)
  const balance = await contract.balanceOf(userAddress)
  const decimals = await contract.decimals()

  return ethers.formatUnits(balance, decimals)
}

export const getTokenInfo = async (tokenAddress: string, provider: ethers.Provider): Promise<Partial<Token>> => {
  const tokenABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns (uint256)",
  ]

  const contract = new ethers.Contract(tokenAddress, tokenABI, provider)

  const [name, symbol, decimals, totalSupply] = await Promise.all([
    contract.name(),
    contract.symbol(),
    contract.decimals(),
    contract.totalSupply(),
  ])

  return {
    name,
    symbol,
    decimals,
    totalSupply: ethers.formatUnits(totalSupply, decimals),
    contractAddress: tokenAddress,
  }
}

export const transferToken = async (
  tokenAddress: string,
  toAddress: string,
  amount: string,
  signer: ethers.Signer,
): Promise<string> => {
  const tokenABI = [
    "function transfer(address to, uint256 amount) returns (bool)",
    "function decimals() view returns (uint8)",
  ]

  const contract = new ethers.Contract(tokenAddress, tokenABI, signer)
  const decimals = await contract.decimals()
  const amountWei = ethers.parseUnits(amount, decimals)

  const tx = await contract.transfer(toAddress, amountWei)
  return tx.hash
}

// Transaction functions
export const getTransactionStatus = async (
  txHash: string,
  provider: ethers.Provider,
): Promise<"pending" | "confirmed" | "failed"> => {
  try {
    const receipt = await provider.getTransactionReceipt(txHash)
    if (!receipt) return "pending"
    return receipt.status === 1 ? "confirmed" : "failed"
  } catch (error) {
    return "pending"
  }
}

export const waitForTransaction = async (
  txHash: string,
  provider: ethers.Provider,
  confirmations = 1,
): Promise<ethers.TransactionReceipt> => {
  return await provider.waitForTransaction(txHash, confirmations)
}

// Utility functions
export const formatAddress = (address: string, chars = 4): string => {
  if (!address) return ""
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`
}

export const formatTokenAmount = (amount: string | number, decimals = 18, displayDecimals = 4): string => {
  const num = typeof amount === "string" ? Number.parseFloat(amount) : amount
  return num.toFixed(displayDecimals)
}

export const isValidAddress = (address: string): boolean => {
  try {
    return ethers.isAddress(address)
  } catch {
    return false
  }
}

export const calculateGasFee = async (provider: ethers.Provider, gasLimit: bigint): Promise<string> => {
  const feeData = await provider.getFeeData()
  const gasPrice = feeData.gasPrice || ethers.parseUnits("20", "gwei")
  const gasFee = gasLimit * gasPrice
  return ethers.formatEther(gasFee)
}

// Price and market data functions
export const getTokenPrice = async (tokenAddress: string): Promise<number> => {
  try {
    // This would typically call a price API like CoinGecko or CoinMarketCap
    const response = await fetch(`/api/tokens/${tokenAddress}/price`)
    const data = await response.json()
    return data.price || 0
  } catch (error) {
    console.error("Error fetching token price:", error)
    return 0
  }
}

// Error handling
export const handleWeb3Error = (error: any): string => {
  if (error.code === 4001) {
    return "Transaction rejected by user"
  } else if (error.code === -32603) {
    return "Internal JSON-RPC error"
  } else if (error.message?.includes("insufficient funds")) {
    return "Insufficient funds for transaction"
  } else if (error.message?.includes("gas")) {
    return "Gas estimation failed"
  } else {
    return error.message || "An unknown error occurred"
  }
}

// Local storage helpers
export const saveWalletConnection = (connection: WalletConnection): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("walletConnected", "true")
    localStorage.setItem("walletAddress", connection.address)
    localStorage.setItem("chainId", connection.chainId.toString())
  }
}

export const getStoredWalletConnection = (): Partial<WalletConnection> | null => {
  if (typeof window === "undefined") return null

  const isConnected = localStorage.getItem("walletConnected") === "true"
  const address = localStorage.getItem("walletAddress")
  const chainId = localStorage.getItem("chainId")

  if (isConnected && address && chainId) {
    return {
      address,
      chainId: Number.parseInt(chainId),
      isConnected: true,
    }
  }

  return null
}

// Export all functions

