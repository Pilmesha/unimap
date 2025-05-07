'use client'
import React, { createContext, useContext, useState } from 'react';
interface UserContextType {
    isLoginModalOpen: boolean;
    setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const UserContext = createContext<UserContextType | undefined>(undefined);


 const UseProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const[isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    
  return (
    <UserContext.Provider value={{isLoginModalOpen, setIsLoginModalOpen}}>
        {children}
    </UserContext.Provider>
  )
}

export const UseUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useuser must be used in/within the userprovider, sike')
    return context
}

export default UseProvider;
