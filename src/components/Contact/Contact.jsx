import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { DeleteButton, ContactItem, ContactIcon } from './Contact.styled';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <ContactIcon />
      {name}: {phone}
      <DeleteButton type="button" data-id={id} onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
