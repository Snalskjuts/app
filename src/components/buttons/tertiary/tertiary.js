import React, { useContext } from "react"
import { Text, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import ThemeContext from "../../../context/theme"

const TertiaryButton = ({ onPress, text, style, children, light }) => {
    const theme = useContext(ThemeContext)
    const styles = themedStyles(theme)
    
    const content = text ? (
        <Text style={ [styles.text, light ? styles.lightText : styles.normalText] }>{text}</Text>
    ) : children
    return (
        <TouchableOpacity onPress={ onPress } style={[ style, styles.button ]}>
            { content }
        </TouchableOpacity>
    )
}

const themedStyles = theme => StyleSheet.create({
    button: {
        paddingVertical: 20,
        paddingHorizontal: 32,
    },
    text: {
        fontSize: 18,
        fontFamily: "Poppins-SemiBold",
        lineHeight: 24
    },
    normalText: {
        color: theme.key,
    },
    lightText: {
        color: theme.background,
    }
})

export default TertiaryButton