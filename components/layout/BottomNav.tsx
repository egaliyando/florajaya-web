"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MaterialIcon from "@/components/ui/MaterialIcon";

interface NavItemConfig {
  icon: string;
  label: string;
  href: string;
}

const navItems: NavItemConfig[] = [
  { icon: "home", label: "Beranda", href: "/" },
  { icon: "eco", label: "Katalog", href: "/catalog" },
  { icon: "favorite", label: "Favorit", href: "#" },
  { icon: "person", label: "Akun", href: "#" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 w-full bg-white/90 backdrop-blur-lg border-t border-primary/10 px-4 pb-6 pt-2 z-50">
      <div className="flex gap-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href) && item.href !== "#";

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-slate-400 hover:text-primary/70"
              }`}
            >
              <MaterialIcon icon={item.icon} filled={isActive} size="md" />
              <p
                className={`text-[10px] leading-normal ${isActive ? "font-bold" : "font-medium"}`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
