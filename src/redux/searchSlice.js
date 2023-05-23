import { createSlice } from '@reduxjs/toolkit';

const searchInitialState = {
  searchQuery: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
