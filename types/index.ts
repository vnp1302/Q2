// User and Authentication Types
export interface User {
  id: string
  email: string
  name?: string
  walletAddress?: string
  role: "user" | "admin"
  createdAt: Date
  updatedAt: Date
  isVerified: boolean
}

export interface AuthSession {
  user: User
  accessToken: string
  refreshToken?: string
  expires: string
}

// Token and Blockchain Types
export interface Token {
  id: string
  name: string
  symbol: string
  contractAddress: string
  decimals: number
  totalSupply: string
  currentPrice: number
  priceChange24h: number
  marketCap: number
  volume24h: number
  holders: number
  createdAt: Date
  isActive: boolean
}

export interface TokenBalance {
  tokenId: string
  userAddress: string
  balance: string
  balanceFormatted: number
  lastUpdated: Date
}

export interface Transaction {
  id: string
  hash: string
  from: string
  to: string
  value: string
  tokenId?: string
  type: "transfer" | "mint" | "burn" | "approve"
  status: "pending" | "confirmed" | "failed"
  blockNumber?: number
  gasUsed?: string
  gasPrice?: string
  timestamp: Date
}

// Wallet Types
export interface WalletConnection {
  address: string
  chainId: number
  isConnected: boolean
  provider: any
  signer: any
}

export interface WalletProvider {
  name: string
  icon: string
  connector: any
  isInstalled: boolean
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ApiError {
  code: string
  message: string
  details?: any
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  phone?: string
}

export interface LoginForm {
  email: string
  password: string
  rememberMe?: boolean
}

export interface SignupForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
  walletAddress?: string
}

// Admin Types
export interface AdminStats {
  totalUsers: number
  totalTokens: number
  totalTransactions: number
  totalVolume: string
  activeUsers24h: number
  newUsers24h: number
}

export interface AdminUser extends User {
  lastLogin?: Date
  totalTransactions: number
  totalVolume: string
  status: "active" | "suspended" | "banned"
}

// Partner Types
export interface Partner {
  id: string
  name: string
  logo: string
  website: string
  description: string
  category: "exchange" | "wallet" | "defi" | "infrastructure" | "other"
  isActive: boolean
  order: number
}

// FAQ Types
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
  isPublished: boolean
}

// Roadmap Types
export interface RoadmapItem {
  id: string
  title: string
  description: string
  quarter: string
  year: number
  status: "completed" | "in-progress" | "planned"
  features: string[]
  order: number
}

// Language Types
export interface Language {
  code: string
  name: string
  flag: string
  isActive: boolean
}

export interface Translation {
  key: string
  value: string
  language: string
}

// Chart and Analytics Types
export interface PriceData {
  timestamp: number
  price: number
  volume: number
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    borderColor: string
    backgroundColor: string
  }[]
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  isRead: boolean
  createdAt: Date
}

// Settings Types
export interface UserSettings {
  userId: string
  emailNotifications: boolean
  pushNotifications: boolean
  language: string
  currency: string
  theme: "light" | "dark" | "auto"
  twoFactorEnabled: boolean
}

// Export all types
export type {
  User,
  AuthSession,
  Token,
  TokenBalance,
  Transaction,
  WalletConnection,
  WalletProvider,
  ApiResponse,
  ApiError,
  ContactForm,
  LoginForm,
  SignupForm,
  AdminStats,
  AdminUser,
  Partner,
  FAQ,
  RoadmapItem,
  Language,
  Translation,
  PriceData,
  ChartData,
  Notification,
  UserSettings,
}

