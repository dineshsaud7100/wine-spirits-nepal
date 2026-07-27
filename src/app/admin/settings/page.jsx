"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, FolderTree, Star, Settings, Wine, Save } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { defaultSettings } from "@/data";
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
export default function AdminSettingsPage() {
    const pathname = usePathname();
    const [settings, setSettings] = useState(defaultSettings);
    const [saved, setSaved] = useState(false);
    const handleSave = ()=>{
        setSaved(true);
        setTimeout(()=>setSaved(false), 2000);
    };
    const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all";
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
                                                    className: cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all", pathname === link.href ? "bg-gold/10 text-gold" : "text-white/50 hover:text-white hover:bg-white/5"),
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
                                                children: [
                                                    /*#__PURE__*/ _jsx("h1", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Website Settings"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-white/50 text-sm",
                                                        children: "Manage your store settings and preferences"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("button", {
                                                onClick: handleSave,
                                                className: "inline-flex items-center gap-2 px-4 py-2.5 bg-gold text-luxury-black rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Save, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    " ",
                                                    saved ? "Saved!" : "Save Changes"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-4",
                                                        children: "Store Information"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "grid sm:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Store Name"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        value: settings.storeName,
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                storeName: e.target.value
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Tagline"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        value: settings.tagline,
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                tagline: e.target.value
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Contact Email"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "email",
                                                                        value: settings.contactEmail,
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                contactEmail: e.target.value
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Contact Phone"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        value: settings.contactPhone,
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                contactPhone: e.target.value
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "sm:col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Address"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        value: settings.address,
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                address: e.target.value
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
                                                        children: "Delivery & Tax"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "grid sm:grid-cols-3 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Delivery Charge (Rs.)"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "number",
                                                                        value: settings.deliveryCharge,
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                deliveryCharge: parseInt(e.target.value)
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Free Delivery Above (Rs.)"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "number",
                                                                        value: settings.freeDeliveryAbove,
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                freeDeliveryAbove: parseInt(e.target.value)
                                                                            }),
                                                                        className: inputClass
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Tax Percent (%)"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "number",
                                                                        value: settings.taxPercent,
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                taxPercent: parseInt(e.target.value)
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
                                                        children: "Weekend Offers"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("label", {
                                                                className: "flex items-center gap-3 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: cn("w-11 h-6 rounded-full relative transition-colors", settings.weekendOfferEnabled ? "bg-gold" : "bg-white/10"),
                                                                        onClick: ()=>setSettings({
                                                                                ...settings,
                                                                                weekendOfferEnabled: !settings.weekendOfferEnabled
                                                                            }),
                                                                        children: /*#__PURE__*/ _jsx("div", {
                                                                            className: cn("w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all", settings.weekendOfferEnabled ? "left-[22px]" : "left-0.5")
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-white text-sm",
                                                                        children: "Enable Weekend Offers"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Weekend Discount Percent (%)"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "number",
                                                                        value: settings.weekendDiscountPercent,
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                weekendDiscountPercent: parseInt(e.target.value)
                                                                            }),
                                                                        className: cn(inputClass, "max-w-xs")
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
                                                        children: "Social Media"
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "grid sm:grid-cols-2 gap-4",
                                                        children: Object.entries(settings.socialMedia).map(([platform, url])=>/*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block capitalize",
                                                                        children: platform
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        value: url || "",
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                socialMedia: {
                                                                                    ...settings.socialMedia,
                                                                                    [platform]: e.target.value
                                                                                }
                                                                            }),
                                                                        className: inputClass,
                                                                        placeholder: `https://${platform}.com/...`
                                                                    })
                                                                ]
                                                            }, platform))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-luxury-dark/50 border border-white/5 rounded-2xl p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-white font-semibold mb-4",
                                                        children: "Other Settings"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("label", {
                                                                className: "flex items-center gap-3 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: cn("w-11 h-6 rounded-full relative transition-colors", settings.ageVerificationRequired ? "bg-gold" : "bg-white/10"),
                                                                        onClick: ()=>setSettings({
                                                                                ...settings,
                                                                                ageVerificationRequired: !settings.ageVerificationRequired
                                                                            }),
                                                                        children: /*#__PURE__*/ _jsx("div", {
                                                                            className: cn("w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all", settings.ageVerificationRequired ? "left-[22px]" : "left-0.5")
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-white text-sm",
                                                                        children: "Require Age Verification"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("label", {
                                                                className: "flex items-center gap-3 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: cn("w-11 h-6 rounded-full relative transition-colors", settings.maintenanceMode ? "bg-red-500" : "bg-white/10"),
                                                                        onClick: ()=>setSettings({
                                                                                ...settings,
                                                                                maintenanceMode: !settings.maintenanceMode
                                                                            }),
                                                                        children: /*#__PURE__*/ _jsx("div", {
                                                                            className: cn("w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all", settings.maintenanceMode ? "left-[22px]" : "left-0.5")
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-white text-sm",
                                                                        children: "Maintenance Mode"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        className: "text-white/60 text-sm mb-1.5 block",
                                                                        children: "Announcement Banner"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        value: settings.announcement || "",
                                                                        onChange: (e)=>setSettings({
                                                                                ...settings,
                                                                                announcement: e.target.value
                                                                            }),
                                                                        className: inputClass,
                                                                        placeholder: "Enter announcement text"
                                                                    })
                                                                ]
                                                            })
                                                        ]
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
