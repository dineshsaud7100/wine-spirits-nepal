"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Plus, Search, Edit, Trash2, Wine, Eye } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products, categories } from "@/data";
import { formatPrice, cn } from "@/lib/utils";
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
export default function AdminProductsPage() {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const filteredProducts = products.filter((p)=>{
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || p.categorySlug === selectedCategory;
        return matchesSearch && matchesCategory;
    });
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
                                        className: "flex items-center justify-between mb-8",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("h1", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Products"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("p", {
                                                        className: "text-white/50 text-sm",
                                                        children: [
                                                            filteredProducts.length,
                                                            " products total"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(Link, {
                                                href: "/admin/products/new",
                                                className: "inline-flex items-center gap-2 px-4 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Plus, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    " Add Product"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex flex-wrap gap-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "relative flex-1 min-w-[200px]",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Search, {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                                                    }),
                                                    /*#__PURE__*/ _jsx("input", {
                                                        type: "text",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        className: "w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50",
                                                        placeholder: "Search products..."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("select", {
                                                value: selectedCategory,
                                                onChange: (e)=>setSelectedCategory(e.target.value),
                                                className: "px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold/50 cursor-pointer appearance-none",
                                                children: [
                                                    /*#__PURE__*/ _jsx("option", {
                                                        value: "all",
                                                        className: "bg-luxury-dark",
                                                        children: "All Categories"
                                                    }),
                                                    categories.map((c)=>/*#__PURE__*/ _jsx("option", {
                                                            value: c.slug,
                                                            className: "bg-luxury-dark",
                                                            children: c.name
                                                        }, c.slug))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl overflow-hidden",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ _jsxs("table", {
                                                className: "w-full",
                                                children: [
                                                    /*#__PURE__*/ _jsx("thead", {
                                                        children: /*#__PURE__*/ _jsxs("tr", {
                                                            className: "border-b border-white/5 bg-white/[0.02]",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4",
                                                                    children: "Product"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden sm:table-cell",
                                                                    children: "Category"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4",
                                                                    children: "Price"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden md:table-cell",
                                                                    children: "Stock"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden lg:table-cell",
                                                                    children: "Rating"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-right text-white/40 text-xs font-medium px-6 py-4",
                                                                    children: "Actions"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("tbody", {
                                                        children: filteredProducts.map((product)=>/*#__PURE__*/ _jsxs("tr", {
                                                                className: "border-b border-white/5 hover:bg-white/[0.02] transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4",
                                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0",
                                                                                    children: /*#__PURE__*/ _jsx(Package, {
                                                                                        className: "w-5 h-5 text-gold/30"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-white text-sm font-medium",
                                                                                            children: product.name
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-white/40 text-xs",
                                                                                            children: [
                                                                                                product.brand,
                                                                                                " • ",
                                                                                                product.sku
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4 hidden sm:table-cell",
                                                                        children: /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-white/60 text-sm",
                                                                            children: product.category
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4",
                                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "text-white text-sm font-medium",
                                                                                    children: formatPrice(product.mrp)
                                                                                }),
                                                                                product.offerPrice && /*#__PURE__*/ _jsx("p", {
                                                                                    className: "text-green-400 text-xs",
                                                                                    children: formatPrice(product.offerPrice)
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4 hidden md:table-cell",
                                                                        children: /*#__PURE__*/ _jsx("span", {
                                                                            className: cn("text-sm font-medium", product.stock > 10 ? "text-green-400" : product.stock > 0 ? "text-yellow-400" : "text-red-400"),
                                                                            children: product.stock
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4 hidden lg:table-cell",
                                                                        children: /*#__PURE__*/ _jsxs("span", {
                                                                            className: "text-gold text-sm",
                                                                            children: [
                                                                                product.rating,
                                                                                " ★"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4",
                                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-center justify-end gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Link, {
                                                                                    href: `/product/${product.slug}`,
                                                                                    className: "w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all",
                                                                                    children: /*#__PURE__*/ _jsx(Eye, {
                                                                                        className: "w-4 h-4"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsx(Link, {
                                                                                    href: `/admin/products/${product.id}`,
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
                                                                    })
                                                                ]
                                                            }, product.id))
                                                    })
                                                ]
                                            })
                                        })
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
