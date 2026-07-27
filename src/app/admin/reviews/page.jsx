"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, Check, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { reviews } from "@/data";
const sidebarLinks = [
    {
        label: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard
    },
    {
        label: "Products",
        href: "/admin/products",
        icon: Package
    },
    {
        label: "Orders",
        href: "/admin/orders",
        icon: ShoppingCart
    },
    {
        label: "Customers",
        href: "/admin/customers",
        icon: Users
    },
    {
        label: "Categories",
        href: "/admin/categories",
        icon: FolderTree
    },
    {
        label: "Reviews",
        href: "/admin/reviews",
        icon: Star
    },
    {
        label: "Settings",
        href: "/admin/settings",
        icon: Settings
    }
];
export default function AdminReviewsPage() {
    const pathname = usePathname();
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen py-8",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "flex flex-col lg:flex-row gap-8",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "lg:w-64 flex-shrink-0",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-4 sticky top-24",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center gap-3 px-3 py-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center",
                                                    children: /*#__PURE__*/ _jsx(Wine, {
                                                        className: "w-5 h-5 text-gold"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white text-sm font-medium",
                                                            children: "Admin Panel"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white/40 text-xs",
                                                            children: "Wine & Spirits Nepal"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("nav", {
                                            className: "space-y-1",
                                            children: sidebarLinks.map((link)=>/*#__PURE__*/ _jsxs(Link, {
                                                    href: link.href,
                                                    className: cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname === link.href ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5"),
                                                    children: [
                                                        /*#__PURE__*/ _jsx(link.icon, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        link.label
                                                    ]
                                                }, link.href))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ _jsx("h1", {
                                                className: "text-2xl font-bold text-white",
                                                children: "Reviews"
                                            }),
                                            /*#__PURE__*/ _jsxs("p", {
                                                className: "text-white/50 text-sm",
                                                children: [
                                                    reviews.length,
                                                    " reviews total"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "space-y-4",
                                        children: reviews.map((review)=>/*#__PURE__*/ _jsxs("div", {
                                                className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-5",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-start justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold",
                                                                        children: review.userName.charAt(0)
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-white text-sm font-medium",
                                                                                children: review.userName
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    1,
                                                                                    2,
                                                                                    3,
                                                                                    4,
                                                                                    5
                                                                                ].map((s)=>/*#__PURE__*/ _jsx(Star, {
                                                                                        className: cn("w-3 h-3", s <= review.rating ? "text-gold fill-gold" : "text-white/20")
                                                                                    }, s))
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("button", {
                                                                        className: "w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-all",
                                                                        title: "Approve",
                                                                        children: /*#__PURE__*/ _jsx(Check, {
                                                                            className: "w-4 h-4"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("button", {
                                                                        className: "w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-all",
                                                                        title: "Delete",
                                                                        children: /*#__PURE__*/ _jsx(X, {
                                                                            className: "w-4 h-4"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "text-white text-sm font-medium mb-1",
                                                        children: review.title
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white/50 text-sm mb-2",
                                                        children: review.comment
                                                    }),
                                                    /*#__PURE__*/ _jsxs("p", {
                                                        className: "text-white/30 text-xs",
                                                        children: [
                                                            review.createdAt,
                                                            " • Product ID: ",
                                                            review.productId
                                                        ]
                                                    })
                                                ]
                                            }, review.id))
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
