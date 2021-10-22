import React, { useContext } from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Text, StyleSheet } from "react-native"
import ThemeContext from "../../../context/theme"

const PrimaryButton = ({ onPress, text, style, light }) => {
    const theme = useContext(ThemeContext)
    const styles = themedStyles(theme)
    return (
        <TouchableOpacity onPress={ onPress } style={[styles.button, style, light ? styles.light : styles.normal]}>
            <Text style={[styles.text, light ? styles.lightText : styles.normalText]}>{ text }</Text>
        </TouchableOpacity>
    )
}

const themedStyles = theme => StyleSheet.create({
    button: {
        borderRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 32,
        minWidth: 150,
        alignItems: "center"
    },
    light: {
        backgroundColor: theme.background,
    }, 
    normal: {
        backgroundColor: theme.key,
    },
    text: {
        fontSize: 18,
        fontFamily: "Poppins-SemiBold",
        lineHeight: 24
    },
    normalText: {
        color: theme.background,
    },
    lightText: {
        color: theme.key,
    }
})

export default PrimaryButton