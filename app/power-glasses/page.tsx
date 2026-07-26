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

export default function PowerGlassesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // প্রতিটা কার্ডের জন্য আলাদা প্রেসক্রিপশন ডেটা ট্র্যাক করার স্টেট (product.id দিয়ে আলাদা রাখা হবে)
  const [prescriptions, setPrescriptions] = useState<{ [key: string]: { rightSph: string; rightCyl: string; rightAxis: string; rightVa: string; leftSph: string; leftCyl: string; leftAxis: string; leftVa: string; nearAdd: string; ipd: string } }>({});

  const powerGlassTypes = [
    "All",
    "Bifocal - White",
    "Bifocal - Multicoated",
    "Bifocal - Photosun",
    "Bifocal - Photosun Multicoated",
    "Bifocal - Blue Cut",
    "Bifocal - Photosun Blue Cut",
    "Progressive - White",
    "Progressive - Multicoated",
    "Progressive - Photosun",
    "Progressive - Photosun Multicoated",
    "Progressive - Blue Cut",
    "Progressive - Photosun Blue Cut",
    "Single Vision - White",
    "Single Vision - Multicoated",
    "Single Vision - Photosun",
    "Single Vision - Photosun Multicoated",
    "Single Vision - Blue Cut",
    "Single Vision - Photosun Blue Cut"
  ];

  const fetchPowerGlasses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", "Power Glasses")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProducts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPowerGlasses();
  }, []);

  const filtered = products.filter((item) => {
    const matchesType =
      selectedType === "All" || item.sub_category === selectedType;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // ইনপুট হ্যান্ডলার (সঠিক ও এরর-মুক্ত টাইপস্ক্রিপ্ট কোড)
  const handleInputChange = (id: string, field: string, value: string) => {
    setPrescriptions((prev) => {
      const currentProduct = prev[id] || {
        rightSph: "", rightCyl: "", rightAxis: "", rightVa: "",
        leftSph: "", leftCyl: "", leftAxis: "", leftVa: "",
        nearAdd: "", ipd: ""
      };

      return {
        ...prev,
        [id]: {
          ...currentProduct,
          [field]: value
        }
      };
    });
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            🤓 Clear Everyday Vision
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-black">Power Glasses</h1>
          <p className="mt-4 text-slate-400">Customized prescription lenses with advanced quality and protection technology.</p>
        </div>

        {/* Highlighted Quality & Types Filter Bar */}
        <div className="mt-10">
          <p className="text-center text-sm font-semibold text-slate-400 mb-4">Select Lens Type & Quality:</p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {powerGlassTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                  selectedType === type
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search power glasses by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md rounded-xl bg-slate-900 border border-slate-800 px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-slate-400 mt-16 text-lg">Loading power glasses...</p>
        )}

        {/* Product Grid - প্রতিটা কোয়ালিটি বা কার্ডের ভেতরেই প্রেসক্রিপশন ঘর ও WhatsApp বাটন */}
        {!loading && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {filtered.map((item) => {
              const p = prescriptions[item.id] || {
                rightSph: "", rightCyl: "", rightAxis: "", rightVa: "",
                leftSph: "", leftCyl: "", leftAxis: "", leftVa: "",
                nearAdd: "", ipd: ""
              };

              // নির্দিষ্ট কার্ডের জন্য WhatsApp মেসেজ তৈরি
              const whatsappMessage = encodeURIComponent(
                `এই পাওয়ারে ${item.sub_category || item.name} এর দাম কত?\n\n` +
                `--- Prescription ---\n` +
                `Right Eye -> SPH: ${p.rightSph || 'N/A'}, CYL: ${p.rightCyl || 'N/A'}, AXIS: ${p.rightAxis || 'N/A'}, VA: ${p.rightVa || 'N/A'}\n` +
                `Left Eye -> SPH: ${p.leftSph || 'N/A'}, CYL: ${p.leftCyl || 'N/A'}, AXIS: ${p.leftAxis || 'N/A'}, VA: ${p.leftVa || 'N/A'}\n` +
                `Near Add: ${p.nearAdd || 'N/A'}\n` +
                `IPD: ${p.ipd || 'N/A'}`
              );

              return (
                <div key={item.id} className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col justify-between p-6">
                  <div>
                    <div className="relative h-56 bg-slate-950 rounded-2xl flex items-center justify-center overflow-hidden mb-4 border border-slate-800">
                      {item.image_url ? (
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-6xl">🤓</span>
                      )}
                      <span className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                        {item.sub_category || "Power Glass"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-blue-400 font-black text-lg mt-1 mb-4">৳ {item.price}</p>

                    {/* প্রতিটা কার্ডের ভেতরে প্রেসক্রিপশনের ছোট ছোট ঘর */}
                    <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl mb-4 space-y-3">
                      <p className="text-xs text-center text-blue-400 font-bold">আপনার পাওয়ার এখানে লিখুন</p>
                      
                      {/* Right Eye */}
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-1">Right Eye (ডান)</span>
                        <div className="grid grid-cols-4 gap-1 text-center">
                          <input type="text" value={p.rightSph} onChange={(e) => handleInputChange(item.id, 'rightSph', e.target.value)} placeholder="SPH" className="bg-slate-900 border border-slate-700 text-center text-[10px] p-1 rounded text-white" />
                          <input type="text" value={p.rightCyl} onChange={(e) => handleInputChange(item.id, 'rightCyl', e.target.value)} placeholder="CYL" className="bg-slate-900 border border-slate-700 text-center text-[10px] p-1 rounded text-white" />
                          <input type="text" value={p.rightAxis} onChange={(e) => handleInputChange(item.id, 'rightAxis', e.target.value)} placeholder="AXIS" className="bg-slate-900 border border-slate-700 text-center text-[10px] p-1 rounded text-white" />
                          <input type="text" value={p.rightVa} onChange={(e) => handleInputChange(item.id, 'rightVa', e.target.value)} placeholder="VA" className="bg-slate-900 border border-slate-700 text-center text-[10px] p-1 rounded text-white" />
                        </div>
                      </div>

                      {/* Left Eye */}
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-1">Left Eye (বাম)</span>
                        <div className="grid grid-cols-4 gap-1 text-center">
                          <input type="text" value={p.leftSph} onChange={(e) => handleInputChange(item.id, 'leftSph', e.target.value)} placeholder="SPH" className="bg-slate-900 border border-slate-700 text-center text-[10px] p-1 rounded text-white" />
                          <input type="text" value={p.leftCyl} onChange={(e) => handleInputChange(item.id, 'leftCyl', e.target.value)} placeholder="CYL" className="bg-slate-900 border border-slate-700 text-center text-[10px] p-1 rounded text-white" />
                          <input type="text" value={p.leftAxis} onChange={(e) => handleInputChange(item.id, 'leftAxis', e.target.value)} placeholder="AXIS" className="bg-slate-900 border border-slate-700 text-center text-[10px] p-1 rounded text-white" />
                          <input type="text" value={p.leftVa} onChange={(e) => handleInputChange(item.id, 'leftVa', e.target.value)} placeholder="VA" className="bg-slate-900 border border-slate-700 text-center text-[10px] p-1 rounded text-white" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <input type="text" value={p.nearAdd} onChange={(e) => handleInputChange(item.id, 'nearAdd', e.target.value)} placeholder="Near Add" className="bg-slate-900 border border-slate-700 text-[10px] p-1.5 rounded text-white" />
                        <input type="text" value={p.ipd} onChange={(e) => handleInputChange(item.id, 'ipd', e.target.value)} placeholder="IPD (mm)" className="bg-slate-900 border border-slate-700 text-[10px] p-1.5 rounded text-white" />
                      </div>
                    </div>
                  </div>

                  {/* ঘরের একদম নিচে এই কার্ডের নিজস্ব WhatsApp বাটন */}
                  <div>
                    <a
                      href={`https://wa.me/8801779666030?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 font-bold transition text-white text-xs shadow-lg shadow-emerald-600/20"
                    >
                      💬 WhatsApp এ দাম জিজ্ঞাসা করুন
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* No Products Found */}
        {!loading && filtered.length === 0 && (
          <p className="text-center text-slate-500 mt-16 text-lg">No power glasses found with this specification.</p>
        )}

      </div>
    </main>
  );
}