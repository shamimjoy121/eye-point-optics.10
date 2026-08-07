'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
}

export default function BabyFramesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // জুম মোডাল নিয়ন্ত্রণ করার স্টেট
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'Baby Frames');

      if (!error && data) setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-4">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-2">🕶 Baby Frames</h1>
          <p className="text-slate-400 text-sm mt-1">বাচ্চাদের আকর্ষণীয় চশমার ফ্রেম</p>
        </div>
        <Link href="/" className="text-cyan-400 hover:underline text-sm font-semibold">← Back to Home</Link>
      </div>

      {loading ? (
        <div className="text-center py-12 text-cyan-400 font-semibold">প্রোডাক্ট লোড হচ্ছে...</div>
      ) : products.length === 0 ? (
        <div className="text-center py-12 text-slate-400">কোনো বেবি ফ্রেম পাওয়া যায়নি।</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="glass-panel p-4 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-400 transition flex flex-col justify-between">
              <div>
                {/* ছবিতে ক্লিক করলে জুম হবে */}
                <div 
                  onClick={() => item.image_url && setActiveZoomImage(item.image_url)}
                  className="relative h-44 bg-slate-900/60 rounded-xl flex items-center justify-center overflow-hidden mb-3 cursor-pointer group"
                >
                  {item.image_url ? (
                    <>
                      <img 
                        src={item.image_url} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                        <span className="bg-cyan-950/80 text-cyan-300 text-xs px-2.5 py-1 rounded-full border border-cyan-500/30">
                          🔍 জুম করুন
                        </span>
                      </div>
                    </>
                  ) : (
                    <span className="text-4xl">👓</span>
                  )}
                </div>

                <Link href={`/product/${item.id}`}>
                  <h3 className="font-bold text-white text-lg hover:text-cyan-400 transition cursor-pointer">{item.name}</h3>
                </Link>
                <p className="text-cyan-400 font-bold mt-1">৳ {item.price}</p>
              </div>

              {/* ডিটেইলস ও অর্ডার করার বাটন */}
              <Link href={`/product/${item.id}`}>
                <button className="cyan-btn w-full mt-4 py-2 text-sm">View & Order</button>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* ফুল স্ক্রিন পপআপ জুম মোডাল */}
      {activeZoomImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setActiveZoomImage(null)}
        >
          <button
            onClick={() => setActiveZoomImage(null)}
            className="absolute top-6 right-6 text-white text-2xl font-bold bg-slate-800 hover:bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center border border-slate-600 transition z-10"
          >
            ✕
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] flex items-center justify-center p-2 bg-slate-900 rounded-3xl border border-cyan-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeZoomImage}
              alt="Zoomed Product"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />
          </div>

          <p className="mt-4 text-xs text-slate-400">
            বন্ধ করতে যেকোনো স্থানে ক্লিক করুন
          </p>
        </div>
      )}
    </div>
  );
}