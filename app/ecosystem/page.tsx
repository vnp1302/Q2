import Link from "next/link"
import Image from "next/image"

export default function Ecosystem() {
  return (
    <div className="ecosystem-container">
      <div className="ecosystem-header">
        <h1>اکوسیستم Q2</h1>
        <p>شبکه‌ای از ابزارها، خدمات و شرکای ما</p>
      </div>

      <div className="ecosystem-sections">
        <section className="ecosystem-section">
          <h2>ابزارهای توسعه</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">🛠️</div>
              <h3>Q2 CLI</h3>
              <p>ابزار خط فرمان برای مدیریت پروژه‌ها</p>
              <Link href="#" className="tool-link">
                مشاهده
              </Link>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📊</div>
              <h3>Q2 Analytics</h3>
              <p>تحلیل و بررسی عملکرد پروژه‌ها</p>
              <Link href="#" className="tool-link">
                مشاهده
              </Link>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🔧</div>
              <h3>Q2 Builder</h3>
              <p>سازنده رابط کاربری بصری</p>
              <Link href="#" className="tool-link">
                مشاهده
              </Link>
            </div>
          </div>
        </section>

        <section className="ecosystem-section">
          <h2>شرکای ما</h2>
          <div className="partners-grid">
            <div className="partner-card">
              <Image src="/placeholder.svg" alt="شریک 1" width={120} height={80} />
              <h4>شرکت A</h4>
              <p>ارائه‌دهنده خدمات ابری</p>
            </div>
            <div className="partner-card">
              <Image src="/placeholder.svg" alt="شریک 2" width={120} height={80} />
              <h4>شرکت B</h4>
              <p>متخصص در امنیت سایبری</p>
            </div>
            <div className="partner-card">
              <Image src="/placeholder.svg" alt="شریک 3" width={120} height={80} />
              <h4>شرکت C</h4>
              <p>پلتفرم آموزش آنلاین</p>
            </div>
          </div>
        </section>

        <section className="ecosystem-section">
          <h2>جامعه توسعه‌دهندگان</h2>
          <div className="community-stats">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">توسعه‌دهنده فعال</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">پروژه متن‌باز</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">کشور</div>
            </div>
          </div>
          <div className="community-actions">
            <Link href="#" className="btn-primary">
              عضویت در جامعه
            </Link>
            <Link href="#" className="btn-secondary">
              مشاهده پروژه‌ها
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
