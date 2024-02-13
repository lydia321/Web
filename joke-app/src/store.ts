import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { jocksSlice } from './services/jokeApiSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [jocksSlice.reducerPath]: jocksSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([jocksSlice.middleware]),
  })
}
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>