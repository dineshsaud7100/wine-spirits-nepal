"use client";

import { create } from "zustand";

interface UIStore {
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  isAgeVerified: boolean;
  theme: "dark" | "light";
  searchQuery: string;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setAgeVerified: (verified: boolean) => void;
  setTheme: (theme: "dark" | "light") => void;
  setSearchQuery: (query: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isCartOpen: false,
  isSearchOpen: false,
  isMobileMenuOpen: false,
  isAgeVerified: false,
  theme: "dark",
  searchQuery: "",

  setCartOpen: (isCartOpen) => set({ isCartOpen }),
  setSearchOpen: (isSearchOpen) => set({ isSearchOpen }),
  setMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
  setAgeVerified: (isAgeVerified) => set({ isAgeVerified }),
  setTheme: (theme) => set({ theme }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));
