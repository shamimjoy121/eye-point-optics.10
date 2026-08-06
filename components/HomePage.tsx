'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string;
  featured: boolean;
}

export default function HomePage() {
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Supabase থেকে পপুলার প্রোডাক্ট ফেচ করার ইফেক্ট
  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('featured', true);

        if (error) throw error;
        if (data) setPopularProducts(data);
      } catch (err) {
        console.error('Error fetching popular products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularProducts();
  }, []);

  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-[#080d1a]">
      {/* Background Cyan Glow Shapes */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold tracking-wider mb-4 uppercase">
                  Future of Eyewear
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight text-white tracking-wide">
                  EYE POINT <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">OPTICS</span>
                  <br />
                  <span className="text-cyan-300 text-3xl md:text-5xl font-black mt-2 block">
                    আই পয়েন্ট অপটিক্স
                  </span>
                </h1>

                <p className="mt-4 text-slate-300 text-base md:text-lg">
                  Handcrafted lenses and advanced frame designs for exceptional clarity and style.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/eye-test"
                    className="cyan-btn text-lg px-8 py-4 flex items-center gap-2"
                  >
                    <span>📅</span> Book Your Eye Test
                  </Link>

                  <a
                    href="https://wa.me/8801779666030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500 hover:text-white font-bold text-lg px-8 py-4 transition shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center gap-2 backdrop-blur-md"
                  >
                    <span>💬</span> WhatsApp Order
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-slate-900/40 border border-cyan-400/30 flex items-center justify-center text-8xl md:text-9xl shadow-[0_0_30px_rgba(56,189,248,0.2)] backdrop-blur-xl hover:scale-105 transition duration-500">
                  👓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 Popular Products Section (এখন দেখাবে!) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 border-b border-cyan-500/20 pb-4">
            <span className="text-3xl text-yellow-400">🌟</span>
            <h2 className="text-3xl md:text-4xl font-black text-yellow-300 tracking-wide">
              Popular Products
            </h2>
          </div>

          {loading ? (
            <div className="text-center py-10 text-slate-400 font-semibold">
              ⏳ Loading Popular Products...
            </div>
          ) : popularProducts.length === 0 ? (
            <div className="text-center py-10 text-slate-400 font-semibold bg-slate-900/50 rounded-2xl border border-slate-800">
              কোনো Popular Product যুক্ত করা হয়নি। Admin Panel থেকে "Popular Product (হোম পেজে দেখাবে)" সিলেক্ট করে প্রোডাক্ট যোগ করুন।
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {popularProducts.map((product) => (
                <div
                  key={product.id}
                  className="glass-panel p-4 rounded-2xl border border-cyan-500/30 hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
                >
                  <div className="w-full h-48 bg-slate-900 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-slate-800">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl">👓</span>
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xl font-black text-emerald-400 mb-4">
                      ৳ {product.price}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/8801779666030?text=Hello,%20I%20want%20to%20buy%20${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-center text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                  >
                    <span>💬</span> Order via WhatsApp
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ☰ Our Collections / Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 border-b border-cyan-500/20 pb-4">
            <span className="text-3xl text-cyan-400">☰</span>
            <h2 className="text-3xl md:text-4xl font-black text-cyan-300 tracking-wide">
              Our Collections
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frames */}
            <Link
              href="/frames"
              className="group glass-panel p-6 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">👓</div>
              <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition">
                Frames
              </h3>
              <p className="text-slate-300 font-bold text-base mt-2">
                (১) মেটাল ফ্রেম  |  (২) প্রিমিয়াম প্লাস্টিক ফ্রেম (Acetate)
              </p>
            </Link>

            {/* Baby Frames */}
            <Link
              href="/baby-frames"
              className="group glass-panel p-6 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">👓</div>
              <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition">
                Baby Frames
              </h3>
              <p className="text-slate-300 font-bold text-base mt-2">
                (১) ছেলে  |  (২) মেয়ে
              </p>
            </Link>

            {/* Sunglasses */}
            <Link
              href="/sunglasses"
              className="group glass-panel p-6 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">☀️</div>
              <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition">
                Sunglasses
              </h3>
              <p className="text-slate-300 font-bold text-base mt-2">
                (১) ছেলে  |  (২) মেয়ে
              </p>
            </Link>

            {/* Power Glasses */}
            <Link
              href="/power-glasses"
              className="group glass-panel p-6 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">⚡</div>
              <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition">
                Power Glasses
              </h3>
              <p className="text-slate-300 font-bold text-base mt-2">
                পাওয়ার গ্লাস কালেকশন
              </p>
            </Link>

            {/* Contact Lenses */}
            <Link
              href="/contact-lenses"
              className="group glass-panel p-6 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">👁️</div>
              <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition">
                Contact Lenses
              </h3>
              <p className="text-slate-300 font-bold text-base mt-2">
                কন্টাক্ট লেন্স কালেকশন
              </p>
            </Link>

            {/* Accessories */}
            <Link
              href="/accessories"
              className="group glass-panel p-6 hover:-translate-y-1 transition duration-300 border-cyan-400/40"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">👜</div>
              <h3 className="text-2xl font-black text-cyan-400 group-hover:text-cyan-300 transition">
                Accessories
              </h3>
              <p className="text-slate-300 font-bold text-base mt-2">
                আইওয়্যার এক্সেসরিজ
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-10 text-center relative z-10 space-y-3 bg-slate-950/60 backdrop-blur-md">
        <p className="text-slate-300 font-bold text-base md:text-lg">
          ©️ 2018 Eye Point Optics. All Rights Reserved.
        </p>
        <p className="text-cyan-400 font-extrabold text-lg md:text-xl drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
          Clear Vision, Better Tomorrow 💙
        </p>
      </footer>
    </main>
  );
}