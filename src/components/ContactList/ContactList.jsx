import React from 'react';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Contact id={id} name={name} number={number} />
    ))}
  </ul>
);
