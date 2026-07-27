"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wine, ShieldCheck } from "lucide-react";
export default function AgeVerification() {
    const [show, setShow] = useState(false);
    useEffect(()=>{
        const verified = localStorage.getItem("wsn-age-verified");
        if (!verified) setShow(true);
    }, []);
    const handleVerify = ()=>{
        localStorage.setItem("wsn-age-verified", "true");
        setShow(false);
    };
    return /*#__PURE__*/ _jsx(AnimatePresence, {
        children: show && /*#__PURE__*/ _jsx(motion.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl",
            children: /*#__PURE__*/ _jsx(motion.div, {
                initial: {
                    scale: 0.9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.9,
                    opacity: 0
                },
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                },
                className: "w-full max-w-md mx-4",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "bg-luxury-dark/90 border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent"
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6",
                                    children: /*#__PURE__*/ _jsx(Wine, {
                                        className: "w-10 h-10 text-gold"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "gold-text font-serif text-3xl font-bold mb-2",
                                    children: "Age Verification"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50 text-sm mb-8",
                                    children: "This website contains information about alcohol and is intended for individuals of legal drinking age."
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "bg-white/5 rounded-2xl p-6 mb-8 border border-white/10",
                                    children: [
                                        /*#__PURE__*/ _jsx(ShieldCheck, {
                                            className: "w-8 h-8 text-gold mx-auto mb-3"
                                        }),
                                        /*#__PURE__*/ _jsxs("p", {
                                            className: "text-white text-sm font-medium",
                                            children: [
                                                "I confirm that I am ",
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-gold font-bold",
                                                    children: "18 years of age or older"
                                                }),
                                                "."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>window.history.back(),
                                            className: "flex-1 py-3.5 bg-white/5 border border-white/10 text-white/60 rounded-xl font-medium hover:bg-white/10 transition-all text-sm",
                                            children: "I am under 18"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: handleVerify,
                                            className: "flex-1 py-3.5 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all text-sm shadow-lg shadow-gold/20",
                                            children: "I am 18 or older"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/30 text-xs mt-6",
                                    children: "By entering this site, you agree to our Terms of Service and Privacy Policy."
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
