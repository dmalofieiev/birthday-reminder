import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserData } from "../types/interfaces";

export const dataApi = createApi({
    reducerPath: "dataApi",
    tagTypes: ["data"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    endpoints: (builder) => ({
        getData: builder.query<IUserData[], void>({
            query: () => "users",
            providesTags: ["data"],
        }),
        createData: builder.mutation<void, IUserData>({
            query: (newUser) => ({
                url: "users",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["data"],
        }),
        deleteData: builder.mutation<void, IUserData>({
            query: ({ id }) => ({
                url: `users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["data"],
        }),
    }),
});

export const { useGetDataQuery, useCreateDataMutation, useDeleteDataMutation } =
    dataApi;
