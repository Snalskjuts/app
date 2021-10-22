import React, { useContext } from "react"
import { Picker } from "@react-native-community/picker"
import { StyleSheet, View, Dimensions } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 
import ThemeContext from "../../context/theme";

const TimePicker = ({ hour, onHourChange, minute, onMinuteChange, style }) => {
    const theme = useContext(ThemeContext)
    const styles = themedStyles(theme)

    const hours = getAllHours().map(hour => <Picker.Item key={hour} label={hour.toString()} value={hour} />)
    const minutes = getAllMinutes().map(minute => <Picker.Item key={minute} label={minute.toString()} value={minute} />)
    return (
        <View style={[styles.wrapper, style]}>
            <View style={styles.pickerWrapper}>
                <Picker 
                    style={styles.picker} 
                    mode="dropdown" 
                    selectedValue={hour}
                    onValueChange={h => onHourChange(h)}
                >{ hours }</Picker>
            </View>
            <FontAwesome5 name="clock" size={24} style={styles.icon} color={theme.text} />
            <View style={[styles.pickerWrapper]}>
                <Picker 
                    style={styles.picker} 
                    mode="dropdown" 
                    selectedValue={minute}
                    onValueChange={m => onMinuteChange(m)}
                >{ minutes }</Picker>
            </View>
        </View>
    )
}

const getAllHours = () => {
    const hours = []
    for (let i = 0; i < 24; i++) {
        hours.push((i) % 24)
    }
    return hours
}

const getAllMinutes = () => {
    const minutes = []
    for (let i = 0; i < 60; i++) {
        minutes.push((i) % 60)
    }
    return minutes
}

const themedStyles = theme => StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        maxWidth: Dimensions.get('window').width - 64,
        justifyContent: "center",
        alignItems: "center",
    },
    pickerWrapper: {
        flex: 1,
        backgroundColor: theme.input,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 16,
        fontSize: 16,
        fontFamily: "Poppins",
        flexDirection: "row",
    },
    picker: {
        flex: 1,
    },
    item: {
        fontSize: 30
    },
    icon: {
        marginHorizontal: 12
    }
})

export default TimePicker