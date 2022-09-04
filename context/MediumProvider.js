import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";

export const MediumContext = createContext(null);

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const contextValue = { users, posts };
  useEffect(() => {
    const getUsers = async () => {
      const querySnapShot = await getDocs(collection(db, "articles"));
      querySnapShot.docs.map((doc) => console.log(doc.data()));
    };
    getUsers();
  }, []);
  return (
    <>
      <MediumContext.Provider value={contextValue}>
        {children}
      </MediumContext.Provider>
    </>
  );
};

export default MediumProvider;
