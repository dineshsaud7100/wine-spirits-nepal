"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data";
import { useWeekendOffer } from "@/hooks";
import { motion } from "framer-motion";
import { Sparkles, Clock } from "lucide-react";

export default function WeekendOffersPage() {
  const { isWeekend, timeUntilEnd } = useWeekendOffer();
  const offerProducts = products.filter((p) => p.weekendOfferEnabled);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" /> Weekend Mega Sale
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Weekend <span className="gold-text">Special Offers</span>
            </h1>
            {isWeekend ? (
              <div className="flex items-center justify-center gap-2 text-gold">
                <Clock className="w-4 h-4" />
                <p className="font-medium">Offers end in: {timeUntilEnd}</p>
              </div>
            ) : (
              <p className="text-white/50">Weekend offers start every Saturday. Check back soon for amazing deals!</p>
            )}
          </motion.div>

          {isWeekend && (
            <div className="bg-gradient-to-r from-burgundy via-burgundy-600 to-burgundy rounded-3xl p-8 mb-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20"><div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" /></div>
              <div className="relative z-10">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">Save Up to 15% This Weekend!</h2>
                <p className="text-white/70">Limited time offers on premium spirits and wines.</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {offerProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {!isWeekend && (
            <div className="text-center mt-12 bg-luxury-dark/50 border border-white/5 rounded-2xl p-8">
              <p className="text-white/40 text-lg mb-2">Offers are not active right now.</p>
              <p className="text-gold font-medium">Next sale starts this Saturday!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
