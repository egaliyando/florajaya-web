"use client";

import { useState } from "react";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Image from "next/image";

interface HeaderProps {
  variant?: "home" | "catalog" | "detail";
  title?: string;
  onBack?: () => void;
}

const menuItems = [
  { label: "Katalog", href: "/catalog", icon: "yard" },
  { label: "Tentang Kami", href: "/about", icon: "info" },
  { label: "Hubungi Kami", href: "/contact", icon: "mail" },
];

export default function Header({ variant = "home" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (variant === "home") {
    return (
      <>
        <header className="flex items-center bg-white/80 backdrop-blur-md sticky top-0 z-30 p-4 justify-between border-b border-primary/10">
          <button
            className="flex size-10 shrink-0 items-center justify-center text-slate-900"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <MaterialIcon icon="menu" />
          </button>
          <Link href="/">
            <Image
              src="/full-logo.png"
              alt="Flora Jaya Logo"
              width={140}
              height={50}
            />
          </Link>
        </header>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Drawer */}
        <aside
          className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-slate-100">
            <Link href="/">
              <Image
                className="mt-1.5"
                src="/full-logo.png"
                alt="Flora Jaya Logo"
                width={140}
                height={50}
              />
            </Link>
            <button
              className="flex size-8 items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <MaterialIcon icon="close" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex flex-col gap-1 px-3 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
              >
                <MaterialIcon
                  icon={item.icon}
                  size="md"
                  className="text-primary/70"
                />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      </>
    );
  }

  if (variant === "catalog") {
    return (
      <header className="sticky top-0 z-10 bg-white px-4 pt-6 pb-2">
        <div className="flex items-center justify-between mb-4">
          <Link href="/">
            <Image
              src="/full-logo.png"
              alt="Flora Jaya Logo"
              width={140}
              height={50}
            />
          </Link>
        </div>
        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MaterialIcon
              icon="search"
              className="text-slate-400 group-focus-within:text-primary transition-colors"
              size="md"
            />
          </div>
          <input
            className="block outline-none w-full pl-10 pr-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-sm transition-all placeholder:text-slate-500"
            placeholder="Cari tanaman/bibit favoritmu..."
            type="text"
          />
        </div>
      </header>
    );
  }

  return null;
}
