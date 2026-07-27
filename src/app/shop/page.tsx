"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X, Grid3X3, LayoutGrid, ChevronDown, Search } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products, categories, brands } from "@/data";
import { cn, formatPrice } from "@/lib/utils";
import { sortOptions } from "@/config/site";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState(3);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.categorySlug === selectedCategory);
    }

    if (selectedBrand !== "all") {
      result = result.filter((p) => p.brand.toLowerCase().replace(/[' ]/g, "-") === selectedBrand);
    }

    result = result.filter((p) => p.mrp >= priceRange[0] && p.mrp <= priceRange[1]);

    switch (sortBy) {
      case "best-selling":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "highest-rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        result.sort((a, b) => a.mrp - b.mrp);
        break;
      case "price-high":
        result.sort((a, b) => b.mrp - a.mrp);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [selectedCategory, selectedBrand, priceRange, sortBy, searchQuery]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
              Shop <span className="gold-text">All Products</span>
            </h1>
            <p className="text-white/50">{filteredProducts.length} products found</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={cn("lg:w-64 flex-shrink-0", showFilters ? "block" : "hidden lg:block")}>
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Filters</h3>
                  <button onClick={() => setShowFilters(false)} className="lg:hidden text-white/50">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="text-white/60 text-sm mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="text-white/60 text-sm mb-3 block">Category</label>
                  <div className="space-y-1.5">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                        selectedCategory === "all" ? "bg-gold/10 text-gold" : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          selectedCategory === cat.slug ? "bg-gold/10 text-gold" : "text-white/60 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="text-white/60 text-sm mb-3 block">
                    Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={20000}
                    step={500}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[1], parseInt(e.target.value)])}
                    className="w-full accent-gold"
                  />
                </div>

                {/* Brands */}
                <div>
                  <label className="text-white/60 text-sm mb-3 block">Brand</label>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto">
                    <button
                      onClick={() => setSelectedBrand("all")}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                        selectedBrand === "all" ? "bg-gold/10 text-gold" : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      All Brands
                    </button>
                    {brands.map((b) => (
                      <button
                        key={b.slug}
                        onClick={() => setSelectedBrand(b.slug)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          selectedBrand === b.slug ? "bg-gold/10 text-gold" : "text-white/60 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/70 text-sm hover:bg-white/10"
                >
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none px-4 py-2 pr-8 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold/50 cursor-pointer"
                    >
                      {sortOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-luxury-dark">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                  </div>

                  <div className="hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
                    <button
                      onClick={() => setGridCols(3)}
                      className={cn("p-1.5 rounded-lg", gridCols === 3 ? "bg-gold/10 text-gold" : "text-white/40")}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setGridCols(4)}
                      className={cn("p-1.5 rounded-lg", gridCols === 4 ? "bg-gold/10 text-gold" : "text-white/40")}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className={cn("grid gap-4 sm:gap-6", gridCols === 4 ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-2 sm:grid-cols-3")}>
                  {filteredProducts.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-white/40 text-lg">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
