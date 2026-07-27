"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Home, ArrowLeft } from "lucide-react";
export default function NotFoundPage() {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen flex items-center justify-center py-20",
                children: /*#__PURE__*/ _jsxs(motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "text-center max-w-md mx-4",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            className: "gold-text font-serif text-8xl font-bold mb-4",
                            children: "404"
                        }),
                        /*#__PURE__*/ _jsx("h1", {
                            className: "text-2xl font-bold text-white mb-2",
                            children: "Page Not Found"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "text-white/50 mb-8",
                            children: "The page you're looking for doesn't exist or has been moved."
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex gap-3 justify-center",
                            children: [
                                /*#__PURE__*/ _jsxs(Link, {
                                    href: "/",
                                    className: "inline-flex items-center gap-2 px-6 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all",
                                    children: [
                                        /*#__PURE__*/ _jsx(Home, {
                                            className: "w-4 h-4"
                                        }),
                                        " Go Home"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("button", {
                                    onClick: ()=>window.history.back(),
                                    className: "inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all",
                                    children: [
                                        /*#__PURE__*/ _jsx(ArrowLeft, {
                                            className: "w-4 h-4"
                                        }),
                                        " Go Back"
                                    ]
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
