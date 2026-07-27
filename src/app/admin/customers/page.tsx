"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, Search, Mail, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn, formatPrice } from "@/lib/utils";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Reviews", href: "/admin/reviews", icon: Star },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

const mockCustomers = [
  { id: "1", name: "Rajesh Sharma", email: "rajesh@email.com", phone: "9841234567", orders: 12, spent: 85000, joined: "2024-01-15" },
  { id: "2", name: "Anita Thapa", email: "anita@email.com", phone: "9851234567", orders: 8, spent: 45000, joined: "2024-03-20" },
  { id: "3", name: "Suman Gurung", email: "suman@email.com", phone: "9861234567", orders: 15, spent: 120000, joined: "2024-02-10" },
  { id: "4", name: "Priya Magar", email: "priya@email.com", phone: "9871234567", orders: 5, spent: 28000, joined: "2024-06-05" },
  { id: "5", name: "Bikash Rai", email: "bikash@email.com", phone: "9881234567", orders: 20, spent: 165000, joined: "2024-01-01" },
];

export default function AdminCustomersPage() {
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
              <div className="mb-8"><h1 className="text-2xl font-bold text-white">Customers</h1><p className="text-white/50 text-sm">{mockCustomers.length} customers total</p></div>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input type="text" className="w-full max-w-md pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50" placeholder="Search customers..." />
              </div>

              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4">Customer</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden md:table-cell">Contact</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden sm:table-cell">Orders</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden lg:table-cell">Total Spent</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden lg:table-cell">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockCustomers.map((c) => (
                        <tr key={c.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">{c.name.charAt(0)}</div>
                              <div><p className="text-white text-sm font-medium">{c.name}</p><p className="text-white/40 text-xs">ID: {c.id}</p></div>
                            </div>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell"><p className="text-white/60 text-sm flex items-center gap-1"><Mail className="w-3 h-3" /> {c.email}</p><p className="text-white/40 text-xs flex items-center gap-1"><Phone className="w-3 h-3" /> {c.phone}</p></td>
                          <td className="px-6 py-4 hidden sm:table-cell"><span className="text-white text-sm">{c.orders}</span></td>
                          <td className="px-6 py-4 hidden lg:table-cell"><span className="text-gold text-sm font-medium">{formatPrice(c.spent)}</span></td>
                          <td className="px-6 py-4 hidden lg:table-cell"><span className="text-white/40 text-sm">{c.joined}</span></td>
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
