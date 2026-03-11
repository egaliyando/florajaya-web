"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MaterialIcon from "@/components/ui/MaterialIcon";

export default function CatalogBottomNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isCatalog = pathname === "/catalog" || pathname.startsWith("/product/");

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-lg border-t border-slate-100 px-6 py-3 flex justify-between items-center z-20">
      <Link
        href="/"
        className={`flex flex-col items-center gap-1 transition-colors ${isHome ? "text-primary" : "text-slate-400 hover:text-primary"}`}
      >
        <MaterialIcon icon="home" filled={isHome} size="md" />
        <span className="text-[10px] font-medium">Beranda</span>
      </Link>
      <Link
        href="/catalog"
        className={`flex flex-col items-center gap-1 transition-colors ${isCatalog ? "text-primary" : "text-slate-400 hover:text-primary"}`}
      >
        <MaterialIcon icon="potted_plant" filled={isCatalog} size="md" />
        <span className={`text-[10px] ${isCatalog ? "font-bold" : "font-medium"}`}>
          Katalog
        </span>
      </Link>
      {/* Floating Cart Button */}
      <div className="relative -top-8">
        <button className="bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/40 border-4 border-white">
          <MaterialIcon icon="shopping_cart" size="md" />
        </button>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
          3
        </span>
      </div>
      <Link
        href="#"
        className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
      >
        <MaterialIcon icon="receipt_long" size="md" />
        <span className="text-[10px] font-medium">Pesanan</span>
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
      >
        <MaterialIcon icon="person" size="md" />
        <span className="text-[10px] font-medium">Akun</span>
      </Link>
    </nav>
  );
}
