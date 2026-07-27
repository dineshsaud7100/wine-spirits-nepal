"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Plus, Search, Edit, Trash2, Wine, Eye } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products, categories } from "@/data";
import { formatPrice, cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Reviews", href: "/admin/reviews", icon: Star },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminProductsPage() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || p.categorySlug === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-4 sticky top-24">
                <div className="flex items-center gap-3 px-3 py-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Wine className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Admin Panel</p>
                    <p className="text-white/40 text-xs">Wine & Spirits Nepal</p>
                  </div>
                </div>
                <nav className="space-y-1">
                  {sidebarLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname === link.href ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5")}>
                      <link.icon className="w-4 h-4" />{link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-white">Products</h1>
                  <p className="text-white/50 text-sm">{filteredProducts.length} products total</p>
                </div>
                <Link href="/admin/products/new" className="inline-flex items-center gap-2 px-4 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all">
                  <Plus className="w-4 h-4" /> Add Product
                </Link>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50" placeholder="Search products..." />
                </div>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold/50 cursor-pointer appearance-none">
                  <option value="all" className="bg-luxury-dark">All Categories</option>
                  {categories.map((c) => <option key={c.slug} value={c.slug} className="bg-luxury-dark">{c.name}</option>)}
                </select>
              </div>

              {/* Table */}
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4">Product</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden sm:table-cell">Category</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4">Price</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden md:table-cell">Stock</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden lg:table-cell">Rating</th>
                        <th className="text-right text-white/40 text-xs font-medium px-6 py-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Package className="w-5 h-5 text-gold/30" />
                              </div>
                              <div>
                                <p className="text-white text-sm font-medium">{product.name}</p>
                                <p className="text-white/40 text-xs">{product.brand} • {product.sku}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 hidden sm:table-cell">
                            <span className="text-white/60 text-sm">{product.category}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-white text-sm font-medium">{formatPrice(product.mrp)}</p>
                              {product.offerPrice && <p className="text-green-400 text-xs">{formatPrice(product.offerPrice)}</p>}
                            </div>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell">
                            <span className={cn("text-sm font-medium", product.stock > 10 ? "text-green-400" : product.stock > 0 ? "text-yellow-400" : "text-red-400")}>
                              {product.stock}
                            </span>
                          </td>
                          <td className="px-6 py-4 hidden lg:table-cell">
                            <span className="text-gold text-sm">{product.rating} ★</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <Link href={`/product/${product.slug}`} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                                <Eye className="w-4 h-4" />
                              </Link>
                              <Link href={`/admin/products/${product.id}`} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:bg-gold/10 transition-all">
                                <Edit className="w-4 h-4" />
                              </Link>
                              <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-400/10 transition-all">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
