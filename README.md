# Portfolio — Kumari Rupam

A premium, animated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, Three.js, Framer Motion, GSAP, and shadcn/ui.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4)

## ✨ Features

- 🎨 **Premium Dark Mode UI** — Glassmorphism, gradient accents, noise texture
- 🌐 **3D Hero Scene** — Three.js particle field & floating geometry via React Three Fiber
- 🎬 **Animations** — Framer Motion entrance animations, GSAP text reveals, scroll-triggered effects
- 📱 **Fully Responsive** — Mobile, tablet, laptop, desktop
- 🖱️ **Custom Cursor** — Spring-animated dot & ring cursor
- 🔄 **Smooth Scrolling** — Lenis-powered butter-smooth scroll
- 🏆 **Awards Section** — Best QA Award showcase with testimonial
- 📧 **Contact Form** — Animated form with validation
- 🔍 **SEO Optimized** — Open Graph, Twitter cards, meta descriptions
- ⚡ **Performance** — Static generation, optimized images, code splitting

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion, GSAP |
| 3D | Three.js, React Three Fiber, Drei |
| Scroll | Lenis |
| Icons | Lucide React |
| Theme | next-themes |
| Linting | ESLint, Prettier |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Design system & custom styles
│   ├── layout.tsx          # Root layout with SEO
│   ├── loading.tsx         # Loading animation
│   └── page.tsx            # Main page
├── components/
│   ├── animations/         # FadeIn, TextReveal, MagneticButton
│   ├── layout/             # Navbar, Footer, SmoothScroll
│   ├── sections/           # Hero, About, Experience, Skills, Projects, Achievements, Contact
│   ├── three/              # ParticleField, FloatingGeometry, HeroScene
│   └── ui/                 # Social icons
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & constants
└── types/                  # TypeScript definitions
```

## 📝 Customization

Edit `src/lib/constants.ts` to update:
- Personal information
- Experience entries
- Project showcases
- Skills & proficiency levels
- Achievements & awards
- Social links

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

Built with ❤️ by Kumari Rupam
