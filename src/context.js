import React from "react";
import { createContext } from "react";
import datas from "./data.json";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const data = datas;

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
