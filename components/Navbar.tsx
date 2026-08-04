'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-16 z-40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* 🏠 Home বাটন ও Our Collections */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg md:text-xl px-5 py-2 rounded-xl transition shadow-md shadow-blue-600/30"
            >
              <span>🏠</span>
              <span>Home</span>
            </Link>

            <div className="hidden xl:flex items-center gap-2 text-yellow-400 font-black text-lg border-l border-slate-800 pl-4">
              <span className="text-2xl">☰</span>
              <span>Our Collections</span>
            </div>
          </div>

          {/* ডেস্কটপ মেনুবার */}
          <div className="hidden lg:flex items-center gap-5 font-black text-base md:text-lg text-white">
            
            {/* 👓 Frames ড্রপডাউন */}
            <div className="relative group py-4">
              <button className="flex items-center gap-1.5 hover:text-yellow-400 transition cursor-pointer">
                <span>👓</span> Frames <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-50">
                <Link
                  href="/frames?type=metal"
                  className="block px-4 py-2.5 rounded-lg text-white hover:bg-blue-600 font-bold text-base transition"
                >
                  (১) মেটাল ফ্রেম
                </Link>
                <Link
                  href="/frames?type=acetate"
                  className="block px-4 py-2.5 rounded-lg text-white hover:bg-blue-600 font-bold text-base transition mt-1"
                >
                  (২) প্রিমিয়াম প্লাস্টিক ফ্রেম (Acetate)
                </Link>
              </div>
            </div>

            {/* 👓 Baby Frames ড্রপডাউন */}
            <div className="relative group py-4">
              <button className="flex items-center gap-1.5 hover:text-yellow-400 transition cursor-pointer">
                <span>👓</span> Baby Frames <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-50">
                <Link
                  href="/baby-frames?gender=boy"
                  className="block px-4 py-2.5 rounded-lg text-white hover:bg-blue-600 font-bold text-base transition"
                >
                  (১) ছেলে
                </Link>
                <Link
                  href="/baby-frames?gender=girl"
                  className="block px-4 py-2.5 rounded-lg text-white hover:bg-blue-600 font-bold text-base transition mt-1"
                >
                  (২) মেয়ে
                </Link>
              </div>
            </div>

            {/* ☀️ Sunglasses ড্রপডাউন */}
            <div className="relative group py-4">
              <button className="flex items-center gap-1.5 hover:text-yellow-400 transition cursor-pointer">
                <span>☀️</span> Sunglasses <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-50">
                <Link
                  href="/sunglasses?gender=boy"
                  className="block px-4 py-2.5 rounded-lg text-white hover:bg-blue-600 font-bold text-base transition"
                >
                  (১) ছেলে
                </Link>
                <Link
                  href="/sunglasses?gender=girl"
                  className="block px-4 py-2.5 rounded-lg text-white hover:bg-blue-600 font-bold text-base transition mt-1"
                >
                  (২) মেয়ে
                </Link>
              </div>
            </div>

            {/* ⚡ Power Glasses */}
            <Link
              href="/power-glasses"
              className="hover:text-yellow-400 transition flex items-center gap-1 py-4"
            >
              <span>⚡</span> Power Glasses
            </Link>

            {/* 👁️ Contact Lenses */}
            <Link
              href="/contact-lenses"
              className="hover:text-yellow-400 transition flex items-center gap-1 py-4"
            >
              <span>👁️</span> Contact Lenses
            </Link>

            {/* 👜 Accessories (নতুন মেনু) */}
            <Link
              href="/accessories"
              className="text-yellow-400 hover:text-yellow-300 transition flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-yellow-500/40"
            >
              <span>👜</span> Accessories
            </Link>

          </div>

          {/* মোবাইল মেনু বাটন */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white font-bold bg-slate-800 px-3 py-2 rounded-lg flex items-center gap-2 border border-slate-700"
          >
            <span>☰</span> Menu
          </button>
        </div>

        {/* মোবাইল মেনু ভিউ */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-3 font-bold text-white text-base">
            <div>
              <p className="text-yellow-400 mb-1">👓 Frames</p>
              <div className="pl-4 space-y-1">
                <Link href="/frames?type=metal" className="block py-1 hover:text-blue-400">(১) মেটাল ফ্রেম</Link>
                <Link href="/frames?type=acetate" className="block py-1 hover:text-blue-400">(২) প্রিমিয়াম প্লাস্টিক ফ্রেম (Acetate)</Link>
              </div>
            </div>

            <div>
              <p className="text-yellow-400 mb-1">👓 Baby Frames</p>
              <div className="pl-4 space-y-1">
                <Link href="/baby-frames?gender=boy" className="block py-1 hover:text-blue-400">(১) ছেলে</Link>
                <Link href="/baby-frames?gender=girl" className="block py-1 hover:text-blue-400">(২) মেয়ে</Link>
              </div>
            </div>

            <div>
              <p className="text-yellow-400 mb-1">☀️ Sunglasses</p>
              <div className="pl-4 space-y-1">
                <Link href="/sunglasses?gender=boy" className="block py-1 hover:text-blue-400">(১) ছেলে</Link>
                <Link href="/sunglasses?gender=girl" className="block py-1 hover:text-blue-400">(২) মেয়ে</Link>
              </div>
            </div>

            <Link href="/power-glasses" className="block py-1 text-white hover:text-blue-400">⚡ Power Glasses</Link>
            <Link href="/contact-lenses" className="block py-1 text-white hover:text-blue-400">👁️ Contact Lenses</Link>
            <Link href="/accessories" className="block py-1 text-yellow-400 hover:text-yellow-300">👜 Accessories</Link>
          </div>
        )}
      </div>
    </nav>
  );
}