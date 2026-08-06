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
  category: string;
  image_url: string;
}

export default function FramesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'Frames');

      if (!error && data) setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-4">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-2">👓 All Frames</h1>
          <p className="text-slate-400 text-sm mt-1">এক্সক্লুসিভ চশমার ফ্রেম কালেকশন</p>
        </div>
        <Link href="/" className="text-cyan-400 hover:underline text-sm font-semibold">← Back to Home</Link>
      </div>

      {loading ? (
        <div className="text-center py-12 text-cyan-400 font-semibold">প্রোডাক্ট লোড হচ্ছে...</div>
      ) : products.length === 0 ? (
        <div className="text-center py-12 text-slate-400">কোনো চশমার ফ্রেম পাওয়া যায়নি।</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="glass-panel p-4 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-400 transition flex flex-col justify-between">
              <div>
                <div className="h-44 bg-slate-900/60 rounded-xl flex items-center justify-center overflow-hidden mb-3">
                  {item.image_url ? <img src={item.image_url} alt={item.name} className="w-full h-full object-cover rounded-xl" /> : <span className="text-4xl">👓</span>}
                </div>
                <h3 className="font-bold text-white text-lg">{item.name}</h3>
                <p className="text-cyan-400 font-bold mt-1">৳ {item.price}</p>
              </div>
              <button className="cyan-btn w-full mt-4 py-2 text-sm">Order Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}