# Golden Motion Showcase

Build a modern, HIGHLY ANIMATED personal portfolio homepage for Shri Nidhi — a 

Bangalore-based Model & Actor, Content Creator, and Senior Web Developer. This 

should feel alive, premium, and interactive — not a static site with a few 

scroll fades, but a site where motion is a core design feature throughout.

BRAND / STYLE DIRECTION:

- Dark theme base: deep charcoal/black (#1a1a1a range) with warm gold/amber 

  accent (#d4a017 range), matching existing "SN" branding

- Animated gradient backgrounds: subtle, slow-moving mesh/blob gradients in 

  gold-to-black or gold-to-deep-amber tones behind key sections (hero, CTA, 

  contact) — soft, slow drifting motion, not distracting, low opacity so text 

  stays readable

- Floating decorative elements in empty/negative space: subtle animated shapes 

  (thin gold rings, dotted grids, glowing orbs, abstract line art) that slowly 

  float/rotate/pulse in background whitespace — parallax slightly on scroll and 

  mouse move

- Bold, confident typography; generous whitespace; asymmetric layout

HERO SECTION:

- Full-viewport hero with animated gradient background (slow-shifting gold/

  black mesh gradient)

- Floating glowing particles or subtle geometric shapes drifting in the empty 

  space around the portrait

- Portrait image in a modern framed treatment: angled gold border frame, subtle 

  glow/shadow, slight 3D tilt-on-mouse-move (parallax hover effect), image 

  gently scales/breathes (very subtle slow scale loop)

- Name "Shri Nidhi" with rotating tagline animation cycling: "Model & Actor" / 

  "Content Creator" / "Senior Web Developer" (typewriter or crossfade)

- Animated CTA button ("View My Work" / "Let's Connect"): gradient fill that 

  shifts on hover, gold glow/pulse on hover, magnetic cursor-follow micro-

  movement, ripple effect on click

- Scroll indicator with looping bounce animation

- Navbar: transparent over hero, animates to solid dark with blur (glassmorphism) 

  on scroll, links have animated underline-slide on hover

ABOUT SECTION:

- Section background: very subtle animated gradient wash (barely-there gold 

  glow drifting behind the content)

- Portrait image with gold frame + soft glow, hover triggers a subtle zoom/tilt

- Three-role cards (Model & Actor / Content Creator / Senior Web Developer): 

  each animates in with staggered slide-up + fade on scroll; on hover, card 

  lifts, border glows gold, icon does a small bounce/rotate

- Small floating accent shapes in the empty space beside the text block

GALLERY SECTION ("My Modeling Portfolio"):

- Modern editable-style image cards: images sit in rounded-corner frames with 

  a soft gold border glow; on hover, image scales smoothly, a gradient overlay 

  fades in from bottom with a category label and a small animated "view" icon 

  that slides up

- Masonry/asymmetric grid with scroll-triggered staggered reveal (each image 

  fades + rises with a slight delay cascade)

- Filter tabs (Fashion / Casual / Traditional / Lifestyle) with animated 

  underline/background pill that slides between active tabs, images animate 

  out/in (fade + scale) when filter changes

- Lightbox on click: image opens with a smooth scale-up transition, gradient-

  blurred backdrop, animated next/prev arrows

STATS STRIP:

- Numbers count up with easing animation when scrolled into view

- Each stat card has a subtle floating/breathing animation and gold glow on hover

BRAND COLLAB SECTION ("Let's Create Together"):

- Cards with animated gradient border that slowly cycles/shimmers

- On hover: card lifts with shadow, icon animates (rotate/scale), gradient 

  border intensifies

REELS SECTION:

- Video thumbnail cards with animated play button (pulsing glow ring)

- Hover: thumbnail scales, subtle gradient overlay animates in

CONTACT / CTA SECTION:

- Animated gradient background (bolder here — gold/amber blob gradient slowly 

  morphing)

- Floating shapes drifting in background

- Animated gradient CTA button with hover glow + ripple click effect

- Contact details (email, phone, location) with icon micro-animations on hover

FOOTER:

- Minimal dark footer, social icons with hover bounce + gold glow

ANIMATION PRINCIPLES (apply site-wide):

- Every section reveals with scroll-triggered staggered fade/slide-up 

  (Intersection Observer style)

- All buttons: gradient fill, hover glow/scale, click ripple, smooth easing

- All images: modern rounded frames, hover zoom/tilt, gradient overlay reveals

- Background gradients: slow, ambient, looping — never fast or jarring

- Floating shapes fill empty/negative space so no section feels static or flat

- Use easing curves (ease-in-out, spring-like) for a premium feel — nothing 

  linear or robotic

- Respect prefers-reduced-motion for accessibility (reduce/disable heavy 

  animation for users who request it)

TECHNICAL:

- Fully responsive, mobile-first — reduce animation intensity/complexity on 

  mobile for performance (simpler transitions, no heavy parallax on small 

  screens)

- Use placeholder images from Unsplash for now — I will upload my own photos 

  afterward to replace them

- Componentized code: Hero, About, Gallery, Stats, Collab, Reels, Contact, 

  Footer as separate components

- Keep animations performant (CSS transforms/opacity where possible, avoid 

  layout-thrashing animations)

Do NOT make this feel like a static template with a couple of fade-ins. Every 

section should have intentional motion — gradients drifting, shapes floating, 

buttons reacting, images responding to hover — while staying premium and 

readable, not chaotic or slow-loading.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d9b52957-8930-4eb6-8de2-03edb3b73e44).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
