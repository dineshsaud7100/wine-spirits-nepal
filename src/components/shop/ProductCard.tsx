"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye, Share2, Star, Tag } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useWeekendOffer } from "@/hooks";
import { cn, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product.id));
  const { isWeekend } = useWeekendOffer();

  const showOffer = isWeekend && product.weekendOfferEnabled;
  const currentPrice = showOffer
    ? Math.round(product.mrp - (product.mrp * (product.weekendDiscountPercent || 10)) / 100)
    : product.offerPrice || product.mrp;
  const discount = Math.round(((product.mrp - currentPrice) / product.mrp) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-luxury-dark/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5">
        {/* Image */}
        <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-32 bg-gold/10 rounded-lg flex items-center justify-center">
              <Tag className="w-10 h-10 text-gold/30" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {discount > 0 && (
              <Badge variant="destructive" className="text-[10px] font-bold px-2 py-0.5">
                -{discount}%
              </Badge>
            )}
            {showOffer && (
              <Badge variant="gold" className="text-[10px] font-bold px-2 py-0.5 animate-pulse">
                Weekend Offer
              </Badge>
            )}
            {product.isNewArrival && (
              <Badge variant="success" className="text-[10px] font-bold px-2 py-0.5">New</Badge>
            )}
            {product.isBestSeller && (
              <Badge variant="gold" className="text-[10px] font-bold px-2 py-0.5">Best Seller</Badge>
            )}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            className="absolute top-3 right-3 flex flex-col gap-2 z-10"
          >
            <button
              onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
              className={cn(
                "w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all",
                isInWishlist ? "bg-red-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"
              )}
            >
              <Heart className={cn("w-4 h-4", isInWishlist && "fill-current")} />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); }}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white/20 transition-all"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); }}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white/20 transition-all"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Add to Cart Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute bottom-0 left-0 right-0 p-3 z-10"
          >
            <button
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              disabled={product.stock === 0}
              className="w-full py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gold-400 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="w-4 h-4" />
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </motion.div>
        </Link>

        {/* Info */}
        <div className="p-4">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{product.brand}</p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-white text-sm font-medium line-clamp-2 hover:text-gold transition-colors min-h-[2.5rem]">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn("w-3 h-3", star <= Math.floor(product.rating) ? "text-gold fill-gold" : "text-white/20")}
              />
            ))}
            <span className="text-white/30 text-xs ml-1">({product.reviewCount})</span>
          </div>

          <div className="mt-2">
            <span className="text-white/40 text-xs">{product.bottleSize} • {product.alcoholPercent}% • {product.country}</span>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            {showOffer ? (
              <>
                <span className="text-gold font-bold text-lg">{formatPrice(currentPrice)}</span>
                <span className="text-white/30 text-sm line-through">{formatPrice(product.mrp)}</span>
              </>
            ) : product.offerPrice && product.offerPrice < product.mrp ? (
              <>
                <span className="text-white font-bold text-lg">{formatPrice(product.offerPrice)}</span>
                <span className="text-white/30 text-sm line-through">{formatPrice(product.mrp)}</span>
              </>
            ) : (
              <span className="text-white font-bold text-lg">{formatPrice(product.mrp)}</span>
            )}
          </div>

          {product.stock < 10 && product.stock > 0 && (
            <p className="text-yellow-500/70 text-xs mt-2">Only {product.stock} left in stock</p>
          )}
          {product.stock === 0 && (
            <p className="text-red-400/70 text-xs mt-2">Out of stock</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
