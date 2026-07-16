'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

// প্রোডাক্টের টাইপ নির্ধারণ (TypeScript-এর জন্য)
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export default function EyeTestPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // সুপাবেজ থেকে শুধুমাত্র 'eye-test' ক্যাটাগরির ডাটা আনার ফাংশন
  useEffect(() => {
    const fetchEyeTestProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'eye-test'); // 👈 এটি আপনার আপলোড করা আই টেস্টের জিনিসগুলো ফিল্টার করবে

        if (error) throw error;
        if (data) setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEyeTestProducts();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* বুকিং ও তথ্যের সেকশন */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border text-center mb-12">
            <div className="text-6xl mb-4">👁️‍🗨️</div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Professional Eye Testing</h1>
            <p className="text-gray-600 mb-8 text-lg">
              Get your eyes checked by our certified optometrists using modern computerized equipment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 text-lg mb-2">⏱️ Timing</h3>
                <p className="text-gray-700">Everyday: 4:00 PM - 9:00 PM</p>
                <p className="text-sm text-gray-500 mt-1">*Friday Closed</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <h3 className="font-bold text-green-900 text-lg mb-2">💰 Fee</h3>
                <p className="text-gray-700">Computerized Eye Test: ৳২০০</p>
                <p className="text-sm text-gray-500 mt-1">*Free on Frame Purchase</p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Book Your Appointment</h3>
              <p className="text-gray-500 mb-6">Call or message us on WhatsApp to confirm your serial.</p>
              
              <a 
                href="https://wa.me/8801779666030" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition shadow-md text-lg"
              >
                💬 Book via WhatsApp
              </a>
            </div>
          </div>

          {/* ডাটাবেজ থেকে আপলোড করা প্রোডাক্ট দেখানোর সেকশন */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center border-b pb-4">
              Our Eye Care Services & Products
            </h2>

            {loading ? (
              <p className="text-center text-gray-500 font-medium">⏳ লোড হচ্ছে...</p>
            ) : products.length === 0 ? (
              <p className="text-center text-gray-500 bg-white p-6 rounded-xl border">
                এখনো কোনো আই টেস্ট প্রোডাক্ট আপলোড করা হয়নি।
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white p-4 rounded-2xl shadow-sm border flex flex-col justify-between">
                    <div>
                      <div className="relative w-full h-48 bg-slate-100 rounded-xl overflow-hidden mb-4">
                        <img 
                          src={product.img} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-slate-800 text-lg mb-1">{product.name}</h3>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-blue-600 font-bold">{product.price} BDT</span>
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium uppercase">
                        {product.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}