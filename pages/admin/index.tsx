import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import AdminLayout from '@layouts/AdminLayout'

import { verifyAdmin } from '@lib/auth'

import TokenManagement from '@components/admin/TokenManagement'

import UserManagement from '@components/admin/UserManagement'



export default function AdminDashboard() {

  const [activeTab, setActiveTab] = useState('tokens')

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const router = useRouter()



  useEffect(() => {

    const checkAuth = async () => {

      const authStatus = await verifyAdmin()

      if (!authStatus) {

        router.push('/admin/login')

      } else {

        setIsAuthenticated(true)

      }

    }

    checkAuth()

  }, [])



  if (!isAuthenticated) {

    return <div>Loading...</div>

  }



  return (

    <AdminLayout>

      <div className="admin-header">

        <h1>Q1 Token Admin Dashboard</h1>

        <div className="admin-tabs">

          <button 

            className={activeTab === 'tokens' ? 'active' : ''}

            onClick={() => setActiveTab('tokens')}

          >

            Token Management

          </button>

          <button

            className={activeTab === 'users' ? 'active' : ''}

            onClick={() => setActiveTab('users')}

          >

            User Management

          </button>

        </div>

      </div>



      <div className="admin-content">

        {activeTab === 'tokens' && <TokenManagement />}

        {activeTab === 'users' && <UserManagement />}

      </div>



      <style jsx>{`

        .admin-header {

          margin-bottom: 2rem;

        }

        .admin-tabs {

          display: flex;

          gap: 1rem;

          margin-top: 1rem;

        }

        .admin-tabs button {

          padding: 0.5rem 1rem;

          background: #f0f0f0;

          border: none;

          cursor: pointer;

        }

        .admin-tabs button.active {

          background: #4F46E5;

          color: white;

        }

        .admin-content {

          background: white;

          padding: 2rem;

          border-radius: 8px;

          box-shadow: 0 2px 4px rgba(0,0,0,0.1);

        }

      `}</style>

    </AdminLayout>

  )

}
