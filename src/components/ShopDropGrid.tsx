import { shopDropItems } from '../data/sections'

export function ShopDropGrid() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-[120px]">
      <h2 className="text-center text-2xl font-medium text-black sm:text-3xl lg:text-[40px] lg:leading-[48px]">
        Shop Drop
      </h2>
      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 lg:gap-5">
        {shopDropItems.map((src, i) => (
          <button
            key={src}
            type="button"
            className="group aspect-square overflow-hidden bg-[#f4f3ec] shadow-none transition-shadow duration-300 hover:shadow-lg"
          >
            <img
              src={src}
              alt={`Shop drop item ${i + 1}`}
              className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
