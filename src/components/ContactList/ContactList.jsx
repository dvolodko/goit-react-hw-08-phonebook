import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, contactRemover }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        contactRemover={contactRemover}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  contactRemover: PropTypes.func.isRequired,
};
