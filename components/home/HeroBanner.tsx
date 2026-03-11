"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = ["/hero1.png", "/hero2.png"];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroImages.length);
        setVisible(true);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <div
        className="flex min-h-130 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center shadow-xl transition-all duration-600"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("${heroImages[current]}")`,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
        role="img"
        aria-label="Flora Jaya hero banner"
      >
        <div className="flex flex-col gap-3 max-w-md">
          <span className="text-white w-max self-center py-1 px-2 animate-bounce duration-5000 rounded bg-amber-400 font-bold tracking-widest text-xs uppercase">
            SENTRA BIBIT BUAH LAMPUNG
          </span>
          <h2 className="text-white text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl font-display">
            Segarkan Rumahmu dengan Flora Jaya
          </h2>
          <p className="text-white/90 text-sm font-medium leading-relaxed sm:text-base">
            Menjual Berbagai Jenis Bibit Buah Tabulampot
          </p>
        </div>
        <Link
          href="/catalog"
          className="flex min-w-40 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold leading-normal transition-transform active:scale-95 shadow-lg shadow-primary/30 hover:brightness-110"
        >
          <span className="truncate">Lihat Koleksi</span>
        </Link>
      </div>
    </div>
  );
}
