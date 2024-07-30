import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const alertAuthApi = createApi({
  reducerPath: "alertAuthApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `https://apis.relynrelax.com/api/alert`,
    // baseUrl: `http://localhost:5001/api/alert`,
  }),

  endpoints: (builder) => ({
    createAlert: builder.mutation({
      query: ({ alertData, token }) => ({
        url: "/create/alert",
        method: "POST",
        body: alertData,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),

    details: builder.query({
      query: (token) => ({
        url: "/details",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    }),

    getAlerts: builder.query({
      query: (token) => ({
        url: "/get/alert",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),

    deleteAlert: builder.mutation({
      query: ({ id }) => ({
        url: `/delete`,
        method: "DELETE",
        body: id,
        headers: {
          "content-type": "application/json",
        },
      }),
    }),

    sendAlerts: builder.mutation({
      query: (id) => ({
        url: "/send/alert",
        method: "POST",
        body: id,
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useCreateAlertMutation,
  useGetAlertsQuery,
  useDeleteAlertMutation,
  useSendAlertsMutation,
  useDetailsQuery
} = alertAuthApi;
