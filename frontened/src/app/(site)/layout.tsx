import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
// import ClientBody from "./ClientBody";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from './components/theme-provider';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://same-kiwt2dug02r-latest.netlify.app'),
  title: "Sahara - Multi-vendor eCommerce Store",
  description: "Discover the best collection of fashion, electronics, and accessories at Sahara, your one-stop multi-vendor eCommerce marketplace",
  keywords: ["ecommerce", "online shopping", "multi-vendor", "fashion", "electronics", "marketplace"],
  authors: [{ name: "Sahara Team" }],
  creator: "Sahara",
  publisher: "Sahara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_India",
    url: "https://same-kiwt2dug02r-latest.netlify.app",
    title: "Sahara - Multi-vendor eCommerce Store",
    description: "Explore our handpicked selection of fresh produce, pantry staples, and daily essentials  From farm-fresh fruits to gourmet treats, find everything you need to nourish your home and lifestyle",
    siteName: "Sahara eCommerce",
    images: [
      {
        url: "https://ext.same-assets.com/3049334603/2369812464.jpeg",
        width: 1200,
        height: 630,
        alt: "Sahara eCommerce Storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahara - Multi-vendor eCommerce Store",
    description: "Explore our handpicked selection of fresh produce, pantry staples, and daily essentials.From farm-fresh fruits to gourmet treats, find everything you need to nourish your home and lifestyle",
    images: ["https://ext.same-assets.com/3049334603/2369812464.jpeg"],
    creator: ".Sahara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
