import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Circle } from 'lucide-react'

const STEPS = ['Order confirmed', 'Shipped', 'Out for delivery', 'Delivered']

export function TrackOrder() {
  const [orderId, setOrderId] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState<{ orderId: string; step: number } | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!orderId.trim() || !email.trim()) return
    // Demo site — no backend, so this always returns the same sample status.
    setResult({ orderId: orderId.trim(), step: 2 })
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-[#4a4a4a] hover:text-[#212121]">
        ← Back to home
      </Link>
      <h1 className="mt-4 text-3xl font-medium text-[#212121] sm:text-4xl">Track My Order</h1>
      <p className="mt-4 text-base text-[#4a4a4a]">
        Enter your order ID and the email or phone number used at checkout.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          required
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Order ID (e.g. SS10293847)"
          className="w-full border border-[#d9d9d9] px-4 py-3 text-sm outline-none focus:border-[#212121]"
        />
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email or phone number"
          className="w-full border border-[#d9d9d9] px-4 py-3 text-sm outline-none focus:border-[#212121]"
        />
        <button
          type="submit"
          className="shrink-0 bg-[#212121] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.03]"
        >
          TRACK
        </button>
      </form>

      {result && (
        <div className="mt-10 border border-[#e5e4e7] p-6">
          <p className="text-sm text-[#4a4a4a]">
            Order <span className="font-medium text-[#212121]">{result.orderId}</span>
          </p>
          <p className="mt-1 text-sm text-[#4a4a4a]">Estimated delivery: 2 days from now</p>

          <ol className="mt-6 flex flex-col gap-4">
            {STEPS.map((step, i) => {
              const done = i <= result.step
              return (
                <li key={step} className="flex items-center gap-3">
                  {done ? (
                    <CheckCircle2 className="size-5 shrink-0 text-[#212121]" />
                  ) : (
                    <Circle className="size-5 shrink-0 text-[#d9d9d9]" />
                  )}
                  <span className={done ? 'text-sm font-medium text-[#212121]' : 'text-sm text-[#b8b8b8]'}>
                    {step}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>
      )}
    </div>
  )
}
