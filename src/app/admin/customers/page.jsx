"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, Search, Mail, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn, formatPrice } from "@/lib/utils";
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
const mockCustomers = [
    {
        id: "1",
        name: "Rajesh Sharma",
        email: "rajesh@email.com",
        phone: "9841234567",
        orders: 12,
        spent: 85000,
        joined: "2024-01-15"
    },
    {
        id: "2",
        name: "Anita Thapa",
        email: "anita@email.com",
        phone: "9851234567",
        orders: 8,
        spent: 45000,
        joined: "2024-03-20"
    },
    {
        id: "3",
        name: "Suman Gurung",
        email: "suman@email.com",
        phone: "9861234567",
        orders: 15,
        spent: 120000,
        joined: "2024-02-10"
    },
    {
        id: "4",
        name: "Priya Magar",
        email: "priya@email.com",
        phone: "9871234567",
        orders: 5,
        spent: 28000,
        joined: "2024-06-05"
    },
    {
        id: "5",
        name: "Bikash Rai",
        email: "bikash@email.com",
        phone: "9881234567",
        orders: 20,
        spent: 165000,
        joined: "2024-01-01"
    }
];
export default function AdminCustomersPage() {
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
                                                children: "Customers"
                                            }),
                                            /*#__PURE__*/ _jsxs("p", {
                                                className: "text-white/50 text-sm",
                                                children: [
                                                    mockCustomers.length,
                                                    " customers total"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "relative mb-6",
                                        children: [
                                            /*#__PURE__*/ _jsx(Search, {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                                            }),
                                            /*#__PURE__*/ _jsx("input", {
                                                type: "text",
                                                className: "w-full max-w-md pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50",
                                                placeholder: "Search customers..."
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
                                                                    children: "Customer"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden md:table-cell",
                                                                    children: "Contact"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden sm:table-cell",
                                                                    children: "Orders"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden lg:table-cell",
                                                                    children: "Total Spent"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden lg:table-cell",
                                                                    children: "Joined"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("tbody", {
                                                        children: mockCustomers.map((c)=>/*#__PURE__*/ _jsxs("tr", {
                                                                className: "border-b border-white/5 hover:bg-white/[0.02] transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4",
                                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold",
                                                                                    children: c.name.charAt(0)
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-white text-sm font-medium",
                                                                                            children: c.name
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-white/40 text-xs",
                                                                                            children: [
                                                                                                "ID: ",
                                                                                                c.id
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("td", {
                                                                        className: "px-6 py-4 hidden md:table-cell",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("p", {
                                                                                className: "text-white/60 text-sm flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx(Mail, {
                                                                                        className: "w-3 h-3"
                                                                                    }),
                                                                                    " ",
                                                                                    c.email
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("p", {
                                                                                className: "text-white/40 text-xs flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx(Phone, {
                                                                                        className: "w-3 h-3"
                                                                                    }),
                                                                                    " ",
                                                                                    c.phone
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4 hidden sm:table-cell",
                                                                        children: /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-white text-sm",
                                                                            children: c.orders
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4 hidden lg:table-cell",
                                                                        children: /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-gold text-sm font-medium",
                                                                            children: formatPrice(c.spent)
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4 hidden lg:table-cell",
                                                                        children: /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-white/40 text-sm",
                                                                            children: c.joined
                                                                        })
                                                                    })
                                                                ]
                                                            }, c.id))
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
