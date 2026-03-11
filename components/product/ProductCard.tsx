import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
  variant?: "featured" | "catalog";
}

const badgeColorMap = {
  green: "bg-primary text-white",
  red: "bg-red-500 text-white",
};

export default function ProductCard({
  product,
  variant = "featured",
}: ProductCardProps) {
  if (variant === "catalog") {
    return (
      <Link href={`/product/${product.slug}`} className="block group">
        <div className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 transition-shadow hover:shadow-md">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {product.badge && (
              <div
                className={`absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold ${badgeColorMap[product.badge.color]}`}
              >
                {product.badge.label}
              </div>
            )}
          </div>
          {/* Info */}
          <div className="p-3">
            <h3 className="font-bold text-slate-800 text-sm truncate">
              {product.name}
            </h3>
            <p className="text-primary font-bold mt-1">
              {formatPrice(product.price)}{" "}
              {product.originalPrice && (
                <span className="text-[10px] text-slate-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // Featured variant
  return (
    <Link href={`/product/${product.slug}`} className="block group">
      <div className="flex flex-col gap-3">
        {/* Image */}
        <div className="relative w-full aspect-4/5 rounded-xl shadow-sm group-hover:shadow-md transition-shadow overflow-hidden">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        {/* Info */}
        <div className="px-1">
          <p className="text-slate-900 text-base font-bold leading-tight">
            {product.name}
          </p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-primary font-bold text-sm">
              {formatPrice(product.price)}
            </p>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                product.availability === "Terbatas"
                  ? "bg-amber-100 text-amber-600"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {product.availability}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
