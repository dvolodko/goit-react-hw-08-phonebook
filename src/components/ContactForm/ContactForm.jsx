import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import {
  Container,
  Form,
  Label,
  InputField,
  SubmitButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact(name, number));
    form.reset();
    console.log(name, number);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name{' '}
          <InputField
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number{' '}
          <InputField
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Container>
  );
};
