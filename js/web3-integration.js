
// Q1 Token Contract Addresses

const Q1_TOKEN_ADDRESSES = {

  ethereum: "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",

  polygon: "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7"

};



// Q1 Token ABI (Simplified ERC1155 Interface)

const Q1_TOKEN_ABI = [

  // balanceOf

  {

    "inputs": [

      {"internalType": "address", "name": "account", "type": "address"},

      {"internalType": "uint256", "name": "id", "type": "uint256"}

    ],

    "name": "balanceOf",

    "outputs": [

      {"internalType": "uint256", "name": "", "type": "uint256"}

    ],

    "stateMutability": "view",

    "type": "function"

  },

  // balanceOfBatch

  {

    "inputs": [

      {"internalType": "address[]", "name": "accounts", "type": "address[]"},

      {"internalType": "uint256[]", "name": "ids", "type": "uint256[]"}

    ],

    "name": "balanceOfBatch",

    "outputs": [

      {"internalType": "uint256[]", "name": "", "type": "uint256[]"}

    ],

    "stateMutability": "view",

    "type": "function"

  },

  // safeTransferFrom

  {

    "inputs": [

      {"internalType": "address", "name": "from", "type": "address"},

      {"internalType": "address", "name": "to", "type": "address"},

      {"internalType": "uint256", "name": "id", "type": "uint256"},

      {"internalType": "uint256", "name": "amount", "type": "uint256"},

      {"internalType": "bytes", "name": "data", "type": "bytes"}

    ],

    "name": "safeTransferFrom",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  // safeBatchTransferFrom

  {

    "inputs": [

      {"internalType": "address", "name": "from", "type": "address"},

      {"internalType": "address", "name": "to", "type": "address"},

      {"internalType": "uint256[]", "name": "ids", "type": "uint256[]"},

      {"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"},

      {"internalType": "bytes", "name": "data", "type": "bytes"}

    ],

    "name": "safeBatchTransferFrom",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  }

];



// شبکه‌های پشتیبانی شده

const SUPPORTED_NETWORKS = {

  ethereum: {

    chainId: 1,

    name: "Ethereum Mainnet",

    rpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",

    explorer: "https://etherscan.io"

  },

  polygon: {

    chainId: 137,

    name: "Polygon Mainnet",

    rpcUrl: "https://polygon-rpc.com",

    explorer: "https://polygonscan.com"

  }

};



// وضعیت Web3

let web3;

let currentAccount = null;

let currentNetwork = null;

let q1TokenContract = null;



// مقداردهی اولیه Web3

async function initializeWeb3() {

  // بررسی وجود Ethereum Provider (مانند MetaMask)

  if (window.ethereum) {

    try {

      web3 = new Web3(window.ethereum);

      

      // درخواست دسترسی به حساب‌ها

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      currentAccount = accounts[0];

      

      // دریافت شبکه فعلی

      const chainId = await web3.eth.getChainId();

      currentNetwork = Object.values(SUPPORTED_NETWORKS).find(net => net.chainId === chainId);

      

      // مقداردهی قرارداد

      if (currentNetwork) {

        const contractAddress = Q1_TOKEN_ADDRESSES[currentNetwork.name.toLowerCase()];

        q1TokenContract = new web3.eth.Contract(Q1_TOKEN_ABI, contractAddress);

        

        // به‌روزرسانی UI

        updateWalletUI();

        await loadTokenBalances();

      } else {

        console.warn("Unsupported network. Please switch to Ethereum or Polygon.");

        alert("Please connect to Ethereum or Polygon network to use Q1 Token features.");

      }

      

      // گوش دادن به تغییر حساب

      window.ethereum.on('accountsChanged', (accounts) => {

        currentAccount = accounts[0];

        updateWalletUI();

        loadTokenBalances();

      });

      

      // گوش دادن به تغییر شبکه

      window.ethereum.on('chainChanged', () => {

        window.location.reload();

      });

      

    } catch (error) {

      console.error("Error initializing Web3:", error);

      alert("Error connecting to wallet. Please try again.");

    }

  } else {

    console.warn("No Ethereum provider detected. Please install MetaMask.");

    alert("Please install MetaMask or another Web3 wallet to use all features.");

  }

}



// به‌روزرسانی رابط کاربری کیف پول

function updateWalletUI() {

  const walletButton = document.getElementById('wallet-button');

  const walletAddressElement = document.getElementById('wallet-address');

  

  if (currentAccount) {

    const shortAddress = `${currentAccount.substring(0, 6)}...${currentAccount.substring(38)}`;

    

    if (walletButton) {

      walletButton.textContent = shortAddress;

      walletButton.classList.add('connected');

    }

    

    if (walletAddressElement) {

      walletAddressElement.textContent = shortAddress;

      walletAddressElement.title = currentAccount;

    }

  }

}



// بارگیری موجودی توکن‌ها

async function loadTokenBalances() {

  if (!q1TokenContract || !currentAccount) return;

  

  try {

    // برای نمایش: دریافت موجودی سه نوع توکن اصلی

    const tokenIds = [1, 2, 3]; // IDs برای Utility, Governance, NFT

    

    // دریافت موجودی به صورت گروهی

    const balances = await q1TokenContract.methods.balanceOfBatch(

      Array(tokenIds.length).fill(currentAccount),

      tokenIds

    ).call();

    

    // به‌روزرسانی UI

    updateTokenBalancesUI(tokenIds, balances);

    

  } catch (error) {

    console.error("Error loading token balances:", error);

  }

}



// به‌روزرسانی نمایش موجودی توکن‌ها

function updateTokenBalancesUI(tokenIds, balances) {

  const tokenBalancesContainer = document.getElementById('token-balances');

  

  if (tokenBalancesContainer) {

    tokenBalancesContainer.innerHTML = tokenIds.map((id, index) => {

      const balance = balances[index];

      let tokenName, formattedBalance;

      

      // شناسایی نوع توکن بر اساس ID

      switch(id) {

        case 1:

          tokenName = "Utility Token";

          formattedBalance = web3.utils.fromWei(balance, 'ether');

          break;

        case 2:

          tokenName = "Governance Token";

          formattedBalance = balance; // بدون اعشار

          break;

        case 3:

          tokenName = "Founder NFT";

          formattedBalance = balance > 0 ? "Owned" : "Not Owned";

          break;

        default:

          tokenName = `Token ID ${id}`;

          formattedBalance = balance;

      }

      

      return `

        <div class="token-balance-card">

          <h4>${tokenName}</h4>

          <div class="balance">${formattedBalance}</div>

        </div>

      `;

    }).join('');

  }

}



// انتقال توکن

async function transferToken(tokenId, amount, recipient) {

  if (!q1TokenContract || !currentAccount) {

    alert("Please connect your wallet first.");

    return false;

  }

  

  try {

    // نمایش وضعیت انتقال

    const transferStatus = document.getElementById('transfer-status');

    if (transferStatus) {

      transferStatus.textContent = "Processing transaction...";

      transferStatus.style.color = "orange";

    }

    

    // ارسال تراکنش

    const tx = await q1TokenContract.methods.safeTransferFrom(

      currentAccount,

      recipient,

      tokenId,

      amount,

      web3.utils.utf8ToHex("") // داده اضافی

    ).send({ from: currentAccount });

    

    // نمایش نتیجه

    if (transferStatus) {

      transferStatus.textContent = "Transfer successful!";

      transferStatus.style.color = "green";

    }

    

    console.log("Transaction receipt:", tx);

    return true;

    

  } catch (error) {

    console.error("Transfer failed:", error);

    

    const transferStatus = document.getElementById('transfer-status');

    if (transferStatus) {

      transferStatus.textContent = "Transfer failed. See console for details.";

      transferStatus.style.color = "red";

    }

    

    return false;

  }

}



// اتصال به کیف پول

function connectWallet() {

  if (!window.ethereum) {

    alert("Please install MetaMask or another Web3 wallet.");

    return;

  }

  

  initializeWeb3();

}



// اضافه کردن توابع به scope جهانی برای دسترسی از HTML

window.Q1Token = {

  initializeWeb3,

  connectWallet,

  transferToken

};



// اگر صفحه دارای عناصر مرتبط با Web3 است، خودکار مقداردهی می‌شود

if (document.querySelector('[data-web3-enabled]')) {

  initializeWeb3();

}
