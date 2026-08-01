'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BabyFramesPage() {
  const [category, setCategory] = useState('Boys');
  const [ageGroup, setAgeGroup] = useState('3 - 6 Years');
  const [selectedColor, setSelectedColor] = useState('Black');

  const colors = [
    { name: 'Black', bg: 'bg-black' },
    { name: 'Blue', bg: 'bg-blue-600' },
    { name: 'Red', bg: 'bg-red-600' },
    { name: 'Green', bg: 'bg-green-600' },
    { name: 'Yellow', bg: 'bg-yellow-400' },
    { name: 'Pink', bg: 'bg-pink-400' },
    { name: 'Purple', bg: 'bg-purple-600' },
  ];

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801779666030';

  const handleViewBabyFrames = () => {
    const message = `হ্যালো Eye Point Optics! 👋\nআমি বাচ্চাদের চশমার ফ্রেম দেখতে চাই:\n\n👶 *ক্যাটাগরি:* ${category}\n🎂 *বয়স:* ${ageGroup}\n🎨 *কালার:* ${selectedColor}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex items-center justify-center p-3 md:p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-5 space-y-6 relative border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-pink-50 text-pink-500 rounded-xl text-xl">
              👓
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Baby Frames</h1>
              <p className="text-xs text-slate-500">Cute & Comfortable</p>
            </div>
          </div>
          <Link
            href="/"
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold hover:bg-slate-200 transition"
          >
            ✕
          </Link>
        </div>

        {/* 1. Select Category (Boys / Girls) */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
            Select Category
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'Boys', label: 'Boys', icon: '👦' },
              { id: 'Girls', label: 'Girls', icon: '👧' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition relative ${
                  category === item.id
                    ? 'border-pink-500 bg-pink-50/30 ring-1 ring-pink-500'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                {category === item.id && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-pink-500 text-white flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                )}
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs font-bold text-slate-800">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Age Group (Optional) */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Age Group <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-pink-500 transition"
          >
            <option value="1 - 3 Years">1 - 3 Years</option>
            <option value="3 - 6 Years">3 - 6 Years</option>
            <option value="6 - 10 Years">6 - 10 Years</option>
            <option value="10 - 14 Years">10 - 14 Years</option>
          </select>
        </div>

        {/* 3. Frame Color (Optional) */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
            Frame Color <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <div className="flex flex-wrap gap-3 items-center">
            {colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c.name)}
                className={`w-8 h-8 rounded-full ${c.bg} transition shadow-sm border-2 ${
                  selectedColor === c.name ? 'border-pink-500 ring-2 ring-pink-300' : 'border-white'
                }`}
                title={c.name}
              />
            ))}
            <span className="text-xs text-slate-400 font-medium ml-1">More...</span>
          </div>
        </div>

        {/* Action Button & Tagline */}
        <div className="space-y-3 pt-2">
          <button
            type="button"
            onClick={handleViewBabyFrames}
            className="w-full bg-[#e91e63] hover:bg-[#d81b60] text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition shadow-lg shadow-pink-500/20 text-sm"
          >
            <span>View Baby Frames</span>
            <span>➔</span>
          </button>
          
          <p className="text-[11px] text-pink-500 font-medium text-center flex items-center justify-center gap-1">
            💕 Cute Frames for Your Little Ones
          </p>
        </div>

      </div>
    </div>
  );
}