import { createContext, useState } from "react";


//creo el contexto
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || [])

let data = {
    user,
    setUser
}

  return (
    //pongo a disposición el contexto con children
    <UserContext.Provider value={data}> {children}</UserContext.Provider>
  );
}




