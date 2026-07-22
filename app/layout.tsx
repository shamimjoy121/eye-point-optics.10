import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Eye Point Optics - Premium Eyewear & Eye Test',
  description: 'Eye Point Optics, Nikunja-2, Dhaka. Specialized Eye Test & Premium Eyewear.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Eye Point Optics (Nikunja-2). All rights reserved.
        </footer>
      </body>
    </html>
  );
}