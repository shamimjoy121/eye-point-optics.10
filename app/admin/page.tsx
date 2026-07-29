'use client';

import React, { useState } from 'react';

export default function AdminPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);

  return (
    <div className="p-6">
      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
        প্রোডাক্টের ছবি
      </label>

      <input
        id="product-image"
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setImageFile(file);
          }
        }}
        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-white focus:outline-none focus:border-blue-500 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white file:hover:bg-blue-500 cursor-pointer"
        required
      />

      {imageFile ? (
        <p className="mt-2 text-sm text-green-400">
          {imageFile.name}
        </p>
      ) : null}
    </div>
  );
}