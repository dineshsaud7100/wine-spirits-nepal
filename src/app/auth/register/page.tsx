"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Wine, User, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });

  const inputClass = "w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-20 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="bg-luxury-dark/50 border border-white/5 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <Wine className="w-7 h-7 text-gold" />
              </div>
              <h1 className="text-2xl font-bold text-white">Create Account</h1>
              <p className="text-white/50 text-sm mt-1">Join us for exclusive offers</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="text-white/60 text-sm mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Full name" />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-sm mb-1.5 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="email@example.com" />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-sm mb-1.5 block">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="98XXXXXXXX" />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-sm mb-1.5 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type={showPassword ? "text" : "password"} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={inputClass} placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-white/60 text-sm mb-1.5 block">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} className={inputClass} placeholder="••••••••" />
                </div>
              </div>

              <label className="flex items-start gap-2 text-white/50 text-sm">
                <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 accent-gold" />
                <span>I agree to the <Link href="/terms" className="text-gold hover:text-gold-400">Terms of Service</Link> and <Link href="/privacy-policy" className="text-gold hover:text-gold-400">Privacy Policy</Link></span>
              </label>

              <button className="w-full py-3.5 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20">
                Create Account
              </button>
            </form>

            <p className="text-center text-white/50 text-sm mt-8">
              Already have an account? <Link href="/auth/login" className="text-gold hover:text-gold-400">Sign In</Link>
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
