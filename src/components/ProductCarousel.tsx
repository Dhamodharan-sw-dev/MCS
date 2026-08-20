import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { CarouselSection } from '../data/sections'

export function ProductCarousel({ section }: { section: CarouselSection }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [])

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10">
      <h2 className="text-center text-2xl font-medium text-black sm:text-3xl lg:text-[40px] lg:leading-[48px]">
        {section.title}
      </h2>

      <div className="relative mt-8">
        <div
          ref={trackRef}
          onScroll={updateScrollState}
          className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth lg:gap-5"
        >
          {section.items.map((item, i) => (
            <button
              key={i}
              type="button"
              className="group flex w-[42vw] shrink-0 flex-col text-left sm:w-[220px] lg:w-64"
            >
              <span
                className="block w-full overflow-hidden bg-[#f4f3ec] shadow-none transition-shadow duration-300 group-hover:shadow-lg"
                style={{ aspectRatio: section.aspect }}
              >
                <img
                  src={item.image}
                  alt={item.label ?? section.title}
                  className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </span>
              {item.label && (
                <span className="mt-4 block text-center text-base font-medium text-[#212121] transition-colors duration-300 group-hover:text-black sm:text-lg lg:text-[22px] lg:leading-[27.5px]">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>

        {canScrollLeft && (
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className="absolute left-0 top-[calc(50%-14px)] hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_0_2px_rgba(216,216,216,0.4)] sm:flex"
          >
            <ChevronLeft className="size-5 text-[#212121]" />
          </button>
        )}
        {canScrollRight && (
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-[calc(50%-14px)] hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_0_2px_rgba(216,216,216,0.4)] sm:flex"
          >
            <ChevronRight className="size-5 text-[#212121]" />
          </button>
        )}
      </div>
    </section>
  )
}
