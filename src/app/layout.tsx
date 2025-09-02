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
  title: "JengoTrack - Digital Product Development Studio",
  description: "JengoTrack is a product development studio. Our flagship product, Jengo, is transforming how construction projects are managed.",
  keywords: "product development, construction management, Jengo, software development, startup studio",
  authors: [{ name: "JengoTrack" }],
  creator: "JengoTrack",
  publisher: "JengoTrack",
  metadataBase: new URL("https://jengotrack.com"),
  openGraph: {
    title: "JengoTrack - Digital Product Development Studio",
    description: "We build digital products that solve real-world problems. Our flagship product, Jengo, is transforming construction project management.",
    url: "https://jengotrack.com",
    siteName: "JengoTrack",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JengoTrack - Digital Product Development Studio",
    description: "We build digital products that solve real-world problems.",
    creator: "@jengotrack",
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
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen flex flex-col`}
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
