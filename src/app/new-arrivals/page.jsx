"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
export default function NewArrivalsPage() {
    const newArrivals = products.filter((p)=>p.isNewArrival);
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
                                    className: "inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4",
                                    children: [
                                        /*#__PURE__*/ _jsx(Sparkles, {
                                            className: "w-4 h-4"
                                        }),
                                        " Just Arrived"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("h1", {
                                    className: "font-serif text-4xl sm:text-5xl font-bold text-white mb-4",
                                    children: [
                                        "New ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Arrivals"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50",
                                    children: "Fresh additions to our curated collection."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: newArrivals.map((product, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                    product: product,
                                    index: i
                                }, product.id))
                        }),
                        newArrivals.length === 0 && /*#__PURE__*/ _jsx("div", {
                            className: "text-center py-20",
                            children: /*#__PURE__*/ _jsx("p", {
                                className: "text-white/40 text-lg",
                                children: "No new arrivals at the moment. Check back soon!"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
