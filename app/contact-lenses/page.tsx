"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "YOUR_SUPABASE_URL";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const colorHexMap: { [key: string]: string } = {
  Ash: "#94a3b8",
  Mint: "#6ee7b7",
  Grey: "#64748b",
  Green: "#22c55e",
  Brown: "#b45309",
  Blue: "#3b82f6",
  Aqua: "#06b6d4",
  Honey: "#eab308",
  Hazel: "#9a3412",
  Emerald: "#059669",
  Violet: "#8b5cf6",
};

export default function ContactLensesPage() {
  const [lensesData, setLensesData] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLenses() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("category", "Contact Lenses");

        if (error) {
          console.error("Error fetching lenses:", error);
        } else if (data) {
          setLensesData(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchLenses();
  }, []);

  const filtered = lensesData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.sub_category === activeCategory;
    const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-slate-950 text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            👁️ Soft & Comfortable
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-black">Contact Lenses</h1>
          <p className="mt-4 text-slate-400">
            Choose from our premium collection of cosmetic and power contact lenses.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["All", "Cosmetic Lens", "Colourful Power Lens", "Transparent Power Lens"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-blue-500/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Search contact lenses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md rounded-xl bg-slate-900 border border-slate-800 px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {loading ? (
          <div className="text-center mt-16 text-slate-400">Loading contact lenses...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center mt-16 text-slate-400">No contact lenses found in this category.</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {filtered.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function ProductCard({ item }: { item: any }) {
  const [power, setPower] = useState("0.00");
  const [color, setColor] = useState("Ash");

  const isCosmetic = item.sub_category === "Cosmetic Lens";
  const isTransparent = item.sub_category === "Transparent Power Lens";

  let whatsappMessage = `I want to order ${item.sub_category || "Contact Lens"}: ${item.name} (৳${item.price})`;
  
  if (!isTransparent) {
    whatsappMessage += ` | Color: ${color}`;
  }
  if (!isCosmetic) {
    whatsappMessage += ` | Power: ${power}`;
  }
  whatsappMessage += ` | Payment Method: Bkash Payment (01907440365)`;

  const availableColors = ["Ash", "Mint", "Grey", "Green", "Brown", "Blue", "Aqua", "Honey", "Hazel", "Emerald", "Violet"];

  return (
    <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col justify-between hover:border-blue-500/50 transition">
      <div>
        <div className="relative h-64 bg-slate-800 flex items-center justify-center">
          {item.image_url ? (
            <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-6xl">👁️</span>
          )}
          <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {item.sub_category || "Lens"}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-slate-400 mt-2 text-sm">{item.description || "High quality lens"}</p>
          <p className="text-blue-400 font-black text-lg mt-4">৳{item.price}</p>

          {!isTransparent && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-400">Select Color:</label>
                <div className="flex items-center gap-1.5 text-xs text-blue-300 font-medium">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-slate-600 inline-block shadow-sm"
                    style={{ backgroundColor: colorHexMap[color] || "#fff" }}
                  ></span>
                  {color}
                </div>
              </div>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                {availableColors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}

          {!isCosmetic && (
            <div className="mt-4">
              <label className="block text-xs font-semibold text-slate-400 mb-1">Select Power (SPH):</label>
              <select
                value={power}
                onChange={(e) => setPower(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="0.00">0.00 (Plain)</option>
                <option value="-0.50">-0.50</option>
                <option value="-1.00">-1.00</option>
                <option value="-1.50">-1.50</option>
                <option value="-2.00">-2.00</option>
                <option value="-2.50">-2.50</option>
                <option value="-3.00">-3.00</option>
                <option value="-3.50">-3.50</option>
                <option value="-4.00">-4.00</option>
                <option value="-4.50">-4.50</option>
                <option value="-5.00">-5.00</option>
                <option value="-5.50">-5.50</option>
                <option value="-6.00">-6.00</option>
                <option value="-6.50">-6.50</option>
                <option value="-7.00">-7.00</option>
                <option value="-7.50">-7.50</option>
                <option value="-8.00">-8.00</option>
                <option value="-8.50">-8.50</option>
                <option value="-9.00">-9.00</option>
                <option value="-9.50">-9.50</option>
                <option value="-10.00">-10.00</option>
              </select>
            </div>
          )}

          <div className="mt-4 p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400 font-medium">💳 বিকাশ পেমেন্ট নম্বর:</p>
            <p className="text-sm font-bold text-blue-400 mt-0.5">01907440365</p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <a
          href={`https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center rounded-xl bg-blue-600 py-3 font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}