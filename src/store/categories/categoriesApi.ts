import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { categoriesResponse } from "../../types";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.PROD
    ? `${import.meta.env.VITE_SERVER_URL}/api/categories`
    : "http://localhost:3000/api/categories",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery,
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getAllCategories: builder.query<categoriesResponse, void>({
      query: () => "/",
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoriesApi;
