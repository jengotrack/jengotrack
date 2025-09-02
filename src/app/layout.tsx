import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JengoTrack Systems - Digital Product Development Studio",
  description: "JengoTrack Systems is a product development studio. Our flagship product, Jengo, is transforming how construction projects are managed.",
  keywords: "product development, construction management, Jengo, software development, startup studio, systems development",
  authors: [{ name: "JengoTrack Systems" }],
  creator: "JengoTrack Systems",
  publisher: "JengoTrack Systems",
  metadataBase: new URL("https://jengotrack.com"),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "JengoTrack Systems - Digital Product Development Studio",
    description: "We build digital products that solve real-world problems. Our flagship product, Jengo, is transforming construction project management.",
    url: "https://jengotrack.com",
    siteName: "JengoTrack Systems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/jengotrack.png',
        width: 1200,
        height: 630,
        alt: 'JengoTrack Systems - Digital Product Development Studio',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JengoTrack Systems - Digital Product Development Studio",
    description: "We build digital products that solve real-world problems.",
    creator: "@jengotrack",
    images: ['/jengotrack.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen flex flex-col font-sans`}
        style={{
          fontFamily: `${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`,
        }}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}