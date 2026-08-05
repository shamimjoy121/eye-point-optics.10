import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Eye Point Optics | আই পয়েন্ট অপটিক্স',
  description: 'Future of Eyewear - Best Optical Shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-slate-950 text-white min-h-screen">
        <Header />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}