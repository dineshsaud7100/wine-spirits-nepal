"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, DollarSign, ShoppingBag, UserCheck, Wine, ArrowUpRight, ArrowDownRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { formatPrice, cn } from "@/lib/utils";
const stats = [
    {
        label: "Total Revenue",
        value: "Rs.1,245,600",
        change: "+12.5%",
        up: true,
        icon: DollarSign
    },
    {
        label: "Total Orders",
        value: "342",
        change: "+8.2%",
        up: true,
        icon: ShoppingBag
    },
    {
        label: "Total Customers",
        value: "1,847",
        change: "+15.3%",
        up: true,
        icon: UserCheck
    },
    {
        label: "Products",
        value: "124",
        change: "+3",
        up: true,
        icon: Package
    }
];
const recentOrders = [
    {
        id: "WSN-001234",
        customer: "Rajesh Sharma",
        amount: 12500,
        status: "delivered",
        date: "2024-12-20"
    },
    {
        id: "WSN-001233",
        customer: "Anita Thapa",
        amount: 5500,
        status: "shipped",
        date: "2024-12-19"
    },
    {
        id: "WSN-001232",
        customer: "Suman Gurung",
        amount: 8900,
        status: "pending",
        date: "2024-12-19"
    },
    {
        id: "WSN-001231",
        customer: "Priya Magar",
        amount: 3200,
        status: "confirmed",
        date: "2024-12-18"
    },
    {
        id: "WSN-001230",
        customer: "Bikash Rai",
        amount: 15000,
        status: "delivered",
        date: "2024-12-18"
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
export default function AdminDashboard() {
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
                                                children: "Dashboard"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-white/50 text-sm",
                                                children: "Welcome back! Here's what's happening."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
                                        children: stats.map((stat, i)=>/*#__PURE__*/ _jsxs(motion.div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    delay: i * 0.1
                                                },
                                                className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-5 hover:border-gold/20 transition-all",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center",
                                                                children: /*#__PURE__*/ _jsx(stat.icon, {
                                                                    className: "w-5 h-5 text-gold"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsxs("span", {
                                                                className: cn("flex items-center gap-0.5 text-xs font-medium", stat.up ? "text-green-400" : "text-red-400"),
                                                                children: [
                                                                    stat.up ? /*#__PURE__*/ _jsx(ArrowUpRight, {
                                                                        className: "w-3 h-3"
                                                                    }) : /*#__PURE__*/ _jsx(ArrowDownRight, {
                                                                        className: "w-3 h-3"
                                                                    }),
                                                                    stat.change
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white/40 text-xs",
                                                        children: stat.label
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white text-xl font-bold mt-1",
                                                        children: stat.value
                                                    })
                                                ]
                                            }, stat.label))
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 mb-8",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between mb-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold",
                                                        children: "Revenue Overview"
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            "Week",
                                                            "Month",
                                                            "Year"
                                                        ].map((period)=>/*#__PURE__*/ _jsx("button", {
                                                                className: "px-3 py-1 text-xs text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all",
                                                                children: period
                                                            }, period))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "h-64 flex items-end gap-2",
                                                children: [
                                                    40,
                                                    65,
                                                    45,
                                                    80,
                                                    55,
                                                    70,
                                                    90,
                                                    60,
                                                    75,
                                                    85,
                                                    50,
                                                    95
                                                ].map((h, i)=>/*#__PURE__*/ _jsxs("div", {
                                                        className: "flex-1 flex flex-col items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "w-full rounded-t-lg bg-gradient-to-t from-gold/20 to-gold/40 hover:from-gold/30 hover:to-gold/50 transition-all cursor-pointer",
                                                                style: {
                                                                    height: `${h}%`
                                                                }
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-white/30 text-[10px]",
                                                                children: [
                                                                    "Jan",
                                                                    "Feb",
                                                                    "Mar",
                                                                    "Apr",
                                                                    "May",
                                                                    "Jun",
                                                                    "Jul",
                                                                    "Aug",
                                                                    "Sep",
                                                                    "Oct",
                                                                    "Nov",
                                                                    "Dec"
                                                                ][i]
                                                            })
                                                        ]
                                                    }, i))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between mb-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold",
                                                        children: "Recent Orders"
                                                    }),
                                                    /*#__PURE__*/ _jsxs(Link, {
                                                        href: "/admin/orders",
                                                        className: "text-gold text-sm hover:text-gold-400 flex items-center gap-1",
                                                        children: [
                                                            "View All ",
                                                            /*#__PURE__*/ _jsx(ChevronRight, {
                                                                className: "w-3 h-3"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "overflow-x-auto",
                                                children: /*#__PURE__*/ _jsxs("table", {
                                                    className: "w-full",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("thead", {
                                                            children: /*#__PURE__*/ _jsxs("tr", {
                                                                className: "border-b border-white/5",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("th", {
                                                                        className: "text-left text-white/40 text-xs font-medium pb-3",
                                                                        children: "Order"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("th", {
                                                                        className: "text-left text-white/40 text-xs font-medium pb-3",
                                                                        children: "Customer"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("th", {
                                                                        className: "text-left text-white/40 text-xs font-medium pb-3",
                                                                        children: "Amount"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("th", {
                                                                        className: "text-left text-white/40 text-xs font-medium pb-3",
                                                                        children: "Status"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("th", {
                                                                        className: "text-left text-white/40 text-xs font-medium pb-3",
                                                                        children: "Date"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("tbody", {
                                                            children: recentOrders.map((order)=>/*#__PURE__*/ _jsxs("tr", {
                                                                    className: "border-b border-white/5 hover:bg-white/[0.02]",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("td", {
                                                                            className: "py-3 text-white text-sm font-medium",
                                                                            children: order.id
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("td", {
                                                                            className: "py-3 text-white/60 text-sm",
                                                                            children: order.customer
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("td", {
                                                                            className: "py-3 text-white text-sm",
                                                                            children: formatPrice(order.amount)
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("td", {
                                                                            className: "py-3",
                                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                                className: cn("px-2 py-1 rounded-full text-xs font-medium capitalize", statusColors[order.status]),
                                                                                children: order.status
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("td", {
                                                                            className: "py-3 text-white/40 text-sm",
                                                                            children: order.date
                                                                        })
                                                                    ]
                                                                }, order.id))
                                                        })
                                                    ]
                                                })
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
