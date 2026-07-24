"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-950 to-black" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                👓 Premium Eye Care Since 2018
              </span>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
                See Better.
                <br />
                <span className="text-blue-500">Look Premium.</span>
              </h1>

              <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
                Premium Frames, Sunglasses, Power Glasses, Contact Lenses and
                Professional Eye Test under one roof.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/frames"
                  className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-500 transition"
                >
                  View Frames
                </Link>

                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 hover:bg-white/20 transition"
                >
                  WhatsApp Order
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-9xl">
                👓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center">
            Explore Categories
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
            <Link
              href="/frames"
              className="rounded-3xl bg-slate-900 p-8 border border-slate-800 hover:border-blue-500"
            >
              👓
              <h3 className="text-2xl font-bold mt-4">Frames</h3>
            </Link>

            <Link
              href="/sunglasses"
              className="rounded-3xl bg-slate-900 p-8 border border-slate-800 hover:border-blue-500"
            >
              🕶️
              <h3 className="text-2xl font-bold mt-4">Sunglasses</h3>
            </Link>

            <Link
              href="/power-glasses"
              className="rounded-3xl bg-slate-900 p-8 border border-slate-800 hover:border-blue-500"
            >
              🤓
              <h3 className="text-2xl font-bold mt-4">Power Glasses</h3>
            </Link>

            <Link
              href="/contact-lenses"
              className="rounded-3xl bg-slate-900 p-8 border border-slate-800 hover:border-blue-500"
            >
              👁️
              <h3 className="text-2xl font-bold mt-4">Contact Lenses</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        © 2026 Eye Point Optics. All Rights Reserved.
      </footer>
    </main>
  );
}