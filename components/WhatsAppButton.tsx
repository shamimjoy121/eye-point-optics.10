'use client';

interface WhatsAppButtonProps {
  productName?: string;
  price?: number;
  text?: string;
  className?: string;
}

export default function WhatsAppButton({
  productName,
  price,
  text = 'Order on WhatsApp',
  className = '',
}: WhatsAppButtonProps) {
  // আপনার আসল হোয়াটসঅ্যাপ নাম্বার (Country code সহ)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801779666030';

  const handleOrder = () => {
    let message = 'হ্যালো Eye Point Optics! 👋\nআমি একটি বিষয়ে জানতে চাই।';

    if (productName) {
      message = `হ্যালো Eye Point Optics! 👋\nআমি এই প্রোডাক্টটি অর্ডার করতে চাই:\n\n📌 *প্রোডাক্ট:* ${productName}\n💰 *দাম:* ৳${price || 0}`;
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleOrder}
      type="button"
      className={`bg-[#00A884] hover:bg-[#008f70] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition ${className}`}
    >
      💬 {text}
    </button>
  );
}