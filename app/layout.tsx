import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Eye Point Optics | আই পয়েন্ট অপটিক্স',
  description: 'Future of Eyewear - Best Optical Shop',
  other: {
    'google-site-verification': 'ShY5VMlsH_IcsKlLvJ7cr1Went3ixMUEcyKSU3lV3YY',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        <meta name="google-site-verification" content="ShY5VMlsH_IcsKlLvJ7cr1Went3ixMUEcyKSU3lV3YY" />
      </head>
      <body className="bg-slate-950 text-white min-h-screen">
        <Header />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}