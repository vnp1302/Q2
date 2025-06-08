"use client"

import Link from "next/link"
import AdminLayout from "@layouts/AdminLayout"

export default function Page() {
  return (
    <AdminLayout>
      <h1>Welcome to the Admin Panel</h1>
      <p>This is the main page of the admin panel.</p>
    </AdminLayout>
  )
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>به Q2 خوش آمدید</h1>
          <p>پلتفرم جامع برای مدیریت پروژه‌ها و خدمات</p>
          <div className="hero-buttons">
            <Link href="/dashboard" className="btn-primary">
              شروع کنید
            </Link>
            <Link href="/marketplace" className="btn-secondary">
              مشاهده بازار
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">ویژگی‌های Q2</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>سرعت بالا</h3>
              <p>عملکرد سریع و بدون تأخیر</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>امنیت پیشرفته</h3>
              <p>محافظت از داده‌های شما با بالاترین استانداردها</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>تحلیل داده</h3>
              <p>گزارش‌های دقیق و تحلیل‌های هوشمند</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 20px;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 40px;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .features {
          padding: 80px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          margin-bottom: 50px;
          font-size: 2rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .feature-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          margin: 0 0 15px;
        }

        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  )
}
