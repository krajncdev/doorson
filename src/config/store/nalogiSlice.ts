import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INalog } from '../types';
import { initialNalogi } from '../constants';

export interface NalogiState {
  value: INalog[];
}

const initialState: NalogiState = {
  value: initialNalogi,
};

export const nalogiSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dodajNalog: (state, action: PayloadAction<INalog>) => {
      state.value.push(action.payload);
    },
    spremeniNalog: (state, action: PayloadAction<INalog>) => {
      state.value = state.value.map((nalog) => {
        if (nalog.id == action.payload.id) {
          return action.payload;
        } else return nalog;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { dodajNalog, spremeniNalog } = nalogiSlice.actions;

export default nalogiSlice.reducer;
