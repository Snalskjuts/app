import React, { useState, useContext } from "react"
import { StyleSheet, Dimensions } from "react-native"
import { PrimaryButton, TertiaryButton } from "../../../components/buttons"
import { StandardTextField } from "../../../components/textfields"
import Logo from "../../../components/logo"
import { AntDesign } from '@expo/vector-icons'
import ThemeContext from "../../../context/theme"

const MINIMUM_AGE = 18

const RegisterInformation = ({ onNext, onCancel }) => {
    const theme = useContext(ThemeContext)
    const earliestBirthYear = new Date().getFullYear() - MINIMUM_AGE
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthYear, setBirthYear] = useState(earliestBirthYear.toString())

    const validateAndProceed = () => {
        if (firstName.trim() === "" || lastName.trim() === "") {
            alert("Vänligen fyll i ditt namn")
            return
        } 
        const birthYearAsInt = parseInt(birthYear, 10)
        if (!birthYearAsInt) {
            alert("Vänligen använd endast siffror för ditt födelseår")
            return
        }
        if (birthYearAsInt > earliestBirthYear) {
            alert(`Användare av SnålSkjuts måste vara ${MINIMUM_AGE} år eller äldre`)
            return
        }
        onNext(firstName, lastName, birthYearAsInt)
    }

    return (
        <>
            <Logo style={ styles.logo } light/>
            <StandardTextField 
                light 
                placeholder="Förnamn" 
                style={styles.textInput} 
                icon={<AntDesign name="user" size={18} color={theme.icon} />}
                onChangeText={setFirstName}
                value={firstName}
            />
            <StandardTextField 
                light 
                placeholder="Efternamn" 
                style={styles.textInput} 
                icon={<AntDesign name="user" size={18} color={theme.icon} />} 
                onChangeText={setLastName}
                value={lastName}
            />
            <StandardTextField 
                light 
                placeholder="Födelseår" 
                style={styles.textInput} 
                icon={<AntDesign name="calendar" size={18} color={theme.icon} />} 
                onChangeText={setBirthYear}
                value={birthYear}
            />
            <PrimaryButton light text="Nästa" onPress={ validateAndProceed } />
            <TertiaryButton light text="Avbryt" onPress={ onCancel }/>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginBottom: 32,
    },
    textInput: {
        marginBottom: 18,
        width: Dimensions.get('window').width - 64,
    }
})

export default RegisterInformation