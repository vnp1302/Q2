import type React from "react"
import type { ReactNode } from "react"

interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <h1>Admin Panel</h1>
      </header>
      <main className="admin-main">{children}</main>
    </div>
  )
}

export default AdminLayout
