'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-black opacity-90" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-white tracking-wide">
                EYE POINT <span className="text-blue-500">OPTICS</span>
                <br />
                <span className="text-yellow-400 text-3xl md:text-5xl font-black mt-2 block">
                  আই পয়েন্ট অপটিক্স
                </span>
              </h1>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/eye-test"
                  className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-lg px-8 py-4 transition shadow-lg shadow-blue-600/40 flex items-center gap-2"
                >
                  <span>📅</span> Book Your Eye Test
                </Link>

                <a
                  href="https://wa.me/8801779666030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border-2 border-emerald-500 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white font-black text-lg px-8 py-4 transition flex items-center gap-2"
                >
                  <span>💬</span> WhatsApp Order
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-3xl bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-8xl md:text-9xl shadow-2xl shadow-blue-500/10">
                👓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ☰ Our Collections / Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-4">
            <span className="text-3xl text-yellow-400">☰</span>
            <h2 className="text-3xl md:text-4xl font-black text-yellow-400 tracking-wide">
              Our Collections
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frames */}
            <Link
              href="/frames"
              className="group rounded-2xl bg-slate-900 p-6 border-2 border-slate-800 hover:border-blue-500 transition shadow-lg"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">👓</div>
              <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition">
                Frames
              </h3>
              <p className="text-slate-400 font-bold text-base mt-2">
                (১) মেটাল ফ্রেম  |  (২) প্রিমিয়াম প্লাস্টিক ফ্রেম (Acetate)
              </p>
            </Link>

            {/* Baby Frames */}
            <Link
              href="/baby-frames"
              className="group rounded-2xl bg-slate-900 p-6 border-2 border-slate-800 hover:border-blue-500 transition shadow-lg"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">👓</div>
              <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition">
                Baby Frames
              </h3>
              <p className="text-slate-400 font-bold text-base mt-2">
                (১) ছেলে  |  (২) মেয়ে
              </p>
            </Link>

            {/* Sunglasses */}
            <Link
              href="/sunglasses"
              className="group rounded-2xl bg-slate-900 p-6 border-2 border-slate-800 hover:border-blue-500 transition shadow-lg"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">☀️</div>
              <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition">
                Sunglasses
              </h3>
              <p className="text-slate-400 font-bold text-base mt-2">
                (১) ছেলে  |  (২) মেয়ে
              </p>
            </Link>

            {/* Power Glasses */}
            <Link
              href="/power-glasses"
              className="group rounded-2xl bg-slate-900 p-6 border-2 border-slate-800 hover:border-blue-500 transition shadow-lg"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">⚡</div>
              <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition">
                Power Glasses
              </h3>
              <p className="text-slate-400 font-bold text-base mt-2">
                পাওয়ার গ্লাস কালেকশন
              </p>
            </Link>

            {/* Contact Lenses */}
            <Link
              href="/contact-lenses"
              className="group rounded-2xl bg-slate-900 p-6 border-2 border-slate-800 hover:border-blue-500 transition shadow-lg"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">👁️</div>
              <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition">
                Contact Lenses
              </h3>
              <p className="text-slate-400 font-bold text-base mt-2">
                কন্টাক্ট লেন্স কালেকশন
              </p>
            </Link>

            {/* Accessories (নতুন) */}
            <Link
              href="/accessories"
              className="group rounded-2xl bg-slate-900 p-6 border-2 border-slate-800 hover:border-yellow-500 transition shadow-lg"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">👜</div>
              <h3 className="text-2xl font-black text-yellow-400 group-hover:text-yellow-300 transition">
                Accessories
              </h3>
              <p className="text-slate-400 font-bold text-base mt-2">
                আইওয়্যার এক্সেসরিজ
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center bg-slate-950 space-y-3">
        <p className="text-slate-300 font-bold text-base md:text-lg">
          ©️ 2018 Eye Point Optics. All Rights Reserved.
        </p>
        <p className="text-yellow-400 font-extrabold text-lg md:text-xl">
          Clear Vision, Better Tomorrow 💛
        </p>
      </footer>
    </main>
  );
}