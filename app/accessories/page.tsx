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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // ⚠️ আপনার আসল হোয়াটসঅ্যাপ নম্বরটি এখানে দিন (যেমন: 8801700000000)
  const whatsappNumber = '8801XXXXXXXXX';

  // Modal, Zoom and Quantity States
  const [quantity, setQuantity] = useState<number>(1);
  const [note, setNote] = useState<string>('');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .ilike('category', 'accessories');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  const openWhatsApp = () => {
    if (!selectedProduct) return;
    const text = `হ্যালো, আমি এই Accessories প্রোডাক্টটি অর্ডার করতে চাই।%0A%0A*প্রোডাক্টের নাম:* ${selectedProduct.name}%0A*মূল্য:* ৳${selectedProduct.price}%0A*পরিমাণ:* ${quantity} টি%0A*সর্বমোট:* ৳${selectedProduct.price * quantity}%0A*নোট:* ${note || 'নাই'}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  if (loading) {
    return <div className="p-8 text-center text-white">Loading accessories...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Accessories</h1>
      {products.length === 0 ? (
        <p className="text-gray-300">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item.id} className="border border-gray-700 p-4 rounded shadow bg-slate-800 text-white flex flex-col justify-between">
              <div>
                <img
                  src={item.image_url || '/placeholder.png'}
                  alt={item.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-300 mt-1">৳ {item.price}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedProduct(item);
                  setQuantity(1);
                  setNote('');
                  setIsZoomed(false);
                }}
                className="mt-4 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded transition"
              >
                অর্ডার করতে ক্লিক করুন
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Product Details & WhatsApp Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-gray-700 p-6 rounded-2xl max-w-md w-full relative max-h-[90vh] overflow-y-auto text-white">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            
            {/* Zoomable Image Container */}
            <div className="relative mb-4 text-center">
              <div className={`overflow-hidden rounded-xl border border-gray-700 bg-slate-800 transition-all duration-300 ${isZoomed ? 'h-64' : 'h-48'}`}>
                <img 
                  src={selectedProduct.image_url || '/placeholder.png'} 
                  alt={selectedProduct.name} 
                  className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              </div>

              {/* Zoom Button */}
              <button 
                type="button" 
                onClick={() => setIsZoomed(!isZoomed)}
                className="mt-2 text-xs bg-slate-800 text-cyan-400 border border-cyan-500/40 px-3 py-1 rounded hover:bg-slate-700 transition inline-flex items-center gap-1"
              >
                {isZoomed ? '🔍 Zoom Out Picture' : '🔎 Zoom In Picture'}
              </button>
            </div>

            <div className="text-center mb-4">
              <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
              <p className="text-cyan-400 font-bold text-lg mt-0.5">৳ {selectedProduct.price}</p>
            </div>

            <div className="space-y-4">
              {/* Quantity Input */}
              <div className="flex items-center justify-between bg-slate-800 border border-gray-700 p-3 rounded-xl">
                <span className="text-xs font-bold text-gray-300">পরিমাণ (Quantity):</span>
                <div className="flex items-center gap-3">
                  <button 
                    type="button" 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded bg-slate-700 text-white font-bold hover:bg-slate-600 transition"
                  >
                    -
                  </button>
                  <span className="font-bold text-base w-6 text-center">{quantity}</span>
                  <button 
                    type="button" 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded bg-slate-700 text-white font-bold hover:bg-slate-600 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Note Input */}
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">কোনো বার্তা বা নোট (ঐচ্ছিক):</label>
                <textarea 
                  rows={2} 
                  value={note} 
                  onChange={(e) => setNote(e.target.value)} 
                  placeholder="যেমন: বিশেষ কোনো রঙের বক্স প্রয়োজন থাকলে লিখুন..." 
                  className="w-full bg-slate-800 border border-gray-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400" 
                />
              </div>

              {/* Total Price */}
              <div className="flex justify-between items-center text-sm font-bold text-gray-200 border-t border-gray-800 pt-3">
                <span>সর্বমোট মূল্য:</span>
                <span className="text-cyan-400 text-base">৳ {selectedProduct.price * quantity}</span>
              </div>

              {/* WhatsApp Button */}
              <button 
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm shadow-lg"
              >
                <span>💬 WhatsApp এ অর্ডার করুন</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}