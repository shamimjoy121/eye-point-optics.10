'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image_url: string;
  stock_status?: string;
  description?: string;
}

export default function AccessoriesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'accessories'); // আপনার ক্যাটাগরি ফিল্টার

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading accessories...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Accessories</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <img
                src={item.image_url || '/placeholder.png'}
                alt={item.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">৳ {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}