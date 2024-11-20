interface Feedback {
  positive: number;
  neutral: number;
  negative: number;
}

interface Seller {
  id: number;
  name: string;
  isC2C: boolean;
  rating: number;
  completedOrders: number;
  feedback: Feedback;
  merchantRating: number;
}

interface Price {
  amount: number;
  currency: string;
}

interface KinguinOffer {
  kinguinCategoryId: string | null;
  kinguinProductId: string | null;
}

export interface Product {
  id: string;
  productId: string;
  productName: string;
  productImageUrl: string;
  popularityValue: number;
  isPreorder: boolean;
  sellerId: number;
  type: string;
  price: Price;
  seller: Seller;
  activeStockNumber: number;
  kinguinOffer: KinguinOffer;
  checkoutTypes: string[];
  broker: string;
  spaActive: boolean;
}
