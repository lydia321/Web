import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Joke from "../types/Joke";

export const jocksSlice = createApi({
  reducerPath: "jocksSlice",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://v2.jokeapi.dev/joke",
  }),
  tagTypes: [
    'Jokes',
  ],
  endpoints: (builder) => ({
    getAllJokes: builder.query<{jokes: Joke[]}, any>({
      query: ({searchQuery}) => {
        return {
                url: `/Any?amount=20&contains=${searchQuery}`,
        method: "GET", 
        }
      },
      providesTags: ['Jokes'],
    })
  }),
});

export const { useGetAllJokesQuery } = jocksSlice;