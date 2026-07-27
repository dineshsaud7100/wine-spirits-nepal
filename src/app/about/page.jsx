"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Wine, Shield, Award, Truck, Heart, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const values = [
    {
        icon: Shield,
        title: "Authenticity",
        desc: "We guarantee 100% authentic imported spirits from authorized distributors worldwide."
    },
    {
        icon: Award,
        title: "Quality",
        desc: "Every product in our collection is handpicked for exceptional quality and taste."
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        desc: "Same-day dispatch and delivery within 24-48 hours across Kathmandu Valley."
    },
    {
        icon: Heart,
        title: "Customer First",
        desc: "Your satisfaction is our priority with dedicated support and hassle-free returns."
    }
];
const stats = [
    {
        value: "500+",
        label: "Products"
    },
    {
        value: "50+",
        label: "Brands"
    },
    {
        value: "10,000+",
        label: "Happy Customers"
    },
    {
        value: "5+",
        label: "Years of Service"
    }
];
export default function AboutPage() {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsxs("main", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ _jsxs("section", {
                        className: "relative py-24 overflow-hidden",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-dark to-luxury-black"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                                children: [
                                    /*#__PURE__*/ _jsxs(motion.h1, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "font-serif text-4xl sm:text-5xl font-bold text-white mb-4",
                                        children: [
                                            "About ",
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "gold-text",
                                                children: "Wine & Spirits Nepal"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-white/50 text-lg max-w-2xl mx-auto",
                                        children: "Nepal's premier destination for authentic, premium wines and spirits."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("section", {
                        className: "py-20",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "grid lg:grid-cols-2 gap-12 items-center",
                                children: [
                                    /*#__PURE__*/ _jsxs(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -30
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsx("h2", {
                                                className: "font-serif text-3xl font-bold text-white mb-6",
                                                children: "Our Story"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "space-y-4 text-white/60 leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "Wine & Spirits Nepal was founded with a simple mission: to bring the finest wines and spirits from around the world to discerning customers in Nepal."
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "We partner with authorized distributors and global brands to ensure every bottle we sell is 100% authentic and of the highest quality. From rare single malts to everyday favorites, our curated collection caters to every palate and occasion."
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "As a responsible retailer, we are committed to promoting responsible drinking and ensuring our products are only sold to individuals of legal drinking age."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            x: 30
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "relative",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "aspect-square bg-gradient-to-br from-gold/10 to-burgundy/10 rounded-3xl border border-white/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ _jsx(Wine, {
                                                className: "w-32 h-32 text-gold/20"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("section", {
                        className: "py-16 bg-luxury-dark/30 border-y border-white/5",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                                children: stats.map((stat, i)=>/*#__PURE__*/ _jsxs(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: i * 0.1
                                        },
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "gold-text font-serif text-4xl font-bold",
                                                children: stat.value
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-white/50 text-sm mt-1",
                                                children: stat.label
                                            })
                                        ]
                                    }, stat.label))
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("section", {
                        className: "py-20",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ _jsxs("h2", {
                                    className: "font-serif text-3xl font-bold text-white text-center mb-12",
                                    children: [
                                        "Our ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Values"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: values.map((v, i)=>/*#__PURE__*/ _jsx(motion.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                delay: i * 0.1
                                            },
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 text-center hover:border-gold/20 transition-all h-full",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4",
                                                        children: /*#__PURE__*/ _jsx(v.icon, {
                                                            className: "w-6 h-6 text-gold"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-2",
                                                        children: v.title
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white/50 text-sm leading-relaxed",
                                                        children: v.desc
                                                    })
                                                ]
                                            })
                                        }, v.title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("section", {
                        className: "py-20 bg-luxury-dark/30",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                            children: [
                                /*#__PURE__*/ _jsxs("h2", {
                                    className: "font-serif text-3xl font-bold text-white mb-4",
                                    children: [
                                        "Our ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "Team"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-white/50 max-w-xl mx-auto mb-12",
                                    children: "Passionate people dedicated to bringing you the finest selection of wines and spirits."
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto",
                                    children: [
                                        "Rajesh Sharma",
                                        "Anita Thapa",
                                        "Suman Gurung"
                                    ].map((name, i)=>/*#__PURE__*/ _jsxs("div", {
                                            className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 hover:border-gold/20 transition-all",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ _jsx(Users, {
                                                        className: "w-10 h-10 text-gold/40"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("h3", {
                                                    className: "text-white font-medium",
                                                    children: name
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-white/40 text-sm",
                                                    children: [
                                                        "Founder & CEO",
                                                        "Head of Operations",
                                                        "Master Sommelier"
                                                    ][i]
                                                })
                                            ]
                                        }, name))
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
