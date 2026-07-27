"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-serif text-4xl font-bold text-white mb-4">Get in <span className="gold-text">Touch</span></h1>
            <p className="text-white/50 max-w-xl mx-auto">Have a question or feedback? We&apos;d love to hear from you.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Call Us", detail: "+977-1-4444444", sub: "Mon-Sat 10AM - 8PM" },
                { icon: Mail, title: "Email Us", detail: "info@wineandspiritsnepal.com", sub: "We reply within 24 hours" },
                { icon: MapPin, title: "Visit Us", detail: "Thamel, Kathmandu, Nepal", sub: "Open Mon-Sat 10AM - 8PM" },
                { icon: Clock, title: "Business Hours", detail: "Mon - Sat: 10AM - 8PM", sub: "Sunday: Closed" },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-5 hover:border-gold/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0"><item.icon className="w-5 h-5 text-gold" /></div>
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-white/60 text-sm">{item.detail}</p>
                      <p className="text-white/40 text-xs">{item.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
              <div className="bg-luxury-dark/50 border border-white/5 rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4"><Send className="w-8 h-8 text-green-400" /></div>
                    <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/50">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-white font-semibold text-lg mb-4">Send us a Message</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label className="text-white/60 text-sm mb-1.5 block">Name *</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" /></div>
                      <div><label className="text-white/60 text-sm mb-1.5 block">Email *</label><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="email@example.com" /></div>
                      <div><label className="text-white/60 text-sm mb-1.5 block">Phone</label><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="Phone number" /></div>
                      <div><label className="text-white/60 text-sm mb-1.5 block">Subject *</label><input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} placeholder="How can we help?" /></div>
                    </div>
                    <div><label className="text-white/60 text-sm mb-1.5 block">Message *</label><textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass + " min-h-[120px]"} placeholder="Your message..." /></div>
                    <button type="submit" className="px-8 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20 flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
