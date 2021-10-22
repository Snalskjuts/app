import React, { useContext } from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Text, StyleSheet } from "react-native"
import ThemeContext from "../../../context/theme"

const SecondaryButton = ({ onPress, text, style }) => {
    const theme = useContext(ThemeContext)
    const styles = themedStyles(theme)
    return (
        <TouchableOpacity onPress={ onPress } style={[styles.button, style]}>
            <Text style={styles.text}>{ text }</Text>
        </TouchableOpacity>
    )
}

const themedStyles = theme => StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: "transparent",
        borderColor: theme.key,
        borderWidth: 3,
        paddingVertical: 20,
        paddingHorizontal: 32,
    },
    text: {
        color: theme.key,
        fontSize: 18,
        fontFamily: "Poppins-SemiBold",
        lineHeight: 24
    }
})

export default SecondaryButton