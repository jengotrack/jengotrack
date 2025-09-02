# JengoTrack Website

A modern, mobile-first website for JengoTrack, a product development studio. Built with Next.js, TypeScript, and Tailwind CSS.

🚀 **Live Site**: [jengotrack.vercel.app](https://jengotrack.vercel.app)

## Features

- **Modern Design**: Clean, professional startup aesthetic with bold typography and orange brand colors
- **Mobile-First**: Responsive design optimized for all devices
- **Performance**: Built with Next.js App Router for optimal performance
- **Animations**: Smooth Framer Motion animations throughout
- **SEO Optimized**: Comprehensive metadata and structured content
- **Accessibility**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter (body), Poppins (headings)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── approach/          # Approach page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── about-section.tsx
│   ├── approach-section.tsx
│   ├── case-study-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   └── products-section.tsx
└── lib/
    └── utils.ts          # Utility functions
```

## Design System

### Colors
- **Primary Orange**: #F97316 (construction-inspired)
- **Charcoal**: #1E1E1E (text and accents)
- **Light Grey**: #F9FAFB (backgrounds)
- **White**: #FFFFFF (clean sections)

### Typography
- **Headings**: Poppins (bold, geometric)
- **Body**: Inter (clean, readable)

### Components
- Modern card-based layouts
- Subtle blueprint-style background graphics
- Bold CTAs with hover animations
- Progressive disclosure of information

## Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

## Environment Variables

No environment variables required for basic functionality.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

All rights reserved - JengoTrack 2024

## Contact

For questions about this website or JengoTrack services:
- Email: hello@jengotrack.com
- Website: [jengotrack.com](https://jengotrack.com)