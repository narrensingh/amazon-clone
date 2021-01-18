import React, { createContext, useContext, useReducer } from 'react';

//Prepares a data Layer
export const StateContext = createContext();

// Wrap our app and provide a data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull the Information from the Data Layer
export const useStateValue = () => useContext(StateContext);
