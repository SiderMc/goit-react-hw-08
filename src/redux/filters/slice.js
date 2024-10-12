import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};
const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = slice.actions;
export const filterReducer = slice.reducer;
