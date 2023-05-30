import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectSearchQuery = state => state.searchQuery.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectSearchQuery],
  (items, searchQuery) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);
