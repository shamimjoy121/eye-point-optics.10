'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 py-3 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* চোখের লোগো ও ব্র্যান্ড নাম */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
            <Image
              src="/image.png"
              alt="Eye Point Optics Logo"
              width={56}
              height={56}
              className="object-contain group-hover:scale-105 transition"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-black text-white tracking-wider leading-tight">
              EYE POINT <span className="text-blue-500">OPTICS</span>
            </span>
            <span className="text-lg md:text-xl font-black text-yellow-400">
              আই পয়েন্ট অপটিক্স
            </span>
          </div>
        </Link>

        {/* ফোন নম্বর ও বুকিং বাটন */}
        <div className="flex items-center gap-3 md:gap-5 flex-wrap justify-center">
          {/* ফোন নম্বর */}
          <div className="flex items-center gap-2 text-white font-bold text-base md:text-lg bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 shadow-inner">
            <span className="text-xl">💬</span>
            <a href="tel:01779666030" className="hover:text-blue-400 transition">01779666030</a>
            <span className="text-slate-500">|</span>
            <a href="tel:01907440365" className="hover:text-blue-400 transition">০১৯০৭৪৪০৩৬৫</a>
          </div>

          {/* বুক আই টেস্ট বাটন */}
          <Link
            href="/eye-test"
            className="bg-blue-600 hover:bg-blue-500 text-white font-black text-base md:text-lg px-5 py-2.5 rounded-xl transition shadow-lg shadow-blue-600/40 flex items-center gap-2"
          >
            <span>📅</span> Book Your Eye Test
          </Link>
        </div>

      </div>
    </header>
  );
}