import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export function SignIn() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: Location })?.from?.pathname ?? '/'

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const ok = login(username.trim(), password)
    if (ok) {
      navigate(from, { replace: true })
    } else {
      setError(true)
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-medium text-[#212121]">Sign In</h1>
      <p className="mt-4 text-sm text-[#4a4a4a]">
        New to ShopSwift?{' '}
        <Link to="/account/create" className="underline hover:text-[#212121]">
          Create an account
        </Link>
        .
      </p>
      <p className="mt-4 border border-[#e5e4e7] bg-[#f4f3ec] px-4 py-3 text-xs text-[#4a4a4a]">
        This is a demo site. Sign in with username <strong>sampleuser</strong> and password{' '}
        <strong>samplepassword</strong>.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <input
          type="text"
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            setError(false)
          }}
          placeholder="Username"
          className="w-full border border-[#d9d9d9] px-4 py-3 text-sm outline-none focus:border-[#212121]"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setError(false)
          }}
          placeholder="Password"
          className="w-full border border-[#d9d9d9] px-4 py-3 text-sm outline-none focus:border-[#212121]"
        />
        {error && (
          <p className="text-sm text-red-600">Incorrect username or password. Try again.</p>
        )}
        <button
          type="submit"
          className="mt-2 bg-[#212121] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.03]"
        >
          SIGN IN
        </button>
      </form>
    </div>
  )
}
