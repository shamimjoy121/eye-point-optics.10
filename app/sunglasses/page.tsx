"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "YOUR_SUPABASE_URL";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function SunglassesPage() {
  const [sunglassesData, setSunglassesData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // সুপাবেজ থেকে Sunglasses ক্যাটাগরির ডেটা ফেচ করা
  useEffect(() => {
    async function fetchSunglasses() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("category", "Sunglasses");

        if (error) {
          console.error("Error fetching sunglasses:", error);
        } else if (data) {
          setSunglassesData(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSunglasses();
  }, []);

  const filtered = sunglassesData.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-slate-950 text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            🕶️ UV400 Protection
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-black">Sunglasses Collection</h1>
          <p className="mt-4 text-slate-400">Protect your eyes in style with our premium polarized sunglasses.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <input
            type="text"
            placeholder="Search sunglasses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md rounded-xl bg-slate-900 border border-slate-800 px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {loading ? (
          <div className="text-center mt-16 text-slate-400">Loading sunglasses...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center mt-16 text-slate-400">No sunglasses found in database.</div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {filtered.map((item) => (
              <div key={item.id} className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col justify-between hover:border-blue-500/50 transition">
                <div>
                  <div className="relative h-64 bg-slate-800 flex items-center justify-center">
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-6xl">🕶️</span>
                    )}
                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {item.sub_category || "Sunglasses"}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-slate-400 mt-2 text-sm">{item.description || item.sub_category || "UV400 Protection"}</p>
                    <p className="text-blue-400 font-black text-lg mt-4">৳{item.price}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(`I want to order Sunglasses: ${item.name} (৳${item.price})`)}`}
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
        )}
      </div>
    </main>
  );
}