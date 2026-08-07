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

// Freshlook 15 Popular Colors List with Hex Codes
const FRESHLOOK_COLORS = [
  { name: 'Pure Hazel', hex: '#b58348' },
  { name: 'Honey', hex: '#d4af37' },
  { name: 'Green', hex: '#488250' },
  { name: 'Gemstone Green', hex: '#00a86b' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Sterling Gray', hex: '#a9a9a9' },
  { name: 'Blue', hex: '#4682b4' },
  { name: 'Brilliant Blue', hex: '#007fff' },
  { name: 'True Sapphire', hex: '#0f52ba' },
  { name: 'Brown', hex: '#654321' },
  { name: 'Turquoise', hex: '#40e0d0' },
  { name: 'Amethyst', hex: '#9966cc' },
  { name: 'Warm Honey', hex: '#c58b2b' },
  { name: 'Hazel', hex: '#8e6d3b' },
  { name: 'Satin Gray', hex: '#708090' },
];

export default function ContactLensesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // ⚠️ আপনার আসল হোয়াটসঅ্যাপ নাম্বারটি লিখুন
  const whatsappNumber = '8801XXXXXXXXX';

  // Form States
  const [category, setCategory] = useState('Cosmetics Contact Lens');
  const [selectedColor, setSelectedColor] = useState('Pure Hazel');
  const [rightPower, setRightPower] = useState('-0.50');
  const [leftPower, setLeftPower] = useState('-0.50');
  const [isZoomed, setIsZoomed] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(true);

  // Power Options (-0.50 to -15.00)
  const powerOptions: string[] = [];
  for (let i = 0.50; i <= 15.00; i += 0.25) {
    powerOptions.push(`-${i.toFixed(2)}`);
  }

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .ilike('category', 'contact lenses');

      if (!error && data) setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const handleCategoryChange = (val: string) => {
    setCategory(val);
    setShowColorPicker(val !== 'White (Transparent) Contact Lens');
  };

  const openWhatsApp = () => {
    if (!selectedProduct) return;
    const colorText = showColorPicker ? `%0A*Freshlook Color:* ${selectedColor}` : '';
    const powerText = category !== 'Cosmetics Contact Lens' ? `%0A*Right Eye Power:* ${rightPower}%0A*Left Eye Power:* ${leftPower}` : '';
    
    const text = `হ্যালো, আমি ${selectedProduct.name} (মূল্য: ৳${selectedProduct.price}) অর্ডার করতে চাই।%0A%0A*Category:* ${category}${colorText}${powerText}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-4">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-2">👁️ Contact Lenses</h1>
          <p className="text-slate-400 text-sm mt-1">কালার ও পাওয়ার কন্টাক্ট লেন্স</p>
        </div>
        <Link href="/" className="text-cyan-400 hover:underline text-sm font-semibold">← Back to Home</Link>
      </div>

      {loading ? (
        <div className="text-center py-12 text-cyan-400 font-semibold">প্রোডাক্ট লোড হচ্ছে...</div>
      ) : products.length === 0 ? (
        <div className="text-center py-12 text-slate-400">কোনো কন্টাক্ট লেন্স পাওয়া যায়নি।</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="glass-panel p-4 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-400 transition flex flex-col justify-between">
              <div>
                <div className="h-44 bg-slate-900/60 rounded-xl flex items-center justify-center overflow-hidden mb-3">
                  {item.image_url ? <img src={item.image_url} alt={item.name} className="w-full h-full object-cover rounded-xl" /> : <span className="text-4xl">👁️</span>}
                </div>
                <h3 className="font-bold text-white text-lg">{item.name}</h3>
                <p className="text-cyan-400 font-bold mt-1">৳ {item.price}</p>
              </div>

              <button onClick={() => setSelectedProduct(item)} className="cyan-btn w-full mt-4 py-2 text-sm">
                পাওয়ার ও কালার সিলেক্ট করুন
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-cyan-500/30 p-6 rounded-2xl max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>
            
            <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
              <div className="w-16 h-16 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                {selectedProduct.image_url ? <img src={selectedProduct.image_url} className="w-full h-full object-cover" /> : null}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{selectedProduct.name}</h2>
                <p className="text-cyan-400 font-bold">৳ {selectedProduct.price}</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Category Dropdown with Hover & Click Effect */}
              <div>
                <label className="block text-xs font-bold text-cyan-400 mb-1">Select Category</label>
                <select 
                  value={category} 
                  onChange={(e) => handleCategoryChange(e.target.value)} 
                  onMouseEnter={() => setShowColorPicker(category !== 'White (Transparent) Contact Lens')}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Cosmetics Contact Lens">Cosmetics Contact Lens</option>
                  <option value="Colorful Power Contact Lens">Colorful Power Contact Lens</option>
                  <option value="White (Transparent) Contact Lens">White (Transparent) Contact Lens</option>
                </select>
              </div>

              {/* Freshlook 15 Color Grid */}
              {showColorPicker && (
                <div className="bg-slate-800/80 border border-cyan-500/30 p-3 rounded-xl transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-cyan-400">Freshlook Colors (Popular 15):</span>
                    <span className="text-xs text-white font-semibold">{selectedColor}</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2 max-h-36 overflow-y-auto p-1">
                    {FRESHLOOK_COLORS.map((col) => (
                      <button
                        key={col.name}
                        type="button"
                        onClick={() => setSelectedColor(col.name)}
                        className={`flex flex-col items-center p-1 rounded-lg border text-[10px] text-white transition ${
                          selectedColor === col.name ? 'border-cyan-400 bg-cyan-500/20 scale-105' : 'border-slate-700 bg-slate-900/50 hover:border-slate-500'
                        }`}
                      >
                        <span className="w-5 h-5 rounded-full border border-white/20 shadow-sm" style={{ backgroundColor: col.hex }}></span>
                        <span className="truncate w-full text-center mt-1 text-[9px]">{col.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Power Box with Zoom In/Out */}
              {category !== 'Cosmetics Contact Lens' && (
                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-300">Power Selection Panel</span>
                    <button 
                      type="button" 
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 px-2.5 py-1 rounded-lg hover:bg-cyan-500/30 transition flex items-center gap-1"
                    >
                      {isZoomed ? '🔍 Zoom Out' : '🔎 Zoom In'}
                    </button>
                  </div>

                  <div className={`grid grid-cols-2 gap-4 transition-all duration-300 ${isZoomed ? 'scale-105 p-2 bg-slate-900 rounded-xl shadow-lg border border-cyan-400/30' : ''}`}>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Right Eye Power</label>
                      <select value={rightPower} onChange={(e) => setRightPower(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2 text-sm text-white font-bold">
                        {powerOptions.map((p) => <option key={`r-${p}`} value={p}>{p}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Left Eye Power</label>
                      <select value={leftPower} onChange={(e) => setLeftPower(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2 text-sm text-white font-bold">
                        {powerOptions.map((p) => <option key={`l-${p}`} value={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* WhatsApp Button */}
              <button onClick={openWhatsApp} className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm">
                <span>💬 WhatsApp এ অর্ডার পাঠান</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}