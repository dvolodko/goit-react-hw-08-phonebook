import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, ContactsListWrapper } from './App.styled';

// export const AppOld = () => {
// const handleChange = event => {
//   const { value } = event.currentTarget;
//   setFilter(value);
// };

// const filteredContacts = () => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// const addContact = contact => {
//   if (
//     contacts.some(
//       item => item.name.toLowerCase() === contact.name.toLowerCase()
//     )
//   ) {
//     alert(`${contact.name} is already in contacts`);
//     return;
//   }

//   setContacts(prevState => [...prevState, contact]);
// };

// const removeContact = id => {
//   setContacts(prevContacts =>
//     prevContacts.filter(contact => contact.id !== id)
//   );
// };

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm contactsAdder={addContact} />
//       <ContactsListWrapper>
//         <h2>Contacts</h2>
//         <Filter onChange={handleChange} />
//         <ContactList
//           contacts={filteredContacts()}
//           contactRemover={removeContact}
//         />
//       </ContactsListWrapper>
//     </Container>
//   );
// };

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactsListWrapper>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactsListWrapper>
    </Container>
  );
};
