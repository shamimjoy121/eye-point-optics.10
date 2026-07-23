"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState([
    { id: 1, name: "Titanium Minimalist", price: "৳২,৫০০", category: "Frames" },
    { id: 2, name: "Polarized Aviator", price: "৳৩,৫০০", category: "Sunglasses" }
  ]);

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("isAdmin");
    if (!auth) {
      router.push("/admin/login");
    }
  }, [router]);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newPrice) return;
    const newItem = { id: Date.now(), name: newName, price: newPrice, category: "Frames" };
    setProducts([...products, newItem]);
    setNewName("");
    setNewPrice("");
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/admin/login");
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black">Admin Panel</h1>
            <p className="text-slate-400">Manage Eye Point Optics Products</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-2 text-red-400 hover:bg-red-500/20 transition"
          >
            Logout
          </button>
        </div>

        {/* Add Product Form */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl mb-10">
          <h2 className="text-xl font-bold mb-4">Add New Product</h2>
          <form onSubmit={handleAddProduct} className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Price (e.g. ৳২,৫০০)"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              className="rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 font-bold hover:bg-blue-500 transition py-3"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* Product List Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-6">
          <h2 className="text-xl font-bold mb-4">Product List</h2>
          <div className="space-y-4">
            {products.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-blue-400 text-sm">{item.price}</p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="rounded-lg bg-red-600/20 border border-red-500/40 text-red-400 px-4 py-2 text-sm hover:bg-red-600/30 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}