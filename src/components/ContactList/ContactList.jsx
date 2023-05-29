import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  getContacts,
  getIsLoading,
  getError,
  getSearchQuery,
} from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { ColorRing } from 'react-loader-spinner';

const getVisibleContacts = (contacts, searchQuery) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();

  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const searchQuery = useSelector(getSearchQuery);
  const visibleContacts = getVisibleContacts(items, searchQuery);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {isLoading && !error && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
      )}
      {error && <p>{error}</p>}
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone} />
        ))}
    </List>
  );
};
