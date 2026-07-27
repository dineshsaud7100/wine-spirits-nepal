"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, Save } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { defaultSettings } from "@/data";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Reviews", href: "/admin/reviews", icon: Star },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSettingsPage() {
  const pathname = usePathname();
  const [settings, setSettings] = useState(defaultSettings);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

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
              <div className="flex items-center justify-between mb-8">
                <div><h1 className="text-2xl font-bold text-white">Website Settings</h1><p className="text-white/50 text-sm">Manage your store settings and preferences</p></div>
                <button onClick={handleSave} className="inline-flex items-center gap-2 px-4 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all">
                  <Save className="w-4 h-4" /> {saved ? "Saved!" : "Save Changes"}
                </button>
              </div>

              <div className="space-y-6">
                {/* Store Info */}
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Store Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="text-white/60 text-sm mb-1.5 block">Store Name</label><input value={settings.storeName} onChange={(e) => setSettings({ ...settings, storeName: e.target.value })} className={inputClass} /></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Tagline</label><input value={settings.tagline} onChange={(e) => setSettings({ ...settings, tagline: e.target.value })} className={inputClass} /></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Contact Email</label><input type="email" value={settings.contactEmail} onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })} className={inputClass} /></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Contact Phone</label><input value={settings.contactPhone} onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })} className={inputClass} /></div>
                    <div className="sm:col-span-2"><label className="text-white/60 text-sm mb-1.5 block">Address</label><input value={settings.address} onChange={(e) => setSettings({ ...settings, address: e.target.value })} className={inputClass} /></div>
                  </div>
                </div>

                {/* Delivery & Tax */}
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Delivery & Tax</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div><label className="text-white/60 text-sm mb-1.5 block">Delivery Charge (Rs.)</label><input type="number" value={settings.deliveryCharge} onChange={(e) => setSettings({ ...settings, deliveryCharge: parseInt(e.target.value) })} className={inputClass} /></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Free Delivery Above (Rs.)</label><input type="number" value={settings.freeDeliveryAbove} onChange={(e) => setSettings({ ...settings, freeDeliveryAbove: parseInt(e.target.value) })} className={inputClass} /></div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Tax Percent (%)</label><input type="number" value={settings.taxPercent} onChange={(e) => setSettings({ ...settings, taxPercent: parseInt(e.target.value) })} className={inputClass} /></div>
                  </div>
                </div>

                {/* Weekend Offers */}
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Weekend Offers</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className={cn("w-11 h-6 rounded-full relative transition-colors", settings.weekendOfferEnabled ? "bg-gold" : "bg-white/10")} onClick={() => setSettings({ ...settings, weekendOfferEnabled: !settings.weekendOfferEnabled })}>
                        <div className={cn("w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all", settings.weekendOfferEnabled ? "left-[22px]" : "left-0.5")} />
                      </div>
                      <span className="text-white text-sm">Enable Weekend Offers</span>
                    </label>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Weekend Discount Percent (%)</label><input type="number" value={settings.weekendDiscountPercent} onChange={(e) => setSettings({ ...settings, weekendDiscountPercent: parseInt(e.target.value) })} className={cn(inputClass, "max-w-xs")} /></div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Social Media</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(settings.socialMedia).map(([platform, url]) => (
                      <div key={platform}><label className="text-white/60 text-sm mb-1.5 block capitalize">{platform}</label><input value={url || ""} onChange={(e) => setSettings({ ...settings, socialMedia: { ...settings.socialMedia, [platform]: e.target.value } })} className={inputClass} placeholder={`https://${platform}.com/...`} /></div>
                    ))}
                  </div>
                </div>

                {/* Other */}
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">Other Settings</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className={cn("w-11 h-6 rounded-full relative transition-colors", settings.ageVerificationRequired ? "bg-gold" : "bg-white/10")} onClick={() => setSettings({ ...settings, ageVerificationRequired: !settings.ageVerificationRequired })}>
                        <div className={cn("w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all", settings.ageVerificationRequired ? "left-[22px]" : "left-0.5")} />
                      </div>
                      <span className="text-white text-sm">Require Age Verification</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className={cn("w-11 h-6 rounded-full relative transition-colors", settings.maintenanceMode ? "bg-red-500" : "bg-white/10")} onClick={() => setSettings({ ...settings, maintenanceMode: !settings.maintenanceMode })}>
                        <div className={cn("w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all", settings.maintenanceMode ? "left-[22px]" : "left-0.5")} />
                      </div>
                      <span className="text-white text-sm">Maintenance Mode</span>
                    </label>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Announcement Banner</label><input value={settings.announcement || ""} onChange={(e) => setSettings({ ...settings, announcement: e.target.value })} className={inputClass} placeholder="Enter announcement text" /></div>
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
