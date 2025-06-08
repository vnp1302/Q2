export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>داشبورد</h3>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#overview" className="active">
              نمای کلی
            </a>
          </li>
          <li>
            <a href="#analytics">آنالیتیک</a>
          </li>
          <li>
            <a href="#projects">پروژه‌ها</a>
          </li>
          <li>
            <a href="#settings">تنظیمات</a>
          </li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>خوش آمدید</h1>
          <p>نمای کلی از فعالیت‌های شما</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>پروژه‌های فعال</h3>
            <div className="stat-number">12</div>
          </div>
          <div className="stat-card">
            <h3>کاربران</h3>
            <div className="stat-number">1,234</div>
          </div>
          <div className="stat-card">
            <h3>درآمد</h3>
            <div className="stat-number">$5,678</div>
          </div>
          <div className="stat-card">
            <h3>بازدید</h3>
            <div className="stat-number">9,876</div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="content-section">
            <h2>پروژه‌های اخیر</h2>
            <div className="project-list">
              <div className="project-item">
                <h4>پروژه A</h4>
                <p>در حال پیشرفت</p>
                <span className="status active">فعال</span>
              </div>
              <div className="project-item">
                <h4>پروژه B</h4>
                <p>تکمیل شده</p>
                <span className="status completed">تمام</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
