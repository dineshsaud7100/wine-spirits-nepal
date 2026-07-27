"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, MapPin, LogOut, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn, formatPrice } from "@/lib/utils";

const tabs = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Orders", href: "/profile/orders", icon: Package },
  { label: "Wishlist", href: "/profile/wishlist", icon: Heart },
  { label: "Addresses", href: "/profile/addresses", icon: MapPin },
];

const mockOrders = [
  { id: "WSN-001234", date: "2024-12-20", items: 3, total: 12500, status: "delivered" },
  { id: "WSN-001230", date: "2024-12-15", items: 2, total: 8900, status: "shipped" },
  { id: "WSN-001225", date: "2024-12-10", items: 1, total: 5500, status: "pending" },
];

const statusColors: Record<string, string> = {
  pending: "text-yellow-400 bg-yellow-400/10",
  confirmed: "text-blue-400 bg-blue-400/10",
  shipped: "text-indigo-400 bg-indigo-400/10",
  delivered: "text-green-400 bg-green-400/10",
  cancelled: "text-red-400 bg-red-400/10",
};

export default function ProfileOrdersPage() {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-white mb-8">My Orders</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-4">
                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <Link key={tab.href} href={tab.href} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname === tab.href ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5")}>
                      <tab.icon className="w-4 h-4" />{tab.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              {mockOrders.map((order) => (
                <div key={order.id} className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-5 hover:border-gold/20 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-white font-medium">{order.id}</p>
                      <p className="text-white/40 text-sm">{order.date} • {order.items} items</p>
                    </div>
                    <span className={cn("px-3 py-1 rounded-full text-xs font-medium capitalize", statusColors[order.status])}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-semibold">{formatPrice(order.total)}</span>
                    <Link href={`/profile/orders`} className="text-gold text-sm flex items-center gap-1 hover:text-gold-400">
                      View Details <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
