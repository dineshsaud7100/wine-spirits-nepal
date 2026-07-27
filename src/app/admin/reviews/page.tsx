"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, Check, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { reviews } from "@/data";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Reviews", href: "/admin/reviews", icon: Star },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminReviewsPage() {
  const pathname = usePathname();

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
              <div className="mb-8"><h1 className="text-2xl font-bold text-white">Reviews</h1><p className="text-white/50 text-sm">{reviews.length} reviews total</p></div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">{review.userName.charAt(0)}</div>
                        <div>
                          <p className="text-white text-sm font-medium">{review.userName}</p>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className={cn("w-3 h-3", s <= review.rating ? "text-gold fill-gold" : "text-white/20")} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-all" title="Approve">
                          <Check className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-all" title="Delete">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <h4 className="text-white text-sm font-medium mb-1">{review.title}</h4>
                    <p className="text-white/50 text-sm mb-2">{review.comment}</p>
                    <p className="text-white/30 text-xs">{review.createdAt} • Product ID: {review.productId}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
