"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function NewArrivalsPage() {
  const newArrivals = products.filter((p) => p.isNewArrival);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" /> Just Arrived
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              New <span className="gold-text">Arrivals</span>
            </h1>
            <p className="text-white/50">Fresh additions to our curated collection.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {newArrivals.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg">No new arrivals at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
