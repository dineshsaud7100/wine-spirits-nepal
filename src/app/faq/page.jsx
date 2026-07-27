"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
const faqs = [
    {
        q: "What is the minimum age to purchase alcohol?",
        a: "You must be at least 18 years of age to purchase alcohol in Nepal. We verify age at the time of delivery."
    },
    {
        q: "How long does delivery take?",
        a: "We deliver within 24-48 hours in Kathmandu Valley. For outside the valley, delivery may take 2-5 business days."
    },
    {
        q: "Do you offer free delivery?",
        a: "Yes! We offer free delivery on all orders above Rs.5,000. For orders below that, a delivery charge of Rs.150 applies."
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept Cash on Delivery (COD), Khalti, eSewa, and Credit/Debit cards (Stripe). More payment options coming soon."
    },
    {
        q: "Can I return a product?",
        a: "Due to the nature of our products, returns are only accepted for damaged or defective items. Please contact us within 24 hours of delivery."
    },
    {
        q: "Are all products authentic?",
        a: "Yes, 100%! All our products are sourced from authorized distributors and carry official import documentation."
    },
    {
        q: "What are the weekend offers?",
        a: "Every Saturday and Sunday, we offer special discounts on selected products. The discount percentage and eligible products may vary each weekend."
    },
    {
        q: "Do you have a physical store?",
        a: "Yes, we have a physical showroom in Thamel, Kathmandu. You can visit us Monday to Saturday, 10AM to 8PM."
    },
    {
        q: "How do weekend offers work?",
        a: "Weekend offers automatically activate every Saturday and Sunday. Discounted prices are shown on eligible products. The countdown timer shows when the offer ends."
    },
    {
        q: "Can I track my order?",
        a: "Yes, once your order is confirmed, you can track its status from your account dashboard under 'My Orders'."
    }
];
export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen py-20",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs(motion.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxs("h1", {
                                    className: "font-serif text-4xl font-bold text-white mb-4",
                                    children: [
                                        "Frequently Asked ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Questions"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50",
                                    children: "Everything you need to know about our services."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "space-y-3",
                            children: faqs.map((faq, i)=>/*#__PURE__*/ _jsx(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: i * 0.05
                                    },
                                    children: /*#__PURE__*/ _jsxs("button", {
                                        onClick: ()=>setOpenIndex(openIndex === i ? null : i),
                                        className: "w-full bg-luxury-dark/50 border border-white/5 rounded-2xl p-5 text-left hover:border-gold/20 transition-all",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white font-medium text-sm pr-4",
                                                        children: faq.q
                                                    }),
                                                    /*#__PURE__*/ _jsx(ChevronDown, {
                                                        className: cn("w-5 h-5 text-gold flex-shrink-0 transition-transform", openIndex === i && "rotate-180")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(AnimatePresence, {
                                                children: openIndex === i && /*#__PURE__*/ _jsx(motion.div, {
                                                    initial: {
                                                        height: 0,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        height: "auto",
                                                        opacity: 1
                                                    },
                                                    exit: {
                                                        height: 0,
                                                        opacity: 0
                                                    },
                                                    className: "overflow-hidden",
                                                    children: /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white/50 text-sm mt-3 leading-relaxed",
                                                        children: faq.a
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }, i))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
