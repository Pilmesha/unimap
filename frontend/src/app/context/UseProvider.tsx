'use client'
import React, { createContext, useContext, useState } from 'react';
import '../../utils/i18n'
export interface ILesson {
  ტიპი: string;
  ლექტორი: string;
  აუდიტორია: string;
  დღე: string;
  დრო: string;
}
export interface ISubject {
  დასახელება: string;
  გაკვეთილები: ILesson[];
}
export interface ITableData {
  საგნები: ISubject[];
}

interface IUserContextType {
    isLoginModalOpen: boolean;
    setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    user: ITableData | null;
    setUser: React.Dispatch<React.SetStateAction<ITableData | null>>
}

const UserContext = createContext<IUserContextType | undefined>(undefined);


 const UseProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const[isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const[user, setUser] = useState<ITableData | null>(null)
    
  return (
    <UserContext.Provider value={{isLoginModalOpen, setIsLoginModalOpen, user, setUser}}>
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
