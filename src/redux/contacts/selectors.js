export const selectContacts = state => state.contacts.items;
export const selectEditContact = state => state.contacts.editContact;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectMessageShow = state => state.contacts.alert.show;
export const selectMessage = state => state.contacts.alert.message;
