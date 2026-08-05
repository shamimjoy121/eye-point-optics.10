'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-3 bg-slate-950/60 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        
        {/* চোখের লোগো ও ব্র্যান্ড নাম */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex items-center h-16 md:h-20 flex-shrink-0">
            <img
              src="/20260703_003434898_iOS.png"
              alt="Eye Point Optics Logo"
              className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition duration-300 drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent tracking-wide leading-tight drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]">
              আই পয়েন্ট অপটিক্স
            </span>
            <span className="text-2xl md:text-3xl font-black text-white tracking-wider leading-tight">
              EYE POINT <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">OPTICS</span>
            </span>
          </div>
        </Link>

        {/* বুক আই টেস্ট বাটন */}
        <div>
          <Link
            href="/eye-test"
            className="cyan-btn text-base md:text-lg px-5 py-2.5 flex items-center gap-2"
          >
            <span>📅</span> Book Your Eye Test
          </Link>
        </div>

      </div>
    </header>
  );
}