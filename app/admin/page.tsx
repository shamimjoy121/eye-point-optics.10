'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../supabaseClient'; // 👈 এখানে সঠিক রাস্তা (../../) ফিক্স করা হয়েছে

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export default function AdminDashboard() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('home');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();

  const fetchAllProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: false });

      if (error) throw error;
      if (data) setProducts(data);
    } catch (error: any) {
      console.error('Error fetching products:', error.message);
    }
  };

  useEffect(() => {
    setIsMounted(true);

    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/login');
      } else {
        setCheckingAuth(false);
        fetchAllProducts();
      }
    };

    checkUser();
  }, [router]);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !imageFile) {
      setMessage('❌ দয়া করে সব ঘর পূরণ করুন এবং ছবি সিলেক্ট করুন!');
      return;
    }

    setLoading(true);
    setMessage('⏳ ছবি ও তথ্য সুপাবেজে আপলোড হচ্ছে...');

    try {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('eyeglass-images')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('eyeglass-images')
        .getPublicUrl(filePath);

      const publicUrl = data.publicUrl;

      const { error: insertError } = await supabase
        .from('products')
        .insert([{ 
          name, 
          price: Number(price), 
          img: publicUrl,
          category: category
        }]);

      if (insertError) throw insertError;

      setMessage(`✅ সফলভাবে নতুন প্রোডাক্ট যোগ করা হয়েছে!`);
      setName('');
      setPrice('');
      setImageFile(null);
      
      const fileInput = document.getElementById('product-image') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      fetchAllProducts();

    } catch (error: any) {
      setMessage(`❌ ভুল হয়েছে: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId: number, imageUrl: string) => {
    const confirmDelete = window.confirm("⚠️ আপনি কি নিশ্চিতভাবেই এই প্রোডাক্টটি ডিলিট করতে চান?");
    if (!confirmDelete) return;

    try {
      const urlParts = imageUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];

      if (fileName) {
        await supabase.storage
          .from('eyeglass-images')
          .remove([fileName]);
      }

      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) throw error;

      setMessage('🗑️ প্রোডাক্টটি সফলভাবে ডিলিট করা হয়েছে!');
      fetchAllProducts();

    } catch (error: any) {
      setMessage(`❌ ডিলিট করা যায়নি: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const getCategoryName = (cat: string) => {
    switch(cat) {
      case 'home': return '🏠 Home Gallery';
      case 'frames': return '👓 Frames';
      case 'sunglasses': return '🕶️ Sunglasses';
      case 'eye-test': return '👁️ Eye Test';
      default: return '📞 Contact';
    }
  };

  if (!isMounted || checkingAuth) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <p className="text-sm tracking-wide">⏳ সিকিউরিটি যাচাই করা হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">👓</span>
            <h2 className="text-xl font-bold tracking-wider text-blue-400">EP OPTICS</h2>
          </div>
          <p className="text-xs text-slate-500 font-bold tracking-widest uppercase mb-4">প্যানেল মেনু</p>
          <nav className="space-y-2">
            <button type="button" className="w-full flex items-center gap-3 bg-blue-600/10 text-blue-400 px-4 py-3 rounded-xl font-medium text-sm text-left border border-blue-500/20 transition">
              <span>🚀</span> প্রোডাক্ট ম্যানেজমেন্ট
            </button>
          </nav>
        </div>
        <div className="space-y-4">
          <button 
            onClick={handleLogout}
            className="w-full bg-red-950/40 hover:bg-red-900/60 border border-red-900/40 text-red-400 py-3 rounded-xl font-bold text-xs transition cursor-pointer"
          >
            🚪 লগআউট করুন
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-12 max-w-5xl overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-white mb-2">ম্যানেজমেন্ট ড্যাশবোর্ড</h1>
        </div>

        {message && (
          <div className="mb-6 p-4 bg-slate-900 border border-blue-500/30 text-blue-300 text-sm font-medium rounded-xl shadow-lg flex items-center gap-2">
            {message}
          </div>
        )}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl mb-12">
          <form onSubmit={handleUpload} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">প্রোডাক্টের নাম</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">দাম (BDT)</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white text-sm" required />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white text-sm cursor-pointer">
                <option value="home">🏠 Home Page</option>
                <option value="frames">👓 Frames Page</option>
                <option value="sunglasses">🕶️ Sunglasses Page</option>
                <option value="eye-test">👁️ Eye Test Page</option>
              </select>
            </div>
            <div>
              <input id="product-image" type="file" accept="image/*" onChange={(e) => { if (e.target.files && e.target.files[0]) setImageFile(e.target.files[0]); }} className="text-sm text-slate-400" required />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition text-sm cursor-pointer">
              {loading ? '⏳ সেভ হচ্ছে...' : '🚀 ওয়েবসাইটে লাইভ করুন'}
            </button>
          </form>
        </div>

        {/* টেবিল ভিউ */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 px-4">ছবি</th>
                  <th className="py-3 px-4">নাম</th>
                  <th className="py-3 px-4">ক্যাটাগরি</th>
                  <th className="py-3 px-4">দাম</th>
                  <th className="py-3 px-4 text-center">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="py-3 px-4">
                      <div className="w-12 h-12 bg-slate-950 border border-slate-800 flex items-center justify-center rounded-lg overflow-hidden">
                        <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain p-1" />
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white truncate max-w-xs">{product.name}</td>
                    <td className="py-3 px-4">{getCategoryName(product.category)}</td>
                    <td className="py-3 px-4 text-blue-400 font-bold">৳{product.price}</td>
                    <td className="py-3 px-4 text-center">
                      <button type="button" onClick={() => handleDelete(product.id, product.img)} className="bg-red-950/60 hover:bg-red-900 border border-red-900/40 text-red-400 px-3 py-1.5 rounded-lg text-xs font-bold transition">🗑️ ডিলিট</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}