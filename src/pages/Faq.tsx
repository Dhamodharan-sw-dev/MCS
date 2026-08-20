import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../data/footerContent'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-[#4a4a4a] hover:text-[#212121]">
        ← Back to home
      </Link>
      <h1 className="mt-4 text-3xl font-medium text-[#212121] sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-4 text-base text-[#4a4a4a]">
        Answers to the questions we hear most. Can't find what you need? Reach out via{' '}
        <Link to="/contact-us" className="underline hover:text-[#212121]">
          Contact Us
        </Link>
        .
      </p>

      <div className="mt-8 divide-y divide-[#e5e4e7] border-y border-[#e5e4e7]">
        {faqItems.map((item, i) => {
          const open = openIndex === i
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-[#212121]">{item.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-[#4a4a4a] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
              </button>
              {open && <p className="pb-5 text-sm leading-relaxed text-[#4a4a4a]">{item.a}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
