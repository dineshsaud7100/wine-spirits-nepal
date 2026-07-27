"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Heart, User, Menu, X, Wine, ChevronDown, Package, Settings, UserCircle } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useScrollPosition } from "@/hooks";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/site";
import { usePathname, useRouter } from "next/navigation";
import { products } from "@/data";
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [announcementOpen, setAnnouncementOpen] = useState(true);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const scrollY = useScrollPosition();
    const pathname = usePathname();
    const router = useRouter();
    const cartItems = useCartStore((s)=>s.items);
    const wishlistItems = useWishlistStore((s)=>s.items);
    const cartCount = cartItems.filter((i)=>!i.savedForLater).reduce((sum, i)=>sum + i.quantity, 0);
    const searchResults = searchQuery.length > 1 ? products.filter((p)=>p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5) : [];
    useEffect(()=>{
        setMobileOpen(false);
        setSearchOpen(false);
    }, [
        pathname
    ]);
    const isScrolled = scrollY > 20;
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            announcementOpen && /*#__PURE__*/ _jsxs("div", {
                className: "bg-gold text-luxury-black text-center py-2 px-4 text-sm font-medium relative z-50",
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "animate-pulse",
                        children: "🎉"
                    }),
                    " Free delivery on orders above Rs.5,000! Weekend Mega Sale every Saturday & Sunday",
                    /*#__PURE__*/ _jsx("button", {
                        onClick: ()=>setAnnouncementOpen(false),
                        className: "absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70",
                        children: /*#__PURE__*/ _jsx(X, {
                            className: "w-4 h-4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(motion.header, {
                className: cn("sticky top-0 z-40 w-full transition-all duration-300", isScrolled ? "bg-luxury-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" : "bg-luxury-black/80 backdrop-blur-md"),
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center justify-between h-16 lg:h-20",
                            children: [
                                /*#__PURE__*/ _jsxs(Link, {
                                    href: "/",
                                    className: "flex items-center gap-3 group",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors",
                                            children: /*#__PURE__*/ _jsx(Wine, {
                                                className: "w-5 h-5 text-gold"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "hidden sm:block",
                                            children: [
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "gold-text font-serif text-xl font-bold tracking-wider leading-tight",
                                                    children: "WINE & SPIRITS"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-gold/60 text-[10px] tracking-[0.3em] uppercase",
                                                    children: "Nepal"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("nav", {
                                    className: "hidden lg:flex items-center gap-1",
                                    children: [
                                        navLinks.slice(0, 6).map((link)=>/*#__PURE__*/ _jsxs(Link, {
                                                href: link.href,
                                                className: cn("px-3 py-2 text-sm font-medium transition-colors relative group", pathname === link.href ? "text-gold" : "text-white/70 hover:text-white"),
                                                children: [
                                                    link.label,
                                                    pathname === link.href && /*#__PURE__*/ _jsx(motion.div, {
                                                        layoutId: "navbar-indicator",
                                                        className: "absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full"
                                                    })
                                                ]
                                            }, link.href)),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ _jsxs("button", {
                                                    className: "px-3 py-2 text-sm font-medium text-white/70 hover:text-white flex items-center gap-1 transition-colors",
                                                    children: [
                                                        "More ",
                                                        /*#__PURE__*/ _jsx(ChevronDown, {
                                                            className: "w-3 h-3"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "absolute top-full left-0 pt-2 hidden group-hover:block z-50",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "bg-luxury-dark/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl",
                                                        children: navLinks.slice(6).map((link)=>/*#__PURE__*/ _jsx(Link, {
                                                                href: link.href,
                                                                className: "block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                                                children: link.label
                                                            }, link.href))
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>setSearchOpen(!searchOpen),
                                            className: "w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all",
                                            children: /*#__PURE__*/ _jsx(Search, {
                                                className: "w-5 h-5"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs(Link, {
                                            href: "/profile/wishlist",
                                            className: "w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all relative",
                                            children: [
                                                /*#__PURE__*/ _jsx(Heart, {
                                                    className: "w-5 h-5"
                                                }),
                                                wishlistItems.length > 0 && /*#__PURE__*/ _jsx("span", {
                                                    className: "absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-luxury-black text-[10px] font-bold rounded-full flex items-center justify-center",
                                                    children: wishlistItems.length
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs(Link, {
                                            href: "/cart",
                                            className: "w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all relative",
                                            children: [
                                                /*#__PURE__*/ _jsx(ShoppingBag, {
                                                    className: "w-5 h-5"
                                                }),
                                                cartCount > 0 && /*#__PURE__*/ _jsx("span", {
                                                    className: "absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-luxury-black text-[10px] font-bold rounded-full flex items-center justify-center",
                                                    children: cartCount
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "relative hidden sm:block",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>setUserMenuOpen(!userMenuOpen),
                                                    className: "w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all",
                                                    children: /*#__PURE__*/ _jsx(User, {
                                                        className: "w-5 h-5"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(AnimatePresence, {
                                                    children: userMenuOpen && /*#__PURE__*/ _jsx(motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        className: "absolute top-full right-0 pt-2 z-50",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "bg-luxury-dark/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs(Link, {
                                                                    href: "/auth/login",
                                                                    className: "flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(UserCircle, {
                                                                            className: "w-4 h-4"
                                                                        }),
                                                                        " Login"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs(Link, {
                                                                    href: "/auth/register",
                                                                    className: "flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(User, {
                                                                            className: "w-4 h-4"
                                                                        }),
                                                                        " Register"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs(Link, {
                                                                    href: "/profile",
                                                                    className: "flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Settings, {
                                                                            className: "w-4 h-4"
                                                                        }),
                                                                        " My Account"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs(Link, {
                                                                    href: "/profile/orders",
                                                                    className: "flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Package, {
                                                                            className: "w-4 h-4"
                                                                        }),
                                                                        " Orders"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>setMobileOpen(!mobileOpen),
                                            className: "lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all",
                                            children: mobileOpen ? /*#__PURE__*/ _jsx(X, {
                                                className: "w-5 h-5"
                                            }) : /*#__PURE__*/ _jsx(Menu, {
                                                className: "w-5 h-5"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(AnimatePresence, {
                        children: searchOpen && /*#__PURE__*/ _jsx(motion.div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            className: "border-t border-white/10 overflow-hidden",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "max-w-7xl mx-auto px-4 py-4",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ _jsx(Search, {
                                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                                            }),
                                            /*#__PURE__*/ _jsx("input", {
                                                type: "text",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                placeholder: "Search for wines, spirits, brands...",
                                                className: "w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all",
                                                autoFocus: true
                                            })
                                        ]
                                    }),
                                    searchResults.length > 0 && /*#__PURE__*/ _jsx(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "mt-2 bg-luxury-dark/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden",
                                        children: searchResults.map((product)=>/*#__PURE__*/ _jsxs(Link, {
                                                href: `/product/${product.slug}`,
                                                className: "flex items-center gap-4 px-4 py-3 hover:bg-white/5 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ _jsx(Wine, {
                                                            className: "w-6 h-6 text-gold/60"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-white text-sm font-medium",
                                                                children: product.name
                                                            }),
                                                            /*#__PURE__*/ _jsxs("p", {
                                                                className: "text-white/50 text-xs",
                                                                children: [
                                                                    product.brand,
                                                                    " • ",
                                                                    product.bottleSize
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("p", {
                                                        className: "text-gold font-semibold text-sm",
                                                        children: [
                                                            "Rs.",
                                                            product.mrp.toLocaleString()
                                                        ]
                                                    })
                                                ]
                                            }, product.id))
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(AnimatePresence, {
                children: mobileOpen && /*#__PURE__*/ _jsxs(motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-50 lg:hidden",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "absolute inset-0 bg-black/60",
                            onClick: ()=>setMobileOpen(false)
                        }),
                        /*#__PURE__*/ _jsx(motion.div, {
                            initial: {
                                x: "-100%"
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: "-100%"
                            },
                            transition: {
                                type: "spring",
                                damping: 25,
                                stiffness: 200
                            },
                            className: "absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-luxury-dark border-r border-white/10 overflow-y-auto",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center justify-between mb-8",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "gold-text font-serif text-xl font-bold tracking-wider",
                                                        children: "WINE & SPIRITS"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-gold/60 text-[10px] tracking-[0.3em] uppercase",
                                                        children: "Nepal"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("button", {
                                                onClick: ()=>setMobileOpen(false),
                                                className: "text-white/70 hover:text-white",
                                                children: /*#__PURE__*/ _jsx(X, {
                                                    className: "w-6 h-6"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("nav", {
                                        className: "space-y-1",
                                        children: navLinks.map((link)=>/*#__PURE__*/ _jsx(Link, {
                                                href: link.href,
                                                className: cn("block px-4 py-3 rounded-lg text-sm font-medium transition-colors", pathname === link.href ? "bg-gold/10 text-gold" : "text-white/70 hover:text-white hover:bg-white/5"),
                                                children: link.label
                                            }, link.href))
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "mt-8 pt-8 border-t border-white/10 space-y-1",
                                        children: [
                                            /*#__PURE__*/ _jsxs(Link, {
                                                href: "/auth/login",
                                                className: "flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ _jsx(User, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    " Login"
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(Link, {
                                                href: "/auth/register",
                                                className: "flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ _jsx(UserCircle, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    " Register"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
