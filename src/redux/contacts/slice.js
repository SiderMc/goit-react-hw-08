import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContacts,
} from './operations';
import { logOut } from '../auth/operations';

const initialState = {
  items: [],
  loading: false,
  error: false,
  alert: {
    show: false,
    message: '',
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state.alert.show = true;
      state.alert.message = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(updateContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        );
      })
      .addCase(updateContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        return initialState;
      });
  },
});
export const { showMessage } = slice.actions;
export const contactsReducer = slice.reducer;
