import { createSlice } from '@reduxjs/toolkit';

const searchInitialState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setSearchQuery(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
