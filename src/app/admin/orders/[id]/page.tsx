"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, ArrowLeft, ChevronRight } from "lucide-react";
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

const orderData = {
  id: "WSN-001234",
  customer: { name: "Rajesh Sharma", email: "rajesh@email.com", phone: "9841234567" },
  shipping: { street: "Thamel", city: "Kathmandu", province: "Bagmati" },
  items: [
    { name: "Jack Daniel's Old No.7", qty: 2, price: 5500, total: 11000 },
    { name: "Absolut Original", qty: 1, price: 3800, total: 3800 },
  ],
  subtotal: 14800, discount: 0, delivery: 0, tax: 1924, total: 16724,
  payment: "cod", status: "shipped", date: "2024-12-20",
  statusHistory: [
    { status: "pending", date: "2024-12-20 10:00" },
    { status: "confirmed", date: "2024-12-20 11:30" },
    { status: "packed", date: "2024-12-20 14:00" },
    { status: "shipped", date: "2024-12-21 09:00" },
  ],
};

const statusColors: Record<string, string> = {
  pending: "text-yellow-400 bg-yellow-400/10",
  confirmed: "text-blue-400 bg-blue-400/10",
  packed: "text-purple-400 bg-purple-400/10",
  shipped: "text-indigo-400 bg-indigo-400/10",
  delivered: "text-green-400 bg-green-400/10",
  cancelled: "text-red-400 bg-red-400/10",
};

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
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
                    <Link key={link.href} href={link.href} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname.startsWith(link.href) ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5")}>
                      <link.icon className="w-4 h-4" />{link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Link href="/admin/orders" className="text-white/40 hover:text-white"><ArrowLeft className="w-5 h-5" /></Link>
                <div>
                  <h1 className="text-2xl font-bold text-white">Order {orderData.id}</h1>
                  <p className="text-white/50 text-sm">Placed on {orderData.date}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4">Order Items</h3>
                    <div className="space-y-3">
                      {orderData.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                          <div>
                            <p className="text-white text-sm font-medium">{item.name}</p>
                            <p className="text-white/40 text-xs">Qty: {item.qty} × {formatPrice(item.price)}</p>
                          </div>
                          <span className="text-white text-sm font-medium">{formatPrice(item.total)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-white/10 pt-4 mt-4 space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-white/50">Subtotal</span><span className="text-white">{formatPrice(orderData.subtotal)}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-white/50">Tax</span><span className="text-white">{formatPrice(orderData.tax)}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-white/50">Delivery</span><span className="text-green-400">Free</span></div>
                      <div className="flex justify-between text-base font-semibold pt-2 border-t border-white/10"><span className="text-white">Total</span><span className="text-gold">{formatPrice(orderData.total)}</span></div>
                    </div>
                  </div>

                  <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4">Status History</h3>
                    <div className="space-y-3">
                      {orderData.statusHistory.map((h, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={cn("w-3 h-3 rounded-full", i === orderData.statusHistory.length - 1 ? "bg-gold" : "bg-white/20")} />
                          <div>
                            <span className={cn("text-sm font-medium capitalize", statusColors[h.status]?.split(" ")[0])}>{h.status}</span>
                            <p className="text-white/40 text-xs">{h.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4">Customer</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-white">{orderData.customer.name}</p>
                      <p className="text-white/50">{orderData.customer.email}</p>
                      <p className="text-white/50">{orderData.customer.phone}</p>
                    </div>
                  </div>

                  <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4">Shipping</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-white/60">{orderData.shipping.street}</p>
                      <p className="text-white/60">{orderData.shipping.city}, {orderData.shipping.province}</p>
                    </div>
                  </div>

                  <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4">Update Status</h3>
                    <select className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold/50 appearance-none cursor-pointer mb-3">
                      {["pending", "confirmed", "packed", "shipped", "delivered", "cancelled"].map((s) => (
                        <option key={s} value={s} className="bg-luxury-dark capitalize">{s}</option>
                      ))}
                    </select>
                    <button className="w-full py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all">Update</button>
                  </div>
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
