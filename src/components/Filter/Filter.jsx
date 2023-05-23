import React from 'react';
import { useDispatch } from 'react-redux';
import { Label, InputField } from './Filter.styled';
import { setSearchQuery } from 'redux/searchSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <InputField type="text" name="filter" onChange={onChange} />
    </Label>
  );
};
