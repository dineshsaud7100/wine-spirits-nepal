"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, MapPin, ShoppingBag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { useWishlistStore } from "@/store/wishlist";
import { products } from "@/data";
import ProductCard from "@/components/shop/ProductCard";
const tabs = [
    {
        label: "Profile",
        href: "/profile",
        icon: User
    },
    {
        label: "Orders",
        href: "/profile/orders",
        icon: Package
    },
    {
        label: "Wishlist",
        href: "/profile/wishlist",
        icon: Heart
    },
    {
        label: "Addresses",
        href: "/profile/addresses",
        icon: MapPin
    }
];
export default function WishlistPage() {
    const pathname = usePathname();
    const wishlistItems = useWishlistStore((s)=>s.items);
    const wishlistProducts = products.filter((p)=>wishlistItems.includes(p.id));
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen py-8",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsx("h1", {
                            className: "font-serif text-3xl font-bold text-white mb-8",
                            children: "My Wishlist"
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex flex-col lg:flex-row gap-8",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "lg:w-64 flex-shrink-0",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-4",
                                        children: /*#__PURE__*/ _jsx("nav", {
                                            className: "space-y-1",
                                            children: tabs.map((tab)=>/*#__PURE__*/ _jsxs(Link, {
                                                    href: tab.href,
                                                    className: cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname === tab.href ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5"),
                                                    children: [
                                                        /*#__PURE__*/ _jsx(tab.icon, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        tab.label
                                                    ]
                                                }, tab.href))
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "flex-1",
                                    children: wishlistProducts.length > 0 ? /*#__PURE__*/ _jsx("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                                        children: wishlistProducts.map((product, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                                product: product,
                                                index: i
                                            }, product.id))
                                    }) : /*#__PURE__*/ _jsxs("div", {
                                        className: "text-center py-20",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4",
                                                children: /*#__PURE__*/ _jsx(Heart, {
                                                    className: "w-10 h-10 text-white/20"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-white/50 mb-4",
                                                children: "Your wishlist is empty"
                                            }),
                                            /*#__PURE__*/ _jsxs(Link, {
                                                href: "/shop",
                                                className: "inline-flex items-center gap-2 px-6 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all",
                                                children: [
                                                    /*#__PURE__*/ _jsx(ShoppingBag, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    " Start Shopping"
                                                ]
                                            })
                                        ]
                                    })
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
