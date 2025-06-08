"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path ? "active" : ""
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">Q2</Link>
        </div>

        <div className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link href="/" className={isActive("/")}>
              خانه
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className={isActive("/dashboard")}>
              داشبورد
            </Link>
          </li>
          <li>
            <Link href="/marketplace" className={isActive("/marketplace")}>
              بازار
            </Link>
          </li>
          <li>
            <Link href="/ecosystem" className={isActive("/ecosystem")}>
              اکوسیستم
            </Link>
          </li>
          <li>
            <Link href="/login" className={isActive("/login")}>
              ورود
            </Link>
          </li>
          <li>
            <Link href="/signup" className={isActive("/signup")}>
              ثبت نام
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
