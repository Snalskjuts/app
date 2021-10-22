import React, { useState, useContext } from "react"
import { TextInput, StyleSheet, View } from "react-native"
import ThemeContext from "../../../context/theme"

const PasswordTextField = ({ onChangeText, placeholder, icon, style, light, value }) => {
    const [focused, setFocused] = useState(false)
    const theme = useContext(ThemeContext)
    const styles = themedStyles(theme)
    return (
        <View>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                onFocus={ () => setFocused(true) }
                onBlur={ () => setFocused(false) }
                secureTextEntry={true}
                style={[ style, styles.textInput, focused ? styles.focused : null, light ? styles.light : null ]}
            />
            { icon ? (
                <View style={ styles.icon }>{ icon }</View>
            ) : null }
        </View>
    )
}

const themedStyles = theme => StyleSheet.create({
    textInput: {
        backgroundColor: theme.input,
        paddingHorizontal: 24,
        paddingVertical: 16,
        minWidth: 150,
        borderRadius: 16,
        fontSize: 16,
        fontFamily: "Poppins"
    },
    light: {
        backgroundColor: theme.background
    },  
    focused: {
        backgroundColor: theme.inputFocused,
    },
    icon: {
        position: "absolute",
        right: 16,
        top: 20,
    }
})

export default PasswordTextField