"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye, Share2, Star, Tag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useWeekendOffer } from "@/hooks";
import { cn, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
export default function ProductCard({ product, index = 0 }) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);
    const addItem = useCartStore((s)=>s.addItem);
    const toggleWishlist = useWishlistStore((s)=>s.toggleItem);
    const isInWishlist = useWishlistStore((s)=>s.isInWishlist(product.id));
    const { isWeekend } = useWeekendOffer();
    const showOffer = isWeekend && product.weekendOfferEnabled;
    const currentPrice = showOffer ? Math.round(product.mrp - product.mrp * (product.weekendDiscountPercent || 10) / 100) : product.offerPrice || product.mrp;
    const discount = Math.round((product.mrp - currentPrice) / product.mrp * 100);
    return /*#__PURE__*/ _jsx(motion.div, {
        initial: {
            opacity: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: index * 0.05
        },
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: "group relative",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "relative bg-luxury-dark/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5",
            children: [
                /*#__PURE__*/ _jsxs(Link, {
                    href: `/product/${product.slug}`,
                    className: "block relative aspect-[3/4] bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden",
                    children: [
                        !imageError ? /*#__PURE__*/ _jsx("img", {
                            src: product.images?.[0],
                            alt: product.name,
                            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                            onError: ()=>setImageError(true)
                        }) : /*#__PURE__*/ _jsx("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "w-24 h-32 bg-gold/10 rounded-lg flex items-center justify-center",
                                children: /*#__PURE__*/ _jsx(Tag, {
                                    className: "w-10 h-10 text-gold/30"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "absolute top-3 left-3 flex flex-col gap-1.5 z-10",
                            children: [
                                discount > 0 && /*#__PURE__*/ _jsxs(Badge, {
                                    variant: "destructive",
                                    className: "text-[10px] font-bold px-2 py-0.5",
                                    children: [
                                        "-",
                                        discount,
                                        "%"
                                    ]
                                }),
                                showOffer && /*#__PURE__*/ _jsx(Badge, {
                                    variant: "gold",
                                    className: "text-[10px] font-bold px-2 py-0.5 animate-pulse",
                                    children: "Weekend Offer"
                                }),
                                product.isNewArrival && /*#__PURE__*/ _jsx(Badge, {
                                    variant: "success",
                                    className: "text-[10px] font-bold px-2 py-0.5",
                                    children: "New"
                                }),
                                product.isBestSeller && /*#__PURE__*/ _jsx(Badge, {
                                    variant: "gold",
                                    className: "text-[10px] font-bold px-2 py-0.5",
                                    children: "Best Seller"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(motion.div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            animate: {
                                opacity: isHovered ? 1 : 0,
                                x: isHovered ? 0 : 20
                            },
                            className: "absolute top-3 right-3 flex flex-col gap-2 z-10",
                            children: [
                                /*#__PURE__*/ _jsx("button", {
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        toggleWishlist(product.id);
                                    },
                                    className: cn("w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all", isInWishlist ? "bg-red-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"),
                                    children: /*#__PURE__*/ _jsx(Heart, {
                                        className: cn("w-4 h-4", isInWishlist && "fill-current")
                                    })
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    onClick: (e)=>{
                                        e.preventDefault();
                                    },
                                    className: "w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white/20 transition-all",
                                    children: /*#__PURE__*/ _jsx(Eye, {
                                        className: "w-4 h-4"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    onClick: (e)=>{
                                        e.preventDefault();
                                    },
                                    className: "w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white/20 transition-all",
                                    children: /*#__PURE__*/ _jsx(Share2, {
                                        className: "w-4 h-4"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(motion.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: isHovered ? 1 : 0,
                                y: isHovered ? 0 : 20
                            },
                            className: "absolute bottom-0 left-0 right-0 p-3 z-10",
                            children: /*#__PURE__*/ _jsxs("button", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    addItem(product);
                                },
                                disabled: product.stock === 0,
                                className: "w-full py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gold-400 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                children: [
                                    /*#__PURE__*/ _jsx(ShoppingBag, {
                                        className: "w-4 h-4"
                                    }),
                                    product.stock === 0 ? "Out of Stock" : "Add to Cart"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            className: "text-white/40 text-xs uppercase tracking-wider mb-1",
                            children: product.brand
                        }),
                        /*#__PURE__*/ _jsx(Link, {
                            href: `/product/${product.slug}`,
                            children: /*#__PURE__*/ _jsx("h3", {
                                className: "text-white text-sm font-medium line-clamp-2 hover:text-gold transition-colors min-h-[2.5rem]",
                                children: product.name
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center gap-1 mt-2",
                            children: [
                                [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ].map((star)=>/*#__PURE__*/ _jsx(Star, {
                                        className: cn("w-3 h-3", star <= Math.floor(product.rating) ? "text-gold fill-gold" : "text-white/20")
                                    }, star)),
                                /*#__PURE__*/ _jsxs("span", {
                                    className: "text-white/30 text-xs ml-1",
                                    children: [
                                        "(",
                                        product.reviewCount,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ _jsxs("span", {
                                className: "text-white/40 text-xs",
                                children: [
                                    product.bottleSize,
                                    " • ",
                                    product.alcoholPercent,
                                    "% • ",
                                    product.country
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "mt-3 flex items-baseline gap-2",
                            children: showOffer ? /*#__PURE__*/ _jsxs(_Fragment, {
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-gold font-bold text-lg",
                                        children: formatPrice(currentPrice)
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-white/30 text-sm line-through",
                                        children: formatPrice(product.mrp)
                                    })
                                ]
                            }) : product.offerPrice && product.offerPrice < product.mrp ? /*#__PURE__*/ _jsxs(_Fragment, {
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-white font-bold text-lg",
                                        children: formatPrice(product.offerPrice)
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-white/30 text-sm line-through",
                                        children: formatPrice(product.mrp)
                                    })
                                ]
                            }) : /*#__PURE__*/ _jsx("span", {
                                className: "text-white font-bold text-lg",
                                children: formatPrice(product.mrp)
                            })
                        }),
                        product.stock < 10 && product.stock > 0 && /*#__PURE__*/ _jsxs("p", {
                            className: "text-yellow-500/70 text-xs mt-2",
                            children: [
                                "Only ",
                                product.stock,
                                " left in stock"
                            ]
                        }),
                        product.stock === 0 && /*#__PURE__*/ _jsx("p", {
                            className: "text-red-400/70 text-xs mt-2",
                            children: "Out of stock"
                        })
                    ]
                })
            ]
        })
    });
}
