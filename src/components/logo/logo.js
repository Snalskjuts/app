import React from "react"
import { View, StyleSheet, Image } from "react-native"
 
const Logo = ({ style, light }) => {
    return (
        <View style={ [styles.logo, style] }>
            <Image style={styles.image} source={light ? require("../../../assets/logo_white.png") : require("../../../assets/logo.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        
    },
    image: {
        resizeMode: "contain"
    }
})

export default Logo