"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, MapPin, LogOut, Edit } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Orders", href: "/profile/orders", icon: Package },
  { label: "Wishlist", href: "/profile/wishlist", icon: Heart },
  { label: "Addresses", href: "/profile/addresses", icon: MapPin },
];

export default function ProfilePage() {
  const pathname = usePathname();
  const [form, setForm] = useState({ name: "Guest User", email: "guest@example.com", phone: "98XXXXXXXX" });
  const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-white mb-8">My Account</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-4">
                <div className="text-center mb-4 pb-4 border-b border-white/10">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                    <User className="w-8 h-8 text-gold" />
                  </div>
                  <p className="text-white font-medium">{form.name}</p>
                  <p className="text-white/40 text-sm">{form.email}</p>
                </div>
                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <Link key={tab.href} href={tab.href} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname === tab.href ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5")}>
                      <tab.icon className="w-4 h-4" />{tab.label}
                    </Link>
                  ))}
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400/70 hover:text-red-400 hover:bg-red-400/5 transition-all">
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </nav>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-white font-semibold text-lg">Personal Information</h2>
                  <button className="inline-flex items-center gap-1 text-gold text-sm hover:text-gold-400"><Edit className="w-4 h-4" /> Edit</button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-white/60 text-sm mb-1.5 block">Full Name</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} /></div>
                  <div><label className="text-white/60 text-sm mb-1.5 block">Email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} /></div>
                  <div><label className="text-white/60 text-sm mb-1.5 block">Phone</label><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} /></div>
                </div>
                <button className="mt-6 px-6 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
