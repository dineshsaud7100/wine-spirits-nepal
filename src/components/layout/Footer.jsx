"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { Wine, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { footerLinks } from "@/config/site";
import { useState } from "react";
export default function Footer() {
    const [email, setEmail] = useState("");
    return /*#__PURE__*/ _jsxs("footer", {
        className: "bg-luxury-black border-t border-white/5",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "border-b border-white/5",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-6",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("h3", {
                                        className: "gold-text font-serif text-2xl font-bold",
                                        children: "Subscribe to Our Newsletter"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-white/50 text-sm mt-1",
                                        children: "Get updates on new arrivals, exclusive offers, and weekend deals."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex w-full md:w-auto",
                                children: [
                                    /*#__PURE__*/ _jsx("input", {
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "Enter your email",
                                        className: "flex-1 md:w-80 px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl text-white placeholder-white/40 focus:outline-none focus:border-gold/50"
                                    }),
                                    /*#__PURE__*/ _jsxs("button", {
                                        className: "px-6 py-3 bg-gold text-luxury-black rounded-r-xl font-semibold hover:bg-gold-400 transition-colors flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ _jsx(Send, {
                                                className: "w-4 h-4"
                                            }),
                                            " Subscribe"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-span-2 md:col-span-1",
                                children: [
                                    /*#__PURE__*/ _jsxs(Link, {
                                        href: "/",
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center",
                                                children: /*#__PURE__*/ _jsx(Wine, {
                                                    className: "w-5 h-5 text-gold"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "gold-text font-serif text-lg font-bold tracking-wider leading-tight",
                                                        children: "WINE & SPIRITS"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-gold/60 text-[9px] tracking-[0.3em] uppercase",
                                                        children: "Nepal"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-white/50 text-sm leading-relaxed mb-4",
                                        children: "Your trusted destination for premium wines and spirits in Nepal. Authentic products, competitive prices."
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                className: "w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all",
                                                children: /*#__PURE__*/ _jsx(Facebook, {
                                                    className: "w-4 h-4"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                className: "w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all",
                                                children: /*#__PURE__*/ _jsx(Instagram, {
                                                    className: "w-4 h-4"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                className: "w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all",
                                                children: /*#__PURE__*/ _jsx(Youtube, {
                                                    className: "w-4 h-4"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            Object.entries(footerLinks).slice(0, 3).map(([title, links])=>/*#__PURE__*/ _jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "text-white font-semibold text-sm uppercase tracking-wider mb-4",
                                            children: title
                                        }),
                                        /*#__PURE__*/ _jsx("ul", {
                                            className: "space-y-2",
                                            children: links.map((link)=>/*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: link.href,
                                                        className: "text-white/50 text-sm hover:text-gold transition-colors",
                                                        children: link.label
                                                    })
                                                }, link.href))
                                        })
                                    ]
                                }, title))
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/40 text-sm",
                            children: [
                                /*#__PURE__*/ _jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ _jsx(Phone, {
                                            className: "w-4 h-4"
                                        }),
                                        " +977-1-4444444"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ _jsx(Mail, {
                                            className: "w-4 h-4"
                                        }),
                                        " info@wineandspiritsnepal.com"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ _jsx(MapPin, {
                                            className: "w-4 h-4"
                                        }),
                                        " Thamel, Kathmandu"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "mt-8 pt-8 border-t border-white/5 text-center",
                        children: [
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-white/30 text-xs",
                                children: "Alcohol is intended only for individuals aged 18 years or older. Please drink responsibly."
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                className: "text-white/30 text-xs mt-2",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Wine & Spirits Nepal. All rights reserved."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
