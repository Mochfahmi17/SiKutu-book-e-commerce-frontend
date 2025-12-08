import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BookResponse, BooksResponse } from "../../types";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.PROD
    ? `${import.meta.env.VITE_SERVER_URL}/api/books`
    : "http://localhost:3000/api/books",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query<BooksResponse, void>({
      query: () => "/",
      providesTags: ["Books"],
    }),
    getNewReleasesBooks: builder.query<BooksResponse, void>({
      query: () => "/featured/new-releases",
      providesTags: ["Books"],
    }),
    getBookBySlug: builder.query<BookResponse, string | undefined>({
      query: (id) => `/${id}`,
      providesTags: ["Books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetNewReleasesBooksQuery,
  useGetBookBySlugQuery,
} = booksApi;
