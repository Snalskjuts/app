import React, { useState } from "react"
import { TextInput, StyleSheet, View } from "react-native"

const PasswordTextField = ({ onChangeText, placeholder, icon, style, light, value }) => {
    const [focused, setFocused] = useState(false)
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

export default PasswordTextField

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "#EFF0F6",
        paddingHorizontal: 24,
        paddingVertical: 16,
        minWidth: 150,
        borderRadius: 16,
        fontSize: 16,
        fontFamily: "Poppins"
    },
    light: {
        backgroundColor: "white"
    },  
    focused: {
        backgroundColor: "#F4F5FA",
    },
    icon: {
        position: "absolute",
        right: 16,
        top: 20,
    }
})