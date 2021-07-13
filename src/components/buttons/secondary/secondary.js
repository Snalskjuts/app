import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Text, StyleSheet } from "react-native"

const SecondaryButton = ({ onPress, text, style }) => {
    return (
        <TouchableOpacity onPress={ onPress } style={[styles.button, style]}>
            <Text style={styles.text}>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: "transparent",
        borderColor: "#E99497",
        borderWidth: 3,
        paddingVertical: 20,
        paddingHorizontal: 32,
    },
    text: {
        color: "#E99497",
        fontSize: 18,
        fontFamily: "Poppins-SemiBold",
        lineHeight: 24
    }
})

export default SecondaryButton