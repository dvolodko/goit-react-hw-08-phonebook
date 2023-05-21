import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, searchReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: searchReducer,
  },
});
