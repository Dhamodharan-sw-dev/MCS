import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Globe, MapPin, Home } from 'lucide-react'
import { FaFacebookF, FaXTwitter, FaPinterestP, FaYoutube, FaInstagram } from 'react-icons/fa6'

const CUSTOMER_SERVICE = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Track My Order', to: '/track-order' },
  { label: 'Returns & Exchanges', to: '/pages/returns-exchanges' },
  { label: 'Shipping Terms', to: '/pages/shipping-terms' },
  { label: 'Payment Policy', to: '/pages/payment-policy' },
  { label: 'Contact Us', to: '/contact-us' },
]

const MY_ACCOUNT = [
  { label: 'Create Account', to: '/account/create' },
  { label: 'Sign In', to: '/account/sign-in' },
  { label: 'ShopSwift+', to: '/pages/shopswift-plus', bold: true },
]

const COMPANY = [
  { label: 'About Us', to: '/pages/about-us' },
  { label: 'Careers', to: '/pages/careers' },
  { label: 'Investor Relations', to: '/pages/investor-relations' },
  { label: 'Supply Chain Disclosure', to: '/pages/supply-chain-disclosure' },
  { label: 'Impact', to: '/pages/impact' },
]

const SOCIALS = [
  { label: 'Facebook', Icon: FaFacebookF },
  { label: 'X', Icon: FaXTwitter },
  { label: 'Pinterest', Icon: FaPinterestP },
  { label: 'YouTube', Icon: FaYoutube },
  { label: 'Instagram', Icon: FaInstagram },
]

const LEGAL_LINKS = [
  { label: 'Privacy Notice', to: '/pages/privacy-notice' },
  { label: 'Terms & Conditions', to: '/pages/terms-conditions' },
  { label: 'Cookie Notice', to: '/pages/cookie-notice' },
  { label: 'Accessibility Statement', to: '/pages/accessibility-statement' },
]

function FooterColumn({ heading, links }: { heading: string; links: { label: string; to: string; bold?: boolean }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-wider text-[#212121]">{heading}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`text-sm text-[#4a4a4a] hover:text-[#212121] ${link.bold ? 'font-semibold text-[#212121]' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-[#f4f3ec]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#212121] px-4 py-2 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.03]"
            >
              <Home className="size-4" />
              HOME
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#212121]">
              <span className="flex items-center gap-2">
                <Globe className="size-[18px]" />
                India | EN ₹
              </span>
              <Link to="/find-a-store" className="flex items-center gap-2 hover:text-[#4a4a4a]">
                <MapPin className="size-[18px]" />
                Find a Store
              </Link>
            </div>

            <h2 className="mt-8 max-w-md text-xl font-medium text-[#212121] sm:text-2xl">
              Sign Up for updates from ShopSwift and receive 10% off your first order*.
            </h2>

            {subscribed ? (
              <p className="mt-5 text-sm font-medium text-[#212121]">
                You're on the list — welcome to ShopSwift!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 flex max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email*"
                  className="w-full border border-[#212121] bg-white px-4 py-3 text-sm outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[#212121] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.03]"
                >
                  SIGN UP
                </button>
              </form>
            )}

            <p className="mt-4 max-w-md text-xs leading-relaxed text-[#4a4a4a]">
              By clicking 'Sign Up', I agree to receive ShopSwift marketing emails (including
              personalized information through our websites, social media platforms and online
              partners) as further described in the{' '}
              <Link to="/pages/privacy-notice" className="underline hover:text-[#212121]">
                Privacy Notice
              </Link>
              . Unsubscribe at any time.
            </p>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-[#4a4a4a]">
              *Terms & Conditions apply. For further details see{' '}
              <Link to="/pages/promotions-terms" className="underline hover:text-[#212121]">
                Promotions Terms & Conditions
              </Link>
              .
            </p>

            <div className="mt-8 flex items-center gap-4">
              {SOCIALS.map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-[#212121] text-[#212121] transition-colors hover:bg-[#212121] hover:text-white"
                >
                  <Icon className="size-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn heading="CUSTOMER SERVICE" links={CUSTOMER_SERVICE} />
            <FooterColumn heading="MY ACCOUNT" links={MY_ACCOUNT} />
            <FooterColumn heading="COMPANY" links={COMPANY} />
          </div>
        </div>
      </div>

      <div className="border-t border-[#d9d9d9]">
        <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-4 px-4 py-6 text-xs text-[#4a4a4a] sm:flex-row sm:justify-between sm:px-6 lg:px-12">
          <p>© {new Date().getFullYear()} ShopSwift</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-[#212121]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
