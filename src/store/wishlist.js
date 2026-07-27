"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useWishlistStore = create()(persist((set, get)=>({
        items: [],
        addItem: (productId)=>{
            if (!get().items.includes(productId)) {
                set({
                    items: [
                        ...get().items,
                        productId
                    ]
                });
            }
        },
        removeItem: (productId)=>{
            set({
                items: get().items.filter((id)=>id !== productId)
            });
        },
        toggleItem: (productId)=>{
            if (get().isInWishlist(productId)) {
                get().removeItem(productId);
            } else {
                get().addItem(productId);
            }
        },
        isInWishlist: (productId)=>{
            return get().items.includes(productId);
        },
        clear: ()=>set({
                items: []
            })
    }), {
    name: "wsn-wishlist"
}));
