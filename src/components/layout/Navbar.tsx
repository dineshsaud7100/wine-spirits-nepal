"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Heart, User, Menu, X, Wine, ChevronDown, LogOut, Package, Settings, UserCircle } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useUIStore } from "@/store/ui";
import { useScrollPosition } from "@/hooks";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/site";
import { usePathname, useRouter } from "next/navigation";
import { products } from "@/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [announcementOpen, setAnnouncementOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const pathname = usePathname();
  const router = useRouter();
  const cartItems = useCartStore((s) => s.items);
  const wishlistItems = useWishlistStore((s) => s.items);
  const cartCount = cartItems.filter((i) => !i.savedForLater).reduce((sum, i) => sum + i.quantity, 0);

  const searchResults = searchQuery.length > 1
    ? products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const isScrolled = scrollY > 20;

  return (
    <>
      {announcementOpen && (
        <div className="bg-gold text-luxury-black text-center py-2 px-4 text-sm font-medium relative z-50">
          <span className="animate-pulse">🎉</span> Free delivery on orders above Rs.5,000! Weekend Mega Sale every Saturday & Sunday
          <button onClick={() => setAnnouncementOpen(false)} className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <motion.header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-luxury-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-luxury-black/80 backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Wine className="w-5 h-5 text-gold" />
              </div>
              <div className="hidden sm:block">
                <p className="gold-text font-serif text-xl font-bold tracking-wider leading-tight">WINE & SPIRITS</p>
                <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase">Nepal</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors relative group",
                    pathname === link.href ? "text-gold" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              ))}
              <div className="relative group">
                <button className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white flex items-center gap-1 transition-colors">
                  More <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                  <div className="bg-luxury-dark/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl">
                    {navLinks.slice(6).map((link) => (
                      <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <button onClick={() => setSearchOpen(!searchOpen)} className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all">
                <Search className="w-5 h-5" />
              </button>

              <Link href="/profile/wishlist" className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all relative">
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-luxury-black text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-luxury-black text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <div className="relative hidden sm:block">
                <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all">
                  <User className="w-5 h-5" />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 pt-2 z-50"
                    >
                      <div className="bg-luxury-dark/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl">
                        <Link href="/auth/login" className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                          <UserCircle className="w-4 h-4" /> Login
                        </Link>
                        <Link href="/auth/register" className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                          <User className="w-4 h-4" /> Register
                        </Link>
                        <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                          <Settings className="w-4 h-4" /> My Account
                        </Link>
                        <Link href="/profile/orders" className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                          <Package className="w-4 h-4" /> Orders
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/10 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for wines, spirits, brands..."
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                    autoFocus
                  />
                </div>
                {searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 bg-luxury-dark/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden"
                  >
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 transition-colors"
                      >
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <Wine className="w-6 h-6 text-gold/60" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{product.name}</p>
                          <p className="text-white/50 text-xs">{product.brand} • {product.bottleSize}</p>
                        </div>
                        <p className="text-gold font-semibold text-sm">Rs.{product.mrp.toLocaleString()}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-luxury-dark border-r border-white/10 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="gold-text font-serif text-xl font-bold tracking-wider">WINE & SPIRITS</p>
                    <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase">Nepal</p>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "bg-gold/10 text-gold"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-1">
                  <Link href="/auth/login" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                    <User className="w-4 h-4" /> Login
                  </Link>
                  <Link href="/auth/register" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                    <UserCircle className="w-4 h-4" /> Register
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
