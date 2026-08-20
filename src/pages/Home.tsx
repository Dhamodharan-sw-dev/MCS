import { HeroBanner } from '../components/HeroBanner'
import { ShopDropGrid } from '../components/ShopDropGrid'
import { BankOffers } from '../components/BankOffers'
import { ProductCarousel } from '../components/ProductCarousel'
import { carouselSections } from '../data/sections'

export function Home() {
  return (
    <>
      <HeroBanner />
      <ShopDropGrid />
      <BankOffers />
      {carouselSections.map((section) => (
        <ProductCarousel key={section.key} section={section} />
      ))}
    </>
  )
}
