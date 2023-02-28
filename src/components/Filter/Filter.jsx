import React from 'react';

export const Filter = ({ onChange }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" onChange={onChange} />
  </label>
);
