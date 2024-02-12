import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jocksSlice = createApi({
  reducerPath: "jocksSlice",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://v2.jokeapi.dev/joke",
  }),
  tagTypes: [
    'Jokes',
  ],
  endpoints: (builder) => ({
    getAllJokes: builder.query({
      query: ({searchQuery}) => {
        return {
                url: `/Any?amount=20&contains=${searchQuery}`,
       
        }
      },
      providesTags: ['Jokes'],
    })
  }),
});

export const { useGetAllJokesQuery } = jocksSlice;