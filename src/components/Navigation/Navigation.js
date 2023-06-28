import React from 'react';
import { Link } from './Navigation.styled';

const Navigation = () => (
  <nav>
    <Link to="/">Main</Link>

    <Link to="/phonebook">Phonebook</Link>
  </nav>
);

export default Navigation;
