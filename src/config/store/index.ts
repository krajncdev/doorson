import { configureStore } from '@reduxjs/toolkit';
import nalogiSlice from './nalogiSlice';

export const store = configureStore({
  reducer: {
    nalogi: nalogiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
