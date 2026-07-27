"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, ArrowLeft } from "lucide-react";
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
const orderData = {
    id: "WSN-001234",
    customer: {
        name: "Rajesh Sharma",
        email: "rajesh@email.com",
        phone: "9841234567"
    },
    shipping: {
        street: "Thamel",
        city: "Kathmandu",
        province: "Bagmati"
    },
    items: [
        {
            name: "Jack Daniel's Old No.7",
            qty: 2,
            price: 5500,
            total: 11000
        },
        {
            name: "Absolut Original",
            qty: 1,
            price: 3800,
            total: 3800
        }
    ],
    subtotal: 14800,
    discount: 0,
    delivery: 0,
    tax: 1924,
    total: 16724,
    payment: "cod",
    status: "shipped",
    date: "2024-12-20",
    statusHistory: [
        {
            status: "pending",
            date: "2024-12-20 10:00"
        },
        {
            status: "confirmed",
            date: "2024-12-20 11:30"
        },
        {
            status: "packed",
            date: "2024-12-20 14:00"
        },
        {
            status: "shipped",
            date: "2024-12-21 09:00"
        }
    ]
};
const statusColors = {
    pending: "text-yellow-400 bg-yellow-400/10",
    confirmed: "text-blue-400 bg-blue-400/10",
    packed: "text-purple-400 bg-purple-400/10",
    shipped: "text-indigo-400 bg-indigo-400/10",
    delivered: "text-green-400 bg-green-400/10",
    cancelled: "text-red-400 bg-red-400/10"
};
export default function OrderDetailPage({ params }) {
    const { id } = use(params);
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
                                        className: "flex items-center gap-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: "/admin/orders",
                                                className: "text-white/40 hover:text-white",
                                                children: /*#__PURE__*/ _jsx(ArrowLeft, {
                                                    className: "w-5 h-5"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsxs("h1", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: [
                                                            "Order ",
                                                            orderData.id
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("p", {
                                                        className: "text-white/50 text-sm",
                                                        children: [
                                                            "Placed on ",
                                                            orderData.date
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "grid lg:grid-cols-3 gap-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "lg:col-span-2 space-y-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h3", {
                                                                className: "text-white font-semibold mb-4",
                                                                children: "Order Items"
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "space-y-3",
                                                                children: orderData.items.map((item, i)=>/*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex items-center justify-between py-3 border-b border-white/5 last:border-0",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                        className: "text-white text-sm font-medium",
                                                                                        children: item.name
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                                        className: "text-white/40 text-xs",
                                                                                        children: [
                                                                                            "Qty: ",
                                                                                            item.qty,
                                                                                            " × ",
                                                                                            formatPrice(item.price)
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-white text-sm font-medium",
                                                                                children: formatPrice(item.total)
                                                                            })
                                                                        ]
                                                                    }, i))
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "border-t border-white/10 pt-4 mt-4 space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex justify-between text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-white/50",
                                                                                children: "Subtotal"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-white",
                                                                                children: formatPrice(orderData.subtotal)
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex justify-between text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-white/50",
                                                                                children: "Tax"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-white",
                                                                                children: formatPrice(orderData.tax)
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex justify-between text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-white/50",
                                                                                children: "Delivery"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-green-400",
                                                                                children: "Free"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex justify-between text-base font-semibold pt-2 border-t border-white/10",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-white",
                                                                                children: "Total"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-gold",
                                                                                children: formatPrice(orderData.total)
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h3", {
                                                                className: "text-white font-semibold mb-4",
                                                                children: "Status History"
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "space-y-3",
                                                                children: orderData.statusHistory.map((h, i)=>/*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: cn("w-3 h-3 rounded-full", i === orderData.statusHistory.length - 1 ? "bg-gold" : "bg-white/20")
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: cn("text-sm font-medium capitalize", statusColors[h.status]?.split(" ")[0]),
                                                                                        children: h.status
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                        className: "text-white/40 text-xs",
                                                                                        children: h.date
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }, i))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h3", {
                                                                className: "text-white font-semibold mb-4",
                                                                children: "Customer"
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "space-y-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "text-white",
                                                                        children: orderData.customer.name
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "text-white/50",
                                                                        children: orderData.customer.email
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "text-white/50",
                                                                        children: orderData.customer.phone
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h3", {
                                                                className: "text-white font-semibold mb-4",
                                                                children: "Shipping"
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "space-y-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "text-white/60",
                                                                        children: orderData.shipping.street
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                        className: "text-white/60",
                                                                        children: [
                                                                            orderData.shipping.city,
                                                                            ", ",
                                                                            orderData.shipping.province
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h3", {
                                                                className: "text-white font-semibold mb-4",
                                                                children: "Update Status"
                                                            }),
                                                            /*#__PURE__*/ _jsx("select", {
                                                                className: "w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold/50 appearance-none cursor-pointer mb-3",
                                                                children: [
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
                                                            }),
                                                            /*#__PURE__*/ _jsx("button", {
                                                                className: "w-full py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all",
                                                                children: "Update"
                                                            })
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
