import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Q2 - پلتفرم جامع",
  description: "پلتفرم جامع Q2 برای مدیریت پروژه‌ها و خدمات",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
