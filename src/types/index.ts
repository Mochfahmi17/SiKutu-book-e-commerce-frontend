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

export interface Category {
  _id: string;
  name: string;
  slug: string;
  books: Buku[];
}

export interface Author {
  _id: string;
  name: string;
  slug: string;
  bio: string;
  profileImage: string;
  books: Buku[];
}

export interface Discount {
  _id: string;
  name: string;
  percentage: number;
  startDate: Date;
  endDate: Date;
  books: Buku[];
}

export interface Buku {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: Category;
  author: Author;
  coverBook?: string;
  price: number;
  discounts: Discount;
  stock: number;
  reviews: [];
}

export interface CategoriesResponse {
  success: boolean;
  error: boolean;
  data: Category[];
}

export interface BooksResponse {
  success: boolean;
  error: boolean;
  data: Buku[];
  pagination: {
    totalBooks: number;
    page: number;
    limit: number;
    totalPages: 1;
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
  _id: string;
  title: string;
  price: number;
  quantity: number;
  coverBook: string;
  category: string;
}

export interface CartState {
  cartItems: CartItem[];
}
