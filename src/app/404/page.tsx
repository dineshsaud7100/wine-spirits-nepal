"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md mx-4">
          <p className="gold-text font-serif text-8xl font-bold mb-4">404</p>
          <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
          <p className="text-white/50 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all">
              <Home className="w-4 h-4" /> Go Home
            </Link>
            <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all">
              <ArrowLeft className="w-4 h-4" /> Go Back
            </button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
