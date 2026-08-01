'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SunglassesPage() {
  const [sunglassType, setSunglassType] = useState('Polarized');
  const [gender, setGender] = useState('Unisex');

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801779666030';

  const handleViewSunglasses = () => {
    const message = `হ্যালো Eye Point Optics! 👋\nআমি সানগ্লাস কালেকশন দেখতে চাই:\n\n🕶️ *ফিচার/টাইপ:* ${sunglassType}\n👤 *জেন্ডার:* ${gender}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex items-center justify-center p-3 md:p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-5 space-y-5 relative border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl text-xl">
              🕶️
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Sunglasses</h1>
              <p className="text-xs text-slate-500">UV Protection & Fashion</p>
            </div>
          </div>
          <Link
            href="/"
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold hover:bg-slate-200 transition"
          >
            ✕
          </Link>
        </div>

        {/* 1. Select Sunglass Type */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Feature Type
          </label>
          <div className="space-y-2">
            {[
              { id: 'Polarized Lenses', label: 'Polarized Lenses', desc: 'অতিরিক্ত আলো ও রিফ্লেকশন রোধী', icon: '🕶️' },
              { id: 'UV400 Protection', label: 'UV400 Protection', desc: '১০০% ক্ষতিকর রোদ থেকে সুরক্ষার জন্য', icon: '☀️' },
              { id: 'Gradient / Fashion', label: 'Gradient / Fashion', desc: 'স্টাইলিশ শেড ও ট্রেন্ডি লুক', icon: '✨' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSunglassType(item.id)}
                className={`w-full p-3 rounded-2xl border flex items-center justify-between transition ${
                  sunglassType === item.id
                    ? 'border-amber-500 bg-amber-50/40 text-amber-900 ring-1 ring-amber-500 font-bold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 font-medium'
                }`}
              >
                <div className="flex items-center gap-3 text-sm">
                  <span>{item.icon}</span>
                  <div className="text-left">
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{item.desc}</div>
                  </div>
                </div>
                {sunglassType === item.id && (
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                    ✓
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Select Gender */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Gender
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'Gents', label: 'Gents', icon: '👨' },
              { id: 'Ladies', label: 'Ladies', icon: '👩' },
              { id: 'Unisex', label: 'Unisex', icon: '👥' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setGender(item.id)}
                className={`p-2.5 rounded-2xl border flex flex-col items-center gap-1 transition ${
                  gender === item.id
                    ? 'border-amber-500 bg-amber-50/40 text-amber-900 ring-1 ring-amber-500 font-bold'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 font-medium'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            onClick={handleViewSunglasses}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/25 text-sm"
          >
            <span>View Sunglasses</span>
            <span>➔</span>
          </button>
          <p className="text-[11px] text-slate-400 text-center mt-2">
            🕶️ আমাদের সব প্রিমিয়াম সানগ্লাস দেখুন
          </p>
        </div>

        {/* 3. Popular Sunglasses */}
        <div className="pt-2 border-t">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Popular Sunglasses</h3>
            <span className="text-[11px] text-amber-600 font-bold cursor-pointer">View All</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Item 1 */}
            <div className="border border-slate-200 rounded-2xl p-2.5 bg-slate-50 relative">
              <span className="absolute top-2 right-2 text-slate-300 text-xs cursor-pointer">🤍</span>
              <div className="h-20 bg-white rounded-xl mb-2 flex items-center justify-center text-3xl">🕶️</div>
              <h4 className="text-xs font-bold text-slate-800">Aviator Polarized</h4>
              <p className="text-xs font-black text-slate-900 mt-0.5">৳2,250</p>
            </div>

            {/* Item 2 */}
            <div className="border border-slate-200 rounded-2xl p-2.5 bg-slate-50 relative">
              <span className="absolute top-2 right-2 text-slate-300 text-xs cursor-pointer">🤍</span>
              <div className="h-20 bg-white rounded-xl mb-2 flex items-center justify-center text-3xl">🕶️</div>
              <h4 className="text-xs font-bold text-slate-800">Wayfarer UV400</h4>
              <p className="text-xs font-black text-slate-900 mt-0.5">৳1,950</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}