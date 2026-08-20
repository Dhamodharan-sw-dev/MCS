import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data/sections'

export function HeroBanner() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((next: number) => {
    setIndex(((next % count) + count) % count)
  }, [count])

  useEffect(() => {
    timerRef.current = setInterval(() => go(index + 1), 5000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [index, go])

  return (
    <section className="w-full px-4 pt-2 sm:px-6 lg:px-10">
      <div
        className="group relative mx-auto h-[220px] w-full max-w-[1360px] overflow-hidden rounded-lg sm:h-[320px] lg:h-[425px]"
        onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
      >
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div key={slide.key} className="relative h-full w-full shrink-0">
              <img
                src={slide.image}
                alt={slide.alt}
                className="size-full object-cover object-left"
                loading={slide.key === 'main' ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-0 shadow-[0_0_2px_rgba(216,216,216,0.4)] transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          <ChevronLeft className="size-5 text-[#212121]" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-0 shadow-[0_0_2px_rgba(216,216,216,0.4)] transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          <ChevronRight className="size-5 text-[#212121]" />
        </button>

        <div className="absolute bottom-4 right-4 flex items-center gap-[3px] rounded-full bg-white/84 p-[3px] backdrop-blur-[3px]">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-3 bg-[#212121]' : 'w-1.5 bg-[#b8b8b8]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
