"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, Search, Eye, ChevronRight } from "lucide-react";
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

const mockOrders = [
  { id: "WSN-001234", customer: "Rajesh Sharma", email: "rajesh@email.com", phone: "9841234567", amount: 12500, items: 3, status: "delivered", date: "2024-12-20", payment: "cod" },
  { id: "WSN-001233", customer: "Anita Thapa", email: "anita@email.com", phone: "9851234567", amount: 5500, items: 1, status: "shipped", date: "2024-12-19", payment: "khalti" },
  { id: "WSN-001232", customer: "Suman Gurung", email: "suman@email.com", phone: "9861234567", amount: 8900, items: 2, status: "pending", date: "2024-12-19", payment: "cod" },
  { id: "WSN-001231", customer: "Priya Magar", email: "priya@email.com", phone: "9871234567", amount: 3200, items: 1, status: "confirmed", date: "2024-12-18", payment: "esewa" },
  { id: "WSN-001230", customer: "Bikash Rai", email: "bikash@email.com", phone: "9881234567", amount: 15000, items: 4, status: "delivered", date: "2024-12-18", payment: "stripe" },
  { id: "WSN-001229", customer: "Sita Karki", email: "sita@email.com", phone: "9891234567", amount: 6700, items: 2, status: "packed", date: "2024-12-17", payment: "cod" },
];

const statusColors: Record<string, string> = {
  pending: "text-yellow-400 bg-yellow-400/10",
  confirmed: "text-blue-400 bg-blue-400/10",
  packed: "text-purple-400 bg-purple-400/10",
  shipped: "text-indigo-400 bg-indigo-400/10",
  delivered: "text-green-400 bg-green-400/10",
  cancelled: "text-red-400 bg-red-400/10",
};

export default function AdminOrdersPage() {
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
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Orders</h1>
                <p className="text-white/50 text-sm">{mockOrders.length} orders total</p>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="text" className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50" placeholder="Search orders..." />
                </div>
                <select className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none appearance-none cursor-pointer">
                  <option value="all" className="bg-luxury-dark">All Status</option>
                  {["pending", "confirmed", "packed", "shipped", "delivered", "cancelled"].map((s) => (
                    <option key={s} value={s} className="bg-luxury-dark capitalize">{s}</option>
                  ))}
                </select>
              </div>

              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4">Order</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden md:table-cell">Customer</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden sm:table-cell">Items</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4">Amount</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4 hidden lg:table-cell">Payment</th>
                        <th className="text-left text-white/40 text-xs font-medium px-6 py-4">Status</th>
                        <th className="text-right text-white/40 text-xs font-medium px-6 py-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4"><p className="text-white text-sm font-medium">{order.id}</p><p className="text-white/40 text-xs">{order.date}</p></td>
                          <td className="px-6 py-4 hidden md:table-cell"><p className="text-white/60 text-sm">{order.customer}</p><p className="text-white/40 text-xs">{order.email}</p></td>
                          <td className="px-6 py-4 hidden sm:table-cell"><span className="text-white/60 text-sm">{order.items} items</span></td>
                          <td className="px-6 py-4"><span className="text-white text-sm font-medium">{formatPrice(order.amount)}</span></td>
                          <td className="px-6 py-4 hidden lg:table-cell"><span className="text-white/60 text-sm uppercase">{order.payment}</span></td>
                          <td className="px-6 py-4"><span className={cn("px-2 py-1 rounded-full text-xs font-medium capitalize", statusColors[order.status])}>{order.status}</span></td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <Link href={`/admin/orders/${order.id}`} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:bg-gold/10 transition-all">
                                <Eye className="w-4 h-4" />
                              </Link>
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
