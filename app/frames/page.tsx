"use client";

import Link from "next/link";
import { useState } from "react";

// ডামি প্রোডাক্ট ডেটা (পরবর্তীতে অ্যাডমিন প্যানেল বা ডাটাবেজ থেকে আসবে)
const framesData = [
  { id: 1, name: "Titanium Minimalist", type: "TR90 Lightweight", price: "৳২,৫০০", tag: "Best Seller" },
  { id: 2, name: "Classic Aviator", type: "Metal Frame", price: "৳৩,০০০", tag: "New" },
  { id: 3, name: "Modern Cat-Eye", type: "Acetate", price: "৳২,৮০০", tag: "Trending" },
  { id: 4, name: "Executive Round", type: "Classic Metal", price: "৳৩,৫০০", tag: "Premium" },
  { id: 5, name: "Flexible Sport", type: "TR90 Flex", price: "৳২,২০০", tag: "Popular" },
  { id: 6, name: "Vintage Square", type: "Premium Acetate", price: "৳৩,২০০", tag: "Exclusive" },
];

export default function FramesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFrames = framesData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-slate-950 text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            👓 Exclusive Collection
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-black">
            Premium Frames
          </h1>
          <p className="mt-4 text-slate-400">
            Discover lightweight, durable, and stylish frames designed for your everyday comfort.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-12 flex justify-center">
          <input
            type="text"
            placeholder="Search frames by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md rounded-xl bg-slate-900 border border-slate-800 px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {filteredFrames.map((frame) => (
            <div key={frame.id} className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col justify-between hover:border-blue-500/50 transition">
              <div>
                <div className="relative h-72 bg-slate-800 flex items-center justify-center text-7xl">
                  👓
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {frame.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{frame.name}</h3>
                  <p className="text-slate-400 mt-2">{frame.type}</p>
                  <p className="text-blue-400 font-black text-xl mt-4">{frame.price}</p>
                </div>
              </div>
              <div className="p-6 pt-0 flex gap-4">
                <a
                  href={`https://wa.me/8801XXXXXXXXX?text=I want to order this frame: ${frame.name} (${frame.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-xl bg-blue-600 py-3 font-bold hover:bg-blue-500 transition"
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