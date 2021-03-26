/* 
  State management using React Context and Reducer hooks
*/

import React, { createContext, useReducer } from "react";
import Reducer, { ACTIONS } from "./Reducer";

const initialState = {
  transactionsData: [],
  total: 0,
};
const Context = createContext(initialState);

function Store({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { Context, ACTIONS };
export default Store;
