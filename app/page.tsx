'use client';

import Link from 'next/link';

export default function HomePage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801779666030';
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/share/19GGtnt2Jr/?mibextid=wwXIfr';
  const googleMapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || 'https://share.google/Ucj4m5ivdbS9Q1mwFP';

  const contactLensColors = [
    { name: 'Natural Black', img: '👁️' },
    { name: 'Chocolate Brown', img: '👁️' },
    { name: 'Brown', img: '👁️' },
    { name: 'Light Brown', img: '👁️' },
    { name: 'Honey Brown', img: '👁️' },
    { name: 'Hazel', img: '👁️' },
    { name: 'Olive Green', img: '👁️' },
    { name: 'Green', img: '👁️' },
    { name: 'Gray', img: '👁️' },
    { name: 'Light Gray', img: '👁️' },
    { name: 'Aqua Blue', img: '👁️' },
    { name: 'Blue', img: '👁️' },
    { name: 'Gray', img: '👁️' },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f9] text-slate-800 font-sans">
      
      {/* ================= 1. TOP HEADER ================= */}
      <header className="bg-gradient-to-r from-[#030b1e] via-[#081838] to-[#030b1e] text-white py-3 px-4 md:px-10 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900 border-2 border-amber-400/50 flex items-center justify-center text-2xl shadow-lg">
              👁️
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                Eye Point Optics
              </h1>
              <p className="text-xs md:text-sm text-amber-300 font-medium tracking-wide">
                আই পয়েন্ট অপটিক্স
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/eye-test"
              className="bg-amber-500/10 border border-amber-400/40 text-amber-300 hover:bg-amber-500 hover:text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition"
            >
              📅 Book Your Eye Test
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition"
            >
              💬 01779666030 <span className="text-[10px] text-slate-300 block">We're here to help</span>
            </a>
          </div>

        </div>
      </header>

      {/* ================= 2. GRADIENT NAV BAR ================= */}
      <nav className="bg-[#0b132b] py-2.5 px-4 overflow-x-auto border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 md:gap-4 min-w-max">
          
          <Link href="/" className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold px-5 py-2 rounded-full text-xs shadow-md hover:brightness-110 flex items-center gap-2">
            🏠 Home
          </Link>

          <Link href="/frames" className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white font-semibold px-5 py-2 rounded-full text-xs shadow-md hover:brightness-110 flex items-center gap-2">
            👓 Frames
          </Link>

          <Link href="/baby-frames" className="bg-gradient-to-r from-pink-600 to-rose-700 text-white font-semibold px-5 py-2 rounded-full text-xs shadow-md hover:brightness-110 flex items-center gap-2">
            👓 Baby Frames
          </Link>

          <Link href="/sunglasses" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold px-5 py-2 rounded-full text-xs shadow-md hover:brightness-110 flex items-center gap-2">
            ☀️ Sunglasses
          </Link>

          <Link href="/power-glasses" className="bg-gradient-to-r from-emerald-700 to-green-800 text-white font-semibold px-5 py-2 rounded-full text-xs shadow-md hover:brightness-110 flex items-center gap-2">
            ⚡ Power Glasses
          </Link>

          <Link href="/contact-lenses" className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold px-5 py-2 rounded-full text-xs shadow-md hover:brightness-110 flex items-center gap-2">
            👁️ Contact Lenses
          </Link>

        </div>
      </nav>

      {/* ================= 3. HERO SECTION ================= */}
      <main className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Sidebar Menu */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2 pb-2 border-b">
              ☰ Our Collections
            </h3>
            <div className="space-y-1">
              {[
                { label: 'Frames', icon: '👓', href: '/frames' },
                { label: 'Baby Frames', icon: '👓', href: '/baby-frames' },
                { label: 'Sunglasses', icon: '🕶️', href: '/sunglasses' },
                { label: 'Power Glasses', icon: '⚡', href: '/power-glasses' },
                { label: 'Contact Lenses', icon: '👁️', href: '/contact-lenses' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-xs font-medium text-slate-700 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-slate-400 font-bold">›</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Hero Banner */}
          <div className="lg:col-span-6 bg-gradient-to-r from-sky-100 via-blue-50 to-indigo-100 rounded-2xl border border-sky-200 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="max-w-md space-y-3 z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 leading-tight">
                Clear Vision <br />
                <span className="text-blue-600">Better Tomorrow</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-600 font-medium">
                Quality Eyewear For Every Moment
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                <span className="bg-white/80 px-2.5 py-1 rounded-full shadow-sm">🛡️ Premium Quality</span>
                <span className="bg-white/80 px-2.5 py-1 rounded-full shadow-sm">🤝 Trusted Brand</span>
                <span className="bg-white/80 px-2.5 py-1 rounded-full shadow-sm">💰 Best Prices</span>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 top-0 opacity-20 lg:opacity-40 flex items-center justify-center pr-4 pointer-events-none text-9xl">
              🕶️
            </div>
          </div>

          {/* Right Card: Book Eye Test */}
          <div className="lg:col-span-3 bg-gradient-to-b from-[#0c1e3f] to-[#07132b] text-white rounded-2xl p-5 border border-blue-900/50 flex flex-col justify-between text-center shadow-md">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-300 mx-auto flex items-center justify-center text-2xl border border-blue-400/30">
                👁️
              </div>
              <h3 className="text-sm font-bold text-amber-300">Book Your Eye Test</h3>
              <p className="text-[11px] text-slate-300">Clear Vision, Better Life</p>
              
              <Link
                href="/eye-test"
                className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-lg transition text-center"
              >
                Book Now
              </Link>
            </div>

            <div className="pt-4 space-y-1.5 text-left text-[11px] text-slate-300 border-t border-slate-800 mt-4">
              <div className="flex items-center gap-2">✓ Professional Eye Test</div>
              <div className="flex items-center gap-2">✓ Accurate Results</div>
              <div className="flex items-center gap-2">✓ Trusted Service</div>
            </div>
          </div>

        </div>

        {/* ================= 4. CONTACT LENSES COLLECTION ================= */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="text-center mb-5">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider relative inline-block px-4">
              <span className="absolute left-0 top-1/2 -translate-x-full w-12 h-[1px] bg-slate-300"></span>
              Contact Lenses Collection
              <span className="absolute right-0 top-1/2 translate-x-full w-12 h-[1px] bg-slate-300"></span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {contactLensColors.map((lens, idx) => (
              <Link
                key={idx}
                href="/contact-lenses"
                className="border border-slate-200 rounded-xl p-2.5 text-center hover:border-blue-500 hover:shadow-md transition bg-slate-50/50"
              >
                <div className="h-16 bg-white rounded-lg flex items-center justify-center text-3xl mb-1.5 shadow-inner">
                  {lens.img}
                </div>
                <div className="text-[11px] font-bold text-slate-700 truncate">{lens.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= 5. BOTTOM SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Poster Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-2xl flex flex-col justify-between border border-slate-800">
            <div>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Best Quality</span>
              <h3 className="text-xl font-extrabold mt-1">Best Price<br /><span className="text-blue-400">Better Vision</span></h3>
            </div>
            <div className="text-6xl text-center py-6">👓</div>
          </div>

          {/* Why Choose Us */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Why Choose Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3 border border-slate-100">
                <span className="text-lg">🛡️</span>
                <span className="font-semibold">100% Authentic Products</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3 border border-slate-100">
                <span className="text-lg">👓</span>
                <span className="font-semibold">Wide Variety</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3 border border-slate-100">
                <span className="text-lg">✨</span>
                <span className="font-semibold">Quality You Can Trust</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3 border border-slate-100">
                <span className="text-lg">🏷️</span>
                <span className="font-semibold">Affordable Price</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* ================= 6. FOOTER ================= */}
      <footer className="bg-[#030919] text-white border-t border-slate-800 mt-10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          
          {/* 1. WhatsApp Link */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-emerald-400 transition group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xl group-hover:bg-emerald-600 group-hover:text-white transition">
              💬
            </div>
            <div>
              <div className="font-bold text-sm">01779666030</div>
              <div className="text-[11px] text-slate-400">Order on WhatsApp</div>
            </div>
          </a>

          {/* 2. Facebook Page Link */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-600 group-hover:text-white transition font-black">
              f
            </div>
            <div>
              <div className="font-bold text-sm">Eye Point Optics</div>
              <div className="text-[11px] text-slate-400">Follow Us on Facebook</div>
            </div>
          </a>

          {/* 3. Google Business / Maps Link */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-red-400 transition group"
          >
            <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 text-xl group-hover:bg-red-600 group-hover:text-white transition">
              📍
            </div>
            <div>
              <div className="font-bold text-sm">আই পয়েন্ট অপটিকস, নিকুঞ্জ-২</div>
              <div className="text-[11px] text-slate-400">Google Business / Find us on Map</div>
            </div>
          </a>

        </div>

        {/* Copyright Bar */}
        <div className="max-w-7xl mx-auto border-t border-slate-800/80 mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500">
          <p>© 2026 Eye Point Optics. All Rights Reserved.</p>
          <p className="flex items-center gap-1">Clear Vision, Better Tomorrow 💛</p>
        </div>
      </footer>

    </div>
  );
}