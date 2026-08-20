import { Link } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'
import { storeLocations } from '../data/footerContent'

export function FindAStore() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-[#4a4a4a] hover:text-[#212121]">
        ← Back to home
      </Link>
      <h1 className="mt-4 text-3xl font-medium text-[#212121] sm:text-4xl">Find a Store</h1>
      <p className="mt-4 text-base text-[#4a4a4a]">
        ShopSwift partner stores near you.
      </p>

      <div className="mt-8 flex flex-col divide-y divide-[#e5e4e7] border-y border-[#e5e4e7]">
        {storeLocations.map((store) => (
          <div key={store.city} className="flex flex-col gap-2 py-5">
            <p className="text-base font-medium text-[#212121]">{store.city}</p>
            <p className="flex items-start gap-2 text-sm text-[#4a4a4a]">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {store.address}
            </p>
            <p className="flex items-center gap-2 text-sm text-[#4a4a4a]">
              <Clock className="size-4 shrink-0" />
              {store.hours}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
