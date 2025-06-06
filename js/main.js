// مدیریت تم تاریک/روشن

const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('theme') || 'light';



// اعمال تم ذخیره شده

document.documentElement.dataset.theme = savedTheme;



if (themeToggle) {

  themeToggle.addEventListener('click', () => {

    const currentTheme = document.documentElement.dataset.theme;

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem('theme', newTheme);

    

    // به‌روزرسانی آیکون

    updateThemeIcon(newTheme);

  });

}



function updateThemeIcon(theme) {

  const darkIcon = document.querySelector('.theme-toggle .dark-icon');

  const lightIcon = document.querySelector('.theme-toggle .light-icon');

  

  if (theme === 'dark') {

    darkIcon.style.display = 'none';

    lightIcon.style.display = 'inline';

  } else {

    darkIcon.style.display = 'inline';

    lightIcon.style.display = 'none';

  }

}



// مقداردهی اولیه آیکون تم

updateThemeIcon(savedTheme);



// منوی موبایل

function setupMobileMenu() {

  const navbar = document.querySelector('.navbar');

  const navLinks = document.querySelector('.nav-links');

  

  if (!navbar || !navLinks) return;

  

  const mobileMenuToggle = document.createElement('button');

  mobileMenuToggle.className = 'mobile-menu-toggle';

  mobileMenuToggle.innerHTML = '☰';

  

  mobileMenuToggle.addEventListener('click', () => {

    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';

  });

  

  navbar.prepend(mobileMenuToggle);

  

  // رسپانسیو کردن منو

  function handleResize() {

    if (window.innerWidth > 768) {

      navLinks.style.display = 'flex';

    } else {

      navLinks.style.display = 'none';

    }

  }

  

  window.addEventListener('resize', handleResize);

  handleResize();

}



// اسکرول نرم برای لینک‌ها

function setupSmoothScrolling() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

      e.preventDefault();

      

      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      

      const targetElement = document.querySelector(targetId);

      if (targetElement) {

        targetElement.scrollIntoView({

          behavior: 'smooth'

        });

      }

    });

  });

}



// مدیریت فرم‌ها

function setupForms() {

  document.querySelectorAll('form').forEach(form => {

    form.addEventListener('submit', async (e) => {

      e.preventDefault();

      

      // نمایش وضعیت ارسال

      const submitButton = form.querySelector('button[type="submit"]');

      const originalText = submitButton.textContent;

      submitButton.textContent = 'Processing...';

      submitButton.disabled = true;

      

      try {

        // شبیه‌سازی ارسال فرم

        await new Promise(resolve => setTimeout(resolve, 1500));

        

        // نمایش پیام موفقیت

        alert('Thank you for your submission!');

        form.reset();

      } catch (error) {

        console.error('Form submission error:', error);

        alert('There was an error. Please try again.');

      } finally {

        submitButton.textContent = originalText;

        submitButton.disabled = false;

      }

    });

  });

}



// مقداردهی اولیه زمانی که DOM کاملاً بارگذاری شد

document.addEventListener('DOMContentLoaded', () => {

  setupMobileMenu();

  setupSmoothScrolling();

  setupForms();

  

  // اگر در صفحه داشبورد هستیم، Web3 را مقداردهی می‌کنیم

  if (window.location.pathname.includes('dashboard')) {

    initializeWeb3();

  }

});



// تابع کمکی برای نمایش توکن‌های کاربر

async function displayUserTokens() {

  const tokenList = document.getElementById('user-tokens');

  if (!tokenList) return;

  

  // شبیه‌سازی دریافت توکن‌ها

  const userTokens = [

    { id: 1, name: 'Q1 Utility', balance: '1,250', value: '$1,450' },

    { id: 2, name: 'Q1 Governance', balance: '42', value: '$3,780' },

    { id: 3, name: 'Founder NFT', balance: '1', value: 'Rare' }

  ];

  

  tokenList.innerHTML = userTokens.map(token => `

    <div class="token-item">

      <h4>${token.name}</h4>

      <div class="token-balance">${token.balance}</div>

      <div class="token-value">${token.value}</div>

    </div>

  `).join('');

}
