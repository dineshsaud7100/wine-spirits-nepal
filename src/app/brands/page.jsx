"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { brands } from "@/data";
import { Wine } from "lucide-react";
export default function BrandsPage() {
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
                                /*#__PURE__*/ _jsxs("h1", {
                                    className: "font-serif text-4xl font-bold text-white mb-4",
                                    children: [
                                        "Our ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Brands"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50",
                                    children: "World-renowned brands available in Nepal."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: brands.map((brand, i)=>/*#__PURE__*/ _jsx(motion.div, {
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
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: `/brands/${brand.slug}`,
                                        className: "block group",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-gold/20 transition-colors",
                                                        children: /*#__PURE__*/ _jsx(Wine, {
                                                            className: "w-8 h-8 text-gold/40"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h3", {
                                                                className: "text-white text-lg font-semibold group-hover:text-gold transition-colors",
                                                                children: brand.name
                                                            }),
                                                            /*#__PURE__*/ _jsxs("p", {
                                                                className: "text-white/40 text-sm",
                                                                children: [
                                                                    brand.country,
                                                                    " • ",
                                                                    brand.productCount,
                                                                    " products"
                                                                ]
                                                            }),
                                                            brand.description && /*#__PURE__*/ _jsx("p", {
                                                                className: "text-white/30 text-xs mt-1",
                                                                children: brand.description
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }, brand.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
