"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import CategoryFilter from "@/components/ui/CategoryFilter";
import ProductCard from "@/components/product/ProductCard";
import MaterialIcon from "@/components/ui/MaterialIcon";
import {
  catalogProducts,
  categories,
  getProductsByCategory,
} from "@/data/products";
import { ProductCategory } from "@/types";

export default function CatalogPage() {
  const [filteredProducts, setFilteredProducts] = useState(catalogProducts);

  const handleCategoryChange = (category: ProductCategory) => {
    const products = getProductsByCategory(category);
    // For catalog page, show catalog-specific products or all
    setFilteredProducts(category === "Semua" ? catalogProducts : products);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-white shadow-xl">
      <Header variant="catalog" />

      {/* Category Filters */}
      <CategoryFilter
        categories={categories}
        onCategoryChange={handleCategoryChange}
        variant="catalog"
      />

      {/* Product Grid */}
      <main className="flex-1 px-4 pb-24 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Katalog Produk
          </h2>
          <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:underline">
            <span>Urutkan</span>
            <MaterialIcon icon="expand_more" size="sm" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="catalog" />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <MaterialIcon icon="search_off" size="xl" />
            <p className="mt-2 text-sm font-medium">
              Tidak ada produk ditemukan
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
