"use client";

import { useState } from "react";

const powerGlassesData = [
  { id: 1, name: "Blue Cut Executive", type: "Anti-Radiation", price: "৳২,৮০০", tag: "Popular" },
  { id: 2, name: "Anti-Glare Smart Frame", type: "Multicoated Lens", price: "৳৩,২০০", tag: "Best for Office" },
  { id: 3, name: "Progressive Vision", type: "Multi-Focus Lens", price: "৳৪,৫০০", tag: "Advanced" },
];

export default function PowerGlassesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = powerGlassesData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <main className="bg-slate-950 text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            🤓 Clear Everyday Vision
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-black">Power Glasses</h1>
          <p className="mt-4 text-slate-400">Customized prescription lenses with blue-cut and anti-glare technology.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <input
            type="text"
            placeholder="Search power glasses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md rounded-xl bg-slate-900 border border-slate-800 px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {filtered.map((item) => (
            <div key={item.id} className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col justify-between hover:border-blue-500/50 transition">
              <div>
                <div className="relative h-64 bg-slate-800 flex items-center justify-center text-6xl">
                  🤓
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">{item.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-slate-400 mt-2 text-sm">{item.type}</p>
                  <p className="text-blue-400 font-black text-lg mt-4">{item.price}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/8801XXXXXXXXX?text=I want to order Power Glasses: ${item.name} (${item.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center rounded-xl bg-blue-600 py-3 font-bold hover:bg-blue-500 transition"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}