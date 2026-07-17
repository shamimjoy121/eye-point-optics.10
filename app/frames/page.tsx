'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient'; 
import Link from 'next/link'; 

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

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

  // ⚠️ আপনার সঠিক হোয়াটস্অ্যাপ নম্বরটি এখানে দিন
  const whatsappNumber = "8801779666030"; 

  useEffect(() => {
    const fetchFrames = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'frames')
          .order('id', { ascending: false });

        if (error) throw error;
        if (data) setProducts(data);
      } catch (error: any) {
        console.error('Error fetching frames:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFrames();
  }, []);

  const handleWhatsAppOrder = (productName: string, productPrice: number, productImg: string) => {
    const rawText = 
      "হ্যালো EP OPTICS!\n\n" +
      "আমি চশমার ফ্রেম পেজ থেকে এই প্রোডাক্টটি অর্ডার করতে চাই:\n\n" +
      "🛍️ *নাম:* " + productName + "\n" +
      "💰 *দাম:* ৳" + productPrice + "\n" +
      "🔗 *ছবি:* " + productImg + "\n\n" +
      "দয়া করে অর্ডারটি কনফার্ম করুন।";
    
    const encodedText = encodeURIComponent(rawText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <p className="text-sm tracking-wide">⏳ আমাদের ফ্রেম কালেকশন লোড হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* হেডার / নেভিগেশন */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-b-2xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👓</span>
          <span className="font-black tracking-wider text-xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">EP OPTICS</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="/" className="hover:text-slate-200 transition">HOME</a>
          <a href="/frames" className="text-blue-400 transition">FRAMES</a>
          <a href="/sunglasses" className="hover:text-slate-200 transition">SUNGLASSES</a>
          <a href="/eye-test" className="hover:text-slate-200 transition">EYE TEST</a>
        </nav>
      </header>

      {/* মেইন কন্টেন্ট */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16 space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            👓 এক্সক্লুসিভ ফ্রেম কালেকশন
          </h1>
        </div>

        {/* ফ্রেম গ্রিড লিস্ট */}
        {products.length === 0 ? (
          <p className="text-center text-slate-500 py-12">বর্তমানে কোনো ফ্রেম লাইভ নেই। অ্যাডমিন প্যানেল থেকে যোগ করুন।</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition flex flex-col justify-between group">
                
                <div className="flex-1 flex flex-col justify-between">
                  {/* ইমেজ জুম বক্স */}
                  <div className="bg-slate-950 p-4 flex items-center justify-center h-56 relative border-b border-slate-800/40" onClick={(e) => e.stopPropagation()}>
                    <Zoom zoomMargin={10}>
                      <img src={product.img} alt={product.name} className="max-h-52 max-w-full object-contain transform group-hover:scale-105 transition duration-300 rounded-lg cursor-zoom-in" />
                    </Zoom>
                  </div>
                  
                  {/* প্রোডাক্ট ডিটেইলস */}
                  <Link href={`/product/${product.id}`} className="p-5 block cursor-pointer">
                    <h3 className="text-base font-bold text-white tracking-wide truncate group-hover:text-blue-400 transition">{product.name}</h3>
                    <p className="text-xl font-black text-blue-400 mt-1">৳{product.price}</p>
                    <span className="text-xs text-slate-500 underline mt-2 block group-hover:text-slate-400 transition">🔍 খুঁটিনাটি বিবরণ দেখুন</span>
                  </Link>
                </div>
                
                {/* সরাসরি হোয়াটসঅ্যাপ অর্ডার বাটন */}
                <div className="px-5 pb-5">
                  <button type="button" onClick={() => handleWhatsAppOrder(product.name, product.price, product.img)} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 text-sm cursor-pointer">
                    <span>💬</span>  হোয়াটস্অ্যাপে অর্ডার করুন
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