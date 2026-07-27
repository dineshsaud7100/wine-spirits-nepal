"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, use } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, ArrowLeft, Upload, Trash2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { categories, brands, products } from "@/data";
const sidebarLinks = [
    {
        label: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard
    },
    {
        label: "Products",
        href: "/admin/products",
        icon: Package
    },
    {
        label: "Orders",
        href: "/admin/orders",
        icon: ShoppingCart
    },
    {
        label: "Customers",
        href: "/admin/customers",
        icon: Users
    },
    {
        label: "Categories",
        href: "/admin/categories",
        icon: FolderTree
    },
    {
        label: "Reviews",
        href: "/admin/reviews",
        icon: Star
    },
    {
        label: "Settings",
        href: "/admin/settings",
        icon: Settings
    }
];
export default function EditProductPage({ params }) {
    const { id } = use(params);
    const pathname = usePathname();
    const router = useRouter();
    const product = products.find((p)=>p.id === id);
    const [form, setForm] = useState({
        name: product?.name || "",
        brand: product?.brand || "",
        category: product?.category || "",
        description: product?.description || "",
        mrp: String(product?.mrp || ""),
        offerPrice: String(product?.offerPrice || ""),
        bottleSize: product?.bottleSize || "750ml",
        alcoholPercent: String(product?.alcoholPercent || ""),
        country: product?.country || "",
        stock: String(product?.stock || ""),
        weekendOfferEnabled: product?.weekendOfferEnabled || false,
        weekendDiscountPercent: String(product?.weekendDiscountPercent || "10"),
        isFeatured: product?.isFeatured || false,
        isNewArrival: product?.isNewArrival || false,
        isBestSeller: product?.isBestSeller || false,
        isPremium: product?.isPremium || false,
        ingredients: product?.ingredients || ""
    });
    const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";
    if (!product) {
        return /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx(Navbar, {}),
                /*#__PURE__*/ _jsx("main", {
                    className: "min-h-screen flex items-center justify-center",
                    children: /*#__PURE__*/ _jsx("p", {
                        className: "text-white/50",
                        children: "Product not found."
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
                children: /*#__PURE__*/ _jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "flex flex-col lg:flex-row gap-8",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "lg:w-64 flex-shrink-0",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-4 sticky top-24",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center gap-3 px-3 py-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center",
                                                    children: /*#__PURE__*/ _jsx(Wine, {
                                                        className: "w-5 h-5 text-gold"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white text-sm font-medium",
                                                            children: "Admin Panel"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-white/40 text-xs",
                                                            children: "Wine & Spirits Nepal"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("nav", {
                                            className: "space-y-1",
                                            children: sidebarLinks.map((link)=>/*#__PURE__*/ _jsxs(Link, {
                                                    href: link.href,
                                                    className: cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname.startsWith(link.href) ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5"),
                                                    children: [
                                                        /*#__PURE__*/ _jsx(link.icon, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        link.label
                                                    ]
                                                }, link.href))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center justify-between mb-8",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ _jsx("button", {
                                                        onClick: ()=>router.back(),
                                                        className: "text-white/40 hover:text-white",
                                                        children: /*#__PURE__*/ _jsx(ArrowLeft, {
                                                            className: "w-5 h-5"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h1", {
                                                                className: "text-2xl font-bold text-white",
                                                                children: "Edit Product"
                                                            }),
                                                            /*#__PURE__*/ _jsxs("p", {
                                                                className: "text-white/50 text-sm",
                                                                children: [
                                                                    "SKU: ",
                                                                    product.sku
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("button", {
                                                className: "inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm hover:bg-red-500/20 transition-all",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Trash2, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    " Delete"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("form", {
                                        onSubmit: (e)=>{
                                            e.preventDefault();
                                            router.push("/admin/products");
                                        },
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-4",
                                                        children: "Basic Information"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "grid sm:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "sm:col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Product Name"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        required: true,
                                                                        value: form.name,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                name: e.target.value
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Brand"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("select", {
                                                                        value: form.brand,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                brand: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        children: brands.map((b)=>/*#__PURE__*/ _jsx("option", {
                                                                                value: b.name,
                                                                                className: "bg-luxury-dark",
                                                                                children: b.name
                                                                            }, b.id))
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Category"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("select", {
                                                                        value: form.category,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                category: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        children: categories.map((c)=>/*#__PURE__*/ _jsx("option", {
                                                                                value: c.name,
                                                                                className: "bg-luxury-dark",
                                                                                children: c.name
                                                                            }, c.id))
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "sm:col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Description"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("textarea", {
                                                                        value: form.description,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                description: e.target.value
                                                                            }),
                                                                        className: inputClass + " min-h-[100px]"
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
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-4",
                                                        children: "Pricing & Stock"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "grid sm:grid-cols-3 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "MRP (Rs.)"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "number",
                                                                        value: form.mrp,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                mrp: e.target.value
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Offer Price (Rs.)"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "number",
                                                                        value: form.offerPrice,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                offerPrice: e.target.value
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Stock"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "number",
                                                                        value: form.stock,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                stock: e.target.value
                                                                            }),
                                                                        className: inputClass
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
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-4",
                                                        children: "Product Details"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "grid sm:grid-cols-3 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Bottle Size"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("select", {
                                                                        value: form.bottleSize,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                bottleSize: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        children: [
                                                                            "50ml",
                                                                            "100ml",
                                                                            "180ml",
                                                                            "250ml",
                                                                            "375ml",
                                                                            "500ml",
                                                                            "750ml",
                                                                            "1L",
                                                                            "1.5L",
                                                                            "2L"
                                                                        ].map((s)=>/*#__PURE__*/ _jsx("option", {
                                                                                value: s,
                                                                                className: "bg-luxury-dark",
                                                                                children: s
                                                                            }, s))
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Alcohol %"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "number",
                                                                        step: "0.1",
                                                                        value: form.alcoholPercent,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                alcoholPercent: e.target.value
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Country"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("select", {
                                                                        value: form.country,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                country: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        children: [
                                                                            "USA",
                                                                            "Scotland",
                                                                            "France",
                                                                            "England",
                                                                            "Sweden",
                                                                            "Cuba",
                                                                            "Mexico",
                                                                            "India",
                                                                            "Nepal",
                                                                            "Japan"
                                                                        ].map((c)=>/*#__PURE__*/ _jsx("option", {
                                                                                value: c,
                                                                                className: "bg-luxury-dark",
                                                                                children: c
                                                                            }, c))
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "sm:col-span-3",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Ingredients"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        value: form.ingredients,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                ingredients: e.target.value
                                                                            }),
                                                                        className: inputClass
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
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-4",
                                                        children: "Images"
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "flex gap-3 mb-4",
                                                        children: product.images.map((_, i)=>/*#__PURE__*/ _jsx("div", {
                                                                className: "w-20 h-24 bg-white/5 rounded-xl flex items-center justify-center border border-white/10",
                                                                children: /*#__PURE__*/ _jsx(Trash2, {
                                                                    className: "w-5 h-5 text-white/20"
                                                                })
                                                            }, i))
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-gold/30 transition-colors cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(Upload, {
                                                                className: "w-6 h-6 text-white/30 mx-auto mb-2"
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-white/50 text-sm",
                                                                children: "Upload more images"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-4",
                                                        children: "Weekend Offer"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("label", {
                                                                className: "flex items-center gap-3 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: cn("w-11 h-6 rounded-full relative transition-colors", form.weekendOfferEnabled ? "bg-gold" : "bg-white/10"),
                                                                        onClick: ()=>setForm({
                                                                                ...form,
                                                                                weekendOfferEnabled: !form.weekendOfferEnabled
                                                                            }),
                                                                        children: /*#__PURE__*/ _jsx("div", {
                                                                            className: cn("w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all", form.weekendOfferEnabled ? "left-[22px]" : "left-0.5")
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-white text-sm",
                                                                        children: "Enable Weekend Offer"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "max-w-xs",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Discount %"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "number",
                                                                        value: form.weekendDiscountPercent,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                weekendDiscountPercent: e.target.value
                                                                            }),
                                                                        className: inputClass
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
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-4",
                                                        children: "Flags"
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "flex flex-wrap gap-4",
                                                        children: [
                                                            [
                                                                "isFeatured",
                                                                "Featured"
                                                            ],
                                                            [
                                                                "isNewArrival",
                                                                "New Arrival"
                                                            ],
                                                            [
                                                                "isBestSeller",
                                                                "Best Seller"
                                                            ],
                                                            [
                                                                "isPremium",
                                                                "Premium"
                                                            ]
                                                        ].map(([key, label])=>/*#__PURE__*/ _jsxs("label", {
                                                                className: "flex items-center gap-2 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "checkbox",
                                                                        checked: form[key],
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                [key]: e.target.checked
                                                                            }),
                                                                        className: "w-4 h-4 rounded border-white/20 bg-white/5 accent-gold"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-white/60 text-sm",
                                                                        children: label
                                                                    })
                                                                ]
                                                            }, key))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ _jsx("button", {
                                                        type: "submit",
                                                        className: "px-8 py-3 bg-gold text-luxury-black rounded-xl font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold/20",
                                                        children: "Update Product"
                                                    }),
                                                    /*#__PURE__*/ _jsx(Link, {
                                                        href: "/admin/products",
                                                        className: "px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all",
                                                        children: "Cancel"
                                                    })
                                                ]
                                            })
                                        ]
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
