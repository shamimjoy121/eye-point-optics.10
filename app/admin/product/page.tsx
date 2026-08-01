'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Product {
  id: string;
  name?: string;
  title?: string;
  price: number;
  category: string;
  stock_status: string;
  image_url: string;
  featured: boolean;
  created_at: string;
}

export default function AdminProductList() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // ১. অ্যাডমিন চেক এবং প্রোডাক্ট ডাটা ফেচ
  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push('/admin/login');
        return;
      }

      setAuthenticated(true);
      await fetchProducts();
      setLoading(false);
    };

    init();
  }, [router]);

  // ডাটাবেজ থেকে সব প্রোডাক্ট নিয়ে আসা
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error.message);
    } else {
      setProducts(data || []);
    }
  };

  // ২. প্রোডাক্ট ডিলিট ফাংশন
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('আপনি কি নিশ্চিত যে এই প্রোডাক্টটি ডিলিট করতে চান?');
    if (!confirmDelete) return;

    setDeletingId(id);

    const { error } = await supabase.from('products').delete().eq('id', id);

    if (error) {
      alert('ডিলিট করতে সমস্যা হয়েছে: ' + error.message);
    } else {
      setProducts((prev) => prev.filter((item) => item.id !== id));
      alert('প্রোডাক্ট সফলভাবে ডিলিট করা হয়েছে!');
    }

    setDeletingId(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Loading Products...
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-12">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-500">
              Eye Point Optics
            </h1>
            <p className="text-slate-400 text-sm">
              All Uploaded Products Management
            </p>
          </div>

          <Link
            href="/admin/add-product"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition shadow-md"
          >
            ➕ Add New Product
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto p-6 mt-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-200">
            মোট প্রোডাক্ট: <span className="text-blue-400">{products.length}</span> টি
          </h2>
        </div>

        {products.length === 0 ? (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-12 text-center text-slate-400">
            <p className="text-lg mb-4">এখনো কোনো প্রোডাক্ট আপলোড করা হয়নি।</p>
            <Link
              href="/admin/add-product"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-xl transition"
            >
              প্রথম প্রোডাক্ট আপলোড করুন
            </Link>
          </div>
        ) : (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/50 text-slate-400 text-sm">
                    <th className="p-4">Image</th>
                    <th className="p-4">Product Name</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Stock Status</th>
                    <th className="p-4">Featured</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
                  {products.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/40 transition">
                      {/* Image */}
                      <td className="p-4">
                        {item.image_url ? (
                          <img
                            src={item.image_url}
                            alt={item.name || item.title || 'Product'}
                            className="w-12 h-12 object-cover rounded-lg border border-slate-800"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-500">
                            No Img
                          </div>
                        )}
                      </td>

                      {/* Name */}
                      <td className="p-4 font-medium text-white">
                        {item.name || item.title || 'Untitled'}
                      </td>

                      {/* Category */}
                      <td className="p-4 text-slate-400">
                        {item.category || 'N/A'}
                      </td>

                      {/* Price */}
                      <td className="p-4 font-semibold text-blue-400">
                        ৳{item.price}
                      </td>

                      {/* Stock Status */}
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.stock_status === 'In Stock'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          }`}
                        >
                          {item.stock_status || 'In Stock'}
                        </span>
                      </td>

                      {/* Featured */}
                      <td className="p-4">
                        {item.featured ? (
                          <span className="text-yellow-400 font-medium text-xs bg-yellow-400/10 px-2 py-1 rounded border border-yellow-400/20">
                            ⭐ Popular
                          </span>
                        ) : (
                          <span className="text-slate-500 text-xs">-</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDelete(item.id)}
                          disabled={deletingId === item.id}
                          className="bg-rose-600/10 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-600/30 px-3 py-1.5 rounded-lg text-xs font-medium transition disabled:opacity-50"
                        >
                          {deletingId === item.id ? 'Deleting...' : '🗑️ Delete'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}