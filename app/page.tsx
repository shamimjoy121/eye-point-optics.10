'use client';

import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image_url?: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-blue-500">EYE POINT OPTICS</h1>
            <p className="text-slate-400 text-sm mt-1">Explore our latest collection</p>
          </div>
          <Link
            href="/admin/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-blue-600/20"
          >
            Admin Login
          </Link>
        </div>

        {/* Product Catalog */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">All Products</h2>

          {loading ? (
            <p className="text-slate-500 text-center py-10">Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between shadow-lg">
                  <div>
                    {/* Image handling with fallback */}
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-xl mb-4 bg-slate-950"
                      />
                    ) : (
                      <div className="w-full h-48 rounded-xl mb-4 bg-slate-950 flex items-center justify-center text-slate-600 text-xs border border-slate-800">
                        No Image Available
                      </div>
                    )}

                    <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-md font-medium">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-white text-lg mt-3">{product.name}</h3>
                    <p className="text-blue-400 font-bold text-lg mt-1">৳ {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-lg">No products available right now.</p>
              <p className="text-slate-500 text-sm mt-1">Please add products from the admin dashboard.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}