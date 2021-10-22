import React from "react"
import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native"

const Modal = ({ open, onClose, children, title }) => {
    return open ? (
        <View style={styles.backdrop}>
            <View style={styles.modal}>
                { !!title && title !== "" ? (
                    <Text style={style.title}>{title}</Text>
                ) : null  }
                {children}
            </View>
        </View>
    ) : null
}

const styles = StyleSheet.create({
    backdrop: {
        position: "absolute",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height + StatusBar.currentHeight,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100
    },
    modal: {
        borderRadius: 32, 
        backgroundColor: "white", // TODO: change to theme background
        paddingHorizontal: 16,
        paddingVertical: 18,
        width: Dimensions.get("window").width - 64,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {

    }
})

export default Modal