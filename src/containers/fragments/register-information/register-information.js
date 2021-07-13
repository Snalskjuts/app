import React, { useState } from "react"
import { StyleSheet, Dimensions } from "react-native"
import { PrimaryButton, TertiaryButton } from "../../../components/buttons"
import { StandardTextField } from "../../../components/textfields"
import Logo from "../../../components/logo"
import { AntDesign } from '@expo/vector-icons'

const RegisterInformation = ({ onNext, onCancel }) => {
    const earliestBirthYear = new Date().getFullYear() - 18
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthYear, setBirthYear] = useState(earliestBirthYear.toString())

    const validateAndProceed = () => {
        console.log("INFO register-info.js", firstName, lastName, birthYear)
        if (firstName !== "" && lastName !== "") {
            return onNext(firstName, lastName, birthYear)
        }
        alert("Vänligen fyll i alla fält")
    }

    return (
        <>
            <Logo style={ styles.logo } light/>
            <StandardTextField 
                light 
                placeholder="Förnamn" 
                style={styles.textInput} 
                icon={<AntDesign name="user" size={18} color="#A0A3BD" />}
                onChangeText={setFirstName}
                value={firstName}
            />
            <StandardTextField 
                light 
                placeholder="Efternamn" 
                style={styles.textInput} 
                icon={<AntDesign name="user" size={18} color="#A0A3BD" />} 
                onChangeText={setLastName}
                value={lastName}
            />
            <StandardTextField 
                light 
                placeholder="Födelseår" 
                style={styles.textInput} 
                icon={<AntDesign name="calendar" size={18} color="#A0A3BD" />} 
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