"use client";

import { useState } from "react";

const lensesData = [
  { id: 1, name: "Daily Soft Comfort", type: "1 Day Disposable", price: "৳১,৫০০", tag: "Comfort" },
  { id: 2, name: "Monthly Color Lens", type: "Natural Grey/Brown", price: "৳২,২০০", tag: "Trending" },
  { id: 3, name: "High Moisture Lens", type: "All Day Hydration", price: "৳২,৬০০", tag: "Best Seller" },
];

export default function ContactLensesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = lensesData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <main className="bg-slate-950 text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            👁️ Soft & Comfortable
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-black">Contact Lenses</h1>
          <p className="mt-4 text-slate-400">High-oxygen permeability contact lenses for ultimate clarity and comfort.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <input
            type="text"
            placeholder="Search contact lenses..."
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
                  👁️
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
                  href={`https://wa.me/8801XXXXXXXXX?text=I want to order Contact Lenses: ${item.name} (${item.price})`}
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