import Link from "next/link";
import { Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";

interface FeaturedSectionProps {
  products: Product[];
}

export default function FeaturedSection({ products }: FeaturedSectionProps) {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center justify-between pb-5">
        <h2 className="text-slate-900 text-2xl font-bold tracking-tight font-display">
          Koleksi Terpopuler
        </h2>
        <Link
          href="/catalog"
          className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
        >
          Lihat Semua{" "}
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant="featured" />
        ))}
      </div>
    </div>
  );
}
