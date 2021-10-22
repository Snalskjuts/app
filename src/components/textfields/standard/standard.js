import React, { useState, useContext, useEffect, useRef } from "react"
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Animated } from "react-native"
import { Easing } from "react-native-reanimated"
import ThemeContext from "../../../context/theme"

const StandardTextField = ({ 
    onChangeText, 
    placeholder, 
    icon, 
    style, 
    light, 
    value,
    suggestion
}) => {
    const [focused, setFocused] = useState(false)
    const popIn = useRef(new Animated.Value(-12)).current
    const theme = useContext(ThemeContext)
    const styles = themedStyles(theme)
    
    useEffect(() => {
        if (suggestion && suggestion.length > 0) {
            Animated.timing(
                popIn,
                {
                    toValue: 0,
                    duration: 200,
                    easing: Easing.elastic(1.2),
                    useNativeDriver: true
                }
            ).start()
        }
    }, [suggestion])

    return (
        <View>
            { icon ? (
                <View style={ styles.icon }>{ icon }</View>
            ) : null }
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                onFocus={ () => setFocused(true) }
                onBlur={ () => setFocused(false) }
                style={[ style, styles.textInput, focused ? styles.focused : null, light ? styles.light : null ]}
            />
            { suggestion && suggestion !== "" && suggestion !== value ? (
                <TouchableOpacity 
                    style={[styles.suggestion, { transform: [{translateY: popIn}] }]} 
                    onPress={() => onChangeText(suggestion)}
                >
                    <Text style={styles.suggestionText}>{suggestion}</Text>
                </TouchableOpacity>
            ): null}
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
        fontFamily: "Poppins",
        zIndex: 10,
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
        zIndex: 11,
    },
    suggestion: {
        position: "absolute",
        top: -42,
        right: 16,
        backgroundColor: theme.key,
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 8,
        zIndex: 11
    },
    suggestionText: {
        color: theme.background,
        fontFamily: "Poppins-SemiBold"
    }
})

export default StandardTextField