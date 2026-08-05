'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 py-2.5 sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center md:justify-start gap-4 flex-wrap text-sm md:text-base font-semibold text-slate-200">
        
        <Link 
          href="/" 
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-xl transition shadow-lg shadow-cyan-600/30 flex items-center gap-2 font-bold"
        >
          <span>🏠</span> Home
        </Link>

        <Link 
          href="/frames" 
          className="hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-800/60 transition flex items-center gap-1.5"
        >
          👓 Frames
        </Link>

        <Link 
          href="/baby-frames" 
          className="hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-800/60 transition flex items-center gap-1.5"
        >
          👓 Baby Frames
        </Link>

        <Link 
          href="/sunglasses" 
          className="hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-800/60 transition flex items-center gap-1.5"
        >
          🕶️ Sunglasses
        </Link>

        <Link 
          href="/power-glasses" 
          className="hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-800/60 transition flex items-center gap-1.5"
        >
          ⚡ Power Glasses
        </Link>

        <Link 
          href="/contact-lenses" 
          className="hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-800/60 transition flex items-center gap-1.5"
        >
          👁️ Contact Lenses
        </Link>

        <Link 
          href="/accessories" 
          className="hover:text-cyan-400 border border-amber-500/40 text-amber-300 px-3 py-2 rounded-lg hover:bg-amber-500/10 transition flex items-center gap-1.5"
        >
          👝 Accessories
        </Link>

      </div>
    </nav>
  );
}