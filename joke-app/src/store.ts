import {configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { jocksSlice } from '../src/app/api/jokes-api';

export const store = configureStore({
    reducer:{
      [jocksSlice.reducerPath]: jocksSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([jocksSlice.middleware]),
  })
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)