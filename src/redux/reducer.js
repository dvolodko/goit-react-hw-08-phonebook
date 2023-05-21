import { addContact, deleteTask, setSearchQuery } from './actions';

const contactsInitialState = [
  { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1' },
  { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
  { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
  { name: 'Annie Copeland', number: '227-91-26', id: 'id-4' },
];

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case addContact.type:
      return [...state, action.payload];
    case deleteTask.type:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case setSearchQuery.type:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
