"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen py-20",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs(motion.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ _jsxs("h1", {
                                    className: "font-serif text-4xl font-bold text-white mb-4",
                                    children: [
                                        "Get in ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Touch"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50 max-w-xl mx-auto",
                                    children: "Have a question or feedback? We'd love to hear from you."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "grid lg:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "space-y-6",
                                    children: [
                                        {
                                            icon: Phone,
                                            title: "Call Us",
                                            detail: "+977-1-4444444",
                                            sub: "Mon-Sat 10AM - 8PM"
                                        },
                                        {
                                            icon: Mail,
                                            title: "Email Us",
                                            detail: "info@wineandspiritsnepal.com",
                                            sub: "We reply within 24 hours"
                                        },
                                        {
                                            icon: MapPin,
                                            title: "Visit Us",
                                            detail: "Thamel, Kathmandu, Nepal",
                                            sub: "Open Mon-Sat 10AM - 8PM"
                                        },
                                        {
                                            icon: Clock,
                                            title: "Business Hours",
                                            detail: "Mon - Sat: 10AM - 8PM",
                                            sub: "Sunday: Closed"
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ _jsx(motion.div, {
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                delay: i * 0.1
                                            },
                                            className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-5 hover:border-gold/20 transition-all",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ _jsx(item.icon, {
                                                            className: "w-5 h-5 text-gold"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-white font-medium",
                                                                children: item.title
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-white/60 text-sm",
                                                                children: item.detail
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-white/40 text-xs",
                                                                children: item.sub
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, item.title))
                                }),
                                /*#__PURE__*/ _jsx(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.2
                                    },
                                    className: "lg:col-span-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-8",
                                        children: submitted ? /*#__PURE__*/ _jsxs("div", {
                                            className: "text-center py-12",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ _jsx(Send, {
                                                        className: "w-8 h-8 text-green-400"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("h3", {
                                                    className: "text-white text-xl font-bold mb-2",
                                                    children: "Message Sent!"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-white/50",
                                                    children: "We'll get back to you within 24 hours."
                                                })
                                            ]
                                        }) : /*#__PURE__*/ _jsxs("form", {
                                            onSubmit: handleSubmit,
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ _jsx("h3", {
                                                    className: "text-white font-semibold text-lg mb-4",
                                                    children: "Send us a Message"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "grid sm:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    className: "text-white/60 text-sm mb-1.5 block",
                                                                    children: "Name *"
                                                                }),
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    required: true,
                                                                    value: form.name,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            name: e.target.value
                                                                        }),
                                                                    className: inputClass,
                                                                    placeholder: "Your name"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    className: "text-white/60 text-sm mb-1.5 block",
                                                                    children: "Email *"
                                                                }),
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    required: true,
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
                                                            children: [
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    className: "text-white/60 text-sm mb-1.5 block",
                                                                    children: "Phone"
                                                                }),
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    value: form.phone,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            phone: e.target.value
                                                                        }),
                                                                    className: inputClass,
                                                                    placeholder: "Phone number"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    className: "text-white/60 text-sm mb-1.5 block",
                                                                    children: "Subject *"
                                                                }),
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    required: true,
                                                                    value: form.subject,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            subject: e.target.value
                                                                        }),
                                                                    className: inputClass,
                                                                    placeholder: "How can we help?"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx("label", {
                                                            className: "text-white/60 text-sm mb-1.5 block",
                                                            children: "Message *"
                                                        }),
                                                        /*#__PURE__*/ _jsx("textarea", {
                                                            required: true,
                                                            value: form.message,
                                                            onChange: (e)=>setForm({
                                                                    ...form,
                                                                    message: e.target.value
                                                                }),
                                                            className: inputClass + " min-h-[120px]",
                                                            placeholder: "Your message..."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("button", {
                                                    type: "submit",
                                                    className: "px-8 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(Send, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        " Send Message"
                                                    ]
                                                })
                                            ]
                                        })
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
