'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PowerGlassesPage() {
  const [powerType, setPowerType] = useState('Single Vision');
  const [lensQuality, setLensQuality] = useState('Blue Cut Glass');

  // Right Eye (OD)
  const [rightSph, setRightSph] = useState('-2.50');
  const [rightCyl, setRightCyl] = useState('-0.75');
  const [rightAxis, setRightAxis] = useState('180');
  const [rightAdd, setRightAdd] = useState('+1.00');

  // Left Eye (OS)
  const [leftSph, setLeftSph] = useState('-2.25');
  const [leftCyl, setLeftCyl] = useState('-0.50');
  const [leftAxis, setLeftAxis] = useState('175');
  const [leftAdd, setLeftAdd] = useState('+1.00');

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801907440365';

  const handleOrder = () => {
    const message = `হ্যালো Eye Point Optics! 👋\nআমি পাওয়ার গ্লাস সম্পর্কিত দাম জানতে/অর্ডার করতে চাই:\n\n📌 *Power Type:* ${powerType}\n✨ *Lens Quality:* ${lensQuality}\n\n👁️ *Right Eye (OD):* SPH: ${rightSph}, CYL: ${rightCyl}, AXIS: ${rightAxis}, ADD: ${rightAdd}\n👁️ *Left Eye (OS):* SPH: ${leftSph}, CYL: ${leftCyl}, AXIS: ${leftAxis}, ADD: ${leftAdd}\n\n💳 বিকাশ পেমেন্ট নম্বর: 01779666030`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex items-center justify-center p-3 md:p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-5 space-y-5 relative border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl text-xl">
              👓
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Power Glasses</h1>
              <p className="text-xs text-slate-500">Build Your Prescription</p>
            </div>
          </div>
          <Link
            href="/"
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold hover:bg-slate-200 transition"
          >
            ✕
          </Link>
        </div>

        {/* 1. Stepper Indicator */}
        <div className="flex items-center justify-between text-center px-2 py-1">
          {[
            { step: '1', label: 'Type', active: true },
            { step: '2', label: 'Quality', active: true },
            { step: '3', label: 'Prescription', active: true },
            { step: '4', label: 'Send', active: false },
          ].map((item, idx) => (
            <div key={item.step} className="flex items-center gap-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    item.active ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {item.step}
                </div>
                <span className="text-[10px] text-slate-500 mt-1">{item.label}</span>
              </div>
              {idx < 3 && <div className="w-8 h-[2px] bg-slate-200 -mt-3" />}
            </div>
          ))}
        </div>

        {/* 2. Select Power Type */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Power Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Single Vision',
              'Bifocal (Moon Shape)',
              'Bifocal (D Shape)',
              'Progressive',
            ].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setPowerType(type)}
                className={`py-2.5 px-3 text-xs font-semibold rounded-xl border flex items-center justify-between transition ${
                  powerType === type
                    ? 'border-emerald-600 bg-emerald-50/50 text-emerald-800 ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{type}</span>
                {powerType === type && (
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Select Lens Quality Dropdown */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Lens Quality
          </label>
          <select
            value={lensQuality}
            onChange={(e) => setLensQuality(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-500"
          >
            <option value="White Glass">White Glass</option>
            <option value="Multi Coated Glass">Multi Coated Glass</option>
            <option value="Photochromic Glass">Photochromic Glass</option>
            <option value="Blue Cut Glass">Blue Cut Glass</option>
            <option value="Blue Cut Photosun Glass">Blue Cut Photosun Glass</option>
          </select>
        </div>

        {/* 4. Green Notice Box */}
        <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center">
          <p className="text-[11px] font-semibold text-emerald-700">
            পাওয়ারের মান জানতে আপনার পাওয়ার প্রিসক্রিপশন কার্ড দেখুন
          </p>
        </div>

        {/* 5. Prescription Inputs (OD & OS) */}
        <div className="space-y-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
          {/* Right Eye (OD) */}
          <div>
            <span className="text-[11px] font-bold text-slate-700 block mb-1">Right Eye (OD)</span>
            <div className="grid grid-cols-4 gap-1.5">
              <div>
                <span className="text-[9px] text-slate-400 block uppercase">SPH</span>
                <input
                  type="text"
                  value={rightSph}
                  onChange={(e) => setRightSph(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-center font-medium"
                />
              </div>
              <div>
                <span className="text-[9px] text-slate-400 block uppercase">CYL</span>
                <input
                  type="text"
                  value={rightCyl}
                  onChange={(e) => setRightCyl(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-center font-medium"
                />
              </div>
              <div>
                <span className="text-[9px] text-slate-400 block uppercase">AXIS</span>
                <input
                  type="text"
                  value={rightAxis}
                  onChange={(e) => setRightAxis(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-center font-medium"
                />
              </div>
              <div>
                <span className="text-[9px] text-slate-400 block uppercase">ADD</span>
                <input
                  type="text"
                  value={rightAdd}
                  onChange={(e) => setRightAdd(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-center font-medium"
                />
              </div>
            </div>
          </div>

          {/* Left Eye (OS) */}
          <div>
            <span className="text-[11px] font-bold text-slate-700 block mb-1">Left Eye (OS)</span>
            <div className="grid grid-cols-4 gap-1.5">
              <div>
                <span className="text-[9px] text-slate-400 block uppercase">SPH</span>
                <input
                  type="text"
                  value={leftSph}
                  onChange={(e) => setLeftSph(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-center font-medium"
                />
              </div>
              <div>
                <span className="text-[9px] text-slate-400 block uppercase">CYL</span>
                <input
                  type="text"
                  value={leftCyl}
                  onChange={(e) => setLeftCyl(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-center font-medium"
                />
              </div>
              <div>
                <span className="text-[9px] text-slate-400 block uppercase">AXIS</span>
                <input
                  type="text"
                  value={leftAxis}
                  onChange={(e) => setLeftAxis(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-center font-medium"
                />
              </div>
              <div>
                <span className="text-[9px] text-slate-400 block uppercase">ADD</span>
                <input
                  type="text"
                  value={leftAdd}
                  onChange={(e) => setLeftAdd(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-center font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6. Upload Photo Option */}
        <div>
          <span className="text-[10px] text-slate-400 font-bold block text-center mb-1.5">
            Or Upload Prescription
          </span>
          <button
            type="button"
            className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl py-2.5 text-xs font-bold text-slate-700 flex items-center justify-center gap-2 transition"
          >
            📤 Upload Photo
          </button>
        </div>

        {/* 7. WhatsApp Button & Privacy */}
        <div className="space-y-2 pt-1">
          <button
            type="button"
            onClick={handleOrder}
            className="w-full bg-[#00A884] hover:bg-[#008f70] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-600/20 text-sm"
          >
            💬 Price on WhatsApp
          </button>
          <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
            🔒 আপনার তথ্য নিরাপদ ও গোপন থাকবে
          </p>
        </div>

      </div>
    </div>
  );
}