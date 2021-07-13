import React from "react"
import { Text, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const TertiaryButton = ({ onPress, text, style, children, light }) => {
    const content = text ? (
        <Text style={ [styles.text, light ? styles.lightText : styles.normalText] }>{text}</Text>
    ) : children
    return (
        <TouchableOpacity onPress={ onPress } style={[ style, styles.button ]}>
            { content }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
        color: "#E99497",
    },
    lightText: {
        color: "white",
    }
})

export default TertiaryButton