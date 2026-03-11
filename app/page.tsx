import Header from "@/components/layout/Header";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedSection from "@/components/home/FeaturedSection";
import CategoryFilter from "@/components/ui/CategoryFilter";
import Footer from "@/components/layout/Footer";
import { featuredProducts, categories } from "@/data/products";
import { ProductCategory } from "@/types";

const homeCategories: ProductCategory[] = [
  "Semua",
  "Tanaman Indoor",
  "Kaktus & Sukulen",
  "Pot & Nutrisi",
];

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f7f8f6] overflow-x-hidden">
      <Header variant="home" />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroBanner />

        {/* Categories / Quick Filter */}
        <CategoryFilter categories={homeCategories} variant="home" />

        {/* Featured Products */}
        <FeaturedSection products={featuredProducts} />
      </main>

      <Footer />
    </div>
  );
}
