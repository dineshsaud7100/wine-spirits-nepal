"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, MapPin, Plus, Edit, Trash2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Orders", href: "/profile/orders", icon: Package },
  { label: "Wishlist", href: "/profile/wishlist", icon: Heart },
  { label: "Addresses", href: "/profile/addresses", icon: MapPin },
];

const mockAddresses = [
  { id: "1", fullName: "Guest User", phone: "9841234567", street: "Thamel, Kathmandu", city: "Kathmandu", province: "Bagmati", isDefault: true },
];

export default function ProfileAddressesPage() {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-white mb-8">My Addresses</h1>

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

            <div className="flex-1">
              <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm mb-6 hover:bg-gold-400 transition-all">
                <Plus className="w-4 h-4" /> Add New Address
              </button>

              <div className="space-y-4">
                {mockAddresses.map((addr) => (
                  <div key={addr.id} className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-white font-medium">{addr.fullName}</p>
                          {addr.isDefault && <span className="px-2 py-0.5 bg-gold/10 text-gold text-xs rounded-full">Default</span>}
                        </div>
                        <p className="text-white/60 text-sm">{addr.street}</p>
                        <p className="text-white/60 text-sm">{addr.city}, {addr.province}</p>
                        <p className="text-white/40 text-sm mt-1">Phone: {addr.phone}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:bg-gold/10 transition-all"><Edit className="w-4 h-4" /></button>
                        <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-400/10 transition-all"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
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
