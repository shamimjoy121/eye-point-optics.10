'use client';

import { useState } from 'react';
import Link from 'next/link';

// স্ক্রিনশট অনুযায়ী কালার সুইচ লিস্ট ও ব্যাকগ্রাউন্ড কালার
const COLORS = [
  { name: 'Natural Black', bg: 'bg-black' },
  { name: 'Chocolate Brown', bg: 'bg-[#4a2e18]' },
  { name: 'Brown', bg: 'bg-[#784212]' },
  { name: 'Light Brown', bg: 'bg-[#b9770e]' },
  { name: 'Honey Brown', bg: 'bg-[#d68910]' },
  { name: 'Hazel', bg: 'bg-[#827717]' },
  { name: 'Olive Green', bg: 'bg-[#33691e]' },
  { name: 'Gray', bg: 'bg-[#616161]' },
  { name: 'Light Gray', bg: 'bg-[#9e9e9e]' },
  { name: 'Aqua Blue', bg: 'bg-[#00b0ff]' },
  { name: 'Ocean Blue', bg: 'bg-[#0077c2]' },
  { name: 'Ice Gray', bg: 'bg-[#b0bec5]' },
];

export default function ContactLensesPage() {
  const [selectedType, setSelectedType] = useState('Cosmetic Lens');
  const [selectedColor, setSelectedColor] = useState('Natural Black');
  const [power, setPower] = useState('-2.50');
  const [quantity, setQuantity] = useState(1);

  // পাওয়ার অপশন জেনারেট (-0.25 থেকে -10.00 পর্যন্ত)
  const powerOptions = Array.from({ length: 40 }, (_, i) => {
    const val = (-0.25 * (i + 1)).toFixed(2);
    return val;
  });

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801779666030';

  // WhatsApp Order Link Generator
  const handleOrder = () => {
    const message = `হ্যালো Eye Point Optics! 👋\nআমি কন্টাক্ট লেন্স অর্ডার করতে চাই:\n\n👁 *টাইপ:* ${selectedType}\n🎨 *কালার:* ${selectedColor}\n🔢 *পাওয়ার (SPH):* ${power}\n📦 *পরিমাণ:* ${quantity} Pair (জোড়া)\n\n💳 বিকাশ পেমেন্ট নম্বর: 01907440365`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-3 md:p-6 font-sans">
      <div className="w-full max-w-md bg-white text-slate-900 rounded-3xl shadow-2xl p-5 space-y-6 relative border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl text-xl">
              👁️
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Contact Lenses</h1>
              <p className="text-xs text-slate-500">Select Type & Details</p>
            </div>
          </div>
          <Link
            href="/"
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold hover:bg-slate-200 transition"
          >
            ✕
          </Link>
        </div>

        {/* 1. Type Tabs */}
        <div className="grid grid-cols-3 gap-2">
          {['Cosmetic Lens', 'Power (Transparent)', 'Color Power Lens'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`py-2 px-2 text-[11px] font-semibold rounded-xl border transition text-center ${
                selectedType === type
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* 2. Select Color */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
            Select Color
          </label>
          <div className="grid grid-cols-4 gap-3 max-h-56 overflow-y-auto pr-1">
            {COLORS.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`p-2.5 rounded-2xl flex flex-col items-center gap-1.5 border transition ${
                  selectedColor === color.name
                    ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20'
                    : 'border-slate-100 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className={`w-7 h-7 rounded-full shadow-inner ${color.bg} border border-white`} />
                <span className="text-[10px] font-semibold text-slate-700 text-center line-clamp-1">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Power (SPH) Dropdown */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Power (SPH)
          </label>
          <select
            value={power}
            onChange={(e) => setPower(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-500 transition"
          >
            <option value="0.00">0.00 (Plano / Powerless)</option>
            {powerOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* 4. Quantity (Pair) Counter */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Quantity (Pair)
          </label>
          <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-1.5">
            <button
              type="button"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100 transition shadow-sm"
            >
              -
            </button>
            <span className="font-bold text-slate-800 text-base">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100 transition shadow-sm"
            >
              +
            </button>
          </div>
        </div>

        {/* Payment Info */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
          <span className="text-slate-600 font-medium">💳 বিকাশ পেমেন্ট নম্বর:</span>
          <span className="font-bold text-blue-600">01907440365</span>
        </div>

        {/* 5. Order Button */}
        <div className="space-y-2 pt-1">
          <button
            type="button"
            onClick={handleOrder}
            className="w-full bg-[#00A884] hover:bg-[#008f70] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-600/20"
          >
            💬 Order on WhatsApp
          </button>
          <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
            🔒 আপনার তথ্য নিরাপদ ও গোপন থাকবে
          </p>
        </div>

      </div>
    </div>
  );
}