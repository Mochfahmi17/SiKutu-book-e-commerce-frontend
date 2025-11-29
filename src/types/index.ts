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
  sales?: Sale;
  stock: number;
  releaseDate: Date;
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

export interface categoriesResponse {
  success: boolean;
  error: boolean;
  data: Category[];
  message?: string;
}

export interface bookResponse {
  success: boolean;
  error: boolean;
  data: Book[];
  message?: string;
}
