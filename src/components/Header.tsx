import { Link } from 'react-router-dom'
import { ShoppingBag, Heart, User, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:h-[58px] lg:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-[#212121] text-white lg:size-[34px]">
            <ShoppingBag className="size-5" strokeWidth={2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-medium tracking-tight text-[#212121] lg:text-[19px]">
              ShopSwift
            </span>
            <span className="text-[9px] font-medium tracking-[0.2em] text-[#4a4a4a] lg:text-[10px]">
              STORE
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Search"
            className="hidden size-9 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-[#f4f3ec] sm:flex"
          >
            <Search className="size-[18px]" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="flex size-9 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-[#f4f3ec]"
          >
            <Heart className="size-[18px]" strokeWidth={1.75} />
          </button>
          <Link
            to="/account/sign-in"
            aria-label="Account"
            className="flex size-9 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-[#f4f3ec]"
          >
            <User className="size-[18px]" strokeWidth={1.75} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
