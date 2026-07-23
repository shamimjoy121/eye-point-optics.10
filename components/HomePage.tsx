"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-950 to-black" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                👓 Premium Eye Care Since 2018
              </span>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">

                See Better.
                <br />

                <span className="text-blue-500">
                  Look Premium.
                </span>

              </h1>

              <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">

                Premium Frames, Sunglasses,
                Power Glasses, Contact Lenses
                and Professional Eye Test
                under one roof.

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
                  className="rounded-xl border border-white/20 bg-white/10 backdrop-blur px-8 py-4 hover:bg-white/20 transition"
                >
                  WhatsApp Order
                </a>

              </div>

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>

                  <h2 className="text-4xl font-black text-blue-500">
                    7+
                  </h2>

                  <p className="text-slate-400">
                    Years
                  </p>

                </div>

                <div>

                  <h2 className="text-4xl font-black text-blue-500">
                    10K+
                  </h2>

                  <p className="text-slate-400">
                    Customers
                  </p>

                </div>

                <div>

                  <h2 className="text-4xl font-black text-blue-500">
                    ★4.9
                  </h2>

                  <p className="text-slate-400">
                    Rating
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex justify-center">

              <div className="relative">

                <div className="w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-3xl absolute" />

                <div className="relative w-[420px] h-[420px] rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center">

                  <span className="text-[170px]">
                    👓
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-black text-center">

            Explore Categories

          </h2>

          <p className="text-center text-slate-400 mt-4">

            Choose your perfect eyewear

          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

            <Link
              href="/frames"
              className="rounded-3xl bg-slate-900 border border-slate-800 p-10 hover:border-blue-500 transition"
            >
              <div className="text-6xl">👓</div>

              <h3 className="text-2xl font-bold mt-8">
                Frames
              </h3>

              <p className="text-slate-400 mt-3">
                Premium Collections
              </p>

            </Link>

            <Link
              href="/sunglasses"
              className="rounded-3xl bg-slate-900 border border-slate-800 p-10 hover:border-blue-500 transition"
            >
              <div className="text-6xl">🕶️</div>

              <h3 className="text-2xl font-bold mt-8">
                Sunglasses
              </h3>

              <p className="text-slate-400 mt-3">
                UV Protection
              </p>

            </Link><Link
              href="/power-glasses"
              className="rounded-3xl bg-slate-900 border border-slate-800 p-10 hover:border-blue-500 transition"
            >
              <div className="text-6xl">🤓</div>

              <h3 className="text-2xl font-bold mt-8">
                Power Glasses
              </h3>

              <p className="text-slate-400 mt-3">
                Clear Everyday Vision
              </p>

            </Link>

            <Link
              href="/contact-lenses"
              className="rounded-3xl bg-slate-900 border border-slate-800 p-10 hover:border-blue-500 transition"
            >
              <div className="text-6xl">👁️</div>

              <h3 className="text-2xl font-bold mt-8">
                Contact Lenses
              </h3>

              <p className="text-slate-400 mt-3">
                Soft & Comfortable
              </p>

            </Link>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-slate-900 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-black text-center">
            Why Choose Eye Point Optics
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8">

              <div className="text-5xl">✅</div>

              <h3 className="text-2xl font-bold mt-6">
                Premium Quality
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                Genuine international quality frames and lenses with long-lasting durability.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8">

              <div className="text-5xl">👨‍⚕️</div>

              <h3 className="text-2xl font-bold mt-6">
                Expert Eye Test
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                Professional eye examination with modern equipment.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8">

              <div className="text-5xl">⚡</div>

              <h3 className="text-2xl font-bold mt-6">
                Fast Delivery
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                Quick order processing and reliable customer support.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8">

              <div className="text-5xl">💎</div>

              <h3 className="text-2xl font-bold mt-6">
                Luxury Collection
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                Carefully selected premium eyewear for every style.
              </p>

            </div>

          </div>

        </div>

      </section>{/* ================= FEATURED PRODUCTS ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-black text-center">
            Featured Collection
          </h2>

          <p className="text-center text-slate-400 mt-4">
            Premium Eyewear Collection
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">

              <div className="h-72 bg-slate-800 flex items-center justify-center text-7xl">
                👓
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Premium Frame
                </h3>

                <p className="text-slate-400 mt-3">
                  Lightweight TR90 Frame
                </p>

                <button className="w-full mt-6 rounded-xl bg-blue-600 py-3 font-bold hover:bg-blue-500 transition">
                  View Details
                </button>

              </div>

            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">

              <div className="h-72 bg-slate-800 flex items-center justify-center text-7xl">
                🕶️
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Sunglasses
                </h3>

                <p className="text-slate-400 mt-3">
                  Polarized UV400
                </p>

                <button className="w-full mt-6 rounded-xl bg-blue-600 py-3 font-bold hover:bg-blue-500 transition">
                  View Details
                </button>

              </div>

            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">

              <div className="h-72 bg-slate-800 flex items-center justify-center text-7xl">
                🤓
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Power Glasses
                </h3>

                <p className="text-slate-400 mt-3">
                  Blue Cut Lens
                </p>

                <button className="w-full mt-6 rounded-xl bg-blue-600 py-3 font-bold hover:bg-blue-500 transition">
                  View Details
                </button>

              </div>

            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">

              <div className="h-72 bg-slate-800 flex items-center justify-center text-7xl">
                👁️
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Contact Lens
                </h3>

                <p className="text-slate-400 mt-3">
                  Daily Comfort
                </p>

                <button className="w-full mt-6 rounded-xl bg-blue-600 py-3 font-bold hover:bg-blue-500 transition">
                  View Details
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= EYE TEST ================= */}

      <section className="bg-blue-700 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black">
            Book Your Eye Test Today
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            Professional Eye Examination by Experienced Optometrist.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <Link
              href="/eye-test"
              className="rounded-xl bg-white text-blue-700 px-8 py-4 font-bold"
            >
              Book Appointment
            </Link>

            <a
              href="https://wa.me/8801XXXXXXXXX"
              className="rounded-xl border border-white px-8 py-4 font-bold"
            >
              WhatsApp Now
            </a>

          </div>

        </div>

      </section>{/* ================= REVIEWS ================= */}

      <section className="py-24 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-black text-center">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">
              <div className="text-yellow-400 text-2xl">★★★★★</div>
              <p className="mt-6 text-slate-300">
                Excellent service and premium quality frames.
              </p>
              <h4 className="mt-6 font-bold">
                — Happy Customer
              </h4>
            </div>

            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">
              <div className="text-yellow-400 text-2xl">★★★★★</div>
              <p className="mt-6 text-slate-300">
                Professional eye test and friendly behaviour.
              </p>
              <h4 className="mt-6 font-bold">
                — Google Review
              </h4>
            </div>

            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">
              <div className="text-yellow-400 text-2xl">★★★★★</div>
              <p className="mt-6 text-slate-300">
                Best optical shop in the area.
              </p>
              <h4 className="mt-6 font-bold">
                — Regular Client
              </h4>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="py-24 bg-slate-900">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-black">
            Visit Eye Point Optics
          </h2>

          <p className="mt-6 text-slate-300">
            Nikunja-2, Dhaka
          </p>

          <p className="text-slate-400 mt-2">
            Sunday – Thursday | 6:30 PM – 9:00 PM
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-500 transition"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/8801XXXXXXXXX"
              className="rounded-xl border border-white/20 px-8 py-4 font-bold hover:bg-white/10 transition"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800 py-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400">
            © 2026 Eye Point Optics. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Premium Optical Store
          </p>

        </div>

      </footer>

    </main>
  );
}