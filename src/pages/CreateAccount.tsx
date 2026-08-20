import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

export function CreateAccount() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-[#4a4a4a] hover:text-[#212121]">
        ← Back to home
      </Link>
      <h1 className="mt-4 text-3xl font-medium text-[#212121]">Create Account</h1>
      <p className="mt-4 text-sm text-[#4a4a4a]">
        Already have one?{' '}
        <Link to="/account/sign-in" className="underline hover:text-[#212121]">
          Sign in
        </Link>
        .
      </p>

      {submitted ? (
        <div className="mt-8 border border-[#e5e4e7] p-6">
          <p className="text-base font-medium text-[#212121]">Welcome to ShopSwift!</p>
          <p className="mt-2 text-sm text-[#4a4a4a]">
            This is a demo — no account was actually created, but you're all set to keep browsing.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Full name"
            className="w-full border border-[#d9d9d9] px-4 py-3 text-sm outline-none focus:border-[#212121]"
          />
          <input
            type="email"
            required
            placeholder="Email address"
            className="w-full border border-[#d9d9d9] px-4 py-3 text-sm outline-none focus:border-[#212121]"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full border border-[#d9d9d9] px-4 py-3 text-sm outline-none focus:border-[#212121]"
          />
          <button
            type="submit"
            className="mt-2 bg-[#212121] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.03]"
          >
            CREATE ACCOUNT
          </button>
        </form>
      )}
    </div>
  )
}
