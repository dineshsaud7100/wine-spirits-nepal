"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CreditCard, Smartphone, Banknote, CheckCircle, Tag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/store/cart";
import { useWeekendOffer } from "@/hooks";
import { formatPrice, cn } from "@/lib/utils";
import { provinces, paymentMethods } from "@/config/site";

export default function CheckoutPage() {
  const { items, getSubtotal, couponCode, couponDiscount } = useCartStore();
  const { isWeekend } = useWeekendOffer();
  const activeItems = items.filter((i) => !i.savedForLater);
  const subtotal = getSubtotal();
  const deliveryCharge = subtotal >= 5000 ? 0 : 150;
  const tax = Math.round(subtotal * 0.13);
  const grandTotal = subtotal + deliveryCharge + tax - couponDiscount;

  const [form, setForm] = useState({
    fullName: "", phone: "", email: "", street: "", city: "", province: "Bagmati",
    paymentMethod: "cod" as string, notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center py-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-4">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Order Placed Successfully!</h1>
            <p className="text-white/50 mb-2">Thank you for your order.</p>
            <p className="text-gold text-sm mb-8">Order #WSN-{Math.floor(100000 + Math.random() * 900000)}</p>
            <div className="flex gap-3 justify-center">
              <Link href="/profile/orders" className="px-6 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all">
                View Orders
              </Link>
              <Link href="/shop" className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all">
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  if (activeItems.length === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Your cart is empty</h1>
            <Link href="/shop" className="text-gold hover:text-gold-400">Start Shopping</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all";

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/cart" className="text-white/40 hover:text-white"><ArrowLeft className="w-5 h-5" /></Link>
            <h1 className="font-serif text-3xl font-bold text-white">Checkout</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Shipping */}
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h2 className="text-white font-semibold text-lg mb-6">Shipping Information</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="text-white/60 text-sm mb-1.5 block">Full Name *</label>
                      <input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className={inputClass} placeholder="Full name" />
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Phone *</label>
                      <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="98XXXXXXXX" />
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Email</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="email@example.com" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-white/60 text-sm mb-1.5 block">Street Address *</label>
                      <input required value={form.street} onChange={(e) => setForm({ ...form, street: e.target.value })} className={inputClass} placeholder="Street address" />
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">City *</label>
                      <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputClass} placeholder="City" />
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Province *</label>
                      <select value={form.province} onChange={(e) => setForm({ ...form, province: e.target.value })} className={inputClass}>
                        {provinces.map((p) => <option key={p} value={p} className="bg-luxury-dark">{p}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h2 className="text-white font-semibold text-lg mb-6">Payment Method</h2>
                  <div className="space-y-3">
                    {[
                      { id: "cod", name: "Cash on Delivery", icon: Banknote, desc: "Pay when you receive your order" },
                      { id: "khalti", name: "Khalti", icon: Smartphone, desc: "Pay via Khalti digital wallet" },
                      { id: "esewa", name: "eSewa", icon: Smartphone, desc: "Pay via eSewa digital wallet" },
                      { id: "stripe", name: "Credit/Debit Card", icon: CreditCard, desc: "Pay securely with card" },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                          form.paymentMethod === method.id
                            ? "bg-gold/5 border-gold/30"
                            : "bg-white/5 border-white/10 hover:border-white/20"
                        )}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={form.paymentMethod === method.id}
                          onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                          className="sr-only"
                        />
                        <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", form.paymentMethod === method.id ? "border-gold" : "border-white/20")}>
                          {form.paymentMethod === method.id && <div className="w-2.5 h-2.5 bg-gold rounded-full" />}
                        </div>
                        <method.icon className={cn("w-5 h-5", form.paymentMethod === method.id ? "text-gold" : "text-white/40")} />
                        <div>
                          <p className="text-white text-sm font-medium">{method.name}</p>
                          <p className="text-white/40 text-xs">{method.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Order Notes</label>
                  <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={cn(inputClass, "min-h-[80px]")} placeholder="Any special instructions?" />
                </div>
              </div>

              {/* Summary */}
              <div>
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 sticky top-24">
                  <h3 className="text-white font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                    {activeItems.map((item) => (
                      <div key={item.productId} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Tag className="w-5 h-5 text-gold/30" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-xs font-medium line-clamp-1">{item.product.name}</p>
                          <p className="text-white/40 text-xs">Qty: {item.quantity}</p>
                        </div>
                        <span className="text-white text-xs font-medium">{formatPrice(item.product.mrp * item.quantity)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2 mb-4">
                    <div className="flex justify-between text-sm"><span className="text-white/50">Subtotal</span><span className="text-white">{formatPrice(subtotal)}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-white/50">Delivery</span><span className={deliveryCharge === 0 ? "text-green-400" : "text-white"}>{deliveryCharge === 0 ? "Free" : formatPrice(deliveryCharge)}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-white/50">Tax (13%)</span><span className="text-white">{formatPrice(tax)}</span></div>
                    {couponDiscount > 0 && <div className="flex justify-between text-sm"><span className="text-green-400">Discount</span><span className="text-green-400">-{formatPrice(couponDiscount)}</span></div>}
                  </div>

                  <div className="border-t border-white/10 pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-gold font-bold text-xl">{formatPrice(grandTotal)}</span>
                    </div>
                  </div>

                  <button type="submit" className="w-full h-12 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20">
                    Place Order
                  </button>

                  <p className="text-white/30 text-xs text-center mt-4">
                    By placing this order, you agree to our terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
