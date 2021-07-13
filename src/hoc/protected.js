import React, { useContext, useEffect } from "react"
import UserContext from "../context/user"

const Protected = ({ children }) => {
    const { isLoggedIn } = useContext(UserContext)

    useEffect(() => {
        if (!isLoggedIn()) {
            alert("Det verkar som att du har loggats ut, vänligen logga in igen")
        }
    }, [])

    return children
}

export default Protected