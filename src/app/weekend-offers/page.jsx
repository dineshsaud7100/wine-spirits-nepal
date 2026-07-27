"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data";
import { useWeekendOffer } from "@/hooks";
import { motion } from "framer-motion";
import { Sparkles, Clock } from "lucide-react";
export default function WeekendOffersPage() {
    const { isWeekend, timeUntilEnd } = useWeekendOffer();
    const offerProducts = products.filter((p)=>p.weekendOfferEnabled);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen py-8",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
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
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4",
                                    children: [
                                        /*#__PURE__*/ _jsx(Sparkles, {
                                            className: "w-4 h-4"
                                        }),
                                        " Weekend Mega Sale"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("h1", {
                                    className: "font-serif text-4xl sm:text-5xl font-bold text-white mb-4",
                                    children: [
                                        "Weekend ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Special Offers"
                                        })
                                    ]
                                }),
                                isWeekend ? /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center justify-center gap-2 text-gold",
                                    children: [
                                        /*#__PURE__*/ _jsx(Clock, {
                                            className: "w-4 h-4"
                                        }),
                                        /*#__PURE__*/ _jsxs("p", {
                                            className: "font-medium",
                                            children: [
                                                "Offers end in: ",
                                                timeUntilEnd
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50",
                                    children: "Weekend offers start every Saturday. Check back soon for amazing deals!"
                                })
                            ]
                        }),
                        isWeekend && /*#__PURE__*/ _jsxs("div", {
                            className: "bg-gradient-to-r from-burgundy via-burgundy-600 to-burgundy rounded-3xl p-8 mb-12 text-center relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "absolute inset-0 opacity-20",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl"
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ _jsx("h2", {
                                            className: "font-serif text-2xl sm:text-3xl font-bold text-white mb-2",
                                            children: "Save Up to 15% This Weekend!"
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "text-white/70",
                                            children: "Limited time offers on premium spirits and wines."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: offerProducts.map((product, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                    product: product,
                                    index: i
                                }, product.id))
                        }),
                        !isWeekend && /*#__PURE__*/ _jsxs("div", {
                            className: "text-center mt-12 bg-luxury-dark/50 border border-white/5 rounded-2xl p-8",
                            children: [
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/40 text-lg mb-2",
                                    children: "Offers are not active right now."
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-gold font-medium",
                                    children: "Next sale starts this Saturday!"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
