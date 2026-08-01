'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ProductForm {
  name: string;
  price: string;
  category: string;
  sub_category: string;
  target_group: string;
  frame_type: string;
  lens_type: string;
  lens_quality: string;
  lens_color: string;
  description: string;
  stock_status: string;
  featured: boolean;
  image: File | null;
}

export default function AddProductPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const [form, setForm] = useState<ProductForm>({
    name: '',
    price: '',
    category: 'Frames',
    sub_category: '',
    target_group: 'Unisex',
    frame_type: 'Metal Frame',
    lens_type: 'Single Vision',
    lens_quality: 'White Glass',
    lens_color: 'Natural Black',
    description: '',
    stock_status: 'In Stock',
    featured: false,
    image: null,
  });

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push('/admin/login');
        return;
      }

      setAuthenticated(true);
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setForm((prev) => ({ ...prev, image: e.target.files![0] }));
  };

  const handleFeatured = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, featured: e.target.checked }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.price || !form.category) {
      alert('⚠️ Product Name, Price এবং Category অবশ্যই পূরণ করতে হবে।');
      return;
    }

    setSaving(true);

    try {
      let imageUrl = '';

      // Image Upload to Supabase Storage
      if (form.image) {
        const fileExt = form.image.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(filePath, form.image);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(filePath);

        imageUrl = publicUrlData.publicUrl;
      }

      // Save Data to Supabase Table (Fixed column mapping)
      const { error: insertError } = await supabase.from('products').insert([
        {
          name: form.name,
          price: parseFloat(form.price),
          category: form.category,
          sub_category: form.sub_category,
          target_group: form.target_group,
          frame_type: ['Frames', 'Baby Frames', 'Sunglasses'].includes(form.category) ? form.frame_type : 'None',
          lens_type: ['Power Glasses', 'Contact Lenses'].includes(form.category) ? form.lens_type : 'None',
          lens_quality: form.category === 'Power Glasses' ? form.lens_quality : 'None',
          lens_color: form.category === 'Contact Lenses' ? form.lens_color : 'None',
          description: form.description,
          stock_status: form.stock_status,
          featured: form.featured, // 🔥 Corrected here!
          image_url: imageUrl,
        },
      ]);

      if (insertError) throw insertError;

      alert('🎉 সফলভাবে প্রোডাক্ট আপলোড ও সেভ করা হয়েছে!');

      // Reset Form
      setForm({
        name: '',
        price: '',
        category: 'Frames',
        sub_category: '',
        target_group: 'Unisex',
        frame_type: 'Metal Frame',
        lens_type: 'Single Vision',
        lens_quality: 'White Glass',
        lens_color: 'Natural Black',
        description: '',
        stock_status: 'In Stock',
        featured: false,
        image: null,
      });

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error: any) {
      alert('❌ এরর হয়েছে: ' + (error.message || 'Upload process failed.'));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white font-medium">
        🔍 Checking Admin Rights...
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">👁️</span>
            <div>
              <h1 className="text-xl font-bold text-blue-500">Eye Point Optics</h1>
              <p className="text-xs text-slate-400">আই পয়েন্ট অপটিক্স — Admin Panel</p>
            </div>
          </div>
          <button
            onClick={() => router.push('/admin/product')}
            className="text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 px-3.5 py-2 rounded-lg border border-slate-700 transition"
          >
            📋 View All Products
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl"
        >
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
              📝 Add New Product
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleInput}
                placeholder="যেমন: Classic Metal Frame"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Price (৳) *
              </label>
              <input
                type="number"
                name="price"
                required
                value={form.price}
                onChange={handleInput}
                placeholder="1650"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleInput}
                className="w-full bg-slate-950 border border-blue-600/50 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition font-medium"
              >
                <option value="Frames">Glasses / Frames</option>
                <option value="Baby Frames">Baby Frames</option>
                <option value="Sunglasses">Sunglasses</option>
                <option value="Power Glasses">Power Glasses</option>
                <option value="Contact Lenses">Contact Lenses</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Sub Category
              </label>
              <input
                type="text"
                name="sub_category"
                value={form.sub_category}
                onChange={handleInput}
                placeholder="যেমন: Premium / Casual"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Target Group
              </label>
              <select
                name="target_group"
                value={form.target_group}
                onChange={handleInput}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              >
                <option value="Unisex">Unisex</option>
                <option value="Gents (Jeans)">Gents (Men)</option>
                <option value="Ladies">Ladies (Women)</option>
                <option value="Boys">Boys</option>
                <option value="Girls">Girls</option>
              </select>
            </div>

            {['Frames', 'Baby Frames', 'Sunglasses'].includes(form.category) && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                  🕶 Frame Type
                </label>
                <select
                  name="frame_type"
                  value={form.frame_type}
                  onChange={handleInput}
                  className="w-full bg-slate-950 border border-emerald-500/40 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                >
                  <option value="Metal Frame">Metal Frame</option>
                  <option value="Shell Frame">Shell Frame</option>
                  <option value="Rimless Frame">Rimless Frame</option>
                </select>
              </div>
            )}

            {['Power Glasses', 'Contact Lenses'].includes(form.category) && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                  👁 Lens Type
                </label>
                <select
                  name="lens_type"
                  value={form.lens_type}
                  onChange={handleInput}
                  className="w-full bg-slate-950 border border-cyan-500/40 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                >
                  {form.category === 'Contact Lenses' ? (
                    <>
                      <option value="Cosmetic Lens">Cosmetic Lens</option>
                      <option value="Power Lens (Transparent)">Power Lens (Transparent)</option>
                      <option value="Color Power Lens">Color Power Lens</option>
                    </>
                  ) : (
                    <>
                      <option value="Single Vision">Single Vision</option>
                      <option value="Bifocal (Moon Shape)">Bifocal (Moon Shape)</option>
                      <option value="Bifocal (D Shape)">Bifocal (D Shape)</option>
                      <option value="Progressive">Progressive</option>
                    </>
                  )}
                </select>
              </div>
            )}

            {form.category === 'Power Glasses' && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                  ⭐ Select Lens Quality
                </label>
                <select
                  name="lens_quality"
                  value={form.lens_quality}
                  onChange={handleInput}
                  className="w-full bg-slate-950 border border-amber-500/40 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-500 transition"
                >
                  <option value="White Glass">White Glass</option>
                  <option value="Multi Coated Glass">Multi Coated Glass</option>
                  <option value="Photochromic Glass">Photochromic Glass</option>
                  <option value="Photochromic Multicoated">Photochromic Multicoated</option>
                  <option value="Blue Cut Glass">Blue Cut Glass</option>
                  <option value="Blue Cut Photosun Glass">Blue Cut Photosun Glass</option>
                  <option value="Green Coated U/V Glass">Green Coated U/V Glass</option>
                </select>
              </div>
            )}

            {form.category === 'Contact Lenses' && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
                  🎨 Lens Color
                </label>
                <select
                  name="lens_color"
                  value={form.lens_color}
                  onChange={handleInput}
                  className="w-full bg-slate-950 border border-pink-500/40 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-pink-500 transition"
                >
                  <option value="Natural Black">Natural Black</option>
                  <option value="Chocolate Brown">Chocolate Brown</option>
                  <option value="Brown">Brown</option>
                  <option value="Light Brown">Light Brown</option>
                  <option value="Honey Brown">Honey Brown</option>
                  <option value="Hazel">Hazel</option>
                  <option value="Olive Green">Olive Green</option>
                  <option value="Gray">Gray</option>
                  <option value="Light Gray">Light Gray</option>
                  <option value="Aqua Blue">Aqua Blue</option>
                  <option value="Ocean Blue">Ocean Blue</option>
                  <option value="Ice Gray">Ice Gray</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Stock Status
              </label>
              <select
                name="stock_status"
                value={form.stock_status}
                onChange={handleInput}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleInput}
              placeholder="প্রোডাক্টের সংক্ষিপ্ত বিবরণ লিখুন..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Product Image Upload
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:font-semibold hover:file:bg-blue-500 cursor-pointer transition"
            />
          </div>

          <div className="flex items-center space-x-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <input
              type="checkbox"
              id="featured"
              checked={form.featured}
              onChange={handleFeatured}
              className="w-5 h-5 text-blue-600 rounded bg-slate-900 border-slate-700 focus:ring-blue-500"
            />
            <label htmlFor="featured" className="text-sm font-medium text-slate-300 cursor-pointer">
              🌟 Popular Product (হোম পেজে দেখাবে)
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={saving}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg shadow-blue-600/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {saving ? '⏳ Uploading to Supabase...' : '💾 Save Product'}
            </button>
          </div>

        </form>
      </main>

    </div>
  );
}