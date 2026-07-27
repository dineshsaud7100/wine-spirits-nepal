"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Wine, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-20 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="bg-luxury-dark/50 border border-white/5 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                {sent ? <CheckCircle className="w-7 h-7 text-gold" /> : <Wine className="w-7 h-7 text-gold" />}
              </div>
              <h1 className="text-2xl font-bold text-white">{sent ? "Check Your Email" : "Forgot Password?"}</h1>
              <p className="text-white/50 text-sm mt-1">
                {sent ? "We've sent a password reset link to your email." : "Enter your email to reset your password."}
              </p>
            </div>

            {!sent ? (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50" placeholder="email@example.com" />
                  </div>
                </div>
                <button className="w-full py-3.5 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20">
                  Send Reset Link
                </button>
              </form>
            ) : (
              <button onClick={() => setSent(false)} className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all text-sm">
                Resend Email
              </button>
            )}

            <Link href="/auth/login" className="flex items-center justify-center gap-2 text-white/50 text-sm mt-6 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Login
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
