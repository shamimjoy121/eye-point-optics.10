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

export default function PowerGlassesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // ⚠️ আপনার হোয়াটসঅ্যাপ নাম্বার
  const whatsappNumber = '8801XXXXXXXXX';

  // Form States
  const [powerCategory, setPowerCategory] = useState('');
  const [quality, setQuality] = useState('');
  
  const [rSph, setRSph] = useState('');
  const [rCyl, setRCyl] = useState('');
  const [rAxis, setRAxis] = useState('');
  const [rVa, setRVa] = useState('');
  
  const [lSph, setLSph] = useState('');
  const [lCyl, setLCyl] = useState('');
  const [lAxis, setLAxis] = useState('');
  const [lVa, setLVa] = useState('');
  
  const [nearAdd, setNearAdd] = useState('');
  const [ipd, setIpd] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .ilike('category', 'power glasses');

      if (!error && data) setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const openWhatsApp = () => {
    if (!selectedProduct) return;
    const text = `হ্যালো, আমি ${selectedProduct.name} (মূল্য: ৳${selectedProduct.price}) অর্ডার করতে চাই।%0A%0A*Lens Details:*%0A- Power Category: ${powerCategory || 'Select করা হয়নি'}%0A- Quality: ${quality || 'Select করা হয়নি'}%0A%0A*Prescription:*%0A[Right Eye] SPH: ${rSph||'-'}, CYL: ${rCyl||'-'}, AXIS: ${rAxis||'-'}, VA: ${rVa||'-'}%0A[Left Eye] SPH: ${lSph||'-'}, CYL: ${lCyl||'-'}, AXIS: ${lAxis||'-'}, VA: ${lVa||'-'}%0A%0A*Near Add:* ${nearAdd||'-'}%0A*IPD:* ${ipd||'-'} mm`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-4">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-2">⚡ Power Glasses</h1>
          <p className="text-slate-400 text-sm mt-1">পাওয়ার ও অ্যান্টি-ব্লু চশমা</p>
        </div>
        <Link href="/" className="text-cyan-400 hover:underline text-sm font-semibold">← Back to Home</Link>
      </div>

      {loading ? (
        <div className="text-center py-12 text-cyan-400 font-semibold">প্রোডাক্ট লোড হচ্ছে...</div>
      ) : products.length === 0 ? (
        <div className="text-center py-12 text-slate-400">কোনো পাওয়ার গ্লাস পাওয়া যায়নি।</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="glass-panel p-4 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-400 transition flex flex-col justify-between">
              <div>
                <div className="h-44 bg-slate-900/60 rounded-xl flex items-center justify-center overflow-hidden mb-3">
                  {item.image_url ? <img src={item.image_url} alt={item.name} className="w-full h-full object-cover rounded-xl" /> : <span className="text-4xl">⚡</span>}
                </div>
                <h3 className="font-bold text-white text-lg">{item.name}</h3>
                <p className="text-cyan-400 font-bold mt-1">৳ {item.price}</p>
              </div>

              <button 
                onClick={() => setSelectedProduct(item)}
                className="cyan-btn w-full mt-4 py-2 text-sm"
              >
                পাওয়ার দিয়ে অর্ডার করুন
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Prescription Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-cyan-500/30 p-6 rounded-2xl max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>
            
            {/* Product Image & Info */}
            <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
              <div className="w-20 h-20 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                {selectedProduct.image_url ? <img src={selectedProduct.image_url} className="w-full h-full object-cover" /> : null}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{selectedProduct.name}</h2>
                <p className="text-cyan-400 font-bold">৳ {selectedProduct.price}</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Category & Quality Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-cyan-400 mb-1">Power Category</label>
                  <select value={powerCategory} onChange={(e) => setPowerCategory(e.target.value)} className="w-full bg-slate-800 border border-slate-600 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-cyan-400">
                    <option value="">-- Select Category --</option>
                    <option value="Single Vision">Single Vision</option>
                    <option value="Bifocal (Moon shape)">Bifocal (Moon shape)</option>
                    <option value="Bifocal (D shape)">Bifocal (D shape)</option>
                    <option value="Progressive">Progressive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-cyan-400 mb-1">Quality Name</label>
                  <select value={quality} onChange={(e) => setQuality(e.target.value)} className="w-full bg-slate-800 border border-slate-600 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-cyan-400">
                    <option value="">-- Select Quality --</option>
                    <option value="White">White</option>
                    <option value="Multicoated">Multicoated</option>
                    <option value="Photosun">Photosun</option>
                    <option value="Multicoated Photosun">Multicoated Photosun</option>
                    <option value="Blue Cut">Blue Cut</option>
                    <option value="Photosun Blue Cut">Photosun Blue Cut</option>
                  </select>
                </div>
              </div>

              {/* Prescription Table Grid (With Auto-Zoom & Touch Friendly Focus) */}
              <div className="bg-slate-200 text-slate-900 p-4 rounded-xl overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-[280px]">
                  {/* Right Eye */}
                  <div>
                    <h3 className="text-center font-bold text-lg mb-2 text-slate-800">Right</h3>
                    <div className="grid grid-cols-4 border border-slate-400 text-center text-xs font-bold bg-slate-300">
                      <div className="border-r border-slate-400 p-1.5">SPH</div>
                      <div className="border-r border-slate-400 p-1.5">CYL</div>
                      <div className="border-r border-slate-400 p-1.5">AXIS</div>
                      <div className="p-1.5">VA</div>
                    </div>
                    <div className="grid grid-cols-4 border-l border-r border-b border-slate-400 text-center">
                      <input type="text" value={rSph} onChange={e=>setRSph(e.target.value)} className="w-full border-r border-slate-400 bg-white py-2 text-center text-base font-semibold focus:outline-none focus:bg-cyan-100 focus:scale-110 focus:z-10 focus:shadow-md transition-all duration-150" />
                      <input type="text" value={rCyl} onChange={e=>setRCyl(e.target.value)} className="w-full border-r border-slate-400 bg-white py-2 text-center text-base font-semibold focus:outline-none focus:bg-cyan-100 focus:scale-110 focus:z-10 focus:shadow-md transition-all duration-150" />
                      <input type="text" value={rAxis} onChange={e=>setRAxis(e.target.value)} className="w-full border-r border-slate-400 bg-white py-2 text-center text-base font-semibold focus:outline-none focus:bg-cyan-100 focus:scale-110 focus:z-10 focus:shadow-md transition-all duration-150" />
                      <input type="text" value={rVa} onChange={e=>setRVa(e.target.value)} className="w-full bg-white py-2 text-center text-base font-semibold focus:outline-none focus:bg-cyan-100 focus:scale-110 focus:z-10 focus:shadow-md transition-all duration-150" />
                    </div>
                  </div>

                  {/* Left Eye */}
                  <div>
                    <h3 className="text-center font-bold text-lg mb-2 text-slate-800">Left</h3>
                    <div className="grid grid-cols-4 border border-slate-400 text-center text-xs font-bold bg-slate-300">
                      <div className="border-r border-slate-400 p-1.5">SPH</div>
                      <div className="border-r border-slate-400 p-1.5">CYL</div>
                      <div className="border-r border-slate-400 p-1.5">AXIS</div>
                      <div className="p-1.5">VA</div>
                    </div>
                    <div className="grid grid-cols-4 border-l border-r border-b border-slate-400 text-center">
                      <input type="text" value={lSph} onChange={e=>setLSph(e.target.value)} className="w-full border-r border-slate-400 bg-white py-2 text-center text-base font-semibold focus:outline-none focus:bg-cyan-100 focus:scale-110 focus:z-10 focus:shadow-md transition-all duration-150" />
                      <input type="text" value={lCyl} onChange={e=>setLCyl(e.target.value)} className="w-full border-r border-slate-400 bg-white py-2 text-center text-base font-semibold focus:outline-none focus:bg-cyan-100 focus:scale-110 focus:z-10 focus:shadow-md transition-all duration-150" />
                      <input type="text" value={lAxis} onChange={e=>setLAxis(e.target.value)} className="w-full border-r border-slate-400 bg-white py-2 text-center text-base font-semibold focus:outline-none focus:bg-cyan-100 focus:scale-110 focus:z-10 focus:shadow-md transition-all duration-150" />
                      <input type="text" value={lVa} onChange={e=>setLVa(e.target.value)} className="w-full bg-white py-2 text-center text-base font-semibold focus:outline-none focus:bg-cyan-100 focus:scale-110 focus:z-10 focus:shadow-md transition-all duration-150" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 text-slate-800 font-semibold">
                  <div className="flex items-center gap-2 w-full">
                    <span className="text-sm">Near Add:</span>
                    <input type="text" value={nearAdd} onChange={e=>setNearAdd(e.target.value)} className="border-b-2 border-slate-500 bg-white/50 px-2 py-1 text-base rounded focus:outline-none focus:bg-cyan-100 flex-grow" />
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-1/2">
                    <span className="text-sm">IPD:</span>
                    <input type="text" value={ipd} onChange={e=>setIpd(e.target.value)} className="border-b-2 border-slate-500 bg-white/50 w-20 py-1 text-center text-base rounded focus:outline-none focus:bg-cyan-100" />
                    <span className="text-sm">mm</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <span>💬 WhatsApp এ প্রেসক্রিপশন পাঠান</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}