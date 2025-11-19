import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";
import type { CategoriesResponse } from "../../../types";

const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/categories`,
    credentials: "include",
    prepareHeaders: (Headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        Headers.set("Authorization", `Bearer ${token}`);
      }

      return Headers;
    },
  }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    fetchAllCategories: builder.query<CategoriesResponse, void>({
      query: () => ({ url: "/" }),
      providesTags: ["Categories"],
    }),
  }),
});

export const { useFetchAllCategoriesQuery } = categoriesApi;
export default categoriesApi;
