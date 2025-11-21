export interface Sale {
  _id: string;
  name: string;
  slug: string;
  bannerImageSale: string;
  description: string;
  discountPercentage: number;
  startDate: Date;
  endDate: Date;
  books: Book[] | [];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  books: Book[];
}

export interface Author {
  _id: string;
  name: string;
  slug: string;
  bio: string;
  profileImage?: string;
  books: Book[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Book {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: Category;
  author: Author;
  coverBook?: string;
  price: number;
  discountPrice?: number;
  discounts?: Sale;
  stock: number;
  reviews: [];
  createdAt: Date;
  updatedAt: Date;
}

export interface SalesResponse {
  success: boolean;
  error: boolean;
  data: Sale[];
  message?: string;
}
