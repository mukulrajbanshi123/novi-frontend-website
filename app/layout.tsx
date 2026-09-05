import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import './globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Novi: Run your team without the tab switching',
    template: '%s | Novi',
  },
  description:
    "Bring your team's work together in one place and get more done without the tab switching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
