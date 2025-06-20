'use client'
import React, { createContext, useContext, useState } from 'react';
import '../../utils/i18n'

interface IUserData {
  personalId: string;
  password: string;
}

interface IUserContextType {
    isLoginModalOpen: boolean;
    setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    userData: IUserData | null; 
    setUser: React.Dispatch<React.SetStateAction<IUserData | null>>
}

const UserContext = createContext<IUserContextType | undefined>(undefined);


 const UseProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const[isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const[user, setUser] = useState<IUserData | null>(null);
    
  return (
    <UserContext.Provider value={{isLoginModalOpen, setIsLoginModalOpen, userData: user, setUser}}>
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
