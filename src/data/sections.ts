import { asset } from '../lib/asset'

export type CarouselItem = {
  image: string
  label?: string
}

export type CarouselSection = {
  key: string
  title: string
  /** Tailwind arbitrary aspect-ratio value, e.g. "1/1" or "256/239.8" */
  aspect: string
  items: CarouselItem[]
}

// Each slide is a pre-rendered ad creative (brand copy is baked into the image itself).
export const heroSlides = [
  { key: 'main', image: asset('images/hero/slide-main.jpg'), alt: 'WROGN — Min. 50% off' },
  { key: 'prev', image: asset('images/hero/slide-prev.jpg'), alt: 'Promotional banner' },
  { key: 'next', image: asset('images/hero/slide-next.jpg'), alt: 'Promotional banner' },
]

export const shopDropItems = Array.from({ length: 18 }, (_, i) =>
  asset(`images/shop-drop/${String(i + 1).padStart(2, '0')}.jpg`),
)

export const bankOffers = [
  asset('images/bank-offers/01.png'),
  asset('images/bank-offers/02.png'),
]

export const carouselSections: CarouselSection[] = [
  {
    key: 'brand-spotlight',
    title: 'Brand Spotlight',
    aspect: '256/239.8',
    items: [
      { image: asset('images/brand-spotlight/01.jpg'), label: 'MIN. 50% + 12% OFF*' },
      { image: asset('images/brand-spotlight/02.jpg'), label: 'MIN. 50% OFF' },
      { image: asset('images/brand-spotlight/03.jpg'), label: 'UNDER ₹999' },
      { image: asset('images/brand-spotlight/04.jpg'), label: 'UP TO 50% OFF' },
      { image: asset('images/brand-spotlight/05.jpg'), label: 'MIN. 30% OFF' },
      { image: asset('images/brand-spotlight/06.jpg'), label: 'MIN. 40% + 15% OFF*' },
      { image: asset('images/brand-spotlight/07.jpg'), label: 'MIN. 40% + 12% OFF*' },
      { image: asset('images/brand-spotlight/08.jpg'), label: 'MIN. 30% OFF' },
      { image: asset('images/brand-spotlight/09.jpg'), label: 'UP TO 30% OFF' },
      { image: asset('images/brand-spotlight/10.jpg'), label: 'UNDER ₹1,299 + 5% OFF*' },
    ],
  },
  {
    key: 'on-our-radar',
    title: 'On Our Radar',
    aspect: '1/1',
    items: [
      { image: asset('images/on-our-radar/01.jpg') },
      { image: asset('images/on-our-radar/02.jpg') },
      { image: asset('images/on-our-radar/03.jpg') },
      { image: asset('images/on-our-radar/04.jpg') },
      { image: asset('images/on-our-radar/05.jpg') },
    ],
  },
  {
    key: 'her-indianwear-era',
    title: 'Her Indianwear Era',
    aspect: '1/1',
    items: [
      { image: asset('images/her-indianwear-era/01.jpg'), label: 'MIN. 30% OFF' },
      { image: asset('images/her-indianwear-era/02.jpg'), label: 'MIN. 50% + 12% OFF*' },
      { image: asset('images/her-indianwear-era/03.jpg'), label: 'MIN. 50% OFF' },
      { image: asset('images/her-indianwear-era/04.jpg'), label: 'MIN. 30% OFF' },
      { image: asset('images/her-indianwear-era/05.jpg'), label: 'UNDER ₹999' },
    ],
  },
  {
    key: 'fashion-forecast',
    title: 'The Fashion Forecast',
    aspect: '1/1',
    items: [
      { image: asset('images/fashion-forecast/01.jpg'), label: 'UP TO 60% + 10% OFF*' },
      { image: asset('images/fashion-forecast/02.jpg'), label: 'FLAT 35% + 10% OFF*' },
      { image: asset('images/fashion-forecast/03.jpg'), label: 'UP TO 60% OFF' },
      { image: asset('images/fashion-forecast/04.jpg'), label: 'UNDER ₹999' },
      { image: asset('images/fashion-forecast/05.jpg'), label: 'UP TO 70% OFF' },
    ],
  },
  {
    key: 'mens-edit',
    title: "The Men's Edit",
    aspect: '256/239.8',
    items: [
      { image: asset('images/mens-edit/01.jpg'), label: 'MIN. 30% OFF' },
      { image: asset('images/mens-edit/02.jpg'), label: 'MIN. 40% OFF' },
      { image: asset('images/mens-edit/03.jpg'), label: 'MIN. 30% + 20% OFF*' },
      { image: asset('images/mens-edit/04.jpg'), label: 'MIN. 50% + 10% OFF*' },
      { image: asset('images/mens-edit/05.jpg'), label: 'MIN. 50% OFF' },
    ],
  },
  {
    key: 'step-into-now',
    title: 'Step Into Now',
    aspect: '256/239.8',
    items: [
      { image: asset('images/step-into-now/01.jpg'), label: 'UP TO 60% OFF' },
      { image: asset('images/step-into-now/02.jpg'), label: 'UP TO 50% OFF' },
      { image: asset('images/step-into-now/03.jpg'), label: 'UP TO 60% OFF' },
      { image: asset('images/step-into-now/04.jpg'), label: 'UP TO 70% OFF' },
      { image: asset('images/step-into-now/05.jpg'), label: 'UP TO 50% + 10% OFF*' },
    ],
  },
  {
    key: 'glow-got-real',
    title: 'Glow Got Real',
    aspect: '1/1',
    items: [
      { image: asset('images/glow-got-real/01.jpg') },
      { image: asset('images/glow-got-real/02.jpg') },
      { image: asset('images/glow-got-real/03.jpg') },
      { image: asset('images/glow-got-real/04.jpg') },
      { image: asset('images/glow-got-real/05.jpg') },
    ],
  },
  {
    key: 'lingerie-sorted',
    title: 'Lingerie, Sorted',
    aspect: '256/239.8',
    items: [
      { image: asset('images/lingerie-sorted/01.jpg'), label: 'STARTS AT ₹199' },
      { image: asset('images/lingerie-sorted/02.jpg'), label: 'UP TO 60% OFF' },
      { image: asset('images/lingerie-sorted/03.jpg'), label: 'UP TO 70% + 10% OFF*' },
      { image: asset('images/lingerie-sorted/04.jpg'), label: 'UP TO 30% OFF' },
      { image: asset('images/lingerie-sorted/05.jpg'), label: 'EXPLORE NOW' },
    ],
  },
  {
    key: 'travel-starts-here',
    title: 'Travel Starts Here',
    aspect: '256/239.8',
    items: [
      { image: asset('images/travel-starts-here/01.jpg'), label: 'UP TO 50% + 10% OFF*' },
      { image: asset('images/travel-starts-here/02.jpg'), label: 'UP TO 60% OFF' },
      { image: asset('images/travel-starts-here/03.jpg'), label: 'UP TO 50% OFF' },
      { image: asset('images/travel-starts-here/04.jpg'), label: 'UP TO 80% OFF' },
      { image: asset('images/travel-starts-here/05.jpg'), label: 'MIN. 30% OFF' },
    ],
  },
  {
    key: 'flex-oclock',
    title: "Flex O'Clock",
    aspect: '256/239.8',
    items: [
      { image: asset('images/flex-oclock/01.jpg'), label: 'MIN. 20% + 10% OFF*' },
      { image: asset('images/flex-oclock/02.jpg'), label: 'UP TO 40% + 10% OFF*' },
      { image: asset('images/flex-oclock/03.jpg'), label: 'STARTING AT ₹7,999' },
      { image: asset('images/flex-oclock/04.jpg'), label: 'UP TO 40% + 7.5% OFF*' },
      { image: asset('images/flex-oclock/05.jpg'), label: 'MIN. 75% + 7% OFF*' },
    ],
  },
  {
    key: 'shine-stayed-on',
    title: 'Shine Stayed On',
    aspect: '256/239.8',
    items: [
      { image: asset('images/shine-stayed-on/01.jpg'), label: 'STARTS AT ₹4,999' },
      { image: asset('images/shine-stayed-on/02.jpg'), label: 'MIN. 50% OFF' },
      { image: asset('images/shine-stayed-on/03.jpg'), label: 'UP TO 75% OFF*' },
      { image: asset('images/shine-stayed-on/04.jpg'), label: 'STARTS AT ₹4,999' },
      { image: asset('images/shine-stayed-on/05.jpg'), label: 'UP TO 50% OFF' },
    ],
  },
  {
    key: 'living-levelled-up',
    title: 'Living Levelled Up',
    aspect: '256/239.8',
    items: [
      { image: asset('images/living-levelled-up/01.jpg'), label: 'MIN. 10% + 10% OFF*' },
      { image: asset('images/living-levelled-up/02.jpg'), label: 'FLAT 20% + 10% OFF*' },
      { image: asset('images/living-levelled-up/03.jpg'), label: 'MIN. 50% + 10% OFF*' },
      { image: asset('images/living-levelled-up/04.jpg'), label: 'MIN. 10% + 10% OFF*' },
      { image: asset('images/living-levelled-up/05.jpg'), label: 'UP TO 75% + 10% OFF*' },
    ],
  },
  {
    key: 'tiny-big-energy',
    title: 'Tiny, Big Energy',
    aspect: '256/239.8',
    items: [
      { image: asset('images/tiny-big-energy/01.jpg'), label: 'MIN. 30% OFF' },
      { image: asset('images/tiny-big-energy/02.jpg'), label: 'UNDER ₹699' },
      { image: asset('images/tiny-big-energy/03.jpg'), label: 'MIN. 30% OFF' },
      { image: asset('images/tiny-big-energy/04.jpg'), label: 'MIN. 40% OFF' },
      { image: asset('images/tiny-big-energy/05.jpg'), label: 'UP TO 70% OFF' },
    ],
  },
  {
    key: 'tech-space',
    title: 'The Tech Space',
    aspect: '256/239.8',
    items: [
      { image: asset('images/tech-space/01.jpg'), label: 'UP TO 65% OFF' },
      { image: asset('images/tech-space/02.jpg'), label: 'UP TO 45% OFF' },
      { image: asset('images/tech-space/03.jpg'), label: 'UP TO 40% OFF' },
      { image: asset('images/tech-space/04.jpg'), label: 'UP TO 65% OFF' },
      { image: asset('images/tech-space/05.jpg'), label: 'UP TO 50% OFF' },
    ],
  },
]
