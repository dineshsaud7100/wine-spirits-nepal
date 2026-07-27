"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, MapPin, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn, formatPrice } from "@/lib/utils";
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
const mockOrders = [
    {
        id: "WSN-001234",
        date: "2024-12-20",
        items: 3,
        total: 12500,
        status: "delivered"
    },
    {
        id: "WSN-001230",
        date: "2024-12-15",
        items: 2,
        total: 8900,
        status: "shipped"
    },
    {
        id: "WSN-001225",
        date: "2024-12-10",
        items: 1,
        total: 5500,
        status: "pending"
    }
];
const statusColors = {
    pending: "text-yellow-400 bg-yellow-400/10",
    confirmed: "text-blue-400 bg-blue-400/10",
    shipped: "text-indigo-400 bg-indigo-400/10",
    delivered: "text-green-400 bg-green-400/10",
    cancelled: "text-red-400 bg-red-400/10"
};
export default function ProfileOrdersPage() {
    const pathname = usePathname();
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
                            children: "My Orders"
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
                                    className: "flex-1 space-y-4",
                                    children: mockOrders.map((order)=>/*#__PURE__*/ _jsxs("div", {
                                            className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-5 hover:border-gold/20 transition-all",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "text-white font-medium",
                                                                    children: order.id
                                                                }),
                                                                /*#__PURE__*/ _jsxs("p", {
                                                                    className: "text-white/40 text-sm",
                                                                    children: [
                                                                        order.date,
                                                                        " • ",
                                                                        order.items,
                                                                        " items"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: cn("px-3 py-1 rounded-full text-xs font-medium capitalize", statusColors[order.status]),
                                                            children: order.status
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "text-gold font-semibold",
                                                            children: formatPrice(order.total)
                                                        }),
                                                        /*#__PURE__*/ _jsxs(Link, {
                                                            href: `/profile/orders`,
                                                            className: "text-gold text-sm flex items-center gap-1 hover:text-gold-400",
                                                            children: [
                                                                "View Details ",
                                                                /*#__PURE__*/ _jsx(ChevronRight, {
                                                                    className: "w-3 h-3"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, order.id))
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
