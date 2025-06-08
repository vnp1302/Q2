import type { ReactNode } from "react"
import CustomHead from "./CustomHead"

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({
  children,
  title = "Q2 Project",
  description = "Q2 Web3 Project Description",
}: LayoutProps) {
  return (
    <>
      <CustomHead title={title} description={description} />
      <div className="min-h-screen">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold">
                  Q2
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/about" className="text-gray-700 hover:text-gray-900">
                  About
                </a>
                <a href="/roadmap" className="text-gray-700 hover:text-gray-900">
                  Roadmap
                </a>
                <a href="/how-to-buy" className="text-gray-700 hover:text-gray-900">
                  How to Buy
                </a>
                <a href="/partners" className="text-gray-700 hover:text-gray-900">
                  Partners
                </a>
                <a href="/faq" className="text-gray-700 hover:text-gray-900">
                  FAQ
                </a>
                <a href="/contact" className="text-gray-700 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p>&copy; 2024 Q2 Project. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

