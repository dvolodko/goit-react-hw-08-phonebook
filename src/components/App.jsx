import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  filteredContacts = () => {
    const result = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return result;
  };

  addContact = contact => {
    this.setState(prevState => {
      const newContacts = [...prevState.contacts, contact];
      return { contacts: newContacts };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contactsAdder={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <Filter onChange={this.handleChange} />
          <ContactList
            contacts={
              this.state.filter ? this.filteredContacts() : this.state.contacts
            }
          />
        </div>
      </div>
    );
  }
}
