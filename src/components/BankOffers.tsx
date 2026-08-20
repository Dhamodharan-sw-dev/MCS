import { bankOffers } from '../data/sections'

export function BankOffers() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-[120px] lg:py-10">
      <div className="flex flex-wrap items-center justify-center gap-5">
        {bankOffers.map((src, i) => (
          <button
            key={src}
            type="button"
            className="w-full max-w-[285px] shrink-0 transition-opacity hover:opacity-90 sm:w-auto"
          >
            <img
              src={src}
              alt={`Bank offer ${i + 1}`}
              className="h-auto w-full"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
