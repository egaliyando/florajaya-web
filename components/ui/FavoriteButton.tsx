"use client";

import MaterialIcon from "@/components/ui/MaterialIcon";

interface FavoriteButtonProps {
  isFavorite?: boolean;
  className?: string;
}

export default function FavoriteButton({
  isFavorite = false,
  className = "",
}: FavoriteButtonProps) {
  return (
    <button
      className={`bg-white/80 backdrop-blur rounded-full p-1.5 flex items-center justify-center transition-colors ${className}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <MaterialIcon
        icon="favorite"
        size="md"
        filled={isFavorite}
        className={isFavorite ? "text-rose-500" : "text-slate-400 hover:text-rose-400"}
      />
    </button>
  );
}
