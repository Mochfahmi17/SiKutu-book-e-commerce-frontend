export interface Books {
  id: number;
  title: string;
  category: string;
  description: string;
  author: string;
  coverBook: string;
  price: number;
  averageRating: number;
  numReviews: number;
  reviews: {
    id: number;
    user: { id: number; name: string };
    rating: number;
    comment: string;
    createdAt: Date;
  };
}

export interface NewsArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
}

export interface Author {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  coverBook: string;
  category: string;
}

export interface CartState {
  cartItems: CartItem[];
}
