import React, { useState } from "react"

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const logIn = user => {
        if (isValid(user)) {
            return setUser(user)
        }
        throw new Error("insufficient user information, cannot log in user")
    }

    const logOut = () => {
        setUser(null)
    }

    const isLoggedIn = () => {
        return user !== null
    }

    return (
        <UserContext.Provider value={{ logIn, logOut, isLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext

const isValid = user => {
    return (
        user.id && 
        user.jwt && 
        user.email && 
        user.firstName && 
        user.lastName && 
        user.birthYear
    )
}