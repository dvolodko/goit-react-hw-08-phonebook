import React from 'react';
import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
}
