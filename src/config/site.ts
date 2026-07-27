export const siteConfig = {
  name: "Wine & Spirits Nepal",
  tagline: "Premium Wines & Spirits Collection",
  description:
    "Explore authentic whisky, wine, vodka, rum, beer, gin, tequila, champagne, and premium spirits at the best prices in Nepal.",
  url: "https://wineandspiritsnepal.com",
  email: "info@wineandspiritsnepal.com",
  phone: "+977-1-4444444",
  address: "Thamel, Kathmandu, Nepal",
  socialMedia: {
    facebook: "https://facebook.com/wineandspiritsnepal",
    instagram: "https://instagram.com/wineandspiritsnepal",
    twitter: "https://twitter.com/wineandspiritsnepal",
    youtube: "https://youtube.com/wineandspiritsnepal",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "Weekend Offers", href: "/weekend-offers" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Brands", href: "/brands" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Weekend Offers", href: "/weekend-offers" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Premium Collection", href: "/shop?premium=true" },
  ],
  categories: [
    { label: "Whisky", href: "/categories/whisky" },
    { label: "Vodka", href: "/categories/vodka" },
    { label: "Wine", href: "/categories/wine" },
    { label: "Rum", href: "/categories/rum" },
    { label: "Beer", href: "/categories/beer" },
    { label: "Gin", href: "/categories/gin" },
  ],
  support: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Return Policy", href: "/return-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  account: [
    { label: "My Account", href: "/profile" },
    { label: "My Orders", href: "/profile/orders" },
    { label: "Wishlist", href: "/profile/wishlist" },
    { label: "Login", href: "/auth/login" },
    { label: "Register", href: "/auth/register" },
  ],
};

export const provinces = [
  "Koshi",
  "Madhesh",
  "Bagmati",
  "Gandaki",
  "Lumbini",
  "Karnali",
  "Sudurpashchim",
];

export const bottleSizes = ["50ml", "100ml", "180ml", "250ml", "375ml", "500ml", "750ml", "1L", "1.5L", "2L", "5L"];

export const countries = [
  "Nepal",
  "India",
  "Scotland",
  "Ireland",
  "USA",
  "France",
  "Italy",
  "Spain",
  "Germany",
  "Japan",
  "Australia",
  "Canada",
  "Mexico",
  "Brazil",
  "Russia",
  "South Africa",
  "New Zealand",
];

export const alcoholPercents = ["5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%"];

export const paymentMethods = [
  { id: "cod", name: "Cash on Delivery", icon: "banknote" },
  { id: "khalti", name: "Khalti", icon: "smartphone" },
  { id: "esewa", name: "eSewa", icon: "wallet" },
  { id: "stripe", name: "Credit/Debit Card", icon: "credit-card" },
];

export const orderStatuses = [
  { value: "pending", label: "Pending", color: "text-yellow-500" },
  { value: "confirmed", label: "Confirmed", color: "text-blue-500" },
  { value: "packed", label: "Packed", color: "text-purple-500" },
  { value: "shipped", label: "Shipped", color: "text-indigo-500" },
  { value: "delivered", label: "Delivered", color: "text-green-500" },
  { value: "cancelled", label: "Cancelled", color: "text-red-500" },
];

export const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "best-selling", label: "Best Selling" },
  { value: "highest-rated", label: "Highest Rated" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
];
