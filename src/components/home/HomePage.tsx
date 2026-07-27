"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wine, Clock, Truck, Shield, Star, ChevronRight, Sparkles, TrendingUp, Award, Gift } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import { products, categories } from "@/data";
import { useWeekendOffer } from "@/hooks";
import { formatPrice } from "@/lib/utils";

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const features = [
  { icon: Truck, title: "Free Delivery", desc: "On orders above Rs.5,000" },
  { icon: Shield, title: "100% Authentic", desc: "Genuine imported products" },
  { icon: Clock, title: "Fast Delivery", desc: "Within 24-48 hours" },
  { icon: Gift, title: "Weekend Deals", desc: "Special discounts every Sat-Sun" },
];

const testimonials = [
  { name: "Rajesh Sharma", rating: 5, text: "Best liquor store in Nepal! Amazing collection and fast delivery. The weekend offers are fantastic.", role: "Regular Customer" },
  { name: "Anita Thapa", rating: 5, text: "I love the variety and the quality. Every product is genuine and the prices are very competitive.", role: "Premium Member" },
  { name: "Suman Gurung", rating: 5, text: "The weekend mega sale is incredible! Saved so much on my favorite whisky. Highly recommend!", role: "Whisky Enthusiast" },
];

export default function HomePage() {
  const { isWeekend, daysUntilWeekend } = useWeekendOffer();
  const featuredProducts = products.filter((p) => p.isFeatured);
  const bestSellers = products.filter((p) => p.isBestSeller);
  const newArrivals = products.filter((p) => p.isNewArrival);
  const premiumProducts = products.filter((p) => p.isPremium);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-dark to-luxury-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-hero-pattern" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {isWeekend && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium">
                  <Sparkles className="w-4 h-4" /> Weekend Mega Sale is LIVE!
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Premium{" "}
              <span className="gold-text">Wines</span>{" "}
              &amp;{" "}
              <span className="gold-text">Spirits</span>{" "}
              Collection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl"
            >
              Explore authentic whisky, wine, vodka, rum, beer, gin, tequila, champagne, and premium spirits at the best prices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20 hover:shadow-gold/40"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/weekend-offers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-medium hover:bg-white/10 transition-all"
              >
                {isWeekend ? "Weekend Deals" : `Weekend Offers in ${daysUntilWeekend}`} <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2">
          <div className="w-80 h-96 rounded-3xl bg-gradient-to-br from-gold/10 to-burgundy/10 border border-white/10 flex items-center justify-center">
            <Wine className="w-32 h-32 text-gold/20" />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="border-y border-white/5 bg-luxury-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{f.title}</p>
                  <p className="text-white/40 text-xs">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              Shop by <span className="gold-text">Category</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">Discover our curated collection of fine spirits and wines</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
                <Link href={`/categories/${cat.slug}`} className="group block">
                  <div className="relative bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 text-center hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors relative z-10">
                      <Wine className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-white text-sm font-medium relative z-10">{cat.name}</h3>
                    <p className="text-white/40 text-xs mt-1 relative z-10">{cat.productCount} products</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend Offer Banner */}
      {isWeekend && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-burgundy via-burgundy-600 to-burgundy rounded-3xl p-8 sm:p-12 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 rounded-full text-gold text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-3 h-3" /> Weekend Mega Sale
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">Up to 15% OFF!</h2>
                  <p className="text-white/70">Don&apos;t miss out on exclusive weekend deals. Limited time only!</p>
                </div>
                <Link
                  href="/weekend-offers"
                  className="px-8 py-4 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg whitespace-nowrap"
                >
                  Shop Weekend Deals
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                Featured <span className="gold-text">Products</span>
              </h2>
              <p className="text-white/50">Handpicked selections from our finest collection</p>
            </div>
            <Link href="/shop" className="hidden sm:inline-flex items-center gap-1 text-gold text-sm font-medium hover:text-gold-400 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-luxury-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                <TrendingUp className="inline w-8 h-8 text-gold mr-2" /> Best <span className="gold-text">Sellers</span>
              </h2>
              <p className="text-white/50">Most loved products by our customers</p>
            </div>
            <Link href="/best-sellers" className="hidden sm:inline-flex items-center gap-1 text-gold text-sm font-medium hover:text-gold-400 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Collection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              <Award className="inline w-8 h-8 text-gold mr-2" /> Premium <span className="gold-text">Collection</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">Exclusive selections for the discerning connoisseur</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {premiumProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-luxury-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              What Our <span className="gold-text">Customers</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
                <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 hover:border-gold/20 transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={`w-4 h-4 ${s <= t.rating ? "text-gold fill-gold" : "text-white/20"}`} />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">&quot;{t.text}&quot;</p>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gold/10 via-luxury-dark to-burgundy/10 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Explore?
            </h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8">
              Discover our complete collection of premium wines and spirits. Quality guaranteed.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20"
            >
              Browse All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
