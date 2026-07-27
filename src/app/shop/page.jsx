"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { SlidersHorizontal, X, Grid3X3, LayoutGrid, ChevronDown, Search } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products, categories, brands } from "@/data";
import { cn, formatPrice } from "@/lib/utils";
import { sortOptions } from "@/config/site";
export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedBrand, setSelectedBrand] = useState("all");
    const [priceRange, setPriceRange] = useState([
        0,
        20000
    ]);
    const [sortBy, setSortBy] = useState("latest");
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [gridCols, setGridCols] = useState(3);
    const filteredProducts = useMemo(()=>{
        let result = [
            ...products
        ];
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter((p)=>p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
        }
        if (selectedCategory !== "all") {
            result = result.filter((p)=>p.categorySlug === selectedCategory);
        }
        if (selectedBrand !== "all") {
            result = result.filter((p)=>p.brand.toLowerCase().replace(/[' ]/g, "-") === selectedBrand);
        }
        result = result.filter((p)=>p.mrp >= priceRange[0] && p.mrp <= priceRange[1]);
        switch(sortBy){
            case "best-selling":
                result.sort((a, b)=>b.reviewCount - a.reviewCount);
                break;
            case "highest-rated":
                result.sort((a, b)=>b.rating - a.rating);
                break;
            case "price-low":
                result.sort((a, b)=>a.mrp - b.mrp);
                break;
            case "price-high":
                result.sort((a, b)=>b.mrp - a.mrp);
                break;
            case "name-asc":
                result.sort((a, b)=>a.name.localeCompare(b.name));
                break;
            case "name-desc":
                result.sort((a, b)=>b.name.localeCompare(a.name));
                break;
            default:
                result.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }
        return result;
    }, [
        selectedCategory,
        selectedBrand,
        priceRange,
        sortBy,
        searchQuery
    ]);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx("main", {
                className: "min-h-screen py-8",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ _jsxs("h1", {
                                    className: "font-serif text-3xl sm:text-4xl font-bold text-white mb-2",
                                    children: [
                                        "Shop ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gold-text",
                                            children: "All Products"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "text-white/50",
                                    children: [
                                        filteredProducts.length,
                                        " products found"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex flex-col lg:flex-row gap-8",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: cn("lg:w-64 flex-shrink-0", showFilters ? "block" : "hidden lg:block"),
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6 sticky top-24",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between mb-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold",
                                                        children: "Filters"
                                                    }),
                                                    /*#__PURE__*/ _jsx("button", {
                                                        onClick: ()=>setShowFilters(false),
                                                        className: "lg:hidden text-white/50",
                                                        children: /*#__PURE__*/ _jsx(X, {
                                                            className: "w-5 h-5"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("label", {
                                                        className: "text-white/60 text-sm mb-2 block",
                                                        children: "Search"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(Search, {
                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "text",
                                                                value: searchQuery,
                                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                                placeholder: "Search...",
                                                                className: "w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("label", {
                                                        className: "text-white/60 text-sm mb-3 block",
                                                        children: "Category"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "space-y-1.5",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("button", {
                                                                onClick: ()=>setSelectedCategory("all"),
                                                                className: cn("w-full text-left px-3 py-2 rounded-lg text-sm transition-colors", selectedCategory === "all" ? "bg-gold/10 text-gold" : "text-white/60 hover:text-white hover:bg-white/5"),
                                                                children: "All Categories"
                                                            }),
                                                            categories.map((cat)=>/*#__PURE__*/ _jsx("button", {
                                                                    onClick: ()=>setSelectedCategory(cat.slug),
                                                                    className: cn("w-full text-left px-3 py-2 rounded-lg text-sm transition-colors", selectedCategory === cat.slug ? "bg-gold/10 text-gold" : "text-white/60 hover:text-white hover:bg-white/5"),
                                                                    children: cat.name
                                                                }, cat.slug))
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("label", {
                                                        className: "text-white/60 text-sm mb-3 block",
                                                        children: [
                                                            "Price Range: ",
                                                            formatPrice(priceRange[0]),
                                                            " - ",
                                                            formatPrice(priceRange[1])
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("input", {
                                                        type: "range",
                                                        min: 0,
                                                        max: 20000,
                                                        step: 500,
                                                        value: priceRange[1],
                                                        onChange: (e)=>setPriceRange([
                                                                priceRange[1],
                                                                parseInt(e.target.value)
                                                            ]),
                                                        className: "w-full accent-gold"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("label", {
                                                        className: "text-white/60 text-sm mb-3 block",
                                                        children: "Brand"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "space-y-1.5 max-h-48 overflow-y-auto",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("button", {
                                                                onClick: ()=>setSelectedBrand("all"),
                                                                className: cn("w-full text-left px-3 py-2 rounded-lg text-sm transition-colors", selectedBrand === "all" ? "bg-gold/10 text-gold" : "text-white/60 hover:text-white hover:bg-white/5"),
                                                                children: "All Brands"
                                                            }),
                                                            brands.map((b)=>/*#__PURE__*/ _jsx("button", {
                                                                    onClick: ()=>setSelectedBrand(b.slug),
                                                                    className: cn("w-full text-left px-3 py-2 rounded-lg text-sm transition-colors", selectedBrand === b.slug ? "bg-gold/10 text-gold" : "text-white/60 hover:text-white hover:bg-white/5"),
                                                                    children: b.name
                                                                }, b.slug))
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between mb-6 flex-wrap gap-4",
                                            children: [
                                                /*#__PURE__*/ _jsxs("button", {
                                                    onClick: ()=>setShowFilters(true),
                                                    className: "lg:hidden inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/70 text-sm hover:bg-white/10",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(SlidersHorizontal, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        " Filters"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("select", {
                                                                    value: sortBy,
                                                                    onChange: (e)=>setSortBy(e.target.value),
                                                                    className: "appearance-none px-4 py-2 pr-8 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold/50 cursor-pointer",
                                                                    children: sortOptions.map((opt)=>/*#__PURE__*/ _jsx("option", {
                                                                            value: opt.value,
                                                                            className: "bg-luxury-dark",
                                                                            children: opt.label
                                                                        }, opt.value))
                                                                }),
                                                                /*#__PURE__*/ _jsx(ChevronDown, {
                                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("button", {
                                                                    onClick: ()=>setGridCols(3),
                                                                    className: cn("p-1.5 rounded-lg", gridCols === 3 ? "bg-gold/10 text-gold" : "text-white/40"),
                                                                    children: /*#__PURE__*/ _jsx(Grid3X3, {
                                                                        className: "w-4 h-4"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("button", {
                                                                    onClick: ()=>setGridCols(4),
                                                                    className: cn("p-1.5 rounded-lg", gridCols === 4 ? "bg-gold/10 text-gold" : "text-white/40"),
                                                                    children: /*#__PURE__*/ _jsx(LayoutGrid, {
                                                                        className: "w-4 h-4"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        filteredProducts.length > 0 ? /*#__PURE__*/ _jsx("div", {
                                            className: cn("grid gap-4 sm:gap-6", gridCols === 4 ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"),
                                            children: filteredProducts.map((product, i)=>/*#__PURE__*/ _jsx(ProductCard, {
                                                    product: product,
                                                    index: i
                                                }, product.id))
                                        }) : /*#__PURE__*/ _jsx("div", {
                                            className: "text-center py-20",
                                            children: /*#__PURE__*/ _jsx("p", {
                                                className: "text-white/40 text-lg",
                                                children: "No products found matching your criteria."
                                            })
                                        })
                                    ]
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
