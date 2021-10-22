import React, { useState } from "react"

const ThemeContext = React.createContext()

const initialState = {
    key: "#E99497",
    keyGradientTo: "#FFBFC2",
    accent: "#B3E283",
    text: "#14142B",
    background: "#FFFFFF",
    input: "#EFF0F6",
    inputFocused: "#F4F5FA",
    icon: "#A0A3BD"
}

export const ThemeProvider = ({ children }) => {
    const [theme, _] = useState(initialState)

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext