'use client';

import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image_url: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProducts(data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const uploadImage = async () => {
    if (!image) return "";
    const fileName = `${Date.now()}-${image.name}`;
    const { error } = await supabase.storage.from("products").upload(fileName, image);

    if (error) {
      alert(error.message);
      return "";
    }
    const { data } = supabase.storage.from("products").getPublicUrl(fileName);
    return data.publicUrl;
  };

  const saveProduct = async () => {
    try {
      if (!name || !price || !category || !image) {
        alert("Please fill all the fields and upload an image!");
        return;
      }

      setLoading(true);
      const imageUrl = await uploadImage();
const { error } = await supabase.from("products").insert([
  {
    name,
    price: Number(price),
    category,
    image_url: imageUrl,
  },
]);

      if (error) {
        alert(error.message);
        return;
      }

      alert("🎉 Product Saved Successfully!");
      setName("");
      setPrice("");
      setCategory("");
      setImage(null);
      getProducts();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">
            Product Management
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Add, view, and manage your amazing products all in one place.
          </p>
        </div>

        {/* Product Entry Form (Gorgeous Card) */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 max-w-2xl mx-auto backdrop-blur-sm">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              
              {/* Product Name */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Product Name</label>
                <input
                  type="text"
                  placeholder="e.g. Premium Sunglasses"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Price (৳)</label>
                <input
                  type="number"
                  placeholder="e.g. 1500"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
                <input
                  type="text"
                  placeholder="e.g. Eyewear"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Image Upload */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-600 rounded-xl p-2.5
                  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold 
                  file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition-all cursor-pointer"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={saveProduct}
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 transform 
                ${loading 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-1'
                }`}
            >
              {loading ? "Saving Product..." : "Add New Product"}
            </button>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* Product List Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Your Inventory</h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1.5 rounded-full">
              {products.length} Items
            </span>
          </div>

          {/* Grid Layout for Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-100 mb-4">
                  <img
  src={product.image_url}
  alt={product.name}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
/>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-slate-800 line-clamp-1">{product.name}</h3>
                  <p className="text-2xl font-extrabold text-blue-600 mt-2">৳ {product.price}</p>
                </div>

                {/* Delete Button */}
                <button
                  onClick={async () => {
                    const ok = confirm("Are you sure you want to delete this product?");
                    if (!ok) return;

                    const { error } = await supabase
                      .from("products")
                      .delete()
                      .eq("id", product.id);

                    if (error) alert(error.message);
                    else getProducts();
                  }}
                  className="mt-5 w-full bg-slate-50 text-red-600 hover:bg-red-500 hover:text-white py-2.5 rounded-xl font-bold transition-colors duration-300 border border-slate-200 hover:border-transparent"
                >
                  Delete Product
                </button>
              </div>
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No products found. Add some awesome products!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}