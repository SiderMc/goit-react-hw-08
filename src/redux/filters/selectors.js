import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";


export const selectFilters = state => state.filters.name;
export const selectFilteredContacts  = createSelector(
  [selectContacts, selectFilters],
  (contacts, value) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  }
);