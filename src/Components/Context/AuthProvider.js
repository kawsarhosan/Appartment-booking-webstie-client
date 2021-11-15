import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


export const authContext = createContext();
const AuthProvider = ({children}) => {
    const auth = useFirebase();

    return (
        <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
    );
};

export default AuthProvider;