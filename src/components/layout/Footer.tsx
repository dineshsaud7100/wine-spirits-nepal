"use client";

import Link from "next/link";
import { Wine, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { footerLinks } from "@/config/site";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-luxury-black border-t border-white/5">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="gold-text font-serif text-2xl font-bold">Subscribe to Our Newsletter</h3>
              <p className="text-white/50 text-sm mt-1">Get updates on new arrivals, exclusive offers, and weekend deals.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl text-white placeholder-white/40 focus:outline-none focus:border-gold/50"
              />
              <button className="px-6 py-3 bg-gold text-luxury-black rounded-r-xl font-semibold hover:bg-gold-400 transition-colors flex items-center gap-2">
                <Send className="w-4 h-4" /> Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Wine className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="gold-text font-serif text-lg font-bold tracking-wider leading-tight">WINE & SPIRITS</p>
                <p className="text-gold/60 text-[9px] tracking-[0.3em] uppercase">Nepal</p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Your trusted destination for premium wines and spirits in Nepal. Authentic products, competitive prices.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).slice(0, 3).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/50 text-sm hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/40 text-sm">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +977-1-4444444</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@wineandspiritsnepal.com</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Thamel, Kathmandu</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs">
            Alcohol is intended only for individuals aged 18 years or older. Please drink responsibly.
          </p>
          <p className="text-white/30 text-xs mt-2">
            &copy; {new Date().getFullYear()} Wine & Spirits Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
