# ShopSwift — Shop Smart & Stay Safe

A recreation of the ShopSwift ecommerce landing page from Figma, built with React, Vite, TypeScript, and Tailwind CSS. Fully static — no backend, no SSR — ready to host on GitHub Pages.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router (`HashRouter`, so it works on GitHub Pages with no server rewrite rules)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys `dist/` to GitHub Pages automatically on every push to `main`.

To enable it:
1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** and set the source to **GitHub Actions**.
3. Push to `main` — the workflow builds and publishes the site.

`vite.config.ts` uses a relative `base: './'`, so the build works under any repository name/subpath without extra configuration.

## Project status

Fully implemented from the Figma design (`ShopSwift - Shop Smart & Stay Safe`), with real exported assets throughout:
- Nav bar
- Hero promo carousel
- Shop Drop image grid
- Bank offers strip
- 13 product carousels: Brand Spotlight, On Our Radar, Her Indianwear Era, The Fashion Forecast, The Men's Edit, Step Into Now, Glow Got Real, Lingerie Sorted, Travel Starts Here, Flex O'Clock, Shine Stayed On, Living Levelled Up, Tiny Big Energy, The Tech Space

No footer section was visible in the source design's screenshots — the page ends after "The Tech Space".

## Footer & additional pages

A footer (modeled after a reference layout the user provided) was added along with supporting pages, since these weren't part of the original Figma design:
- **Interactive pages**: FAQ (accordion), Track My Order (mock tracking result), Contact Us (mock contact form), Create Account / Sign In (mock auth forms), Find a Store.
- **Content pages** (`/pages/:slug`, one shared template, content in `src/data/footerContent.ts`): Returns & Exchanges, Shipping Terms, Payment Policy, ShopSwift+, About Us, Careers, Investor Relations, Supply Chain Disclosure, Impact, Privacy Notice, Terms & Conditions, Cookie Notice, Accessibility Statement, Promotions Terms & Conditions.

All content on these pages is mock/placeholder — there's no backend, so forms don't submit anywhere real.

## Sign-in gate

The site requires signing in before browsing (Home and every other page redirect to Sign In if you're not authenticated; you land back on the page you tried to reach after logging in). This is a client-side-only demo gate (state kept in `localStorage`, checked in `src/context/AuthContext.tsx` / `src/components/RequireAuth.tsx`) — it controls what the app *renders*, not what's servable.

**This is not equivalent to server-enforced HTTP Basic Auth** (the kind that shows a native browser login prompt before any page content downloads). GitHub Pages serves static files only, with no server to enforce that — the HTML/JS for every page is still fetchable by a crawler, `curl`, or view-source regardless of login state, and the gate itself can be bypassed via devtools (e.g. setting the `shopswift-demo-auth` localStorage key). True pre-download blocking would require a proxy/edge layer in front of Pages (e.g. Cloudflare Access/Workers) or a host with built-in password protection — out of scope here since the brief calls for plain static GitHub Pages hosting with no backend.

Demo credentials:
- Username: `sampleuser`
- Password: `samplepassword`

Create Account is fully mock and does not grant access — use Sign In with the credentials above.

A **Home** button in the footer returns to the homepage from anywhere on the site.
