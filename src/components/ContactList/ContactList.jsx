import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getSearchQuery } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';

const getVisibleContacts = (contacts, searchQuery) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.searchQuery.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const searchQuery = useSelector(getSearchQuery);
  const visibleContacts = getVisibleContacts(contacts, searchQuery);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
