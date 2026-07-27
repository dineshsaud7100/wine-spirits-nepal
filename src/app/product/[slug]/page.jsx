"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, Truck, Shield, Clock, Tag, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products, reviews } from "@/data";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useWeekendOffer } from "@/hooks";
import { formatPrice, cn } from "@/lib/utils";
export default function ProductDetailPage({ params }) {
    const { slug } = use(params);
    const product = products.find((p)=>p.slug === slug);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const addItem = useCartStore((s)=>s.addItem);
    const toggleWishlist = useWishlistStore((s)=>s.toggleItem);
    const isInWishlist = useWishlistStore((s)=>s.isInWishlist(product?.id || ""));
    const { isWeekend } = useWeekendOffer();
    if (!product) {
        return /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx(Navbar, {}),
                /*#__PURE__*/ _jsx("main", {
                    className: "min-h-screen flex items-center justify-center",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "text-2xl font-bold text-white mb-4",
                                children: "Product Not Found"
                            }),
                            /*#__PURE__*/ _jsx(Link, {
                                href: "/shop",
                                className: "text-gold hover:text-gold-400",
                                children: "Back to Shop"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx(Footer, {})
            ]
        });
    }
    const showOffer = isWeekend && product.weekendOfferEnabled;
    const currentPrice = showOffer ? Math.round(product.mrp - product.mrp * (product.weekendDiscountPercent || 10) / 100) : product.offerPrice || product.mrp;
    const discount = Math.round((product.mrp - currentPrice) / product.mrp * 100);
    const productReviews = reviews.filter((r)=>r.productId === product.id);
    const relatedProducts = products.filter((p)=>p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen py-8",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs("nav", {
                            className: "flex items-center gap-2 text-sm text-white/40 mb-8",
                            children: [
                                /*#__PURE__*/ _jsx(Link, {
                                    href: "/",
                                    className: "hover:text-white",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ _jsx(ChevronRight, {
                                    className: "w-3 h-3"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    href: "/shop",
                                    className: "hover:text-white",
                                    children: "Shop"
                                }),
                                /*#__PURE__*/ _jsx(ChevronRight, {
                                    className: "w-3 h-3"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    href: `/categories/${product.categorySlug}`,
                                    className: "hover:text-white",
                                    children: product.category
                                }),
                                /*#__PURE__*/ _jsx(ChevronRight, {
                                    className: "w-3 h-3"
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    className: "text-white/70",
                                    children: product.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ _jsxs(motion.div, {
                                            initial: {
                                                opacity: 0,
                                                x: -30
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            className: "aspect-[3/4] bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden",
                                            children: [
                                            /*#__PURE__*/ _jsx("img", {
                                                src: product.images?.[0],
                                                alt: product.name,
                                                className: "absolute inset-0 w-full h-full object-cover rounded-3xl"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                    className: "absolute top-4 left-4 flex flex-col gap-2",
                                                    children: [
                                                        discount > 0 && /*#__PURE__*/ _jsxs("span", {
                                                            className: "px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full",
                                                            children: [
                                                                "-",
                                                                discount,
                                                                "%"
                                                            ]
                                                        }),
                                                        showOffer && /*#__PURE__*/ _jsx("span", {
                                                            className: "px-3 py-1 bg-gold text-luxury-black text-xs font-bold rounded-full animate-pulse",
                                                            children: "Weekend Offer"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "flex gap-3 mt-4",
                                            children: product.images.map((img, i)=>/*#__PURE__*/ _jsx("div", {
                                                    className: cn("w-20 h-20 rounded-xl border flex items-center justify-center cursor-pointer transition-all overflow-hidden", i === 0 ? "border-gold/50" : "border-white/10 hover:border-white/20"),
                                                    children: /*#__PURE__*/ _jsx("img", {
                                                        src: img,
                                                        alt: product.name,
                                                        className: "w-full h-full object-cover"
                                                    })
                                                }, i))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        x: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: 0.2
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-gold/60 text-sm uppercase tracking-wider",
                                                    children: product.brand
                                                }),
                                                product.isBestSeller && /*#__PURE__*/ _jsx("span", {
                                                    className: "px-2 py-0.5 bg-gold/10 text-gold text-xs rounded-full",
                                                    children: "Best Seller"
                                                }),
                                                product.isNewArrival && /*#__PURE__*/ _jsx("span", {
                                                    className: "px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded-full",
                                                    children: "New"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("h1", {
                                            className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-4",
                                            children: product.name
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center gap-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5
                                                    ].map((s)=>/*#__PURE__*/ _jsx(Star, {
                                                            className: cn("w-4 h-4", s <= Math.floor(product.rating) ? "text-gold fill-gold" : "text-white/20")
                                                        }, s))
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "text-white/50 text-sm",
                                                    children: [
                                                        product.rating,
                                                        " (",
                                                        product.reviewCount,
                                                        " reviews)"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "bg-white/5 rounded-2xl p-6 mb-6 border border-white/5",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "flex items-baseline gap-3",
                                                    children: showOffer ? /*#__PURE__*/ _jsxs(_Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-gold text-4xl font-bold",
                                                                children: formatPrice(currentPrice)
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-white/30 text-xl line-through",
                                                                children: formatPrice(product.mrp)
                                                            }),
                                                            /*#__PURE__*/ _jsxs("span", {
                                                                className: "px-2 py-0.5 bg-gold/10 text-gold text-sm rounded-full font-semibold",
                                                                children: [
                                                                    "Save ",
                                                                    formatPrice(product.mrp - currentPrice)
                                                                ]
                                                            })
                                                        ]
                                                    }) : product.offerPrice && product.offerPrice < product.mrp ? /*#__PURE__*/ _jsxs(_Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-white text-4xl font-bold",
                                                                children: formatPrice(product.offerPrice)
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-white/30 text-xl line-through",
                                                                children: formatPrice(product.mrp)
                                                            }),
                                                            /*#__PURE__*/ _jsxs("span", {
                                                                className: "px-2 py-0.5 bg-green-500/10 text-green-400 text-sm rounded-full font-semibold",
                                                                children: [
                                                                    "Save ",
                                                                    formatPrice(product.mrp - product.offerPrice)
                                                                ]
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ _jsx("span", {
                                                        className: "text-white text-4xl font-bold",
                                                        children: formatPrice(product.mrp)
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("p", {
                                                    className: "text-white/40 text-sm mt-2",
                                                    children: [
                                                        "MRP: ",
                                                        formatPrice(product.mrp),
                                                        " (Inclusive of all taxes)"
                                                    ]
                                                }),
                                                showOffer && /*#__PURE__*/ _jsx("p", {
                                                    className: "text-gold text-sm mt-1 font-medium",
                                                    children: "Weekend special price applied!"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "grid grid-cols-3 gap-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "bg-white/5 rounded-xl p-3 text-center border border-white/5",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white/40 text-xs",
                                                            children: "Size"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white font-medium text-sm",
                                                            children: product.bottleSize
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "bg-white/5 rounded-xl p-3 text-center border border-white/5",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white/40 text-xs",
                                                            children: "Alcohol"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("p", {
                                                            className: "text-white font-medium text-sm",
                                                            children: [
                                                                product.alcoholPercent,
                                                                "%"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "bg-white/5 rounded-xl p-3 text-center border border-white/5",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white/40 text-xs",
                                                            children: "Origin"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white font-medium text-sm",
                                                            children: product.country
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-6",
                                            children: product.stock > 10 ? /*#__PURE__*/ _jsxs("p", {
                                                className: "text-green-400 text-sm flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "w-2 h-2 bg-green-400 rounded-full"
                                                    }),
                                                    " In Stock (",
                                                    product.stock,
                                                    " available)"
                                                ]
                                            }) : product.stock > 0 ? /*#__PURE__*/ _jsxs("p", {
                                                className: "text-yellow-400 text-sm flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "w-2 h-2 bg-yellow-400 rounded-full"
                                                    }),
                                                    " Only ",
                                                    product.stock,
                                                    " left in stock"
                                                ]
                                            }) : /*#__PURE__*/ _jsxs("p", {
                                                className: "text-red-400 text-sm flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "w-2 h-2 bg-red-400 rounded-full"
                                                    }),
                                                    " Out of Stock"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("button", {
                                                            onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                                            className: "w-12 h-12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors",
                                                            children: /*#__PURE__*/ _jsx(Minus, {
                                                                className: "w-4 h-4"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "w-12 text-center text-white font-medium",
                                                            children: quantity
                                                        }),
                                                        /*#__PURE__*/ _jsx("button", {
                                                            onClick: ()=>setQuantity(Math.min(product.stock, quantity + 1)),
                                                            className: "w-12 h-12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors",
                                                            children: /*#__PURE__*/ _jsx(Plus, {
                                                                className: "w-4 h-4"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("button", {
                                                    onClick: ()=>addItem(product, quantity),
                                                    disabled: product.stock === 0,
                                                    className: "flex-1 h-12 bg-gold text-luxury-black rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gold-400 transition-all shadow-lg shadow-gold/20 disabled:opacity-50",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(ShoppingCart, {
                                                            className: "w-5 h-5"
                                                        }),
                                                        " Add to Cart"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>toggleWishlist(product.id),
                                                    className: cn("w-12 h-12 rounded-xl border flex items-center justify-center transition-all", isInWishlist ? "bg-red-500/10 border-red-500/30 text-red-400" : "bg-white/5 border-white/10 text-white/60 hover:text-white"),
                                                    children: /*#__PURE__*/ _jsx(Heart, {
                                                        className: cn("w-5 h-5", isInWishlist && "fill-current")
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    className: "w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all",
                                                    children: /*#__PURE__*/ _jsx(Share2, {
                                                        className: "w-5 h-5"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center gap-3 text-white/60 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(Truck, {
                                                            className: "w-4 h-4 text-gold"
                                                        }),
                                                        " Free delivery on orders above Rs.5,000"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center gap-3 text-white/60 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(Shield, {
                                                            className: "w-4 h-4 text-gold"
                                                        }),
                                                        " 100% Authentic Products"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center gap-3 text-white/60 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(Clock, {
                                                            className: "w-4 h-4 text-gold"
                                                        }),
                                                        " Delivery within 24-48 hours"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-16",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "flex gap-1 border-b border-white/10 mb-6",
                                    children: [
                                        "description",
                                        "specs",
                                        "reviews"
                                    ].map((tab)=>/*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>setActiveTab(tab),
                                            className: cn("px-6 py-3 text-sm font-medium capitalize transition-colors relative", activeTab === tab ? "text-gold" : "text-white/50 hover:text-white"),
                                            children: [
                                                tab,
                                                activeTab === tab && /*#__PURE__*/ _jsx("div", {
                                                    className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                                                })
                                            ]
                                        }, tab))
                                }),
                                activeTab === "description" && /*#__PURE__*/ _jsxs(motion.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "text-white/60 leading-relaxed max-w-3xl",
                                    children: [
                                        /*#__PURE__*/ _jsx("p", {
                                            children: product.description
                                        }),
                                        product.ingredients && /*#__PURE__*/ _jsxs("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "text-white font-medium mb-2",
                                                    children: "Ingredients"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    children: product.ingredients
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                activeTab === "specs" && /*#__PURE__*/ _jsx(motion.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "max-w-2xl",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "space-y-3",
                                        children: [
                                            [
                                                "Brand",
                                                product.brand
                                            ],
                                            [
                                                "Category",
                                                product.category
                                            ],
                                            [
                                                "Bottle Size",
                                                product.bottleSize
                                            ],
                                            [
                                                "Alcohol Percentage",
                                                `${product.alcoholPercent}%`
                                            ],
                                            [
                                                "Country of Origin",
                                                product.country
                                            ],
                                            [
                                                "SKU",
                                                product.sku
                                            ],
                                            [
                                                "Rating",
                                                `${product.rating}/5`
                                            ],
                                            [
                                                "Reviews",
                                                `${product.reviewCount}`
                                            ]
                                        ].map(([label, value])=>/*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between py-3 border-b border-white/5",
                                                children: [
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "text-white/50 text-sm",
                                                        children: label
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "text-white text-sm font-medium",
                                                        children: value
                                                    })
                                                ]
                                            }, label))
                                    })
                                }),
                                activeTab === "reviews" && /*#__PURE__*/ _jsx(motion.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "space-y-4 max-w-3xl",
                                    children: productReviews.length > 0 ? productReviews.map((review)=>/*#__PURE__*/ _jsxs("div", {
                                            className: "bg-white/5 rounded-xl p-5 border border-white/5",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center gap-3 mb-3",
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
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "text-white text-sm font-medium mb-1",
                                                    children: review.title
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-white/50 text-sm",
                                                    children: review.comment
                                                })
                                            ]
                                        }, review.id)) : /*#__PURE__*/ _jsx("p", {
                                        className: "text-white/40 text-center py-8",
                                        children: "No reviews yet. Be the first to review!"
                                    })
                                })
                            ]
                        }),
                        relatedProducts.length > 0 && /*#__PURE__*/ _jsxs("div", {
                            className: "mb-16",
                            children: [
                                /*#__PURE__*/ _jsxs("h2", {
                                    className: "font-serif text-2xl font-bold text-white mb-6",
                                    children: [
                                        "Related ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Products"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                                    children: relatedProducts.map((p, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                            product: p,
                                            index: i
                                        }, p.id))
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
