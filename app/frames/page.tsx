'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FramesPage() {
  const [frameType, setFrameType] = useState('Metal Frame');
  const [gender, setGender] = useState('Gents');

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801779666030';

  const handleViewFrames = () => {
    const message = `হ্যালো Eye Point Optics! 👋\nআমি চশমার ফ্রেম দেখতে চাই:\n\n📌 *Frame Type:* ${frameType}\n👤 *Gender:* ${gender}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex items-center justify-center p-3 md:p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-5 space-y-5 relative border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl text-xl">
              👓
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Frames</h1>
              <p className="text-xs text-slate-500">Choose Your Style</p>
            </div>
          </div>
          <Link
            href="/"
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold hover:bg-slate-200 transition"
          >
            ✕
          </Link>
        </div>

        {/* 1. Select Frame Type */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Frame Type
          </label>
          <div className="space-y-2">
            {[
              { id: 'Metal Frame', label: 'Metal Frame', icon: '👓' },
              { id: 'Shell Frame', label: 'Shell Frame', icon: '🕶️' },
              { id: 'Rimless Frame', label: 'Rimless Frame', icon: '🥽' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFrameType(item.id)}
                className={`w-full p-3 rounded-2xl border flex items-center justify-between transition ${
                  frameType === item.id
                    ? 'border-blue-600 bg-blue-50/40 text-blue-900 ring-1 ring-blue-600 font-bold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 font-medium'
                }`}
              >
                <div className="flex items-center gap-3 text-sm">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {frameType === item.id && (
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
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
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'Gents', label: 'Gents', sub: '(Jeans)', icon: '👨' },
              { id: 'Ladies', label: 'Ladies', sub: '', icon: '👩' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setGender(item.id)}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition ${
                  gender === item.id
                    ? 'border-blue-600 bg-blue-50/40 text-blue-900 ring-1 ring-blue-600 font-bold'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 font-medium'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <div className="text-left">
                  <div className="text-xs">{item.label}</div>
                  {item.sub && <div className="text-[10px] text-slate-400 font-normal">{item.sub}</div>}
                </div>
                {gender === item.id && (
                  <div className="ml-auto w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Action Button */}
        <div>
          <button
            type="button"
            onClick={handleViewFrames}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/30 text-sm"
          >
            <span>View Frames</span>
            <span>➔</span>
          </button>
          <p className="text-[11px] text-slate-400 text-center mt-2">
            🔒 আমাদের সব ফ্রেম দেখুন
          </p>
        </div>

        {/* 3. Popular Frames */}
        <div className="pt-2 border-t">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Popular Frames</h3>
            <span className="text-[11px] text-blue-600 font-bold cursor-pointer">View All</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Item 1 */}
            <div className="border border-slate-200 rounded-2xl p-2.5 bg-slate-50 relative">
              <span className="absolute top-2 right-2 text-slate-300 text-xs cursor-pointer">🤍</span>
              <div className="h-20 bg-white rounded-xl mb-2 flex items-center justify-center text-3xl">👓</div>
              <h4 className="text-xs font-bold text-slate-800">Metal Frame</h4>
              <p className="text-xs font-black text-slate-900 mt-0.5">৳1,650</p>
            </div>

            {/* Item 2 */}
            <div className="border border-slate-200 rounded-2xl p-2.5 bg-slate-50 relative">
              <span className="absolute top-2 right-2 text-slate-300 text-xs cursor-pointer">🤍</span>
              <div className="h-20 bg-white rounded-xl mb-2 flex items-center justify-center text-3xl">🕶️</div>
              <h4 className="text-xs font-bold text-slate-800">Shell Frame</h4>
              <p className="text-xs font-black text-slate-900 mt-0.5">৳1,850</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}