"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/store/cart";
import { useWeekendOffer } from "@/hooks";
import { formatPrice, cn } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal, couponCode, couponDiscount, applyCoupon, removeCoupon } = useCartStore();
  const { isWeekend } = useWeekendOffer();
  const activeItems = items.filter((i) => !i.savedForLater);
  const subtotal = getSubtotal();
  const deliveryCharge = subtotal >= 5000 ? 0 : 150;
  const tax = Math.round(subtotal * 0.13);
  const totalDiscount = couponDiscount;
  const grandTotal = subtotal + deliveryCharge + tax - totalDiscount;

  if (activeItems.length === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-white/20" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Your cart is empty</h1>
            <p className="text-white/50 mb-8">Looks like you haven&apos;t added anything yet.</p>
            <Link href="/shop" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all">
              Start Shopping <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/shop" className="text-white/40 hover:text-white"><ArrowLeft className="w-5 h-5" /></Link>
            <h1 className="font-serif text-3xl font-bold text-white">Shopping Cart</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {activeItems.map((item, idx) => {
                const product = item.product;
                const price = isWeekend && product.weekendOfferEnabled
                  ? Math.round(product.mrp - (product.mrp * (product.weekendDiscountPercent || 10)) / 100)
                  : product.offerPrice || product.mrp;

                return (
                  <motion.div
                    key={item.productId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-4 sm:p-5 flex gap-4"
                  >
                    <Link href={`/product/${product.slug}`} className="w-20 h-24 sm:w-24 sm:h-28 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Tag className="w-8 h-8 text-gold/30" />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <p className="text-white/40 text-xs uppercase tracking-wider">{product.brand}</p>
                      <Link href={`/product/${product.slug}`} className="text-white text-sm font-medium hover:text-gold transition-colors line-clamp-1">
                        {product.name}
                      </Link>
                      <p className="text-white/40 text-xs mt-0.5">{product.bottleSize} • {product.country}</p>

                      <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                          <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-white text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-gold font-semibold">{formatPrice(price * item.quantity)}</span>
                          <button onClick={() => removeItem(item.productId)} className="text-white/30 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 sticky top-24">
                <h3 className="text-white font-semibold text-lg mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Subtotal ({activeItems.reduce((s, i) => s + i.quantity, 0)} items)</span>
                    <span className="text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Delivery</span>
                    <span className={deliveryCharge === 0 ? "text-green-400" : "text-white"}>
                      {deliveryCharge === 0 ? "Free" : formatPrice(deliveryCharge)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Tax (13%)</span>
                    <span className="text-white">{formatPrice(tax)}</span>
                  </div>
                  {totalDiscount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-400">Coupon Discount</span>
                      <span className="text-green-400">-{formatPrice(totalDiscount)}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">Grand Total</span>
                    <span className="text-gold font-bold text-xl">{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                {/* Coupon */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type="text"
                        placeholder="Coupon code"
                        className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50"
                      />
                    </div>
                    <button
                      onClick={() => applyCoupon("SAVE10", Math.round(subtotal * 0.1))}
                      className="px-4 py-2.5 bg-white/5 border border-white/10 text-white/70 rounded-xl text-sm hover:bg-white/10 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {deliveryCharge > 0 && (
                  <p className="text-white/30 text-xs text-center mb-4">
                    Add {formatPrice(5000 - subtotal)} more for free delivery
                  </p>
                )}

                <Link
                  href="/checkout"
                  className="w-full h-12 bg-gold text-luxury-black rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gold-400 transition-all shadow-lg shadow-gold/20"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>

                <Link href="/shop" className="w-full h-12 mt-3 bg-white/5 border border-white/10 text-white/70 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
