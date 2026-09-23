import { useState } from 'react';
import { Product } from '../data/products';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
}

export function ProductCard({ product, onSelect, onQuickAdd }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      onClick={() => onSelect(product)}
      className="group cursor-pointer flex flex-col h-full transition-transform"
    >
      {/* 1. Image Container: 20px radius, no border, no shadow */}
      <div className="relative aspect-square w-full rounded-[20px] overflow-hidden bg-[#e8e7dc] mb-5">
        {/* Fallback pattern while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8e7dc] to-[#dedccf] animate-pulse" />
        )}

        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025] ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Online-only Badge: Top Left in Lime Glow */}
        {product.onlineOnly && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-block bg-[#e6ff55] text-[#0e150e] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
              Online only
            </span>
          </div>
        )}

        {/* Dietary badges: Top Right (e.g., V for vegan, G for gluten) */}
        {product.dietaryTags && product.dietaryTags.length > 0 && (
          <div className="absolute top-3.5 right-3.5 z-10 flex gap-1">
            {product.dietaryTags.map((tag) => (
              <span
                key={tag}
                title={tag === 'V' ? 'Vegan' : tag === 'G' ? 'Contains Gluten' : tag === 'GF' ? 'Gluten-Free' : 'Dairy-Free'}
                className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs text-[#00473c] text-[11px] font-bold flex items-center justify-center border border-[#00473c]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Quick Add overlay button on desktop hover */}
        <button
          onClick={(e) => onQuickAdd(product, e)}
          aria-label={`Quick add ${product.name} to order`}
          className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-full bg-white/95 hover:bg-[#e6ff55] text-[#0e150e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* 2. Product Name and Price */}
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <h3 className="text-[20px] font-bold text-[#0e150e] group-hover:text-[#00473c] transition-colors leading-snug">
          {product.name}
        </h3>
        <span className="text-[17px] font-semibold text-[#00473c] tabular-nums shrink-0">
          ${product.price.toFixed(2)}
        </span>
      </div>

      {/* 3. Description: Clean editorial text */}
      <p className="text-[15px] text-[#0e150e]/80 leading-[1.35] line-clamp-3 mb-4 font-normal">
        {product.description}
      </p>

      {/* 4. Calories & Protein Macro metadata */}
      <div className="mt-auto pt-1 flex items-center justify-between text-xs text-[#555555] font-medium border-t border-[#00473c]/10 pt-3">
        <div className="flex items-center gap-2">
          <span>{product.calories} cal</span>
          <span>·</span>
          <span>{product.protein}g protein</span>
        </div>

        {/* 5. Ghost Link: Order now → with arrow translation and underline hover */}
        <span className="ghost-link text-sm text-[#00473c]">
          Order now
          <span className="arrow">→</span>
        </span>
      </div>
    </article>
  );
}
