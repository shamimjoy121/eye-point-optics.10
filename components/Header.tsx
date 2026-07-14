'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 sticky top-0 z-50 transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        
        {/* গোল্ডেন লোগো */}
        <Link href="/" className="flex flex-col items-start cursor-pointer select-none">
          <span className="text-2xl md:text-3xl font-extrabold text-amber-500 tracking-wider">EP</span>
          <span className="text-[10px] md:text-xs font-semibold text-amber-400 tracking-[0.2em] -mt-1">EYE POINT OPTICS</span>
        </Link>

        {/* ডেস্কটপ মেনু */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-amber-400 font-medium text-slate-300 transition-colors text-sm tracking-widest uppercase">Home</Link>
          <Link href="/frames" className="text-amber-400 font-bold border-b border-amber-500/50 pb-1 text-sm tracking-widest uppercase">Frames</Link>
          <Link href="/sunglasses" className="hover:text-amber-400 font-medium text-slate-300 transition-colors text-sm tracking-widest uppercase">Sunglasses</Link>
          <Link href="/eye-test" className="hover:text-amber-400 font-medium text-slate-300 transition-colors text-sm tracking-widest uppercase">Eye Test</Link>
          <Link href="/contact" className="hover:text-amber-400 font-medium text-slate-300 transition-colors text-sm tracking-widest uppercase">Contact</Link>
        </nav>

        {/* হোয়াটসঅ্যাপ বাটন */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/8801779666030" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2.5 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-600 transition-all shadow-md hover:shadow-emerald-500/20 text-xs tracking-wider uppercase"
          >
            WhatsApp
          </a>
        </div>

        {/* মোবাইল মেনু বাটন (☰) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden p-2 text-amber-400 focus:outline-none"
        >
          <span className={`h-0.5 w-6 bg-amber-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-amber-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-amber-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      <div className={`md:hidden bg-slate-950/95 border-t border-amber-500/20 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-6 shadow-inner' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col px-8 gap-5">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-semibold text-slate-300 hover:text-amber-400 py-2 border-b border-slate-800 tracking-widest uppercase text-sm">Home</Link>
          <Link href="/frames" onClick={() => setIsOpen(false)} className="font-semibold text-amber-400 py-2 border-b border-slate-800 tracking-widest uppercase text-sm">Frames</Link>
          <Link href="/sunglasses" onClick={() => setIsOpen(false)} className="font-semibold text-slate-300 hover:text-amber-400 py-2 border-b border-slate-800 tracking-widest uppercase text-sm">Sunglasses</Link>
          <Link href="/eye-test" onClick={() => setIsOpen(false)} className="font-semibold text-slate-300 hover:text-amber-400 py-2 border-b border-slate-800 tracking-widest uppercase text-sm">Eye Test</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="font-semibold text-slate-300 hover:text-amber-400 py-2 border-b border-slate-800 tracking-widest uppercase text-sm">Contact</Link>
          
          <a 
            href="https://wa.me/8801779666030" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-600 transition-all text-center mt-3 tracking-widest uppercase text-xs"
          >
            WhatsApp-এ যোগাযোগ করুন
          </a>
        </nav>
      </div>
    </header>
  );
}