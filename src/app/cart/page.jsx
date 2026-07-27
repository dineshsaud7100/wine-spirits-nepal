"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/store/cart";
import { useWeekendOffer } from "@/hooks";
import { formatPrice } from "@/lib/utils";
export default function CartPage() {
    const { items, removeItem, updateQuantity, getSubtotal, couponCode, couponDiscount, applyCoupon, removeCoupon } = useCartStore();
    const { isWeekend } = useWeekendOffer();
    const activeItems = items.filter((i)=>!i.savedForLater);
    const subtotal = getSubtotal();
    const deliveryCharge = subtotal >= 5000 ? 0 : 150;
    const tax = Math.round(subtotal * 0.13);
    const totalDiscount = couponDiscount;
    const grandTotal = subtotal + deliveryCharge + tax - totalDiscount;
    if (activeItems.length === 0) {
        return /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx(Navbar, {}),
                /*#__PURE__*/ _jsx("main", {
                    className: "min-h-screen flex items-center justify-center py-20",
                    children: /*#__PURE__*/ _jsxs(motion.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6",
                                children: /*#__PURE__*/ _jsx(ShoppingBag, {
                                    className: "w-12 h-12 text-white/20"
                                })
                            }),
                            /*#__PURE__*/ _jsx("h1", {
                                className: "text-2xl font-bold text-white mb-2",
                                children: "Your cart is empty"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-white/50 mb-8",
                                children: "Looks like you haven't added anything yet."
                            }),
                            /*#__PURE__*/ _jsxs(Link, {
                                href: "/shop",
                                className: "inline-flex items-center gap-2 px-6 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all",
                                children: [
                                    "Start Shopping ",
                                    /*#__PURE__*/ _jsx(ArrowRight, {
                                        className: "w-4 h-4"
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
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen py-8",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center gap-3 mb-8",
                            children: [
                                /*#__PURE__*/ _jsx(Link, {
                                    href: "/shop",
                                    className: "text-white/40 hover:text-white",
                                    children: /*#__PURE__*/ _jsx(ArrowLeft, {
                                        className: "w-5 h-5"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("h1", {
                                    className: "font-serif text-3xl font-bold text-white",
                                    children: "Shopping Cart"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "grid lg:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "lg:col-span-2 space-y-4",
                                    children: activeItems.map((item, idx)=>{
                                        const product = item.product;
                                        const price = isWeekend && product.weekendOfferEnabled ? Math.round(product.mrp - product.mrp * (product.weekendDiscountPercent || 10) / 100) : product.offerPrice || product.mrp;
                                        return /*#__PURE__*/ _jsxs(motion.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: idx * 0.05
                                            },
                                            className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-4 sm:p-5 flex gap-4",
                                            children: [
                                                /*#__PURE__*/ _jsx(Link, {
                                                    href: `/product/${product.slug}`,
                                                    className: "w-20 h-24 sm:w-24 sm:h-28 rounded-xl flex-shrink-0 overflow-hidden",
                                                    children: /*#__PURE__*/ _jsx("img", {
                                                        src: product.images?.[0],
                                                        alt: product.name,
                                                        className: "w-full h-full object-cover"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white/40 text-xs uppercase tracking-wider",
                                                            children: product.brand
                                                        }),
                                                        /*#__PURE__*/ _jsx(Link, {
                                                            href: `/product/${product.slug}`,
                                                            className: "text-white text-sm font-medium hover:text-gold transition-colors line-clamp-1",
                                                            children: product.name
                                                        }),
                                                        /*#__PURE__*/ _jsxs("p", {
                                                            className: "text-white/40 text-xs mt-0.5",
                                                            children: [
                                                                product.bottleSize,
                                                                " • ",
                                                                product.country
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex items-center justify-between mt-3 flex-wrap gap-2",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("button", {
                                                                            onClick: ()=>updateQuantity(item.productId, item.quantity - 1),
                                                                            className: "w-8 h-8 flex items-center justify-center text-white/60 hover:text-white",
                                                                            children: /*#__PURE__*/ _jsx(Minus, {
                                                                                className: "w-3 h-3"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "w-8 text-center text-white text-sm",
                                                                            children: item.quantity
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("button", {
                                                                            onClick: ()=>updateQuantity(item.productId, item.quantity + 1),
                                                                            className: "w-8 h-8 flex items-center justify-center text-white/60 hover:text-white",
                                                                            children: /*#__PURE__*/ _jsx(Plus, {
                                                                                className: "w-3 h-3"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-gold font-semibold",
                                                                            children: formatPrice(price * item.quantity)
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("button", {
                                                                            onClick: ()=>removeItem(item.productId),
                                                                            className: "text-white/30 hover:text-red-400 transition-colors",
                                                                            children: /*#__PURE__*/ _jsx(Trash2, {
                                                                                className: "w-4 h-4"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, item.productId);
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 sticky top-24",
                                        children: [
                                            /*#__PURE__*/ _jsx("h3", {
                                                className: "text-white font-semibold text-lg mb-6",
                                                children: "Order Summary"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "space-y-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("span", {
                                                                className: "text-white/50",
                                                                children: [
                                                                    "Subtotal (",
                                                                    activeItems.reduce((s, i)=>s + i.quantity, 0),
                                                                    " items)"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-white",
                                                                children: formatPrice(subtotal)
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
                                                                className: deliveryCharge === 0 ? "text-green-400" : "text-white",
                                                                children: deliveryCharge === 0 ? "Free" : formatPrice(deliveryCharge)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-white/50",
                                                                children: "Tax (13%)"
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-white",
                                                                children: formatPrice(tax)
                                                            })
                                                        ]
                                                    }),
                                                    totalDiscount > 0 && /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-green-400",
                                                                children: "Coupon Discount"
                                                            }),
                                                            /*#__PURE__*/ _jsxs("span", {
                                                                className: "text-green-400",
                                                                children: [
                                                                    "-",
                                                                    formatPrice(totalDiscount)
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "border-t border-white/10 pt-4 mb-6",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "text-white font-semibold",
                                                            children: "Grand Total"
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "text-gold font-bold text-xl",
                                                            children: formatPrice(grandTotal)
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "mb-6",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "relative flex-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx(Tag, {
                                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                                                                }),
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    type: "text",
                                                                    placeholder: "Coupon code",
                                                                    className: "w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("button", {
                                                            onClick: ()=>applyCoupon("SAVE10", Math.round(subtotal * 0.1)),
                                                            className: "px-4 py-2.5 bg-white/5 border border-white/10 text-white/70 rounded-xl text-sm hover:bg-white/10 transition-colors",
                                                            children: "Apply"
                                                        })
                                                    ]
                                                })
                                            }),
                                            deliveryCharge > 0 && /*#__PURE__*/ _jsxs("p", {
                                                className: "text-white/30 text-xs text-center mb-4",
                                                children: [
                                                    "Add ",
                                                    formatPrice(5000 - subtotal),
                                                    " more for free delivery"
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(Link, {
                                                href: "/checkout",
                                                className: "w-full h-12 bg-gold text-luxury-black rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gold-400 transition-all shadow-lg shadow-gold/20",
                                                children: [
                                                    "Proceed to Checkout ",
                                                    /*#__PURE__*/ _jsx(ArrowRight, {
                                                        className: "w-4 h-4"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(Link, {
                                                href: "/shop",
                                                className: "w-full h-12 mt-3 bg-white/5 border border-white/10 text-white/70 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm",
                                                children: "Continue Shopping"
                                            })
                                        ]
                                    })
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
