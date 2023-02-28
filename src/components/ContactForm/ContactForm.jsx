import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmitHandler = data => {
    const id = nanoid();
    const contact = {
      name: data.name,
      number: data.number,
      id: id,
    };
    this.props.contactsAdder(contact);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.formSubmitHandler(this.state);
    this.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name{' '}
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number{' '}
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
