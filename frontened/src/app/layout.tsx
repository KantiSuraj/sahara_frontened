
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sahara ecommerce',
  description: 'Next.js App with Auth and Site groups',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
  
}


