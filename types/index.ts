export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  imageAlt: string;
  category: ProductCategory;
  badge?: ProductBadge;
  rating: number;
  soldCount: number;
  availability: "Tersedia" | "Terbatas" | "Habis";
  description: string;
  careInstructions: CareInstruction[];
  isFavorite?: boolean;
}

export interface CareInstruction {
  icon: string;
  label: string;
  value: string;
}

export type ProductCategory =
  | "Semua"
  | "BIBIT JAMBU AIR"
  | "BIBIT ALPUKAT"
  | "BIBIT DURIAN"
  | "BIBIT MANGGA"
  | "BIBIT JERUK"
  | "BIBIT KELENGKENG"
  | "BIBIT NANGKA"
  | "BIBIT KELAPA"
  | "BIBIT ANGGUR"
  | "BIBIT RAMBUTAN"
  | "BIBIT SRIKAYA & SIRSAK"
  | "BIBIT APEL & BIDARA"
  | "Tanah & Media Tanam";

export interface ProductBadge {
  label: string;
  color: "green" | "red";
}

export interface NavItem {
  icon: string;
  label: string;
  href: string;
  filled?: boolean;
}
