'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Vercel-এর Environment Variable থেকে Supabase Connect করা
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  // Supabase থেকে ডাটা ফেচ করার ফাংশন
  const getProducts = async () => {
    if (!supabaseUrl || !supabaseAnonKey) return;
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching products:', error.message);
      return;
    }
    if (data) setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">All Products</h1>

        {/* Grid Layout for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-100 mb-4">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-bold text-lg text-slate-800 line-clamp-1">{product.name}</h3>
                <p className="text-2xl font-extrabold text-blue-600 mt-2">৳ {product.price}</p>
              </div>

              {/* Delete Button */}
              <button
                onClick={async () => {
                  const ok = confirm("Are you sure you want to delete this product?");
                  if (!ok) return;

                  const { error } = await supabase
                    .from("products")
                    .delete()
                    .eq("id", product.id);

                  if (error) alert(error.message);
                  else getProducts();
                }}
                className="mt-5 w-full bg-slate-50 text-red-600 hover:bg-red-500 hover:text-white py-2.5 rounded-xl font-bold transition-colors duration-300 border border-slate-200 hover:border-transparent"
              >
                Delete Product
              </button>
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No products found. Add some awesome products!</p>
          </div>
        )}
      </div>
    </div>
  );
}