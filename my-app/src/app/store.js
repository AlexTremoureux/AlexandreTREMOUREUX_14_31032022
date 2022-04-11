import { configureStore } from "@reduxjs/toolkit";
import listOfEmployeesReducer from "../features/listOfEmployeesSlice";
import themeReducer from "../features/themeSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  listOfEmployees: listOfEmployeesReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
