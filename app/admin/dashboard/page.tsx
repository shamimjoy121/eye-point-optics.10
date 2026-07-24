'use client';

import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string;
}

export default function AdminDashboard() {
  const router = useRouter();
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("isAdmin");
    router.push("/admin/login");
  };

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

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!name || !price || !category || !image) {
        alert("সবগুলো ঘর পুরন করুন এবং ছবি নির্বাচন করুন!");
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

      alert("✅ Product Added Successfully!");
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
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-slate-400 text-sm mt-1">Manage store products and settings</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-5 py-2.5 rounded-xl font-medium transition-all duration-200"
          >
            Logout
          </button>
        </div>

        {/* Add Product Form */}
        <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold text-white mb-6">Add New Product</h2>
          
          <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Product Name</label>
              <input 
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Price (৳)</label>
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-xl p-2 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
              />
            </div>

            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
              >
                {loading ? "Adding Product..." : "Add Product"}
              </button>
            </div>
          </form>
        </div>

        {/* Product List */}
        <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold text-white mb-6">All Products ({products.length})</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-44 object-cover rounded-lg mb-4 bg-slate-900"
                  />
                  <h3 className="font-semibold text-white text-lg">{product.name}</h3>
                  <p className="text-blue-400 font-bold mt-1">৳ {product.price}</p>
                  <p className="text-slate-400 text-xs mt-1">{product.category}</p>
                </div>

                <button
                  onClick={async () => {
                    if (confirm("Delete this product?")) {
                      const { error } = await supabase
                        .from("products")
                        .delete()
                        .eq("id", product.id);

                      if (error) alert(error.message);
                      else getProducts();
                    }
                  }}
                  className="mt-4 w-full bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <p className="text-slate-500 text-center py-8">No products found.</p>
          )}
        </div>

      </div>
    </main>
  );
}