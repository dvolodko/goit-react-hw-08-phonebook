import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);

export const deleteTask = createAction('contacts/deleteContact');

export const setSearchQuery = createAction('search/setSearchQuery');
