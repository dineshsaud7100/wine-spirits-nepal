"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistStore {
  items: string[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  toggleItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clear: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (productId: string) => {
        if (!get().items.includes(productId)) {
          set({ items: [...get().items, productId] });
        }
      },

      removeItem: (productId: string) => {
        set({ items: get().items.filter((id) => id !== productId) });
      },

      toggleItem: (productId: string) => {
        if (get().isInWishlist(productId)) {
          get().removeItem(productId);
        } else {
          get().addItem(productId);
        }
      },

      isInWishlist: (productId: string) => {
        return get().items.includes(productId);
      },

      clear: () => set({ items: [] }),
    }),
    { name: "wsn-wishlist" }
  )
);
