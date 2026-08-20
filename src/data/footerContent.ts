export type ContentSection = {
  heading: string
  body: string[]
  list?: string[]
}

export type StaticPageContent = {
  title: string
  intro?: string
  sections: ContentSection[]
}

export const staticPages: Record<string, StaticPageContent> = {
  'returns-exchanges': {
    title: 'Returns & Exchanges',
    intro:
      'Not the right fit? We get it. Here is everything you need to know about sending something back.',
    sections: [
      {
        heading: 'Return window',
        body: [
          'Most items can be returned within 15 days of delivery, provided they are unused, unwashed, and in their original packaging with tags attached.',
          'Footwear must be tried on indoors on a clean surface — shoes returned with signs of outdoor wear cannot be accepted.',
        ],
      },
      {
        heading: 'How to start a return',
        body: ['Raise a return request from your Orders page, or use Track My Order and select the item you want to send back. A pickup will be scheduled from your delivery address within 2–4 business days.'],
      },
      {
        heading: 'Non-returnable items',
        list: ['Innerwear, lingerie, and swimwear (for hygiene reasons)', 'Earrings and pierced jewelry', 'Items marked "Final Sale" at checkout', 'Gift cards'],
        body: [],
      },
      {
        heading: 'Refunds',
        body: [
          'Once the returned item passes quality check, refunds are issued to your original payment method within 5–7 business days. Store credit refunds, where chosen, reflect instantly.',
        ],
      },
    ],
  },
  'shipping-terms': {
    title: 'Shipping Terms',
    intro: 'Delivery timelines and charges for orders shipped across India.',
    sections: [
      {
        heading: 'Delivery timelines',
        list: ['Metro cities: 2–4 business days', 'Other cities & towns: 4–7 business days', 'Remote / ODA pincodes: 7–10 business days'],
        body: [],
      },
      {
        heading: 'Shipping charges',
        body: [
          'Free standard shipping on all prepaid orders above ₹499. A flat ₹49 shipping fee applies below that, and a ₹25 handling fee applies to cash-on-delivery orders.',
        ],
      },
      {
        heading: 'Order tracking',
        body: ['Once shipped, you will receive a tracking link by SMS and email. You can also check live status any time from Track My Order.'],
      },
    ],
  },
  'payment-policy': {
    title: 'Payment Policy',
    intro: 'Secure, flexible ways to pay for your order.',
    sections: [
      {
        heading: 'Accepted payment methods',
        list: ['Credit & debit cards (Visa, Mastercard, RuPay, Amex)', 'UPI', 'Net banking', 'ShopSwift Wallet & store credit', 'Cash on Delivery (on eligible orders)'],
        body: [],
      },
      {
        heading: 'EMI options',
        body: ['No-cost EMI is available on select credit cards for orders above ₹3,000, at checkout.'],
      },
      {
        heading: 'Payment security',
        body: ['All transactions are processed over an encrypted, PCI-DSS compliant payment gateway. We never store your full card details on our servers.'],
      },
    ],
  },
  'shopswift-plus': {
    title: 'ShopSwift+',
    intro: 'Our free loyalty programme — earn points on every order and unlock member-only perks.',
    sections: [
      {
        heading: 'How it works',
        body: ['Earn 2 points for every ₹100 spent. Points can be redeemed for discounts on future orders, starting at 100 points = ₹50 off.'],
      },
      {
        heading: 'Member tiers',
        list: [
          'Silver — join automatically on signup',
          'Gold — spend ₹15,000/year: early access to sales, free express shipping',
          'Platinum — spend ₹40,000/year: dedicated support line, birthday gift, exclusive previews',
        ],
        body: [],
      },
    ],
  },
  'about-us': {
    title: 'About Us',
    intro: 'ShopSwift — shop smart, and stay safe.',
    sections: [
      {
        heading: 'Our story',
        body: [
          'ShopSwift started with a simple idea: shopping for fashion, beauty, and everyday essentials online should feel as easy and trustworthy as walking into your favourite local store.',
          'Today we work with hundreds of brand partners across fashion, beauty, home, and electronics to bring curated deals to shoppers across India.',
        ],
      },
      {
        heading: 'What we stand for',
        list: ['Verified sellers and authentic products, always', 'Transparent pricing with no hidden charges', 'Fast, reliable delivery nationwide'],
        body: [],
      },
    ],
  },
  careers: {
    title: 'Careers',
    intro: 'We are a small team building something people actually enjoy using. Here is what we are hiring for right now.',
    sections: [
      {
        heading: 'Open roles',
        list: [
          'Senior Frontend Engineer — Bengaluru (Hybrid)',
          'Product Designer — Remote (India)',
          'Category Manager, Fashion — Mumbai',
          'Customer Experience Associate — Gurugram',
          'Data Analyst, Growth — Bengaluru',
        ],
        body: ['Do not see a role that fits? Write to us at careers@shopswift.example with what you would love to work on.'],
      },
    ],
  },
  'investor-relations': {
    title: 'Investor Relations',
    intro: 'Financial information and updates for ShopSwift stakeholders.',
    sections: [
      {
        heading: 'Latest updates',
        body: ['ShopSwift is currently a privately held company. Annual reports and investor updates are shared directly with stakeholders.'],
      },
      {
        heading: 'Contact investor relations',
        body: ['For investment-related queries, reach out to investors@shopswift.example.'],
      },
    ],
  },
  'supply-chain-disclosure': {
    title: 'Supply Chain Disclosure',
    intro: 'Our commitment to responsible sourcing and fair labour practices.',
    sections: [
      {
        heading: 'Our standards',
        body: [
          'ShopSwift requires all brand and manufacturing partners to comply with local labour laws, prohibit child and forced labour, and maintain safe working conditions.',
        ],
      },
      {
        heading: 'Verification',
        body: ['Partner facilities are subject to periodic third-party audits, and findings inform our ongoing partnership decisions.'],
      },
    ],
  },
  impact: {
    title: 'Impact',
    intro: 'Small steps toward a more sustainable and inclusive business.',
    sections: [
      {
        heading: 'Sustainability',
        list: ['Recyclable and reduced-plastic packaging across shipments', 'Carbon-neutral shipping options at checkout', 'Take-back programme for old textiles'],
        body: [],
      },
      {
        heading: 'Community',
        body: ['A share of proceeds from our seasonal charity collections goes directly to partner NGOs working in education and livelihood support.'],
      },
    ],
  },
  'privacy-notice': {
    title: 'Privacy Notice',
    intro: 'How ShopSwift collects, uses, and protects your personal information.',
    sections: [
      {
        heading: 'Information we collect',
        body: ['We collect information you provide directly (like your name, address, and payment details) and information collected automatically (like device and usage data) to operate and improve the service.'],
      },
      {
        heading: 'How we use it',
        body: ['Your information is used to process orders, provide customer support, personalise your shopping experience, and communicate updates you have opted into.'],
      },
      {
        heading: 'Your choices',
        body: ['You can access, correct, or request deletion of your personal data, and unsubscribe from marketing communications, at any time from your account settings.'],
      },
    ],
  },
  'terms-conditions': {
    title: 'Terms & Conditions',
    intro: 'The terms that govern your use of the ShopSwift website and app.',
    sections: [
      {
        heading: 'Using our services',
        body: ['By accessing ShopSwift, you agree to use the platform only for lawful purposes and in accordance with these terms.'],
      },
      {
        heading: 'Orders & pricing',
        body: ['Product prices and availability are subject to change without notice. We reserve the right to cancel orders in cases of pricing errors or suspected fraud.'],
      },
      {
        heading: 'Limitation of liability',
        body: ['ShopSwift is not liable for indirect or consequential damages arising from use of the platform, to the maximum extent permitted by law.'],
      },
    ],
  },
  'cookie-notice': {
    title: 'Cookie Notice',
    intro: 'How and why we use cookies on this site.',
    sections: [
      {
        heading: 'What are cookies',
        body: ['Cookies are small text files stored on your device that help the site remember your preferences and understand how you use it.'],
      },
      {
        heading: 'Types we use',
        list: ['Essential cookies — required for core site functionality like your cart', 'Analytics cookies — help us understand site usage', 'Preference cookies — remember settings like language and currency'],
        body: [],
      },
    ],
  },
  'accessibility-statement': {
    title: 'Accessibility Statement',
    intro: 'Our ongoing commitment to making ShopSwift usable for everyone.',
    sections: [
      {
        heading: 'Our approach',
        body: ['We aim to meet WCAG 2.1 Level AA standards across our site, including keyboard navigation, sufficient colour contrast, and screen-reader-friendly markup.'],
      },
      {
        heading: 'Feedback',
        body: ['If you encounter an accessibility barrier anywhere on ShopSwift, please let us know via Contact Us so we can address it.'],
      },
    ],
  },
  'promotions-terms': {
    title: 'Promotions Terms & Conditions',
    intro: 'Terms that apply to discounts, coupon codes, and promotional offers.',
    sections: [
      {
        heading: 'General terms',
        body: ['Promotional discounts cannot be combined with other offers unless explicitly stated. Offers are valid only for the duration mentioned and while stock lasts.'],
      },
      {
        heading: 'First-order discount',
        body: ['The 10% first-order welcome discount is valid once per customer, on orders above ₹999, and excludes gift cards and select final-sale items.'],
      },
    ],
  },
}

export const faqItems: { q: string; a: string }[] = [
  {
    q: 'How do I track my order?',
    a: 'Go to Track My Order and enter your order ID and registered email or phone number. You can also track from the Orders section of your account.',
  },
  {
    q: 'What is your return policy?',
    a: 'Most items can be returned within 15 days of delivery if unused and in original packaging. See our full Returns & Exchanges policy for exclusions.',
  },
  {
    q: 'Do you offer Cash on Delivery?',
    a: 'Yes, COD is available on eligible orders and pincodes. A small handling fee applies, shown at checkout before you place the order.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Metro cities typically receive orders in 2–4 business days; other locations may take 4–7 business days depending on the pincode.',
  },
  {
    q: 'Can I change or cancel my order after placing it?',
    a: 'Orders can be modified or cancelled within 1 hour of being placed, as long as they have not yet been shipped. Visit Track My Order to request a change.',
  },
  {
    q: 'How do I use a discount code?',
    a: 'Enter your code in the "Apply Coupon" field at checkout before payment. Only one coupon can be applied per order unless stated otherwise.',
  },
  {
    q: 'Are the products on ShopSwift authentic?',
    a: 'Yes. We work directly with brands and verified sellers, and every listing goes through a quality check before it goes live.',
  },
]

export const storeLocations = [
  { city: 'Mumbai', address: 'Shop 12, Palladium Mall, Lower Parel, Mumbai 400013', hours: '10:00 AM – 9:00 PM' },
  { city: 'Delhi', address: 'Unit 4, Select Citywalk, Saket, New Delhi 110017', hours: '10:00 AM – 9:00 PM' },
  { city: 'Bengaluru', address: 'Ground Floor, Phoenix Marketcity, Whitefield, Bengaluru 560048', hours: '10:00 AM – 9:30 PM' },
  { city: 'Hyderabad', address: 'Level 2, Inorbit Mall, Madhapur, Hyderabad 500081', hours: '10:00 AM – 9:00 PM' },
]
