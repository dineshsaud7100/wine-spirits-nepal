"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { use } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, ArrowLeft, Trash2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { brands } from "@/data";
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
export default function AdminBrandDetailPage({ params }) {
    const { slug } = use(params);
    const pathname = usePathname();
    const router = useRouter();
    const brand = brands.find((b)=>b.slug === slug);
    const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";
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
                                                    className: cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname.startsWith(link.href) ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5"),
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
                                        className: "flex items-center gap-3 mb-8",
                                        children: [
                                            /*#__PURE__*/ _jsx("button", {
                                                onClick: ()=>router.back(),
                                                className: "text-white/40 hover:text-white",
                                                children: /*#__PURE__*/ _jsx(ArrowLeft, {
                                                    className: "w-5 h-5"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("h1", {
                                                className: "text-2xl font-bold text-white",
                                                children: brand ? `Edit: ${brand.name}` : "Brand Not Found"
                                            })
                                        ]
                                    }),
                                    brand && /*#__PURE__*/ _jsxs("form", {
                                        onSubmit: (e)=>{
                                            e.preventDefault();
                                            router.push("/admin/products");
                                        },
                                        className: "space-y-6 max-w-2xl",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-4",
                                                        children: "Brand Details"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Name"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        defaultValue: brand.name,
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Country"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        defaultValue: brand.country,
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Description"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("textarea", {
                                                                        defaultValue: brand.description,
                                                                        className: inputClass + " min-h-[80px]"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ _jsx("button", {
                                                        type: "submit",
                                                        className: "px-6 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all",
                                                        children: "Save Changes"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("button", {
                                                        type: "button",
                                                        className: "px-6 py-2.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl font-medium text-sm hover:bg-red-500/20 transition-all flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(Trash2, {
                                                                className: "w-4 h-4"
                                                            }),
                                                            " Delete"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
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
