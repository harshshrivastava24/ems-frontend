import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorageData } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        const { employees, admin } = getLocalStorageData();
        setUserData({ employees, admin })
    }, [])

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider