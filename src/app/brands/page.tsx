"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { brands } from "@/data";
import { Wine } from "lucide-react";

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-white mb-4">Our <span className="gold-text">Brands</span></h1>
            <p className="text-white/50">World-renowned brands available in Nepal.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <motion.div key={brand.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link href={`/brands/${brand.slug}`} className="block group">
                  <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Wine className="w-8 h-8 text-gold/40" />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-semibold group-hover:text-gold transition-colors">{brand.name}</h3>
                        <p className="text-white/40 text-sm">{brand.country} • {brand.productCount} products</p>
                        {brand.description && <p className="text-white/30 text-xs mt-1">{brand.description}</p>}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
