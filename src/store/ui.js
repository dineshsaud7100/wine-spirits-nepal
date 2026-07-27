"use client";
import { create } from "zustand";
export const useUIStore = create((set)=>({
        isCartOpen: false,
        isSearchOpen: false,
        isMobileMenuOpen: false,
        isAgeVerified: false,
        theme: "dark",
        searchQuery: "",
        setCartOpen: (isCartOpen)=>set({
                isCartOpen
            }),
        setSearchOpen: (isSearchOpen)=>set({
                isSearchOpen
            }),
        setMobileMenuOpen: (isMobileMenuOpen)=>set({
                isMobileMenuOpen
            }),
        setAgeVerified: (isAgeVerified)=>set({
                isAgeVerified
            }),
        setTheme: (theme)=>set({
                theme
            }),
        setSearchQuery: (searchQuery)=>set({
                searchQuery
            })
    }));
