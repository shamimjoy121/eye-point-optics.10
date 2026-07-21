'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '../../../supabaseClient';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
  description?: string;
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // আপনার WhatsApp নম্বর
  const whatsappNumber = '8801779666030';

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!params?.id) return;

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setProduct(data);
      }

      setLoading(false);
    };

    fetchProductDetails();
  }, [params?.id]);

  const handleWhatsAppOrder = () => {
    if (!product) return;

    const text = encodeURIComponent(
      `হ্যালো EP OPTICS!

আমি এই পণ্যটি অর্ডার করতে চাই।

🛍️ নাম: ${product.name}
💰 দাম: ৳${product.price}
🖼️ ছবি: ${product.img}`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      '_blank'
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white gap-4">
        <h2>Product not found</h2>

        <button
          onClick={() => router.push('/')}
          className="bg-blue-600 px-5 py-2 rounded-lg"
        >
          Home
        </button>
      </div>
    );
  }

  return (<div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-b-2xl">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <span className="text-2xl">👓</span>
          <span className="font-black tracking-wider text-xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            EP OPTICS
          </span>
        </div>

        <button
          onClick={() => router.back()}
          className="text-sm text-slate-400 hover:text-white transition"
        >
          ⬅️ ফিরে যান
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">

          <div className="bg-slate-950 rounded-2xl p-6 flex items-center justify-center border border-slate-800/60 min-h-[350px] cursor-zoom-in">
            <Zoom>
              <img
                src={product.img}
                alt={product.name}
                className="max-h-80 max-w-full object-contain rounded-xl"
              />
            </Zoom>
          </div>

          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-blue-900/40 border border-blue-800/60 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase">
                {product.category} Collection
              </span>

              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                {product.name}
              </h1>

              <p className="text-3xl font-black text-blue-400">
                ৳{product.price}
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  চশমার বিবরণ ও বৈশিষ্ট্য
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {product.description ??
                    'এটি একটি প্রিমিয়াম কোয়ালিটির আসল চশমা। এর ফ্রেমটি অত্যন্ত লাইটওয়েট এবং মজবুত। UV Protection গ্লাস ব্যবহৃত হয়েছে।'}
                </p>
              </div>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-2xl transition flex items-center justify-center gap-3 text-base"
            >
              💬 WhatsApp এ অর্ডার করুন
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}