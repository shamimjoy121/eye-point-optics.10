'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/components/lib/supabaseClient';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  frame_type?: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Supabase থেকে সব প্রোডাক্ট লোড করা
  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // প্রোডাক্ট ডিলিট করা
  const handleDelete = async (id: number) => {
    if (!confirm('আপনি কি নিশ্চিত যে এই প্রোডাক্টটি ডিলিট করতে চান?')) return;

    const { error } = await supabase.from('products').delete().eq('id', id);

    if (error) {
      alert('ডিলিট করতে সমস্যা হয়েছে: ' + error.message);
    } else {
      alert('প্রোডাক্ট সফলভাবে ডিলিট হয়েছে!');
      fetchProducts();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">Eye Point Optics</h1>
            <p className="text-xs text-slate-400 mt-1">Admin Management Dashboard</p>
          </div>
          
          <div className="flex gap-3">
            <Link
              href="/admin/add-product"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg transition"
            >
              ➕ Add New Product
            </Link>
            <Link
              href="/"
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-4 py-2.5 rounded-xl text-xs border border-slate-700 transition"
            >
              🌐 View Site
            </Link>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <h2 className="text-base font-bold text-slate-200">
              All Products ({products.length})
            </h2>
            <button
              onClick={fetchProducts}
              className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold"
            >
              🔄 Refresh List
            </button>
          </div>

          {loading ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              Supabase থেকে ডাটা লোড হচ্ছে...
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              কোনো প্রোডাক্ট পাওয়া যায়নি।
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950/60 text-slate-400 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Frame Type</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {products.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-3 font-mono text-slate-500">{item.id}</td>
                      <td className="p-3 font-bold text-white">{item.name}</td>
                      <td className="p-3">
                        <span className="bg-slate-800 px-2.5 py-1 rounded-full text-[10px] text-amber-300 border border-slate-700">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-emerald-400">৳{item.price}</td>
                      <td className="p-3 text-slate-400">{item.frame_type || 'N/A'}</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white px-3 py-1 rounded-lg font-bold text-[11px] transition border border-red-500/20"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}