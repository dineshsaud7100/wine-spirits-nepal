"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, MapPin, LogOut, Edit } from "lucide-react";
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
export default function ProfilePage() {
    const pathname = usePathname();
    const [form, setForm] = useState({
        name: "Guest User",
        email: "guest@example.com",
        phone: "98XXXXXXXX"
    });
    const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";
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
                            children: "My Account"
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex flex-col lg:flex-row gap-8",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "lg:w-64 flex-shrink-0",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-4",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "text-center mb-4 pb-4 border-b border-white/10",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3",
                                                        children: /*#__PURE__*/ _jsx(User, {
                                                            className: "w-8 h-8 text-gold"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white font-medium",
                                                        children: form.name
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white/40 text-sm",
                                                        children: form.email
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("nav", {
                                                className: "space-y-1",
                                                children: [
                                                    tabs.map((tab)=>/*#__PURE__*/ _jsxs(Link, {
                                                            href: tab.href,
                                                            className: cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname === tab.href ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5"),
                                                            children: [
                                                                /*#__PURE__*/ _jsx(tab.icon, {
                                                                    className: "w-4 h-4"
                                                                }),
                                                                tab.label
                                                            ]
                                                        }, tab.href)),
                                                    /*#__PURE__*/ _jsxs("button", {
                                                        className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400/70 hover:text-red-400 hover:bg-red-400/5 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(LogOut, {
                                                                className: "w-4 h-4"
                                                            }),
                                                            " Logout"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between mb-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h2", {
                                                        className: "text-white font-semibold text-lg",
                                                        children: "Personal Information"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("button", {
                                                        className: "inline-flex items-center gap-1 text-gold text-sm hover:text-gold-400",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(Edit, {
                                                                className: "w-4 h-4"
                                                            }),
                                                            " Edit"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "grid sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("label", {
                                                                className: "text-white/60 text-sm mb-1.5 block",
                                                                children: "Full Name"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                value: form.name,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        name: e.target.value
                                                                    }),
                                                                className: inputClass
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("label", {
                                                                className: "text-white/60 text-sm mb-1.5 block",
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                value: form.email,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        email: e.target.value
                                                                    }),
                                                                className: inputClass
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("label", {
                                                                className: "text-white/60 text-sm mb-1.5 block",
                                                                children: "Phone"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                value: form.phone,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        phone: e.target.value
                                                                    }),
                                                                className: inputClass
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("button", {
                                                className: "mt-6 px-6 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all",
                                                children: "Save Changes"
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
