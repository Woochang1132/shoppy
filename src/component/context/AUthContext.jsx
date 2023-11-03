import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({chrildren}){
    const [user, setUser] = useState();
    useEffect(() => {
        onUserStateChange((user) => {
            setUser(user);
        })
    } , [])
    return <AuthContext.Provider value={{user, login: login, logout:logout}}>
        {chrildren}
    </AuthContext.Provider>
}

export function useAuthContext(){
    return useContext(AuthContext);
}

