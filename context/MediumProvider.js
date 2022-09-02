import React, { useState } from "react";
import { createContext } from "react";

const MediumContext = createContext(null);

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  return <div></div>;
};

export default MediumProvider;
