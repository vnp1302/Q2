"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Signup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [terms, setTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("رمز عبور و تکرار آن مطابقت ندارند")
      return
    }
    console.log("Signup attempt:", { firstName, lastName, email, password, terms })
    // اینجا کد مربوط به ارسال اطلاعات به سرور قرار می‌گیرد
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>ایجاد حساب جدید</h1>
          <p>به خانواده Q2 بپیوندید</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">نام</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">نام خانوادگی</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

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

          <div className="form-group">
            <label htmlFor="confirmPassword">تأیید رمز عبور</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} required />
              <span>
                با <Link href="/terms">قوانین و مقررات</Link> موافقم
              </span>
            </label>
          </div>

          <button type="submit" className="btn-primary">
            ثبت نام
          </button>

          <div className="auth-divider">
            <span>یا</span>
          </div>

          <button type="button" className="btn-social google">
            ثبت نام با Google
          </button>

          <button type="button" className="btn-social github">
            ثبت نام با GitHub
          </button>
        </form>

        <div className="auth-footer">
          <p>
            قبلاً حساب دارید؟ <Link href="/login">وارد شوید</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
