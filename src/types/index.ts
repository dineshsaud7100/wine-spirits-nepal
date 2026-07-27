export interface Product {
  id: string;
  sku: string;
  barcode?: string;
  name: string;
  slug: string;
  brand: string;
  brandLogo?: string;
  category: string;
  categorySlug: string;
  description: string;
  shortDescription?: string;
  images: string[];
  mrp: number;
  offerPrice?: number;
  discountPercent?: number;
  weekendOfferEnabled: boolean;
  weekendDiscountPercent?: number;
  bottleSize: string;
  alcoholPercent: number;
  country: string;
  ingredients?: string;
  stock: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  isPremium: boolean;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  productCount: number;
  isActive: boolean;
  displayOrder: number;
  createdAt: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description?: string;
  country: string;
  productCount: number;
  isActive: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  phoneNumber?: string;
  photoURL?: string;
  role: "customer" | "admin";
  addresses: Address[];
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  province: string;
  isDefault: boolean;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  savedForLater: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  subtotal: number;
  discount: number;
  deliveryCharge: number;
  tax: number;
  grandTotal: number;
  couponCode?: string;
  couponDiscount?: number;
  status: OrderStatus;
  statusHistory: OrderStatusHistory[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  mrp: number;
  offerPrice?: number;
  total: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "packed"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderStatusHistory {
  status: OrderStatus;
  timestamp: string;
  note?: string;
}

export type PaymentMethod = "cod" | "khalti" | "esewa" | "stripe";

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userPhoto?: string;
  rating: number;
  title: string;
  comment: string;
  isApproved: boolean;
  createdAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  minOrderAmount: number;
  maxDiscount?: number;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
  expiresAt: string;
  createdAt: string;
}

export interface WebsiteSettings {
  storeName: string;
  tagline: string;
  logo: string;
  favicon: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  city: string;
  province: string;
  socialMedia: SocialMedia;
  deliveryCharge: number;
  freeDeliveryAbove: number;
  taxPercent: number;
  weekendOfferEnabled: boolean;
  weekendDiscountPercent: number;
  ageVerificationRequired: boolean;
  maintenanceMode: boolean;
  bannerImage: string;
  announcement?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
}

export interface Newsletter {
  id: string;
  email: string;
  isActive: boolean;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface FlashSale {
  id: string;
  title: string;
  description: string;
  discountPercent: number;
  productIds: string[];
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface DashboardStats {
  totalSales: number;
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  totalCategories: number;
  pendingOrders: number;
  deliveredOrders: number;
  monthlyRevenue: { month: string; revenue: number }[];
  topProducts: { name: string; sales: number }[];
  recentOrders: Order[];
  ordersByStatus: { status: string; count: number }[];
}
