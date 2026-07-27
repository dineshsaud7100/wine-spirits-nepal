"use client";

import { motion } from "framer-motion";
import { Wine, Shield, Award, Truck, Heart, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const values = [
  { icon: Shield, title: "Authenticity", desc: "We guarantee 100% authentic imported spirits from authorized distributors worldwide." },
  { icon: Award, title: "Quality", desc: "Every product in our collection is handpicked for exceptional quality and taste." },
  { icon: Truck, title: "Fast Delivery", desc: "Same-day dispatch and delivery within 24-48 hours across Kathmandu Valley." },
  { icon: Heart, title: "Customer First", desc: "Your satisfaction is our priority with dedicated support and hassle-free returns." },
];

const stats = [
  { value: "500+", label: "Products" },
  { value: "50+", label: "Brands" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "5+", label: "Years of Service" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-dark to-luxury-black" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="gold-text">Wine & Spirits Nepal</span>
            </motion.h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Nepal&apos;s premier destination for authentic, premium wines and spirits.</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>Wine & Spirits Nepal was founded with a simple mission: to bring the finest wines and spirits from around the world to discerning customers in Nepal.</p>
                  <p>We partner with authorized distributors and global brands to ensure every bottle we sell is 100% authentic and of the highest quality. From rare single malts to everyday favorites, our curated collection caters to every palate and occasion.</p>
                  <p>As a responsible retailer, we are committed to promoting responsible drinking and ensuring our products are only sold to individuals of legal drinking age.</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="aspect-square bg-gradient-to-br from-gold/10 to-burgundy/10 rounded-3xl border border-white/10 flex items-center justify-center">
                  <Wine className="w-32 h-32 text-gold/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-luxury-dark/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <p className="gold-text font-serif text-4xl font-bold">{stat.value}</p>
                  <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-white text-center mb-12">Our <span className="gold-text">Values</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 text-center hover:border-gold/20 transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><v.icon className="w-6 h-6 text-gold" /></div>
                    <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-luxury-dark/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">Our <span className="gold-text">Team</span></h2>
            <p className="text-white/50 max-w-xl mx-auto mb-12">Passionate people dedicated to bringing you the finest selection of wines and spirits.</p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {["Rajesh Sharma", "Anita Thapa", "Suman Gurung"].map((name, i) => (
                <div key={name} className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 hover:border-gold/20 transition-all">
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-gold/40" />
                  </div>
                  <h3 className="text-white font-medium">{name}</h3>
                  <p className="text-white/40 text-sm">{["Founder & CEO", "Head of Operations", "Master Sommelier"][i]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
