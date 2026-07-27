import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function formatPrice(price) {
    return new Intl.NumberFormat("en-NP", {
        style: "currency",
        currency: "NPR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}
export function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(new Date(date));
}
export function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
export function truncate(text, length) {
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
}
export function generateId() {
    return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}
export function getDiscountedPrice(mrp, discountPercent) {
    return Math.round(mrp - mrp * discountPercent / 100);
}
export function isWeekend() {
    const day = new Date().getDay();
    return day === 0 || day === 6;
}
export function getDayName() {
    return new Date().toLocaleDateString("en-US", {
        weekday: "long"
    });
}
export function calculateDiscount(mrp, offerPrice) {
    return Math.round((mrp - offerPrice) / mrp * 100);
}
export function getWeekendEndDate() {
    const now = new Date();
    const day = now.getDay();
    const sunday = new Date(now);
    sunday.setDate(now.getDate() + (7 - day));
    sunday.setHours(23, 59, 59, 999);
    return sunday;
}
export function generateSKU(category, id) {
    const prefix = category.substring(0, 3).toUpperCase();
    return `${prefix}-${String(id).padStart(5, "0")}`;
}
export function validatePhone(phone) {
    return /^[9][0-9]{9}$/.test(phone);
}
export function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function getInitials(name) {
    return name.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
}
export function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
export function debounce(func, wait) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
