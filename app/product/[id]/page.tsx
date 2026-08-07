'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '../../../supabaseClient';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  category: string;
  description?: string;
  standard_images_urls?: string[];
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // জুম মোডাল এবং থাম্বনেইল স্টেট
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  // WhatsApp নম্বর
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
        setSelectedImageUrl(data.image_url);
      }

      setLoading(false);
    };

    fetchProductDetails();
  }, [params?.id]);

  const handleWhatsAppOrder = () => {
    if (!product) return;

    const text = encodeURIComponent(
      `হ্যালো EP OPTICS!\n\nআমি এই পণ্যটি অর্ডার করতে চাই।\n\n🛍️ নাম: ${product.name}\n💰 দাম: ৳${product.price}\n🖼️ ছবি: ${selectedImageUrl || product.image_url}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
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
          className="bg-blue-600 px-5 py-2 rounded-lg text-white"
        >
          Home
        </button>
      </div>
    );
  }

  const productImages = product.image_url ? [product.image_url] : ['/placeholder.png'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
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

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 md:p-10">

          {/* বড় ছবি সেকশন */}
          <div className="space-y-6 flex flex-col items-center">
            <div
              onClick={() => setIsFullScreen(true)}
              className="relative w-full max-w-lg aspect-square bg-white rounded-3xl p-6 flex flex-col items-center justify-center border border-slate-800/60 shadow-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={selectedImageUrl || product.image_url || '/placeholder.png'}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullScreen(true);
                }}
                className="absolute bottom-4 right-4 text-xs text-black bg-white/80 hover:bg-white px-3 py-1.5 rounded-full border border-black/20 shadow-md transition flex items-center gap-1.5 font-medium"
              >
                🔍 বড় করে দেখুন
              </button>
            </div>

            {/* থাম্বনেইল ছবি */}
            <div className="flex gap-4 items-center justify-center pt-2 max-w-md w-full">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageUrl(img)}
                  className={`w-20 md:w-24 aspect-square bg-white p-2 rounded-2xl border-2 transition overflow-hidden shadow-md ${
                    selectedImageUrl === img ? 'border-emerald-500 ring-2 ring-emerald-500/30' : 'border-slate-800'
                  }`}
                >
                  <img
                    src={img}
                    alt={`thumbnail-${index}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* বিবরণ ও অর্ডার সেকশন */}
          <div className="flex flex-col justify-between space-y-8 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
            <div className="space-y-6">
              <span className="px-3 py-1 bg-emerald-900/40 border border-emerald-800/60 rounded-full text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                {product.category} Collection
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                {product.name}
              </h1>

              <div className="space-y-1">
                <p className="text-4xl font-black text-emerald-400">
                  ৳{product.price}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest">
                  চশমার বিবরণ ও বৈশিষ্ট্য
                </h4>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {product.description ??
                    'এটি একটি প্রিমিয়াম কোয়ালিটির আসল চশমা। এর ফ্রেমটি অত্যন্ত লাইটওয়েট এবং মজবুত। UV Protection গ্লাস ব্যবহৃত হয়েছে।'}
                </p>
              </div>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-2xl transition flex items-center justify-center gap-3 text-lg shadow-lg"
            >
              💬 WhatsApp এ অর্ডার করুন
            </button>
          </div>

        </div>
      </main>

      {/* ফুল স্ক্রিন পপআপ (Lightbox Zoom) */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-10"
          onClick={() => setIsFullScreen(false)}
        >
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-6 right-6 text-white text-2xl font-bold bg-slate-800/80 hover:bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center border border-slate-600 transition z-10"
          >
            ✕
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] flex items-center justify-center p-4 bg-white rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImageUrl || product.image_url || '/placeholder.png'}
              alt={product.name}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />
          </div>

          <p className="mt-4 text-sm text-slate-400">
            বন্ধ করতে যেকোনো স্থানে ক্লিক করুন
          </p>
        </div>
      )}
    </div>
  );
}