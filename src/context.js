import React, { useState, useEffect } from "react";
import { createContext } from "react";
import datas from "./data.json";
import { pFirestore } from "./firebaseConfig";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const data = datas;

  const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      const unsub = pFirestore
        .collection(collection)
        .orderBy("date", "desc")
        .onSnapshot((snapshot) => {
          let documents = [];
          snapshot.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs(documents);
          console.log(documents);
        });

      return () => unsub();
    }, [collection]);

    return { docs };
  };

  return (
    <DataContext.Provider
      value={{
        data,
        useFirestore,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
