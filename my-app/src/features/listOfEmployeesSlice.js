import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const listOfEmployeesSlice = createSlice({
  name: 'listOfEmployees',
  initialState,
  reducers: {
    ADD_EMPLOYEE: (state, action) => {
      return state = [...state, action.payload]
    },
  },
});

export const { ADD_EMPLOYEE } = listOfEmployeesSlice.actions;
export default listOfEmployeesSlice.reducer;
