import React from 'react';
import { DeleteButton, ContactItem } from './Contact.styled';

export const Contact = ({ id, name, number, contactRemover }) => (
  <ContactItem key={id}>
    {name}: {number}
    <DeleteButton type="button" data-id={id} onClick={contactRemover}>
      Delete
    </DeleteButton>
  </ContactItem>
);
