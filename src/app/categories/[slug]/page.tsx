"use client";

import { use } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products, categories } from "@/data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.categorySlug === slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/categories" className="hover:text-white">Categories</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">{category?.name || slug}</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            <span className="gold-text">{category?.name || slug}</span> Collection
          </h1>
          <p className="text-white/50 mb-8">{category?.description || `Browse our ${slug} collection`} • {categoryProducts.length} products</p>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {categoryProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg">No products in this category yet.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
