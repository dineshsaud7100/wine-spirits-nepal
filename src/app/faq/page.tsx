"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "What is the minimum age to purchase alcohol?", a: "You must be at least 18 years of age to purchase alcohol in Nepal. We verify age at the time of delivery." },
  { q: "How long does delivery take?", a: "We deliver within 24-48 hours in Kathmandu Valley. For outside the valley, delivery may take 2-5 business days." },
  { q: "Do you offer free delivery?", a: "Yes! We offer free delivery on all orders above Rs.5,000. For orders below that, a delivery charge of Rs.150 applies." },
  { q: "What payment methods do you accept?", a: "We accept Cash on Delivery (COD), Khalti, eSewa, and Credit/Debit cards (Stripe). More payment options coming soon." },
  { q: "Can I return a product?", a: "Due to the nature of our products, returns are only accepted for damaged or defective items. Please contact us within 24 hours of delivery." },
  { q: "Are all products authentic?", a: "Yes, 100%! All our products are sourced from authorized distributors and carry official import documentation." },
  { q: "What are the weekend offers?", a: "Every Saturday and Sunday, we offer special discounts on selected products. The discount percentage and eligible products may vary each weekend." },
  { q: "Do you have a physical store?", a: "Yes, we have a physical showroom in Thamel, Kathmandu. You can visit us Monday to Saturday, 10AM to 8PM." },
  { q: "How do weekend offers work?", a: "Weekend offers automatically activate every Saturday and Sunday. Discounted prices are shown on eligible products. The countdown timer shows when the offer ends." },
  { q: "Can I track my order?", a: "Yes, once your order is confirmed, you can track its status from your account dashboard under 'My Orders'." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-white mb-4">Frequently Asked <span className="gold-text">Questions</span></h1>
            <p className="text-white/50">Everything you need to know about our services.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full bg-luxury-dark/50 border border-white/5 rounded-2xl p-5 text-left hover:border-gold/20 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium text-sm pr-4">{faq.q}</p>
                    <ChevronDown className={cn("w-5 h-5 text-gold flex-shrink-0 transition-transform", openIndex === i && "rotate-180")} />
                  </div>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/50 text-sm mt-3 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
