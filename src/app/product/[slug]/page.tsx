"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, Truck, Shield, Clock, Tag, ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products, reviews } from "@/data";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useWeekendOffer } from "@/hooks";
import { formatPrice, cn } from "@/lib/utils";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");
  const addItem = useCartStore((s) => s.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product?.id || ""));
  const { isWeekend } = useWeekendOffer();

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
            <Link href="/shop" className="text-gold hover:text-gold-400">Back to Shop</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const showOffer = isWeekend && product.weekendOfferEnabled;
  const currentPrice = showOffer
    ? Math.round(product.mrp - (product.mrp * (product.weekendDiscountPercent || 10)) / 100)
    : product.offerPrice || product.mrp;
  const discount = Math.round(((product.mrp - currentPrice) / product.mrp) * 100);
  const productReviews = reviews.filter((r) => r.productId === product.id);
  const relatedProducts = products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/shop" className="hover:text-white">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/categories/${product.categorySlug}`} className="hover:text-white">{product.category}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">{product.name}</span>
          </nav>

          {/* Product */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Images */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="aspect-[3/4] bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden"
              >
                <div className="w-40 h-52 bg-gold/10 rounded-2xl flex items-center justify-center">
                  <Tag className="w-16 h-16 text-gold/30" />
                </div>

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {discount > 0 && (
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">-{discount}%</span>
                  )}
                  {showOffer && (
                    <span className="px-3 py-1 bg-gold text-luxury-black text-xs font-bold rounded-full animate-pulse">Weekend Offer</span>
                  )}
                </div>
              </motion.div>

              <div className="flex gap-3 mt-4">
                {product.images.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-20 h-20 rounded-xl border flex items-center justify-center cursor-pointer transition-all",
                      i === 0 ? "border-gold/50 bg-gold/10" : "border-white/10 bg-white/5 hover:border-white/20"
                    )}
                  >
                    <Tag className="w-6 h-6 text-gold/30" />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gold/60 text-sm uppercase tracking-wider">{product.brand}</span>
                {product.isBestSeller && (
                  <span className="px-2 py-0.5 bg-gold/10 text-gold text-xs rounded-full">Best Seller</span>
                )}
                {product.isNewArrival && (
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded-full">New</span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={cn("w-4 h-4", s <= Math.floor(product.rating) ? "text-gold fill-gold" : "text-white/20")} />
                  ))}
                </div>
                <span className="text-white/50 text-sm">{product.rating} ({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/5">
                <div className="flex items-baseline gap-3">
                  {showOffer ? (
                    <>
                      <span className="text-gold text-4xl font-bold">{formatPrice(currentPrice)}</span>
                      <span className="text-white/30 text-xl line-through">{formatPrice(product.mrp)}</span>
                      <span className="px-2 py-0.5 bg-gold/10 text-gold text-sm rounded-full font-semibold">Save {formatPrice(product.mrp - currentPrice)}</span>
                    </>
                  ) : product.offerPrice && product.offerPrice < product.mrp ? (
                    <>
                      <span className="text-white text-4xl font-bold">{formatPrice(product.offerPrice)}</span>
                      <span className="text-white/30 text-xl line-through">{formatPrice(product.mrp)}</span>
                      <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-sm rounded-full font-semibold">Save {formatPrice(product.mrp - product.offerPrice)}</span>
                    </>
                  ) : (
                    <span className="text-white text-4xl font-bold">{formatPrice(product.mrp)}</span>
                  )}
                </div>
                <p className="text-white/40 text-sm mt-2">MRP: {formatPrice(product.mrp)} (Inclusive of all taxes)</p>
                {showOffer && (
                  <p className="text-gold text-sm mt-1 font-medium">Weekend special price applied!</p>
                )}
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                  <p className="text-white/40 text-xs">Size</p>
                  <p className="text-white font-medium text-sm">{product.bottleSize}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                  <p className="text-white/40 text-xs">Alcohol</p>
                  <p className="text-white font-medium text-sm">{product.alcoholPercent}%</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                  <p className="text-white/40 text-xs">Origin</p>
                  <p className="text-white font-medium text-sm">{product.country}</p>
                </div>
              </div>

              {/* Stock */}
              <div className="mb-6">
                {product.stock > 10 ? (
                  <p className="text-green-400 text-sm flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full" /> In Stock ({product.stock} available)</p>
                ) : product.stock > 0 ? (
                  <p className="text-yellow-400 text-sm flex items-center gap-1"><span className="w-2 h-2 bg-yellow-400 rounded-full" /> Only {product.stock} left in stock</p>
                ) : (
                  <p className="text-red-400 text-sm flex items-center gap-1"><span className="w-2 h-2 bg-red-400 rounded-full" /> Out of Stock</p>
                )}
              </div>

              {/* Quantity & Actions */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-white font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-12 h-12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => addItem(product, quantity)}
                  disabled={product.stock === 0}
                  className="flex-1 h-12 bg-gold text-luxury-black rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gold-400 transition-all shadow-lg shadow-gold/20 disabled:opacity-50"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={cn(
                    "w-12 h-12 rounded-xl border flex items-center justify-center transition-all",
                    isInWishlist ? "bg-red-500/10 border-red-500/30 text-red-400" : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                  )}
                >
                  <Heart className={cn("w-5 h-5", isInWishlist && "fill-current")} />
                </button>

                <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Truck className="w-4 h-4 text-gold" /> Free delivery on orders above Rs.5,000
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Shield className="w-4 h-4 text-gold" /> 100% Authentic Products
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Clock className="w-4 h-4 text-gold" /> Delivery within 24-48 hours
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="mb-16">
            <div className="flex gap-1 border-b border-white/10 mb-6">
              {(["description", "specs", "reviews"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-3 text-sm font-medium capitalize transition-colors relative",
                    activeTab === tab ? "text-gold" : "text-white/50 hover:text-white"
                  )}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />}
                </button>
              ))}
            </div>

            {activeTab === "description" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/60 leading-relaxed max-w-3xl">
                <p>{product.description}</p>
                {product.ingredients && (
                  <div className="mt-4">
                    <h4 className="text-white font-medium mb-2">Ingredients</h4>
                    <p>{product.ingredients}</p>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "specs" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
                <div className="space-y-3">
                  {[
                    ["Brand", product.brand],
                    ["Category", product.category],
                    ["Bottle Size", product.bottleSize],
                    ["Alcohol Percentage", `${product.alcoholPercent}%`],
                    ["Country of Origin", product.country],
                    ["SKU", product.sku],
                    ["Rating", `${product.rating}/5`],
                    ["Reviews", `${product.reviewCount}`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-white/50 text-sm">{label}</span>
                      <span className="text-white text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "reviews" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 max-w-3xl">
                {productReviews.length > 0 ? (
                  productReviews.map((review) => (
                    <div key={review.id} className="bg-white/5 rounded-xl p-5 border border-white/5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">
                          {review.userName.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{review.userName}</p>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className={cn("w-3 h-3", s <= review.rating ? "text-gold fill-gold" : "text-white/20")} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-white text-sm font-medium mb-1">{review.title}</h4>
                      <p className="text-white/50 text-sm">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-white/40 text-center py-8">No reviews yet. Be the first to review!</p>
                )}
              </motion.div>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="font-serif text-2xl font-bold text-white mb-6">
                Related <span className="gold-text">Products</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
