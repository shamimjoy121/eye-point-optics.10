'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-slate-900 border-b border-amber-500/20 sticky top-0 z-50 transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        
        {/* লোগো */}
        <Link href="/" className="flex flex-col items-start cursor-pointer select-none">
          <span className="text-xl md:text-2xl font-extrabold text-amber-500 tracking-wider">EP</span>
          <span className="text-[9px] md:text-xs font-semibold text-amber-400 tracking-[0.2em] -mt-1">EYE POINT OPTICS</span>
        </Link>

        {/* ডেস্কটপ মেনু (ল্যাপটপের জন্য) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-amber-400 font-medium text-slate-300 transition-colors text-sm tracking-widest uppercase">Home</Link>
          <Link href="/frames" className="hover:text-amber-400 font-medium text-slate-300 transition-colors text-sm tracking-widest uppercase">Frames</Link>
          <Link href="/sunglasses" className="hover:text-amber-400 font-medium text-slate-300 transition-colors text-sm tracking-widest uppercase">Sunglasses</Link>
          <Link href="/eye-test" className="hover:text-amber-400 font-medium text-slate-300 transition-colors text-sm tracking-widest uppercase">Eye Test</Link>
          <Link href="/contact" className="hover:text-amber-400 font-medium text-slate-300 transition-colors text-sm tracking-widest uppercase">Contact</Link>
        </nav>

        {/* মোবাইল মেনু বাটন (☰) - যা ক্লিক করলে মেনু খুলবে */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg border border-amber-500/30 bg-slate-800 text-amber-400 focus:outline-none"
          aria-label="Menu"
        >
          <span className={`h-0.5 w-5 bg-amber-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-amber-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-amber-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

      </div>

      {/* মোবাইল ড্রপডাউন মেনু (বাটনে চাপ দিলে এই অপশনগুলো বের হবে) */}
      <div className={`md:hidden bg-slate-900 border-t border-amber-500/20 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-4 block' : 'max-h-0 opacity-0 hidden'}`}>
        <nav className="flex flex-col px-6 gap-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-semibold text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800 tracking-widest text-xs uppercase">Home</Link>
          <Link href="/frames" onClick={() => setIsOpen(false)} className="font-semibold text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800 tracking-widest text-xs uppercase">Frames</Link>
          <Link href="/sunglasses" onClick={() => setIsOpen(false)} className="font-semibold text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800 tracking-widest text-xs uppercase">Sunglasses</Link>
          <Link href="/eye-test" onClick={() => setIsOpen(false)} className="font-semibold text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800 tracking-widest text-xs uppercase">Eye Test</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="font-semibold text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800 tracking-widest text-xs uppercase">Contact</Link>
        </nav>
      </div>
    </header>
  );
}