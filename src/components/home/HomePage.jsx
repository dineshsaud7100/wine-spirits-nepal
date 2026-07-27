"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wine, Clock, Truck, Shield, Star, ChevronRight, Sparkles, TrendingUp, Award, Gift } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import { products, categories } from "@/data";
import { useWeekendOffer } from "@/hooks";
const fadeUp = {
    initial: {
        opacity: 0,
        y: 40
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: true
    },
    transition: {
        duration: 0.6
    }
};
const features = [
    {
        icon: Truck,
        title: "Free Delivery",
        desc: "On orders above Rs.5,000"
    },
    {
        icon: Shield,
        title: "100% Authentic",
        desc: "Genuine imported products"
    },
    {
        icon: Clock,
        title: "Fast Delivery",
        desc: "Within 24-48 hours"
    },
    {
        icon: Gift,
        title: "Weekend Deals",
        desc: "Special discounts every Sat-Sun"
    }
];
const testimonials = [
    {
        name: "Rajesh Sharma",
        rating: 5,
        text: "Best liquor store in Nepal! Amazing collection and fast delivery. The weekend offers are fantastic.",
        role: "Regular Customer"
    },
    {
        name: "Anita Thapa",
        rating: 5,
        text: "I love the variety and the quality. Every product is genuine and the prices are very competitive.",
        role: "Premium Member"
    },
    {
        name: "Suman Gurung",
        rating: 5,
        text: "The weekend mega sale is incredible! Saved so much on my favorite whisky. Highly recommend!",
        role: "Whisky Enthusiast"
    }
];
export default function HomePage() {
    const { isWeekend, daysUntilWeekend } = useWeekendOffer();
    const featuredProducts = products.filter((p)=>p.isFeatured);
    const bestSellers = products.filter((p)=>p.isBestSeller);
    const newArrivals = products.filter((p)=>p.isNewArrival);
    const premiumProducts = products.filter((p)=>p.isPremium);
    return /*#__PURE__*/ _jsxs("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ _jsxs("section", {
                className: "relative min-h-[85vh] flex items-center overflow-hidden",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-dark to-luxury-black"
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "absolute inset-0 opacity-20",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "absolute top-20 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "absolute bottom-20 right-20 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "absolute inset-0 bg-hero-pattern"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "max-w-3xl",
                            children: [
                                isWeekend && /*#__PURE__*/ _jsx(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    className: "mb-6",
                                    children: /*#__PURE__*/ _jsxs("span", {
                                        className: "inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ _jsx(Sparkles, {
                                                className: "w-4 h-4"
                                            }),
                                            " Weekend Mega Sale is LIVE!"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsxs(motion.h1, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8
                                    },
                                    className: "font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6",
                                    children: [
                                        "Premium",
                                        " ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Wines"
                                        }),
                                        " ",
                                        "&",
                                        " ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Spirits"
                                        }),
                                        " ",
                                        "Collection"
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(motion.p, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.2
                                    },
                                    className: "text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl",
                                    children: "Explore authentic whisky, wine, vodka, rum, beer, gin, tequila, champagne, and premium spirits at the best prices."
                                }),
                                /*#__PURE__*/ _jsxs(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.4
                                    },
                                    className: "flex flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ _jsxs(Link, {
                                            href: "/shop",
                                            className: "inline-flex items-center gap-2 px-8 py-4 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20 hover:shadow-gold/40",
                                            children: [
                                                "Shop Now ",
                                                /*#__PURE__*/ _jsx(ArrowRight, {
                                                    className: "w-5 h-5"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs(Link, {
                                            href: "/weekend-offers",
                                            className: "inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-medium hover:bg-white/10 transition-all",
                                            children: [
                                                isWeekend ? "Weekend Deals" : `Weekend Offers in ${daysUntilWeekend}`,
                                                " ",
                                                /*#__PURE__*/ _jsx(ChevronRight, {
                                                    className: "w-5 h-5"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(motion.div, {
                        animate: {
                            y: [
                                0,
                                -15,
                                0
                            ]
                        },
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "hidden lg:block absolute right-20 top-1/2 -translate-y-1/2",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "w-80 h-96 rounded-3xl bg-gradient-to-br from-gold/10 to-burgundy/10 border border-white/10 flex items-center justify-center",
                            children: /*#__PURE__*/ _jsx(Wine, {
                                className: "w-32 h-32 text-gold/20"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "border-y border-white/5 bg-luxury-dark/30",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "grid grid-cols-2 lg:grid-cols-4 gap-6",
                        children: features.map((f, i)=>/*#__PURE__*/ _jsxs(motion.div, {
                                ...fadeUp,
                                transition: {
                                    ...fadeUp.transition,
                                    delay: i * 0.1
                                },
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0",
                                        children: /*#__PURE__*/ _jsx(f.icon, {
                                            className: "w-5 h-5 text-gold"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-white text-sm font-medium",
                                                children: f.title
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-white/40 text-xs",
                                                children: f.desc
                                            })
                                        ]
                                    })
                                ]
                            }, f.title))
                    })
                })
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "py-20",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs(motion.div, {
                            ...fadeUp,
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxs("h2", {
                                    className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-3",
                                    children: [
                                        "Shop by ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Category"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50 max-w-xl mx-auto",
                                    children: "Discover our curated collection of fine spirits and wines"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",
                            children: categories.map((cat, i)=>/*#__PURE__*/ _jsx(motion.div, {
                                    ...fadeUp,
                                    transition: {
                                        ...fadeUp.transition,
                                        delay: i * 0.05
                                    },
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: `/categories/${cat.slug}`,
                                        className: "group block",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "relative bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 text-center hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors relative z-10",
                                                    children: /*#__PURE__*/ _jsx(Wine, {
                                                        className: "w-7 h-7 text-gold"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("h3", {
                                                    className: "text-white text-sm font-medium relative z-10",
                                                    children: cat.name
                                                }),
                                                /*#__PURE__*/ _jsxs("p", {
                                                    className: "text-white/40 text-xs mt-1 relative z-10",
                                                    children: [
                                                        cat.productCount,
                                                        " products"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, cat.id))
                        })
                    ]
                })
            }),
            isWeekend && /*#__PURE__*/ _jsx("section", {
                className: "py-12",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ _jsxs(motion.div, {
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: true
                        },
                        className: "relative bg-gradient-to-r from-burgundy via-burgundy-600 to-burgundy rounded-3xl p-8 sm:p-12 overflow-hidden",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "absolute inset-0 opacity-20",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxs("span", {
                                                className: "inline-flex items-center gap-2 px-3 py-1 bg-gold/20 rounded-full text-gold text-xs font-bold uppercase tracking-wider mb-4",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Sparkles, {
                                                        className: "w-3 h-3"
                                                    }),
                                                    " Weekend Mega Sale"
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("h2", {
                                                className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-2",
                                                children: "Up to 15% OFF!"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-white/70",
                                                children: "Don't miss out on exclusive weekend deals. Limited time only!"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(Link, {
                                        href: "/weekend-offers",
                                        className: "px-8 py-4 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg whitespace-nowrap",
                                        children: "Shop Weekend Deals"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "py-20",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs(motion.div, {
                            ...fadeUp,
                            className: "flex items-end justify-between mb-10",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ _jsxs("h2", {
                                            className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-3",
                                            children: [
                                                "Featured ",
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "gold-text",
                                                    children: "Products"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "text-white/50",
                                            children: "Handpicked selections from our finest collection"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Link, {
                                    href: "/shop",
                                    className: "hidden sm:inline-flex items-center gap-1 text-gold text-sm font-medium hover:text-gold-400 transition-colors",
                                    children: [
                                        "View All ",
                                        /*#__PURE__*/ _jsx(ArrowRight, {
                                            className: "w-4 h-4"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: featuredProducts.map((product, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                    product: product,
                                    index: i
                                }, product.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "py-20 bg-luxury-dark/30",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs(motion.div, {
                            ...fadeUp,
                            className: "flex items-end justify-between mb-10",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ _jsxs("h2", {
                                            className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-3",
                                            children: [
                                                /*#__PURE__*/ _jsx(TrendingUp, {
                                                    className: "inline w-8 h-8 text-gold mr-2"
                                                }),
                                                " Best ",
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "gold-text",
                                                    children: "Sellers"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "text-white/50",
                                            children: "Most loved products by our customers"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Link, {
                                    href: "/best-sellers",
                                    className: "hidden sm:inline-flex items-center gap-1 text-gold text-sm font-medium hover:text-gold-400 transition-colors",
                                    children: [
                                        "View All ",
                                        /*#__PURE__*/ _jsx(ArrowRight, {
                                            className: "w-4 h-4"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: bestSellers.map((product, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                    product: product,
                                    index: i
                                }, product.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "py-20",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs(motion.div, {
                            ...fadeUp,
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxs("h2", {
                                    className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-3",
                                    children: [
                                        /*#__PURE__*/ _jsx(Award, {
                                            className: "inline w-8 h-8 text-gold mr-2"
                                        }),
                                        " Premium ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Collection"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50 max-w-xl mx-auto",
                                    children: "Exclusive selections for the discerning connoisseur"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: premiumProducts.map((product, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                    product: product,
                                    index: i
                                }, product.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "py-20 bg-luxury-dark/30",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsx(motion.div, {
                            ...fadeUp,
                            className: "text-center mb-12",
                            children: /*#__PURE__*/ _jsxs("h2", {
                                className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-3",
                                children: [
                                    "What Our ",
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "gold-text",
                                        children: "Customers"
                                    }),
                                    " Say"
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid md:grid-cols-3 gap-6",
                            children: testimonials.map((t, i)=>/*#__PURE__*/ _jsx(motion.div, {
                                    ...fadeUp,
                                    transition: {
                                        ...fadeUp.transition,
                                        delay: i * 0.1
                                    },
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 hover:border-gold/20 transition-all",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "flex items-center gap-1 mb-4",
                                                children: [
                                                    1,
                                                    2,
                                                    3,
                                                    4,
                                                    5
                                                ].map((s)=>/*#__PURE__*/ _jsx(Star, {
                                                        className: `w-4 h-4 ${s <= t.rating ? "text-gold fill-gold" : "text-white/20"}`
                                                    }, s))
                                            }),
                                            /*#__PURE__*/ _jsxs("p", {
                                                className: "text-white/70 text-sm leading-relaxed mb-4",
                                                children: [
                                                    '"',
                                                    t.text,
                                                    '"'
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white text-sm font-medium",
                                                        children: t.name
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white/40 text-xs",
                                                        children: t.role
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, t.name))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "py-20",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "bg-gradient-to-br from-gold/10 via-luxury-dark to-burgundy/10 border border-white/10 rounded-3xl p-8 sm:p-12 text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-4",
                                children: "Ready to Explore?"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-white/50 max-w-lg mx-auto mb-8",
                                children: "Discover our complete collection of premium wines and spirits. Quality guaranteed."
                            }),
                            /*#__PURE__*/ _jsxs(Link, {
                                href: "/shop",
                                className: "inline-flex items-center gap-2 px-8 py-4 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20",
                                children: [
                                    "Browse All Products ",
                                    /*#__PURE__*/ _jsx(ArrowRight, {
                                        className: "w-5 h-5"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}
