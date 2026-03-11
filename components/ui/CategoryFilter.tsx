"use client";

import { useState } from "react";
import { ProductCategory } from "@/types";

interface CategoryFilterProps {
  categories: ProductCategory[];
  onCategoryChange?: (category: ProductCategory) => void;
  variant?: "home" | "catalog";
}

export default function CategoryFilter({
  categories,
  onCategoryChange,
  variant = "home",
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("Semua");

  const handleCategoryClick = (category: ProductCategory) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  if (variant === "catalog") {
    return (
      <div className="flex gap-2 px-4 py-4 overflow-x-auto hide-scrollbar whitespace-nowrap">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${isActive
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200 ${isActive
              ? "bg-primary text-white font-bold"
              : "bg-white border border-primary/20 text-slate-700 font-semibold hover:bg-primary/5"
              }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
