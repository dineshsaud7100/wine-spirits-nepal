"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
export default function BestSellersPage() {
    const bestSellers = products.filter((p)=>p.isBestSeller);
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
                                        /*#__PURE__*/ _jsx(TrendingUp, {
                                            className: "w-4 h-4"
                                        }),
                                        " Most Popular"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("h1", {
                                    className: "font-serif text-4xl sm:text-5xl font-bold text-white mb-4",
                                    children: [
                                        "Best ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Sellers"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50",
                                    children: "Our most loved products by customers across Nepal."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: bestSellers.map((product, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                    product: product,
                                    index: i
                                }, product.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
