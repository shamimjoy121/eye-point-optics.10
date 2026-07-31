'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin/login');
      } else {
        setAuthenticated(true);
      }
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p className="text-lg font-semibold animate-pulse">Verifying Admin Access...</p>
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* 🟢 অ্যাডমিন মেনু বার */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-bold text-blue-400">Eye Point Optics</h1>
          <nav className="flex space-x-4">
            <a href="/admin/dashboard" className="text-sm font-semibold text-blue-400 border-b-2 border-blue-400 pb-1">
              Dashboard
            </a>
            <a href="/admin/product" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">
              All Products
            </a>
            <a href="/" target="_blank" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1">
              Visit Store ↗
            </a>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-all border border-red-500/30"
        >
          Logout
        </button>
      </header>

      {/* 🔵 প্রোডাক্ট আপলোড ফর্ম */}
      <main className="p-6 max-w-7xl mx-auto space-y-6">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h2 className="text-2xl font-bold text-white">Admin Dashboard</h2>
          <p className="text-slate-400 text-sm mt-1">Manage store products and settings securely.</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Add New Product</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Product Name</label>
              <input 
                type="text" 
                placeholder="Product Name" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Price (৳)</label>
              <input 
                type="number" 
                placeholder="Price" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Category & Type</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500">
                <option value="">Select Category</option>

                {/* ১. Frames */}
                <optgroup label="1. Frames">
                  <option value="frames-metal">Frames - Metal Frame</option>
                  <option value="frames-shell">Frames - Shell Frame</option>
                  <option value="frames-baby">Frames - Baby Frame</option>
                </optgroup>

                {/* ২. Sunglasses */}
                <optgroup label="2. Sunglasses">
                  <option value="sunglasses">Sunglasses</option>
                </optgroup>

                {/* ৩. Power Glasses */}
                <optgroup label="3. Power Glasses">
                  <option value="power-glasses">Power Glasses</option>
                </optgroup>

                {/* ৪. Contact Lenses */}
                <optgroup label="4. Contact Lenses">
                  <option value="contact-power">Contact Lenses - Power Contact Lens</option>
                  <option value="contact-colorful">Contact Lenses - Colorful Lens</option>
                  <option value="contact-cosmetic">Contact Lenses - Cosmetic Lens</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Product Image</label>
              <input 
                type="file" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-slate-300 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700" 
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors mt-4">
            Add Product
          </button>
        </div>
      </main>
    </div>
  );
}