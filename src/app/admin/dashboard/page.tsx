"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, TrendingUp, DollarSign, ShoppingBag, UserCheck, BarChart3, Wine, ArrowUpRight, ArrowDownRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { formatPrice, cn } from "@/lib/utils";

const stats = [
  { label: "Total Revenue", value: "Rs.1,245,600", change: "+12.5%", up: true, icon: DollarSign },
  { label: "Total Orders", value: "342", change: "+8.2%", up: true, icon: ShoppingBag },
  { label: "Total Customers", value: "1,847", change: "+15.3%", up: true, icon: UserCheck },
  { label: "Products", value: "124", change: "+3", up: true, icon: Package },
];

const recentOrders = [
  { id: "WSN-001234", customer: "Rajesh Sharma", amount: 12500, status: "delivered", date: "2024-12-20" },
  { id: "WSN-001233", customer: "Anita Thapa", amount: 5500, status: "shipped", date: "2024-12-19" },
  { id: "WSN-001232", customer: "Suman Gurung", amount: 8900, status: "pending", date: "2024-12-19" },
  { id: "WSN-001231", customer: "Priya Magar", amount: 3200, status: "confirmed", date: "2024-12-18" },
  { id: "WSN-001230", customer: "Bikash Rai", amount: 15000, status: "delivered", date: "2024-12-18" },
];

const statusColors: Record<string, string> = {
  pending: "text-yellow-400 bg-yellow-400/10",
  confirmed: "text-blue-400 bg-blue-400/10",
  packed: "text-purple-400 bg-purple-400/10",
  shipped: "text-indigo-400 bg-indigo-400/10",
  delivered: "text-green-400 bg-green-400/10",
  cancelled: "text-red-400 bg-red-400/10",
};

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Reviews", href: "/admin/reviews", icon: Star },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminDashboard() {
  const pathname = usePathname();

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
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                        pathname === link.href
                          ? "bg-gold/10 text-gold"
                          : "text-white/50 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="text-white/50 text-sm">Welcome back! Here&apos;s what&apos;s happening.</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-5 hover:border-gold/20 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className={cn("flex items-center gap-0.5 text-xs font-medium", stat.up ? "text-green-400" : "text-red-400")}>
                        {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs">{stat.label}</p>
                    <p className="text-white text-xl font-bold mt-1">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Revenue Chart Placeholder */}
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Revenue Overview</h3>
                  <div className="flex gap-2">
                    {["Week", "Month", "Year"].map((period) => (
                      <button key={period} className="px-3 py-1 text-xs text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all">{period}</button>
                    ))}
                  </div>
                </div>
                <div className="h-64 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t-lg bg-gradient-to-t from-gold/20 to-gold/40 hover:from-gold/30 hover:to-gold/50 transition-all cursor-pointer" style={{ height: `${h}%` }} />
                      <span className="text-white/30 text-[10px]">{["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Recent Orders</h3>
                  <Link href="/admin/orders" className="text-gold text-sm hover:text-gold-400 flex items-center gap-1">
                    View All <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="text-left text-white/40 text-xs font-medium pb-3">Order</th>
                        <th className="text-left text-white/40 text-xs font-medium pb-3">Customer</th>
                        <th className="text-left text-white/40 text-xs font-medium pb-3">Amount</th>
                        <th className="text-left text-white/40 text-xs font-medium pb-3">Status</th>
                        <th className="text-left text-white/40 text-xs font-medium pb-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="py-3 text-white text-sm font-medium">{order.id}</td>
                          <td className="py-3 text-white/60 text-sm">{order.customer}</td>
                          <td className="py-3 text-white text-sm">{formatPrice(order.amount)}</td>
                          <td className="py-3">
                            <span className={cn("px-2 py-1 rounded-full text-xs font-medium capitalize", statusColors[order.status])}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 text-white/40 text-sm">{order.date}</td>
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
