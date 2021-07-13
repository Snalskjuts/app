import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Text, StyleSheet } from "react-native"

const PrimaryButton = ({ onPress, text, style, light }) => {
    return (
        <TouchableOpacity onPress={ onPress } style={[styles.button, style, light ? styles.light : styles.normal]}>
            <Text style={[styles.text, light ? styles.lightText : styles.normalText]}>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 32,
        minWidth: 150,
        alignItems: "center"
    },
    light: {
        backgroundColor: "white",
    }, 
    normal: {
        backgroundColor: "#E99497",
    },
    text: {
        fontSize: 18,
        fontFamily: "Poppins-SemiBold",
        lineHeight: 24
    },
    normalText: {
        color: "white",
    },
    lightText: {
        color: "#E99497",
    }
})

export default PrimaryButton