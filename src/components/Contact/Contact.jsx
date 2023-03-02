import React from 'react';
import PropTypes from 'prop-types';
import { DeleteButton, ContactItem } from './Contact.styled';

export const Contact = ({ id, name, number, contactRemover }) => (
  <ContactItem>
    {name}: {number}
    <DeleteButton type="button" data-id={id} onClick={() => contactRemover(id)}>
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
