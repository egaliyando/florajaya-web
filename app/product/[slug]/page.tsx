import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { allProducts, getProductBySlug, formatPrice } from "@/data/products";
import MaterialIcon from "@/components/ui/MaterialIcon";
import ProductCard from "@/components/product/ProductCard";
import AddToCartButton from "./AddToCartButton";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };

  return {
    title: `${product.name} - Flora Jaya`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get related products (same category, exclude current)
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-white shadow-xl">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <Link
          href="/catalog"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Back to catalog"
        >
          <MaterialIcon icon="arrow_back" />
        </Link>
        <h1 className="text-base font-bold text-slate-900 truncate max-w-[200px]">
          Detail Produk
        </h1>
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Share"
        >
          <MaterialIcon icon="share" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-32 animate-fade-in">
        {/* Product Image */}
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {product.badge && (
            <div
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                product.badge.color === "green"
                  ? "bg-primary"
                  : product.badge.color === "red"
                    ? "bg-red-500"
                    : "bg-blue-500"
              }`}
            >
              {product.badge.label}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="px-4 pt-5 animate-slide-up">
          {/* Name & Price */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight font-display">
                {product.name}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    product.availability === "Terbatas"
                      ? "bg-amber-100 text-amber-600"
                      : product.availability === "Habis"
                        ? "bg-red-100 text-red-600"
                        : "bg-primary/10 text-primary"
                  }`}
                >
                  {product.availability} : 12
                </span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-100 my-5" />

          {/* Care Instructions */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3">
              Panduan Perawatan
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {product.careInstructions.map((care) => (
                <div
                  key={care.label}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MaterialIcon
                      icon={care.icon}
                      size="md"
                      className="text-primary"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      {care.label}
                    </p>
                    <p className="text-xs font-bold text-slate-700 truncate">
                      {care.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-100 my-5" />

          {/* Description */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Deskripsi
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <>
              <div className="h-px bg-slate-100 my-5" />
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  Produk Serupa
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {relatedProducts.map((related) => (
                    <ProductCard
                      key={related.id}
                      product={related}
                      variant="catalog"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <AddToCartButton price={product.price} />
    </div>
  );
}
