"use client";

import { use } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, ArrowLeft, Edit, Trash2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { categories } from "@/data";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Reviews", href: "/admin/reviews", icon: Star },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminCategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const pathname = usePathname();
  const router = useRouter();
  const category = categories.find((c) => c.slug === slug);
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
                    <Link key={link.href} href={link.href} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname.startsWith(link.href) ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5")}>
                      <link.icon className="w-4 h-4" />{link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <button onClick={() => router.back()} className="text-white/40 hover:text-white"><ArrowLeft className="w-5 h-5" /></button>
                <h1 className="text-2xl font-bold text-white">{category ? `Edit: ${category.name}` : "Category Not Found"}</h1>
              </div>

              {category && (
                <form onSubmit={(e) => { e.preventDefault(); router.push("/admin/products"); }} className="space-y-6 max-w-2xl">
                  <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4">Category Details</h3>
                    <div className="space-y-4">
                      <div><label className="text-white/60 text-sm mb-1.5 block">Name</label><input defaultValue={category.name} className={inputClass} /></div>
                      <div><label className="text-white/60 text-sm mb-1.5 block">Description</label><textarea defaultValue={category.description} className={inputClass + " min-h-[80px]"} /></div>
                      <div><label className="text-white/60 text-sm mb-1.5 block">Display Order</label><input type="number" defaultValue={category.displayOrder} className={inputClass} /></div>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div className="w-11 h-6 rounded-full bg-gold relative"><div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-[22px]" /></div>
                        <span className="text-white text-sm">Active</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button type="submit" className="px-6 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all">Save Changes</button>
                    <button type="button" onClick={() => {}} className="px-6 py-2.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl font-medium text-sm hover:bg-red-500/20 transition-all flex items-center gap-2"><Trash2 className="w-4 h-4" /> Delete</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
