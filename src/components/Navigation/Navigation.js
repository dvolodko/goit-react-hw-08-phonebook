import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Link to="/">Main</Link>

      {isLoggedIn && <Link to="/phonebook">Phonebook</Link>}
    </nav>
  );
};

export default Navigation;
