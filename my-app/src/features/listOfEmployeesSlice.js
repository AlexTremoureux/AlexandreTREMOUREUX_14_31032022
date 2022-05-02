import { createSlice } from '@reduxjs/toolkit';
import { listOfEmployees } from '../utils/fakeData';

const initialState = listOfEmployees

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
