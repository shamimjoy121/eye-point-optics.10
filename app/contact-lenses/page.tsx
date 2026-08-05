'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactLensesPage() {
  const [selectedLensType, setSelectedLensType] = useState('Clear Power Lens');
  const [rightEyePower, setRightEyePower] = useState('-2.50');
  const [leftEyePower, setLeftEyePower] = useState('-2.00');

  // WhatsApp মেসেজ পাঠানোর ফাংশন
  const handleSubmitToWhatsApp = () => {
    const phoneNumber = '8801779666030';

    const text = 
      `*EYE POINT OPTICS*%0A` +
      `*CONTACT LENS ORDER*%0A` +
      `----------------------------------%0A` +
      `Lens Type: ${selectedLensType}%0A%0A` +
      `*Right Eye (OD) Power:* ${rightEyePower}%0A` +
      `*Left Eye (OS) Power:* ${leftEyePower}%0A` +
      `----------------------------------%0A` +
      `Hello, I would like to confirm my contact lens order!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950/80 p-4 flex items-center justify-center">
      {/* মেইন কার্ড Container */}
      <div className="relative w-full max-w-xl bg-slate-900/90 border border-pink-500/40 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
        
        {/* হেডার ও ক্লোজ বাটন */}
        <div className="flex items-center justify-between border-b border-pink-500/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-pink-500/10 rounded-2xl border border-pink-500/30 text-2xl text-pink-400">
              👁️
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-wide">Contact Lenses</h2>
              <p className="text-pink-400 text-xs font-semibold">Select Power & Order</p>
            </div>
          </div>
          <Link href="/" className="text-slate-400 hover:text-red-400 transition text-2xl font-bold">
            ✕
          </Link>
        </div>

        {/* সেকশন ১: SELECT LENS TYPE (শুধুমাত্র ৩টি অপশন) */}
        <div className="mb-6">
          <label className="text-xs font-bold text-pink-300 uppercase tracking-widest block mb-3">
            Select Lens Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Clear Power Lens', 
              'Color Cosmetic Lens', 
              '(White) Transparent Power Contact Lens'
            ].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedLensType(type)}
                className={`p-3.5 rounded-2xl border text-sm font-bold text-left transition flex items-center justify-between ${
                  type === '(White) Transparent Power Contact Lens' ? 'col-span-2' : ''
                } ${
                  selectedLensType === type
                    ? 'bg-pink-500/15 border-pink-500 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.2)]'
                    : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-pink-500/40'
                }`}
              >
                <span>{type}</span>
                {selectedLensType === type && <span className="text-pink-400 text-base">✓</span>}
              </button>
            ))}
          </div>
        </div>

        {/* সেকশন ২: POWER RANGE & EYE INPUTS */}
        <div className="mb-8 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-pink-300 uppercase tracking-widest">
              Power Range (Diopter)
            </span>
            <span className="text-xs font-semibold text-slate-400">
              -0.50 to -10.00
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* ১. Right Eye (OD) */}
            <div>
              <label className="text-xs font-bold text-cyan-400 block mb-2">
                Right Eye (OD)
              </label>
              <input
                type="text"
                value={rightEyePower}
                onChange={(e) => setRightEyePower(e.target.value)}
                placeholder="-2.50"
                className="w-full bg-slate-900 border border-slate-700 text-cyan-300 p-3 rounded-2xl text-center font-bold text-lg focus:border-cyan-400 focus:outline-none transition"
              />
            </div>

            {/* ২. Left Eye (OS) */}
            <div>
              <label className="text-xs font-bold text-pink-400 block mb-2">
                Left Eye (OS)
              </label>
              <input
                type="text"
                value={leftEyePower}
                onChange={(e) => setLeftEyePower(e.target.value)}
                placeholder="-2.00"
                className="w-full bg-slate-900 border border-slate-700 text-pink-300 p-3 rounded-2xl text-center font-bold text-lg focus:border-pink-400 focus:outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* হোয়াটসঅ্যাপ সাবমিট বাটন */}
        <button
          onClick={handleSubmitToWhatsApp}
          className="w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-400 hover:to-indigo-400 text-white font-black rounded-2xl shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:scale-[1.01] transition active:scale-[0.99] flex items-center justify-center gap-2 text-lg"
        >
          <span>💬</span> CONFIRM LENS ORDER VIA WHATSAPP →
        </button>

      </div>
    </div>
  );
}