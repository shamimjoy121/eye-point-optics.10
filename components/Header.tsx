'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* লোগো */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition">
            EP
          </div>
          <span className="text-xl font-extrabold text-white tracking-wider">
            EYE POINT <span className="text-blue-500">OPTICS</span>
          </span>
        </Link>

        {/* নেভিগেশন মেনু */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/frames" className="hover:text-blue-400 transition">
            Frames
          </Link>
          <Link href="/sunglasses" className="hover:text-blue-400 transition">
            Sunglasses
          </Link>
          <Link href="/eye-test" className="hover:text-blue-400 transition">
            Eye Test
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        {/* বুকিং বাটন */}
        <Link
          href="/eye-test"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition shadow-lg shadow-blue-600/30"
        >
          Book Eye Test
        </Link>
      </div>
    </header>
  );
}