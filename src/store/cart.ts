"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, CartItem, User, Address } from "@/types";

interface CartStore {
  items: CartItem[];
  couponCode: string | null;
  couponDiscount: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string, discount: number) => void;
  removeCoupon: () => void;
  toggleSaveForLater: (productId: string) => void;
  moveAllToCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,
      couponDiscount: 0,

      addItem: (product: Product, quantity = 1) => {
        const items = get().items;
        const existing = items.find((i) => i.productId === product.id);
        if (existing) {
          set({
            items: items.map((i) =>
              i.productId === product.id
                ? { ...i, quantity: Math.min(i.quantity + quantity, product.stock) }
                : i
            ),
          });
        } else {
          set({ items: [...items, { productId: product.id, product, quantity, savedForLater: false }] });
        }
      },

      removeItem: (productId: string) => {
        set({ items: get().items.filter((i) => i.productId !== productId) });
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.productId === productId ? { ...i, quantity: Math.min(quantity, i.product.stock) } : i
          ),
        });
      },

      clearCart: () => set({ items: [], couponCode: null, couponDiscount: 0 }),

      applyCoupon: (code: string, discount: number) => {
        set({ couponCode: code, couponDiscount: discount });
      },

      removeCoupon: () => set({ couponCode: null, couponDiscount: 0 }),

      toggleSaveForLater: (productId: string) => {
        set({
          items: get().items.map((i) =>
            i.productId === productId ? { ...i, savedForLater: !i.savedForLater } : i
          ),
        });
      },

      moveAllToCart: () => {
        set({
          items: get().items.map((i) => ({ ...i, savedForLater: false })),
        });
      },

      getSubtotal: () => {
        return get().items
          .filter((i) => !i.savedForLater)
          .reduce((sum, i) => {
            const price = i.product.weekendOfferEnabled ? i.product.offerPrice || i.product.mrp : i.product.mrp;
            return sum + price * i.quantity;
          }, 0);
      },

      getItemCount: () => {
        return get().items.filter((i) => !i.savedForLater).reduce((sum, i) => sum + i.quantity, 0);
      },
    }),
    { name: "wsn-cart" }
  )
);
