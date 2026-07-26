"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  sub_category?: string;
  image_url: string;
}

export default function FramesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // ফ্রেমের সাব-ক্যাটাগরি লিস্ট
  const subCategories = [
    "All",
    "Metal Full Frame",
    "Metal Half Frame",
    "Cell Frame",
    "Rimless",
    "Baby Frame"
  ];

  // Supabase থেকে শুধুমাত্র 'Frames' ক্যাটাগরির প্রোডাক্টগুলো আনা
  const fetchFrames = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", "Frames")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProducts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFrames();
  }, []);

  // সাব-ক্যাটাগরি এবং সার্চ দিয়ে ফিল্টার করা
  const filteredFrames = products.filter((item) => {
    const matchesSubCategory =
      selectedSubCategory === "All" || item.sub_category === selectedSubCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubCategory && matchesSearch;
  });

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

        {/* Filter Tabs (সাব-ক্যাটাগরি বাটনগুলো) */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {subCategories.map((subCat) => (
            <button
              key={subCat}
              onClick={() => setSelectedSubCategory(subCat)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border ${
                selectedSubCategory === subCat
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
              }`}
            >
              {subCat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Search frames by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md rounded-xl bg-slate-900 border border-slate-800 px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-slate-400 mt-16 text-lg">Loading frames...</p>
        )}

        {/* Product Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {filteredFrames.map((frame) => (
              <div key={frame.id} className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col justify-between hover:border-blue-500/50 transition">
                <div>
                  <div className="relative h-72 bg-slate-900 flex items-center justify-center overflow-hidden">
                    {frame.image_url ? (
                      <img
                        src={frame.image_url}
                        alt={frame.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-7xl">👓</span>
                    )}
                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase">
                      {frame.sub_category || "Frame"}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{frame.name}</h3>
                    <p className="text-blue-400 font-black text-xl mt-4">৳ {frame.price}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex gap-4">
                  <a
                    href={`https://wa.me/8801XXXXXXXXX?text=I want to order this frame: ${frame.name} (Price: ৳${frame.price})`}
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
        )}

        {/* No Products Found */}
        {!loading && filteredFrames.length === 0 && (
          <p className="text-center text-slate-500 mt-16 text-lg">No frames found in this category.</p>
        )}

      </div>
    </main>
  );
}