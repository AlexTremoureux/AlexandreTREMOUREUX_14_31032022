import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light';

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    TOGGLE_THEME: (state ) => {
      return state ===  'light' ? 'dark' : 'light';
    },
  },
});

export const { TOGGLE_THEME } = themeSlice.actions;
export default themeSlice.reducer;