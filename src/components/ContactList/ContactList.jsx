import React from 'react';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, contactRemover }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Contact
        id={id}
        name={name}
        number={number}
        contactRemover={contactRemover}
      />
    ))}
  </List>
);
