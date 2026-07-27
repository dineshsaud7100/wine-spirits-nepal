"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CreditCard, Smartphone, Banknote, CheckCircle, Tag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/store/cart";
import { useWeekendOffer } from "@/hooks";
import { formatPrice, cn } from "@/lib/utils";
import { provinces } from "@/config/site";
export default function CheckoutPage() {
    const { items, getSubtotal, couponCode, couponDiscount } = useCartStore();
    const { isWeekend } = useWeekendOffer();
    const activeItems = items.filter((i)=>!i.savedForLater);
    const subtotal = getSubtotal();
    const deliveryCharge = subtotal >= 5000 ? 0 : 150;
    const tax = Math.round(subtotal * 0.13);
    const grandTotal = subtotal + deliveryCharge + tax - couponDiscount;
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        street: "",
        city: "",
        province: "Bagmati",
        paymentMethod: "cod",
        notes: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    if (submitted) {
        return /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx(Navbar, {}),
                /*#__PURE__*/ _jsx("main", {
                    className: "min-h-screen flex items-center justify-center py-20",
                    children: /*#__PURE__*/ _jsxs(motion.div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        className: "text-center max-w-md mx-4",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6",
                                children: /*#__PURE__*/ _jsx(CheckCircle, {
                                    className: "w-10 h-10 text-green-400"
                                })
                            }),
                            /*#__PURE__*/ _jsx("h1", {
                                className: "text-2xl font-bold text-white mb-2",
                                children: "Order Placed Successfully!"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-white/50 mb-2",
                                children: "Thank you for your order."
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                className: "text-gold text-sm mb-8",
                                children: [
                                    "Order #WSN-",
                                    Math.floor(100000 + Math.random() * 900000)
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex gap-3 justify-center",
                                children: [
                                    /*#__PURE__*/ _jsx(Link, {
                                        href: "/profile/orders",
                                        className: "px-6 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all",
                                        children: "View Orders"
                                    }),
                                    /*#__PURE__*/ _jsx(Link, {
                                        href: "/shop",
                                        className: "px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all",
                                        children: "Continue Shopping"
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
    if (activeItems.length === 0) {
        return /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx(Navbar, {}),
                /*#__PURE__*/ _jsx("main", {
                    className: "min-h-screen flex items-center justify-center py-20",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "text-2xl font-bold text-white mb-4",
                                children: "Your cart is empty"
                            }),
                            /*#__PURE__*/ _jsx(Link, {
                                href: "/shop",
                                className: "text-gold hover:text-gold-400",
                                children: "Start Shopping"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx(Footer, {})
            ]
        });
    }
    const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all";
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
                                    href: "/cart",
                                    className: "text-white/40 hover:text-white",
                                    children: /*#__PURE__*/ _jsx(ArrowLeft, {
                                        className: "w-5 h-5"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("h1", {
                                    className: "font-serif text-3xl font-bold text-white",
                                    children: "Checkout"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("form", {
                            onSubmit: handleSubmit,
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "grid lg:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "lg:col-span-2 space-y-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h2", {
                                                        className: "text-white font-semibold text-lg mb-6",
                                                        children: "Shipping Information"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "grid sm:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "sm:col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Full Name *"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        required: true,
                                                                        value: form.fullName,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                fullName: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        placeholder: "Full name"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Phone *"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        required: true,
                                                                        value: form.phone,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                phone: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        placeholder: "98XXXXXXXX"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Email"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "email",
                                                                        value: form.email,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                email: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        placeholder: "email@example.com"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "sm:col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Street Address *"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        required: true,
                                                                        value: form.street,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                street: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        placeholder: "Street address"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "City *"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        required: true,
                                                                        value: form.city,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                city: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        placeholder: "City"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Province *"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("select", {
                                                                        value: form.province,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                province: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        children: provinces.map((p)=>/*#__PURE__*/ _jsx("option", {
                                                                                value: p,
                                                                                className: "bg-luxury-dark",
                                                                                children: p
                                                                            }, p))
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
                                                    /*#__PURE__*/ _jsx("h2", {
                                                        className: "text-white font-semibold text-lg mb-6",
                                                        children: "Payment Method"
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            {
                                                                id: "cod",
                                                                name: "Cash on Delivery",
                                                                icon: Banknote,
                                                                desc: "Pay when you receive your order"
                                                            },
                                                            {
                                                                id: "khalti",
                                                                name: "Khalti",
                                                                icon: Smartphone,
                                                                desc: "Pay via Khalti digital wallet"
                                                            },
                                                            {
                                                                id: "esewa",
                                                                name: "eSewa",
                                                                icon: Smartphone,
                                                                desc: "Pay via eSewa digital wallet"
                                                            },
                                                            {
                                                                id: "stripe",
                                                                name: "Credit/Debit Card",
                                                                icon: CreditCard,
                                                                desc: "Pay securely with card"
                                                            }
                                                        ].map((method)=>/*#__PURE__*/ _jsxs("label", {
                                                                className: cn("flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all", form.paymentMethod === method.id ? "bg-gold/5 border-gold/30" : "bg-white/5 border-white/10 hover:border-white/20"),
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "radio",
                                                                        name: "payment",
                                                                        value: method.id,
                                                                        checked: form.paymentMethod === method.id,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                paymentMethod: e.target.value
                                                                            }),
                                                                        className: "sr-only"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", form.paymentMethod === method.id ? "border-gold" : "border-white/20"),
                                                                        children: form.paymentMethod === method.id && /*#__PURE__*/ _jsx("div", {
                                                                            className: "w-2.5 h-2.5 bg-gold rounded-full"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx(method.icon, {
                                                                        className: cn("w-5 h-5", form.paymentMethod === method.id ? "text-gold" : "text-white/40")
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-white text-sm font-medium",
                                                                                children: method.name
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-white/40 text-xs",
                                                                                children: method.desc
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }, method.id))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("label", {
                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                        children: "Order Notes"
                                                    }),
                                                    /*#__PURE__*/ _jsx("textarea", {
                                                        value: form.notes,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                notes: e.target.value
                                                            }),
                                                        className: cn(inputClass, "min-h-[80px]"),
                                                        placeholder: "Any special instructions?"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 sticky top-24",
                                            children: [
                                                /*#__PURE__*/ _jsx("h3", {
                                                    className: "text-white font-semibold mb-4",
                                                    children: "Order Summary"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "space-y-3 mb-4 max-h-48 overflow-y-auto",
                                                    children: activeItems.map((item)=>/*#__PURE__*/ _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0",
                                                                    children: /*#__PURE__*/ _jsx(Tag, {
                                                                        className: "w-5 h-5 text-gold/30"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("p", {
                                                                            className: "text-white text-xs font-medium line-clamp-1",
                                                                            children: item.product.name
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                            className: "text-white/40 text-xs",
                                                                            children: [
                                                                                "Qty: ",
                                                                                item.quantity
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "text-white text-xs font-medium",
                                                                    children: formatPrice(item.product.mrp * item.quantity)
                                                                })
                                                            ]
                                                        }, item.productId))
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "border-t border-white/10 pt-4 space-y-2 mb-4",
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
                                                        couponDiscount > 0 && /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex justify-between text-sm",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "text-green-400",
                                                                    children: "Discount"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("span", {
                                                                    className: "text-green-400",
                                                                    children: [
                                                                        "-",
                                                                        formatPrice(couponDiscount)
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
                                                                children: "Total"
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "text-gold font-bold text-xl",
                                                                children: formatPrice(grandTotal)
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    type: "submit",
                                                    className: "w-full h-12 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20",
                                                    children: "Place Order"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-white/30 text-xs text-center mt-4",
                                                    children: "By placing this order, you agree to our terms and conditions."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
