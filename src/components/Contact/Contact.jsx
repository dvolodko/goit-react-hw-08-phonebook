import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { DeleteButton, ContactItem, ContactIcon } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <ContactIcon />
      {name}: {number}
      <DeleteButton type="button" data-id={id} onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
