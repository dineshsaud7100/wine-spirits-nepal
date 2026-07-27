"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, MapPin, Plus, Edit, Trash2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
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
const mockAddresses = [
    {
        id: "1",
        fullName: "Guest User",
        phone: "9841234567",
        street: "Thamel, Kathmandu",
        city: "Kathmandu",
        province: "Bagmati",
        isDefault: true
    }
];
export default function ProfileAddressesPage() {
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
                            children: "My Addresses"
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
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ _jsxs("button", {
                                            className: "inline-flex items-center gap-2 px-4 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm mb-6 hover:bg-gold-400 transition-all",
                                            children: [
                                                /*#__PURE__*/ _jsx(Plus, {
                                                    className: "w-4 h-4"
                                                }),
                                                " Add New Address"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "space-y-4",
                                            children: mockAddresses.map((addr)=>/*#__PURE__*/ _jsx("div", {
                                                    className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-5",
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-start justify-between",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex items-center gap-2 mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-white font-medium",
                                                                                children: addr.fullName
                                                                            }),
                                                                            addr.isDefault && /*#__PURE__*/ _jsx("span", {
                                                                                className: "px-2 py-0.5 bg-gold/10 text-gold text-xs rounded-full",
                                                                                children: "Default"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "text-white/60 text-sm",
                                                                        children: addr.street
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                        className: "text-white/60 text-sm",
                                                                        children: [
                                                                            addr.city,
                                                                            ", ",
                                                                            addr.province
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                        className: "text-white/40 text-sm mt-1",
                                                                        children: [
                                                                            "Phone: ",
                                                                            addr.phone
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("button", {
                                                                        className: "w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:bg-gold/10 transition-all",
                                                                        children: /*#__PURE__*/ _jsx(Edit, {
                                                                            className: "w-4 h-4"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("button", {
                                                                        className: "w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-400/10 transition-all",
                                                                        children: /*#__PURE__*/ _jsx(Trash2, {
                                                                            className: "w-4 h-4"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, addr.id))
                                        })
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
