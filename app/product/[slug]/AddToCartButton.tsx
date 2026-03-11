"use client";

import { useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";

interface AddToCartButtonProps {
  price: number;
  productName: string;
}

export default function AddToCartButton({
  price,
  productName,
}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    const message = `Halo Flora Jaya, saya tertarik dengan produk *${productName}* seharga *Rp ${price.toLocaleString("id-ID")}*. Apakah masih tersedia?`;
    const url = `https://wa.me/6281278668889?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-lg border-t border-slate-100 px-4 py-4 z-20">
      <div className="flex items-center gap-3">
        {/* Add to Cart */}
        <button
          onClick={handleAdd}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl font-bold text-sm transition-all active:scale-[0.98] bg-primary text-white"
        >
          <MaterialIcon
            icon={added ? "check_circle" : "shopping_cart"}
            size="md"
          />
          <span>Order via Whatsapp</span>
        </button>
      </div>
    </div>
  );
}
