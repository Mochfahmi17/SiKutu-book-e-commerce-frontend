import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";
import type { BooksResponse } from "../../../types";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
    credentials: "include",
    prepareHeaders: (Headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        Headers.set("Authorization", `Bearer ${token}`);
      }

      return Headers;
    },
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    fetchAllBooks: builder.query<BooksResponse, void>({
      query: () => ({ url: "/" }),
      providesTags: ["Books"],
    }),
    fetchBooksByCategory: builder.query<BooksResponse, string>({
      query: (categorySlug) => {
        if (!categorySlug || categorySlug === "all-genre") return "/";

        return `?category=${categorySlug}`;
      },
      providesTags: (result, error, categorySlug) => [
        { type: "Books", id: categorySlug },
      ],
    }),
  }),
});

export const { useFetchAllBooksQuery, useFetchBooksByCategoryQuery } = booksApi;
export default booksApi;
