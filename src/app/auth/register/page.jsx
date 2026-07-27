"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Wine, User, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });
    const inputClass = "w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen flex items-center justify-center py-20 px-4",
                children: /*#__PURE__*/ _jsx(motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "w-full max-w-md",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "bg-luxury-dark/50 border border-white/5 rounded-3xl p-8",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "text-center mb-8",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ _jsx(Wine, {
                                            className: "w-7 h-7 text-gold"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("h1", {
                                        className: "text-2xl font-bold text-white",
                                        children: "Create Account"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-white/50 text-sm mt-1",
                                        children: "Join us for exclusive offers"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("label", {
                                                className: "text-white/60 text-sm mb-1.5 block",
                                                children: "Full Name"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ _jsx(User, {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                                                    }),
                                                    /*#__PURE__*/ _jsx("input", {
                                                        type: "text",
                                                        value: form.name,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                name: e.target.value
                                                            }),
                                                        className: inputClass,
                                                        placeholder: "Full name"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("label", {
                                                className: "text-white/60 text-sm mb-1.5 block",
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Mail, {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
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
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("label", {
                                                className: "text-white/60 text-sm mb-1.5 block",
                                                children: "Phone"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Phone, {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                                                    }),
                                                    /*#__PURE__*/ _jsx("input", {
                                                        type: "tel",
                                                        value: form.phone,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                phone: e.target.value
                                                            }),
                                                        className: inputClass,
                                                        placeholder: "98XXXXXXXX"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("label", {
                                                className: "text-white/60 text-sm mb-1.5 block",
                                                children: "Password"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Lock, {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                                                    }),
                                                    /*#__PURE__*/ _jsx("input", {
                                                        type: showPassword ? "text" : "password",
                                                        value: form.password,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                password: e.target.value
                                                            }),
                                                        className: inputClass,
                                                        placeholder: "••••••••"
                                                    }),
                                                    /*#__PURE__*/ _jsx("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowPassword(!showPassword),
                                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60",
                                                        children: showPassword ? /*#__PURE__*/ _jsx(EyeOff, {
                                                            className: "w-4 h-4"
                                                        }) : /*#__PURE__*/ _jsx(Eye, {
                                                            className: "w-4 h-4"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("label", {
                                                className: "text-white/60 text-sm mb-1.5 block",
                                                children: "Confirm Password"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Lock, {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                                                    }),
                                                    /*#__PURE__*/ _jsx("input", {
                                                        type: "password",
                                                        value: form.confirmPassword,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                confirmPassword: e.target.value
                                                            }),
                                                        className: inputClass,
                                                        placeholder: "••••••••"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("label", {
                                        className: "flex items-start gap-2 text-white/50 text-sm",
                                        children: [
                                            /*#__PURE__*/ _jsx("input", {
                                                type: "checkbox",
                                                className: "w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 accent-gold"
                                            }),
                                            /*#__PURE__*/ _jsxs("span", {
                                                children: [
                                                    "I agree to the ",
                                                    /*#__PURE__*/ _jsx(Link, {
                                                        href: "/terms",
                                                        className: "text-gold hover:text-gold-400",
                                                        children: "Terms of Service"
                                                    }),
                                                    " and ",
                                                    /*#__PURE__*/ _jsx(Link, {
                                                        href: "/privacy-policy",
                                                        className: "text-gold hover:text-gold-400",
                                                        children: "Privacy Policy"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("button", {
                                        className: "w-full py-3.5 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20",
                                        children: "Create Account"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                className: "text-center text-white/50 text-sm mt-8",
                                children: [
                                    "Already have an account? ",
                                    /*#__PURE__*/ _jsx(Link, {
                                        href: "/auth/login",
                                        className: "text-gold hover:text-gold-400",
                                        children: "Sign In"
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
