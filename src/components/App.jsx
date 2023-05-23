import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, ContactsListWrapper } from './App.styled';

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
