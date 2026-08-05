'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PowerGlassesPage() {
  const [selectedType, setSelectedType] = useState('Single Vision');
  const [lensQuality, setLensQuality] = useState('White');
  const [fileName, setFileName] = useState<string | null>(null);

  // Right Eye (OD)
  const [rightSph, setRightSph] = useState('-2.50');
  const [rightCyl, setRightCyl] = useState('-0.75');
  const [rightAxis, setRightAxis] = useState('180');
  const [rightAdd, setRightAdd] = useState('+1.00');

  // Left Eye (OS)
  const [leftSph, setLeftSph] = useState('-2.00');
  const [leftCyl, setLeftCyl] = useState('-0.50');
  const [leftAxis, setLeftAxis] = useState('175');
  const [leftAdd, setLeftAdd] = useState('+1.00');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  // ১০০% ক্লিয়ার ও সেফ হোয়াটসঅ্যাপ লিংক জেনারেটর
  const handleSubmitToWhatsApp = () => {
    const phoneNumber = '8801779666030';
    
    // লাইন ব্রেক এবং স্টাইলিং এনকোড করে সাজানো
    const text = 
      `*EYE POINT OPTICS*%0A` +
      `*POWER GLASS ORDER*%0A` +
      `----------------------------------%0A` +
      `Type: ${selectedType}%0A` +
      `Quality: ${lensQuality}%0A%0A` +
      `*RIGHT EYE (OD)*%0A` +
      `SPH: ${rightSph} | CYL: ${rightCyl}%0A` +
      `AXIS: ${rightAxis} | ADD: ${rightAdd}%0A%0A` +
      `*LEFT EYE (OS)*%0A` +
      `SPH: ${leftSph} | CYL: ${leftCyl}%0A` +
      `AXIS: ${leftAxis} | ADD: ${leftAdd}%0A%0A` +
      `Prescription File: ${fileName ? fileName : 'Not Uploaded'}%0A` +
      `----------------------------------%0A` +
      `Hello, I would like to confirm my order!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950/80 p-4 flex items-center justify-center">
      {/* মেইন কার্ড Container */}
      <div className="relative w-full max-w-2xl bg-slate-900/90 border border-cyan-500/40 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] backdrop-blur-2xl">
        
        {/* হেডার ও ক্লোজ বাটন */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/30 text-2xl text-cyan-400">
              👓
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-wide">Power Glasses</h2>
              <p className="text-cyan-400 text-xs font-semibold">Build Your Prescription</p>
            </div>
          </div>
          <Link href="/" className="text-slate-400 hover:text-red-400 transition text-2xl font-bold">
            ✕
          </Link>
        </div>

        {/* স্টেপ প্রোগ্রেস বার */}
        <div className="grid grid-cols-4 gap-2 mb-8 text-center">
          {[
            { num: '1', label: 'Type' },
            { num: '2', label: 'Quality' },
            { num: '3', label: 'Prescription' },
            { num: '4', label: 'Send' },
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm mb-1 ${
                idx === 0 
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.8)]' 
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}>
                {step.num}
              </div>
              <span className={`text-xs font-semibold ${idx === 0 ? 'text-emerald-400' : 'text-slate-500'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* সেকশন ১: SELECT POWER TYPE */}
        <div className="mb-6">
          <label className="text-xs font-bold text-cyan-300 uppercase tracking-widest block mb-3">
            Select Power Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['Single Vision', 'Bifocal (Moon Shape)', 'Bifocal (D Shape)', 'Progressive'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`p-3 rounded-2xl border text-sm font-bold text-left transition flex items-center justify-between ${
                  selectedType === type
                    ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-cyan-500/40'
                }`}
              >
                <span>{type}</span>
                {selectedType === type && <span className="text-emerald-400 text-base">✓</span>}
              </button>
            ))}
          </div>
        </div>

        {/* সেকশন ২: SELECT LENS QUALITY */}
        <div className="mb-6">
          <label className="text-xs font-bold text-cyan-300 uppercase tracking-widest block mb-3">
            Select Lens Quality
          </label>
          <select
            value={lensQuality}
            onChange={(e) => setLensQuality(e.target.value)}
            className="w-full bg-slate-800/90 border border-cyan-500/30 rounded-2xl p-3.5 text-cyan-200 font-bold focus:border-cyan-400 focus:outline-none transition cursor-pointer"
          >
            <option value="White" className="bg-slate-900 text-white">White</option>
            <option value="Multicoated" className="bg-slate-900 text-white">Multicoated</option>
            <option value="Photosun" className="bg-slate-900 text-white">Photosun</option>
            <option value="Multicoated Photosun" className="bg-slate-900 text-white">Multicoated Photosun</option>
            <option value="Blue Cut" className="bg-slate-900 text-white">Blue Cut</option>
            <option value="Photosun Blue Cut" className="bg-slate-900 text-white">Photosun Blue Cut</option>
          </select>
        </div>

        {/* গাইডেন্স মেসেজ */}
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-6 text-center">
          <p className="text-xs font-bold text-emerald-400">
            💡 আপনার পওয়ারের দাম জানতে নীচের পাওয়ারের প্রেস্ক্রিপশন ঘরটি টি পূরণ করুন অথবা আপনার ফোন থেকে ছবি অপলোড করে সেন্ড ওয়াটস্যাপ বাটনে ট্যাপ করুন।
          </p>
        </div>

        {/* পাওয়ার ইনপুট গ্রিড */}
        <div className="space-y-4 mb-6 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
          
          {/* Right Eye (OD) */}
          <div>
            <div className="text-xs font-bold text-cyan-400 uppercase mb-2">Right Eye (OD)</div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <span className="text-slate-400 font-bold">SPH</span>
              <span className="text-slate-400 font-bold">CYL</span>
              <span className="text-slate-400 font-bold">AXIS</span>
              <span className="text-slate-400 font-bold">ADD</span>
              
              <input type="text" value={rightSph} onChange={(e) => setRightSph(e.target.value)} className="bg-slate-900 border border-slate-700 text-cyan-300 p-2 rounded-xl text-center font-bold focus:border-cyan-400 focus:outline-none" />
              <input type="text" value={rightCyl} onChange={(e) => setRightCyl(e.target.value)} className="bg-slate-900 border border-slate-700 text-cyan-300 p-2 rounded-xl text-center font-bold focus:border-cyan-400 focus:outline-none" />
              <input type="text" value={rightAxis} onChange={(e) => setRightAxis(e.target.value)} className="bg-slate-900 border border-slate-700 text-cyan-300 p-2 rounded-xl text-center font-bold focus:border-cyan-400 focus:outline-none" />
              <input type="text" value={rightAdd} onChange={(e) => setRightAdd(e.target.value)} className="bg-slate-900 border border-slate-700 text-cyan-300 p-2 rounded-xl text-center font-bold focus:border-cyan-400 focus:outline-none" />
            </div>
          </div>

          <hr className="border-slate-800/80 my-2" />

          {/* Left Eye (OS) */}
          <div>
            <div className="text-xs font-bold text-pink-400 uppercase mb-2">Left Eye (OS)</div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <span className="text-slate-400 font-bold">SPH</span>
              <span className="text-slate-400 font-bold">CYL</span>
              <span className="text-slate-400 font-bold">AXIS</span>
              <span className="text-slate-400 font-bold">ADD</span>
              
              <input type="text" value={leftSph} onChange={(e) => setLeftSph(e.target.value)} className="bg-slate-900 border border-slate-700 text-pink-300 p-2 rounded-xl text-center font-bold focus:border-pink-400 focus:outline-none" />
              <input type="text" value={leftCyl} onChange={(e) => setLeftCyl(e.target.value)} className="bg-slate-900 border border-slate-700 text-pink-300 p-2 rounded-xl text-center font-bold focus:border-pink-400 focus:outline-none" />
              <input type="text" value={leftAxis} onChange={(e) => setLeftAxis(e.target.value)} className="bg-slate-900 border border-slate-700 text-pink-300 p-2 rounded-xl text-center font-bold focus:border-pink-400 focus:outline-none" />
              <input type="text" value={leftAdd} onChange={(e) => setLeftAdd(e.target.value)} className="bg-slate-900 border border-slate-700 text-pink-300 p-2 rounded-xl text-center font-bold focus:border-pink-400 focus:outline-none" />
            </div>
          </div>

        </div>

        {/* প্রেসক্রিপশন ছবি আপলোড করার বাটন */}
        <div className="mb-8">
          <label className="text-xs font-bold text-cyan-300 uppercase tracking-widest block mb-2">
            Upload Prescription Image
          </label>
          <div className="flex items-center gap-3">
            <label className="flex-1 flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 border border-dashed border-cyan-500/50 text-cyan-300 py-3 px-4 rounded-2xl cursor-pointer transition">
              <span className="text-xl">📷</span>
              <span className="text-sm font-bold">
                {fileName ? fileName : 'Upload Prescription Photo'}
              </span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                className="hidden" 
              />
            </label>
          </div>
        </div>

        {/* হোয়াটসঅ্যাপ সাবমিট বাটন */}
        <button 
          onClick={handleSubmitToWhatsApp}
          className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.01] transition active:scale-[0.99] flex items-center justify-center gap-2 text-lg"
        >
          <span>💬</span> SEND PRESCRIPTION TO WHATSAPP →
        </button>

      </div>
    </div>
  );
}