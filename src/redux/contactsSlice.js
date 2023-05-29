import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1' },
  { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
  { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
  { name: 'Annie Copeland', number: '227-91-26', id: 'id-4' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsInitialState,
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
