"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, ArrowLeft, Upload } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { categories, brands } from "@/data";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Reviews", href: "/admin/reviews", icon: Star },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AddProductPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "", brand: "", category: "", description: "", mrp: "", offerPrice: "",
    bottleSize: "750ml", alcoholPercent: "", country: "", stock: "",
    weekendOfferEnabled: false, weekendDiscountPercent: "10",
    isFeatured: false, isNewArrival: false, isBestSeller: false, isPremium: false,
    ingredients: "",
  });

  const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-4 sticky top-24">
                <div className="flex items-center gap-3 px-3 py-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"><Wine className="w-5 h-5 text-gold" /></div>
                  <div><p className="text-white text-sm font-medium">Admin Panel</p><p className="text-white/40 text-xs">Wine & Spirits Nepal</p></div>
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

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <button onClick={() => router.back()} className="text-white/40 hover:text-white"><ArrowLeft className="w-5 h-5" /></button>
                <h1 className="text-2xl font-bold text-white">Add New Product</h1>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); router.push("/admin/products"); }} className="space-y-6">
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Basic Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2"><label className="text-white/60 text-sm mb-1.5 block">Product Name *</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Product name" /></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Brand *</label><select value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className={inputClass}><option value="" className="bg-luxury-dark">Select brand</option>{brands.map((b) => <option key={b.id} value={b.name} className="bg-luxury-dark">{b.name}</option>)}</select></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Category *</label><select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inputClass}><option value="" className="bg-luxury-dark">Select category</option>{categories.map((c) => <option key={c.id} value={c.name} className="bg-luxury-dark">{c.name}</option>)}</select></div>
                    <div className="sm:col-span-2"><label className="text-white/60 text-sm mb-1.5 block">Description *</label><textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={inputClass + " min-h-[100px]"} placeholder="Product description" /></div>
                  </div>
                </div>

                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Pricing & Stock</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div><label className="text-white/60 text-sm mb-1.5 block">MRP (Rs.) *</label><input required type="number" value={form.mrp} onChange={(e) => setForm({ ...form, mrp: e.target.value })} className={inputClass} placeholder="0" /></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Offer Price (Rs.)</label><input type="number" value={form.offerPrice} onChange={(e) => setForm({ ...form, offerPrice: e.target.value })} className={inputClass} placeholder="0" /></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Stock *</label><input required type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} className={inputClass} placeholder="0" /></div>
                  </div>
                </div>

                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Product Details</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div><label className="text-white/60 text-sm mb-1.5 block">Bottle Size</label><select value={form.bottleSize} onChange={(e) => setForm({ ...form, bottleSize: e.target.value })} className={inputClass}>{["50ml", "100ml", "180ml", "250ml", "375ml", "500ml", "750ml", "1L", "1.5L", "2L"].map((s) => <option key={s} value={s} className="bg-luxury-dark">{s}</option>)}</select></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Alcohol %</label><input type="number" step="0.1" value={form.alcoholPercent} onChange={(e) => setForm({ ...form, alcoholPercent: e.target.value })} className={inputClass} placeholder="40" /></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Country</label><select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputClass}>{["USA", "Scotland", "France", "England", "Sweden", "Cuba", "Mexico", "India", "Nepal", "Japan", "Germany", "Spain", "Italy", "Australia", "Canada", "Russia", "South Africa"].map((c) => <option key={c} value={c} className="bg-luxury-dark">{c}</option>)}</select></div>
                    <div className="sm:col-span-3"><label className="text-white/60 text-sm mb-1.5 block">Ingredients</label><input value={form.ingredients} onChange={(e) => setForm({ ...form, ingredients: e.target.value })} className={inputClass} placeholder="Corn, Rye, Barley Malt, Water" /></div>
                  </div>
                </div>

                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Images</h3>
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-gold/30 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-white/30 mx-auto mb-3" />
                    <p className="text-white/50 text-sm">Click or drag images to upload</p>
                    <p className="text-white/30 text-xs mt-1">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Weekend Offer</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className={cn("w-11 h-6 rounded-full relative transition-colors", form.weekendOfferEnabled ? "bg-gold" : "bg-white/10")} onClick={() => setForm({ ...form, weekendOfferEnabled: !form.weekendOfferEnabled })}>
                        <div className={cn("w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all", form.weekendOfferEnabled ? "left-[22px]" : "left-0.5")} />
                      </div>
                      <span className="text-white text-sm">Enable Weekend Offer</span>
                    </label>
                    <div className="max-w-xs"><label className="text-white/60 text-sm mb-1.5 block">Discount %</label><input type="number" value={form.weekendDiscountPercent} onChange={(e) => setForm({ ...form, weekendDiscountPercent: e.target.value })} className={inputClass} /></div>
                  </div>
                </div>

                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Flags</h3>
                  <div className="flex flex-wrap gap-4">
                    {([["isFeatured", "Featured"], ["isNewArrival", "New Arrival"], ["isBestSeller", "Best Seller"], ["isPremium", "Premium"]] as const).map(([key, label]) => (
                      <label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.checked })} className="w-4 h-4 rounded border-white/20 bg-white/5 accent-gold" />
                        <span className="text-white/60 text-sm">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="submit" className="px-8 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20">Save Product</button>
                  <Link href="/admin/products" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
