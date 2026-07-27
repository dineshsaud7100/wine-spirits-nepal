"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, Search, Eye } from "lucide-react";
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
const mockOrders = [
    {
        id: "WSN-001234",
        customer: "Rajesh Sharma",
        email: "rajesh@email.com",
        phone: "9841234567",
        amount: 12500,
        items: 3,
        status: "delivered",
        date: "2024-12-20",
        payment: "cod"
    },
    {
        id: "WSN-001233",
        customer: "Anita Thapa",
        email: "anita@email.com",
        phone: "9851234567",
        amount: 5500,
        items: 1,
        status: "shipped",
        date: "2024-12-19",
        payment: "khalti"
    },
    {
        id: "WSN-001232",
        customer: "Suman Gurung",
        email: "suman@email.com",
        phone: "9861234567",
        amount: 8900,
        items: 2,
        status: "pending",
        date: "2024-12-19",
        payment: "cod"
    },
    {
        id: "WSN-001231",
        customer: "Priya Magar",
        email: "priya@email.com",
        phone: "9871234567",
        amount: 3200,
        items: 1,
        status: "confirmed",
        date: "2024-12-18",
        payment: "esewa"
    },
    {
        id: "WSN-001230",
        customer: "Bikash Rai",
        email: "bikash@email.com",
        phone: "9881234567",
        amount: 15000,
        items: 4,
        status: "delivered",
        date: "2024-12-18",
        payment: "stripe"
    },
    {
        id: "WSN-001229",
        customer: "Sita Karki",
        email: "sita@email.com",
        phone: "9891234567",
        amount: 6700,
        items: 2,
        status: "packed",
        date: "2024-12-17",
        payment: "cod"
    }
];
const statusColors = {
    pending: "text-yellow-400 bg-yellow-400/10",
    confirmed: "text-blue-400 bg-blue-400/10",
    packed: "text-purple-400 bg-purple-400/10",
    shipped: "text-indigo-400 bg-indigo-400/10",
    delivered: "text-green-400 bg-green-400/10",
    cancelled: "text-red-400 bg-red-400/10"
};
export default function AdminOrdersPage() {
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
                                                children: "Orders"
                                            }),
                                            /*#__PURE__*/ _jsxs("p", {
                                                className: "text-white/50 text-sm",
                                                children: [
                                                    mockOrders.length,
                                                    " orders total"
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
                                                        className: "w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50",
                                                        placeholder: "Search orders..."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("select", {
                                                className: "px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none appearance-none cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ _jsx("option", {
                                                        value: "all",
                                                        className: "bg-luxury-dark",
                                                        children: "All Status"
                                                    }),
                                                    [
                                                        "pending",
                                                        "confirmed",
                                                        "packed",
                                                        "shipped",
                                                        "delivered",
                                                        "cancelled"
                                                    ].map((s)=>/*#__PURE__*/ _jsx("option", {
                                                            value: s,
                                                            className: "bg-luxury-dark capitalize",
                                                            children: s
                                                        }, s))
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
                                                                    children: "Order"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden md:table-cell",
                                                                    children: "Customer"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden sm:table-cell",
                                                                    children: "Items"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4",
                                                                    children: "Amount"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4 hidden lg:table-cell",
                                                                    children: "Payment"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-left text-white/40 text-xs font-medium px-6 py-4",
                                                                    children: "Status"
                                                                }),
                                                                /*#__PURE__*/ _jsx("th", {
                                                                    className: "text-right text-white/40 text-xs font-medium px-6 py-4",
                                                                    children: "Actions"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("tbody", {
                                                        children: mockOrders.map((order)=>/*#__PURE__*/ _jsxs("tr", {
                                                                className: "border-b border-white/5 hover:bg-white/[0.02] transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("td", {
                                                                        className: "px-6 py-4",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-white text-sm font-medium",
                                                                                children: order.id
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-white/40 text-xs",
                                                                                children: order.date
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("td", {
                                                                        className: "px-6 py-4 hidden md:table-cell",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-white/60 text-sm",
                                                                                children: order.customer
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-white/40 text-xs",
                                                                                children: order.email
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4 hidden sm:table-cell",
                                                                        children: /*#__PURE__*/ _jsxs("span", {
                                                                            className: "text-white/60 text-sm",
                                                                            children: [
                                                                                order.items,
                                                                                " items"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4",
                                                                        children: /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-white text-sm font-medium",
                                                                            children: formatPrice(order.amount)
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4 hidden lg:table-cell",
                                                                        children: /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-white/60 text-sm uppercase",
                                                                            children: order.payment
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4",
                                                                        children: /*#__PURE__*/ _jsx("span", {
                                                                            className: cn("px-2 py-1 rounded-full text-xs font-medium capitalize", statusColors[order.status]),
                                                                            children: order.status
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("td", {
                                                                        className: "px-6 py-4",
                                                                        children: /*#__PURE__*/ _jsx("div", {
                                                                            className: "flex items-center justify-end gap-2",
                                                                            children: /*#__PURE__*/ _jsx(Link, {
                                                                                href: `/admin/orders/${order.id}`,
                                                                                className: "w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:bg-gold/10 transition-all",
                                                                                children: /*#__PURE__*/ _jsx(Eye, {
                                                                                    className: "w-4 h-4"
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }, order.id))
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
