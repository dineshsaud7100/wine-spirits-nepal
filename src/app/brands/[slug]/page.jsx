"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { use } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products, brands } from "@/data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
export default function BrandDetailPage({ params }) {
    const { slug } = use(params);
    const brand = brands.find((b)=>b.slug === slug);
    const brandProducts = products.filter((p)=>p.brand.toLowerCase().replace(/[' ]/g, "-") === slug);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen py-8",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs("nav", {
                            className: "flex items-center gap-2 text-sm text-white/40 mb-8",
                            children: [
                                /*#__PURE__*/ _jsx(Link, {
                                    href: "/",
                                    className: "hover:text-white",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ _jsx(ChevronRight, {
                                    className: "w-3 h-3"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    href: "/brands",
                                    className: "hover:text-white",
                                    children: "Brands"
                                }),
                                /*#__PURE__*/ _jsx(ChevronRight, {
                                    className: "w-3 h-3"
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    className: "text-white/70",
                                    children: brand?.name || slug
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("h1", {
                            className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-2",
                            children: brand?.name || slug
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "text-white/50 mb-8",
                            children: [
                                brand?.description,
                                " • ",
                                brand?.country,
                                " • ",
                                brandProducts.length,
                                " products"
                            ]
                        }),
                        brandProducts.length > 0 ? /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: brandProducts.map((product, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                    product: product,
                                    index: i
                                }, product.id))
                        }) : /*#__PURE__*/ _jsx("div", {
                            className: "text-center py-20",
                            children: /*#__PURE__*/ _jsx("p", {
                                className: "text-white/40 text-lg",
                                children: "No products from this brand yet."
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
