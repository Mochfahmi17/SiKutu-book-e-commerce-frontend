import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SalesResponse } from "../../types";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.PROD
    ? `${import.meta.env.VITE_SERVER_URL}/api/sales`
    : "http://localhost:3000/api/sales",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const salesApi = createApi({
  reducerPath: "salesApi",
  baseQuery,
  tagTypes: ["Sales"],
  endpoints: (builder) => ({
    getAllSales: builder.query<SalesResponse, void>({
      query: () => "/",
      providesTags: ["Sales"],
    }),
  }),
});

export const { useGetAllSalesQuery } = salesApi;
