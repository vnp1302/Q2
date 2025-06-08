"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password, remember })
    // اینجا کد مربوط به ارسال اطلاعات به سرور قرار می‌گیرد
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>ورود به حساب</h1>
          <p>به Q2 خوش آمدید</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">ایمیل</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="password">رمز عبور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <span>مرا به خاطر بسپار</span>
            </label>
            <Link href="/forgot-password" className="forgot-link">
              رمز عبور را فراموش کرده‌اید؟
            </Link>
          </div>

          <button type="submit" className="btn-primary">
            ورود
          </button>

          <div className="auth-divider">
            <span>یا</span>
          </div>

          <button type="button" className="btn-social google">
            ورود با Google
          </button>

          <button type="button" className="btn-social github">
            ورود با GitHub
          </button>
        </form>

        <div className="auth-footer">
          <p>
            حساب کاربری ندارید؟ <Link href="/signup">ثبت نام کنید</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
