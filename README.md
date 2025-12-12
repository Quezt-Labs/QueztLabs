# Quezt Labs - Premium Technology Studio Landing Page

<div align="center">

A modern, high-performance landing page for technology studios built with Next.js, TypeScript, and TailwindCSS.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## ✨ Features

### 🚀 Performance

- **95+ Lighthouse Score** on mobile devices
- **Optimized Images**: Next.js Image with AVIF/WebP support
- **Code Splitting**: Dynamic imports for below-the-fold components
- **Lazy Loading**: Components and images load on demand
- **Font Optimization**: Display swap with selective preloading
- **Reduced Motion**: Smart animation reduction on mobile devices

### 🎨 Design & UX

- **Modern UI**: Built with shadcn/ui components
- **Smooth Animations**: Framer Motion with mobile optimization
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Mode**: Built-in theme support
- **Accessible**: WCAG compliant with semantic HTML and ARIA attributes

### 🔍 SEO & Analytics

- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Search engine configuration
- **Analytics Ready**: Vercel Analytics integration

### 📱 Pages & Sections

- **Hero Section**: Eye-catching landing with CTAs
- **Services**: Showcase your offerings
- **Portfolio/Case Studies**: Display your work
- **Process**: Explain your methodology
- **Pricing**: Transparent pricing tiers
- **Testimonials**: Client feedback
- **FAQ**: Common questions
- **Contact Form**: Integrated contact API
- **Blog**: Dynamic blog posts

## 🛠️ Tech Stack

| Category          | Technology                          |
| ----------------- | ----------------------------------- |
| **Framework**     | Next.js 16 (App Router)             |
| **Language**      | TypeScript 5                        |
| **Styling**       | TailwindCSS v4                      |
| **UI Components** | shadcn/ui (Radix UI)                |
| **Animations**    | Framer Motion                       |
| **Forms**         | React Hook Form + Zod               |
| **Icons**         | Lucide React                        |
| **Fonts**         | Inter, Playfair Display, Geist Mono |
| **Email**         | Resend API                          |
| **Analytics**     | Vercel Analytics                    |

## 📁 Project Structure

```
QueztLabs/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── contact/             # Contact form API route
│   ├── blog/
│   │   ├── [slug]/              # Dynamic blog post pages
│   │   └── page.tsx             # Blog index
│   ├── case-studies/
│   │   ├── [slug]/              # Dynamic case study pages
│   │   └── page.tsx             # Case studies index
│   ├── globals.css               # Global styles & theme
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts                # Dynamic sitemap
│   └── robots.ts                 # Robots.txt config
├── components/
│   ├── layout/                   # Header, Footer
│   ├── sections/                 # Page sections (Hero, Services, etc.)
│   ├── seo/                      # JSON-LD structured data
│   └── ui/                       # Reusable UI components (shadcn/ui)
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts             # Mobile detection
│   └── use-reduced-motion.ts    # Reduced motion detection
├── lib/
│   ├── data.ts                   # Content & configuration
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets (images, icons)
└── styles/                       # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **pnpm** (recommended) or **npm**

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd QueztLabs
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local`:

   ```env
   # Optional: Contact form (Resend API)
   RESEND_API_KEY=your-resend-api-key

   # Optional: Analytics
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start

# Or use Vercel CLI
vercel
```

## 🎨 Customization

### Branding & Theme

#### 1. **Colors & Theme**

Edit `app/globals.css` to customize your color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... more colors */
}
```

#### 2. **Fonts**

Update `app/layout.tsx` to change fonts:

```typescript
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

#### 3. **Logo**

Replace logo files in `public/` and update references in:

- `components/layout/header.tsx`
- `components/layout/footer.tsx`

### Content Management

All content is centralized in `lib/data.ts`:

```typescript
// Company information
export const company = {
  name: "Quezt Labs",
  tagline: "We build digital products that matter",
  email: "hello@queztlabs.tech",
  // ...
};

// Navigation
export const navigation = {
  main: [
    /* ... */
  ],
  footer: [
    /* ... */
  ],
};

// Services, Case Studies, Blog Posts, etc.
```

**Quick Content Updates:**

- **Services**: Edit `services` array in `lib/data.ts`
- **Case Studies**: Update `caseStudies` array
- **Blog Posts**: Modify `blogPosts` array
- **Pricing**: Adjust `pricingTiers` array
- **FAQs**: Update `faqs` array

### Adding New Pages

1. **Create page file**

   ```typescript
   // app/about/page.tsx
   import { Header } from "@/components/layout/header";
   import { Footer } from "@/components/layout/footer";

   export default function AboutPage() {
     return (
       <>
         <Header />
         <main>
           {/* Your content */}
         </main>
         <Footer />
       </>
     );
   }
   ```

2. **Add navigation link**
   Update `lib/data.ts`:

   ```typescript
   export const navigation = {
     main: [
       // ... existing links
       { name: "About", href: "/about" },
     ],
   };
   ```

3. **Add metadata** (optional)
   ```typescript
   // app/about/page.tsx
   export const metadata: Metadata = {
     title: "About Us",
     description: "Learn about our team and mission",
   };
   ```

## ⚡ Performance Optimizations

This project includes several performance optimizations:

### Image Optimization

- ✅ Next.js Image component with automatic optimization
- ✅ AVIF and WebP format support
- ✅ Responsive image sizes
- ✅ Lazy loading for below-the-fold images

### Code Splitting

- ✅ Dynamic imports for heavy components
- ✅ Route-based code splitting
- ✅ Component-level lazy loading

### Font Optimization

- ✅ `display: swap` to prevent invisible text
- ✅ Selective font preloading
- ✅ Font subset optimization

### Animation Optimization

- ✅ Reduced motion on mobile devices
- ✅ Respects `prefers-reduced-motion`
- ✅ Conditional animation rendering

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 📊 Performance Benchmarks

| Metric             | Target | Status      |
| ------------------ | ------ | ----------- |
| **Performance**    | 95+    | ✅ Achieved |
| **Accessibility**  | 100    | ✅ Achieved |
| **Best Practices** | 100    | ✅ Achieved |
| **SEO**            | 100    | ✅ Achieved |

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings

3. **Deploy!**
   - Vercel automatically builds and deploys
   - Get a production URL instantly

### Other Platforms

#### Netlify

```bash
npm run build
# Deploy the .next folder
```

#### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

#### Self-Hosted

```bash
npm run build
npm run start
# Runs on port 3000 by default
```

## 🧪 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start dev server with hot reload

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

### Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**
   - Edit files in your IDE
   - Test locally with `pnpm dev`

3. **Commit changes**

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Environment Variables

| Variable            | Required | Description                    |
| ------------------- | -------- | ------------------------------ |
| `RESEND_API_KEY`    | Optional | For contact form email sending |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics tracking ID   |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📧 Support

For questions, issues, or feature requests:

- Open an issue on [GitHub](https://github.com/your-repo/issues)
- Email: hello@queztlabs.tech

---

<div align="center">

**Built with ❤️ by Quezt Labs**

[Website](https://queztlabs.tech) • [Documentation](#) • [Support](#)

</div>
