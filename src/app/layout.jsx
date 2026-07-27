import { jsx as _jsx } from "react/jsx-runtime";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
const inter = Inter({
    subsets: [
        "latin"
    ],
    variable: "--font-sans",
    display: "swap"
});
const playfair = Playfair_Display({
    subsets: [
        "latin"
    ],
    variable: "--font-serif",
    display: "swap"
});
export const metadata = {
    title: "Wine & Spirits Nepal - Premium Wines & Spirits Collection",
    description: "Explore authentic whisky, wine, vodka, rum, beer, gin, tequila, champagne, and premium spirits at the best prices in Nepal.",
    keywords: [
        "wine",
        "spirits",
        "whisky",
        "vodka",
        "rum",
        "beer",
        "gin",
        "tequila",
        "champagne",
        "Nepal",
        "liquor",
        "online store"
    ],
    openGraph: {
        title: "Wine & Spirits Nepal",
        description: "Premium Wines & Spirits Collection",
        type: "website",
        locale: "en_US"
    }
};
export default function RootLayout({ children }) {
    return /*#__PURE__*/ _jsx("html", {
        lang: "en",
        className: `${inter.variable} ${playfair.variable}`,
        children: /*#__PURE__*/ _jsx("body", {
            className: "min-h-screen font-sans antialiased",
            children: children
        })
    });
}
