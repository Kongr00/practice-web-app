import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";



const AuthContext = createContext({});
export const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        () => sessionStorage.getItem('isAuthenticated') === 'true'
    )

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.setItem('isAuthenticated', isAuthenticated.toString());
    }, [isAuthenticated]);

    const login = () => {
        setIsAuthenticated(true)
        navigate('home')
    }

    const logout = () => {
        setIsAuthenticated(false)
        navigate('login')
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error("Error was occurred while authentication")
    }

    return context
}