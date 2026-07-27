"use client";
import { useState, useEffect, useCallback } from "react";
export function useWeekendOffer() {
    const [isWeekend, setIsWeekend] = useState(false);
    const [timeUntilEnd, setTimeUntilEnd] = useState("");
    const [daysUntilWeekend, setDaysUntilWeekend] = useState("");
    useEffect(()=>{
        const checkWeekend = ()=>{
            const now = new Date();
            const day = now.getDay();
            const weekend = day === 0 || day === 6;
            setIsWeekend(weekend);
            if (weekend) {
                const sunday = new Date(now);
                sunday.setDate(now.getDate() + (7 - day));
                sunday.setHours(23, 59, 59, 999);
                const diff = sunday.getTime() - now.getTime();
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
                setTimeUntilEnd(`${hours}h ${minutes}m`);
            } else {
                const saturday = new Date(now);
                saturday.setDate(now.getDate() + (6 - day));
                saturday.setHours(0, 0, 0, 0);
                const diff = saturday.getTime() - now.getTime();
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                setDaysUntilWeekend(`${days}d ${hours}h`);
            }
        };
        checkWeekend();
        const interval = setInterval(checkWeekend, 60000);
        return ()=>clearInterval(interval);
    }, []);
    return {
        isWeekend,
        timeUntilEnd,
        daysUntilWeekend
    };
}
export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(()=>{
        if (typeof window === "undefined") return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch  {
            return initialValue;
        }
    });
    const setValue = useCallback((value)=>{
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    }, [
        key,
        storedValue
    ]);
    return [
        storedValue,
        setValue
    ];
}
export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=>{
        const handler = setTimeout(()=>setDebouncedValue(value), delay);
        return ()=>clearTimeout(handler);
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(()=>{
        const media = window.matchMedia(query);
        setMatches(media.matches);
        const listener = (e)=>setMatches(e.matches);
        media.addEventListener("change", listener);
        return ()=>media.removeEventListener("change", listener);
    }, [
        query
    ]);
    return matches;
}
export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(()=>{
        const handleScroll = ()=>setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return scrollY;
}
export function useClickOutside(ref, handler) {
    useEffect(()=>{
        const listener = (e)=>{
            if (!ref.current || ref.current.contains(e.target)) return;
            handler();
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return ()=>{
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [
        ref,
        handler
    ]);
}
export function useCountdown(targetDate) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    useEffect(()=>{
        const calculateTimeLeft = ()=>{
            const diff = targetDate.getTime() - Date.now();
            if (diff <= 0) return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor(diff / (1000 * 60 * 60) % 24),
                minutes: Math.floor(diff / 1000 / 60 % 60),
                seconds: Math.floor(diff / 1000 % 60)
            };
        };
        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(()=>setTimeLeft(calculateTimeLeft()), 1000);
        return ()=>clearInterval(timer);
    }, [
        targetDate
    ]);
    return timeLeft;
}
