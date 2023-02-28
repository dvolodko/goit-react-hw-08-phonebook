import React from 'react';

export const Contact = ({ id, name, number }) => (
  <li key={id}>
    {name}: {number}
  </li>
);
