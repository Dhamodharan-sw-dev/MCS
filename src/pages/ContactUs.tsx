import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export function ContactUs() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-[#4a4a4a] hover:text-[#212121]">
        ← Back to home
      </Link>
      <h1 className="mt-4 text-3xl font-medium text-[#212121] sm:text-4xl">Contact Us</h1>
      <p className="mt-4 max-w-xl text-base text-[#4a4a4a]">
        Have a question about an order, a product, or anything else? Send us a message and our
        support team will get back to you within 24 hours.
      </p>

      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-[#212121]" />
            <div>
              <p className="text-sm font-medium text-[#212121]">Call us</p>
              <p className="text-sm text-[#4a4a4a]">1800-123-4567 (Mon–Sat, 9am–7pm)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-[#212121]" />
            <div>
              <p className="text-sm font-medium text-[#212121]">Email us</p>
              <p className="text-sm text-[#4a4a4a]">support@shopswift.example</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageCircle className="mt-0.5 size-5 shrink-0 text-[#212121]" />
            <div>
              <p className="text-sm font-medium text-[#212121]">Live chat</p>
              <p className="text-sm text-[#4a4a4a]">Available from the account menu, 9am–11pm daily.</p>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="border border-[#e5e4e7] p-6">
              <p className="text-base font-medium text-[#212121]">Thanks — message sent.</p>
              <p className="mt-2 text-sm text-[#4a4a4a]">
                This is a demo form, so nothing was actually sent, but on a live site our team
                would reply within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                type="text"
                placeholder="Order ID (optional)"
                className="w-full border border-[#d9d9d9] px-4 py-3 text-sm outline-none focus:border-[#212121]"
              />
              <textarea
                required
                rows={5}
                placeholder="How can we help?"
                className="w-full resize-none border border-[#d9d9d9] px-4 py-3 text-sm outline-none focus:border-[#212121]"
              />
              <button
                type="submit"
                className="w-fit bg-[#212121] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.03]"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
