import React, { useState, useContext, useEffect } from "react"
import { View, StyleSheet, Dimensions, Text } from "react-native"
import { PrimaryButton, TertiaryButton } from "../../../components/buttons"
import { StandardTextField } from "../../../components/textfields"
import Logo from "../../../components/logo"
import { Feather } from '@expo/vector-icons'
import TimePicker from "../../../components/time-picker"
import ThemeContext from "../../../context/theme"
import { searchSingleLocation } from "../../../api/locations"

const SearchDriver = ({ onSearch, onCancel }) => {
    const theme = useContext(ThemeContext)
    const [departingTime, setDepartingTime] = useState(new Date())
    const [from, setFrom] = useState("")
    const [fromSuggestion, setFromSuggestion] = useState("")
    const [to, setTo] = useState("")
    const [toSuggestion, setToSuggestion] = useState("")

    useEffect(() => {
        updateFromSearchSuggestion()
    }, [from])

    useEffect(() => {
        updateToSearchSuggestion()
    }, [to])

    const updateFromSearchSuggestion = async () => {
        if (from.length > 0) {
            const suggestion = await searchSingleLocation(from)
            if (suggestion !== fromSuggestion) {
                setFromSuggestion(suggestion)
            }
        } else {
            setFromSuggestion("")
        }
    }

    const updateToSearchSuggestion = async () => {
        if (to.length > 0) {
            const suggestion = await searchSingleLocation(to)
            if (suggestion !== toSuggestion) {
                setToSuggestion(suggestion)
            }
        } else {
            setToSuggestion("")
        }
    }

    const setDepartingHour = hour => {
        const date = new Date(departingTime)
        date.setHours(hour)
        if (dateIsInThePast(date)) {
            alert("Vi kan tyvärr inte färdas bakåt i tiden, men visst vore det coolt?")
            return
        }
        setDepartingTime(date)
    }

    const setDepartingMinute = minute => {
        const date = new Date(departingTime)
        date.setMinutes(minute)
        if (dateIsInThePast(date)) {
            alert("Vi kan tyvärr inte färdas bakåt i tiden, men visst vore det coolt?")
            return
        }
        setDepartingTime(date)
    }

    return (
        <View style={styles.wrapper}>
            <Logo style={ styles.logo }/>
            <TimePicker 
                style={{ marginBottom: 18 }} 
                hour={departingTime.getHours()}
                onHourChange={setDepartingHour} 
                minute={departingTime.getMinutes()}
                onMinuteChange={setDepartingMinute} 
            />
            <StandardTextField 
                value={from}
                onChangeText={setFrom}
                placeholder="Från"
                suggestion={fromSuggestion}
                style={styles.textInput} 
                icon={<Feather name="map-pin" size={18} color={theme.icon} />}
            />
            <StandardTextField 
                style={{zIndex: 13}}
                value={to}
                onChangeText={setTo}
                suggestion={toSuggestion}
                placeholder="Till" 
                style={styles.textInput} 
                icon={<Feather name="map-pin" size={18} color={theme.icon} />} 
            />
            <PrimaryButton text="Hitta förare" onPress={ onSearch } />
            <TertiaryButton text="Avbryt" onPress={ onCancel } />
        </View>
    )
}

const dateIsInThePast = date => {
    const now = new Date()
    return (date.getHours() < now.getHours()) || (date.getHours() === now.getHours() && date.getMinutes() < now.getMinutes())
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        marginBottom: 32,
    },
    textInput: {
        marginBottom: 18,
        width: Dimensions.get('window').width - 64,
    }
})

export default SearchDriver