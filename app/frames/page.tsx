'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { supabase } from '../../supabaseClient';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export default function FramesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const whatsappNumber = '8801779666030';

  useEffect(() => {
    const fetchFrames = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'frames')
          .order('id', { ascending: false });

        if (error) throw error;

        setProducts(data ?? []);
      } catch (error) {
        console.error('Error fetching frames:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFrames();
  }, []);

  const handleWhatsAppOrder = (
    productName: string,
    productPrice: number,
    productImg: string
  ) => {
    const rawText =
      `হ্যালো EP OPTICS!\n\n` +
      `আমি ফ্রেমস পেজ থেকে এই প্রোডাক্টটি অর্ডার করতে চাই:\n\n` +
      `🛍️ নাম: ${productName}\n` +
      `💰 দাম: ৳${productPrice}\n` +
      `🔗 ছবি: ${productImg}\n\n` +
      `দয়া করে অর্ডারটি কনফার্ম করুন।`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      rawText
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <p className="text-sm tracking-wide">
          ⏳ আমাদের ফ্রেম কালেকশন লোড হচ্ছে...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-b-2xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👓</span>
          <span className="font-black tracking-wider text-xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            EP OPTICS
          </span>
        </div>

        <nav className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="/" className="hover:text-slate-200 transition">
            HOME
          </a>

          <a href="/frames" className="text-blue-400 transition">
            FRAMES
          </a>

          <a href="/sunglasses" className="hover:text-slate-200 transition">
            SUNGLASSES
          </a>

          <a href="/eye-test" className="hover:text-slate-200 transition">
            EYE TEST
          </a>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16 space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            👓 প্রিমিয়াম ফ্রেম কালেকশন
          </h1>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-slate-500 py-12">
            বর্তমানে কোনো ফ্রেম লাইভ নেই।
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition flex flex-col justify-between group"
              >
                <div className="flex-1 flex flex-col justify-between">
                  <div className="bg-slate-950 p-4 flex items-center justify-center h-56 relative border-b border-slate-800/40">
                    <Zoom zoomMargin={10}>
                      <img
                        src={product.img}
                        alt={product.name}
                        className="max-h-52 max-w-full object-contain rounded-lg cursor-zoom-in transition duration-300 group-hover:scale-105"
                      />
                    </Zoom>
                  </div>

                  <Link
                    href={`/product/${product.id}`}
                    className="p-5 block"
                  >
                    <h3 className="text-base font-bold text-white truncate group-hover:text-blue-400 transition">
                      {product.name}
                    </h3>

                    <p className="text-xl font-black text-blue-400 mt-1">
                      ৳{product.price}
                    </p>

                    <span className="text-xs text-slate-500 underline mt-2 block group-hover:text-slate-400 transition">
                      🔍 খুঁটিনাটি বিবরণ দেখুন
                    </span>
                  </Link>
                </div>

                <div className="px-5 pb-5">
                  <button
                    type="button"
                    onClick={() =>
                      handleWhatsAppOrder(
                        product.name,
                        product.price,
                        product.img
                      )
                    }
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <span>💬</span>
                    হোয়াটসঅ্যাপে অর্ডার করুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}