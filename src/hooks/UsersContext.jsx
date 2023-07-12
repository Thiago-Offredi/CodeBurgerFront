import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})
    const putUserData = async userInfo => {
        setUserData(userInfo)


        await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))

    }
    const logout = async () => {
        await localStorage.removeItem('codeburger:userData')
    }

    useEffect(() => {
        const loadUserData = async () => {
            const clietInfo = await localStorage.getItem('codeburger:userData')
            if (clietInfo) {
                setUserData(JSON.parse(clietInfo))

            }

        }

        loadUserData()
    }, [])


    return (
        <UserContext.Provider value={{ putUserData, userData, logout }}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser must be used with Usercontext")
    }
    return context
}




UserProvider.prototypes = {
    children: PropTypes.node
}

