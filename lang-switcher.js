// Language Switcher
document.addEventListener('DOMContentLoaded', function() {
  const langBtns = document.querySelectorAll('.lang-btn');
  const defaultLang = 'en';
  
  // Set initial language
  let currentLang = localStorage.getItem('q1-lang') || defaultLang;
  setLanguage(currentLang);
  
  // Add click event to language buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
      localStorage.setItem('q1-lang', lang);
    });
  });
  
  function setLanguage(lang) {
    // Update active button
    langBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });
    
    // Set dir attribute for RTL languages
    if (lang === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Show/hide language elements
    document.querySelectorAll(`.${lang}`).forEach(el => {
      el.style.display = '';
    });
    
    document.querySelectorAll(`[class*="en"], [class*="fa"]`).forEach(el => {
      if (!el.classList.contains(lang)) {
        el.style.display = 'none';
      }
    });
  }
});
