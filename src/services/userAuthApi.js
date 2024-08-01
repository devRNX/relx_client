import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",

  baseQuery: fetchBaseQuery({
    // baseUrl: `https://apis.relynrelax.com/api/user`,
    baseUrl: `http://localhost:5001/api/user`,
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/signup",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/reset/password/link",
        method: "PATCH",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    setNewPassword: builder.mutation({
      query: ({ credentials, id }) => ({
        url: `/set/password/${id}`,
        method: "PATCH",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    logInAdmin: builder.mutation({
      query: (data) => ({
        url: "/login/admin",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    getAllAlerts: builder.query({
      query: () => ({
        url: "/getAlerts",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/admin/getUsers",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    editVehicle: builder.mutation({
      query: ({ token, data }) => ({
        url: "/vehicle",
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }),
    }),

    getVehicle: builder.query({
      query: (token) => ({
        url: "/get/vehicle",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),

    addVehicle: builder.mutation({
      query: ({ token, data }) => ({
        url: "/vehicle",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }),
    }),

    deleteVehicle: builder.mutation({
      query: ({ token, id }) => ({
        url: `/vehicle/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useResetPasswordMutation,
  useSetNewPasswordMutation,
  useLogInAdminMutation,
  useGetAllAlertsQuery,
  useGetAllUsersQuery,
  useEditVehicleMutation,
  useGetVehicleQuery,
  useAddVehicleMutation,
  useDeleteVehicleMutation,
} = userAuthApi;
