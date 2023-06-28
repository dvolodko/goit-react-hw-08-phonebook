import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { Container, ContactsListWrapper } from './ContactsView.styled';

const ContactsView = () => {
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

export default ContactsView;
