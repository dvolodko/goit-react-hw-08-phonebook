import React from 'react';
import PropTypes from 'prop-types';
import { Label, InputField } from './Filter.styled';

export const Filter = ({ onChange }) => (
  <Label>
    Find contacts by name
    <InputField type="text" name="filter" onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
