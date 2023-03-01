import React from 'react';
import PropTypes from 'prop-types';
import { DeleteButton, ContactItem } from './Contact.styled';

export const Contact = ({ id, name, number, contactRemover }) => (
  <ContactItem key={id}>
    {name}: {number}
    <DeleteButton type="button" data-id={id} onClick={contactRemover}>
      Delete
    </DeleteButton>
  </ContactItem>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactRemover: PropTypes.func.isRequired,
};
