"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useCartStore = create()(persist((set, get)=>({
        items: [],
        couponCode: null,
        couponDiscount: 0,
        addItem: (product, quantity = 1)=>{
            const items = get().items;
            const existing = items.find((i)=>i.productId === product.id);
            if (existing) {
                set({
                    items: items.map((i)=>i.productId === product.id ? {
                            ...i,
                            quantity: Math.min(i.quantity + quantity, product.stock)
                        } : i)
                });
            } else {
                set({
                    items: [
                        ...items,
                        {
                            productId: product.id,
                            product,
                            quantity,
                            savedForLater: false
                        }
                    ]
                });
            }
        },
        removeItem: (productId)=>{
            set({
                items: get().items.filter((i)=>i.productId !== productId)
            });
        },
        updateQuantity: (productId, quantity)=>{
            if (quantity <= 0) {
                get().removeItem(productId);
                return;
            }
            set({
                items: get().items.map((i)=>i.productId === productId ? {
                        ...i,
                        quantity: Math.min(quantity, i.product.stock)
                    } : i)
            });
        },
        clearCart: ()=>set({
                items: [],
                couponCode: null,
                couponDiscount: 0
            }),
        applyCoupon: (code, discount)=>{
            set({
                couponCode: code,
                couponDiscount: discount
            });
        },
        removeCoupon: ()=>set({
                couponCode: null,
                couponDiscount: 0
            }),
        toggleSaveForLater: (productId)=>{
            set({
                items: get().items.map((i)=>i.productId === productId ? {
                        ...i,
                        savedForLater: !i.savedForLater
                    } : i)
            });
        },
        moveAllToCart: ()=>{
            set({
                items: get().items.map((i)=>({
                        ...i,
                        savedForLater: false
                    }))
            });
        },
        getSubtotal: ()=>{
            return get().items.filter((i)=>!i.savedForLater).reduce((sum, i)=>{
                const price = i.product.weekendOfferEnabled ? i.product.offerPrice || i.product.mrp : i.product.mrp;
                return sum + price * i.quantity;
            }, 0);
        },
        getItemCount: ()=>{
            return get().items.filter((i)=>!i.savedForLater).reduce((sum, i)=>sum + i.quantity, 0);
        }
    }), {
    name: "wsn-cart"
}));
