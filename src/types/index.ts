export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface LoyaltyTier {
  name: string;
  minimumPoints: number;
  discount: number;
  benefits: string[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  channelName: string;
  channelAvatarUrl: string;
  views: number;
  uploadedAt: string;
  duration: string;
}