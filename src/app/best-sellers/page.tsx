"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function BestSellersPage() {
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" /> Most Popular
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Best <span className="gold-text">Sellers</span>
            </h1>
            <p className="text-white/50">Our most loved products by customers across Nepal.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
