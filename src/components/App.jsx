import React, { useState, useEffect, useRef } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, ContactsListWrapper } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState([
    { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1' },
    { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
    { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
    { name: 'Annie Copeland', number: '227-91-26', id: 'id-4' },
  ]);
  const [filter, setFilter] = useState('');
  const initialRender = useRef(true);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleChange = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addContact = contact => {
    if (
      contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contactsAdder={addContact} />
      <ContactsListWrapper>
        <h2>Contacts</h2>
        <Filter onChange={handleChange} />
        <ContactList
          contacts={filteredContacts()}
          contactRemover={removeContact}
        />
      </ContactsListWrapper>
    </Container>
  );
}
