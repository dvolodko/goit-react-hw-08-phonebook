import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { ColorRing } from 'react-loader-spinner';

export const ContactList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const contacts = useSelector(selectVisibleContacts);

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
      {contacts.length > 0 &&
        contacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone} />
        ))}
    </List>
  );
};
