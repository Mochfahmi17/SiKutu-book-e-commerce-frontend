export interface User {
  _id: string;
  name: string;
  email: string;
  profileImage?: string;
  role: "customer" | "admin";
}
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
  pages: number;
  language: string;
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

export interface BooksResponse {
  success: boolean;
  error: boolean;
  data: Book[];
  message?: string;
}

export interface BookResponse {
  success: boolean;
  error: boolean;
  data: Book;
  message?: string;
}

export interface RegisterResponse {
  success: boolean;
  error: boolean;
  message: string;
}
export interface LoginResponse {
  success: boolean;
  error: boolean;
  token: string;
  message?: string;
}
export interface LogoutResponse {
  success: boolean;
  error: boolean;
  message: string;
}

export interface UserResponse {
  success: boolean;
  error: boolean;
  data: User;
  message?: string;
}

export interface AuthenticateStatusResponse {
  success: boolean;
  error: boolean;
  message: string;
}
