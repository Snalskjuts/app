import React, { useState } from "react"
import { StyleSheet, Dimensions } from "react-native"
import { PrimaryButton, TertiaryButton } from "../../../components/buttons"
import { StandardTextField } from "../../../components/textfields"
import Logo from "../../../components/logo"
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const RegisterCredentials = ({ onRegister, onCancel }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const validateAndProceed = () => {
        if (email !== "" && password !== "" && confirmPassword !== "") {
            return onRegister(email, password)
        }
        alert("Vänligen fyll i alla fälten")
    }

    return (
        <>
            <Logo style={ styles.logo } light/>
            <StandardTextField
                onChangeText={setEmail}
                value={email}
                light 
                placeholder="E-post" 
                style={styles.textInput} 
                icon={<MaterialIcons name="alternate-email" size={18} color="#A0A3BD" />} 
            />
            <StandardTextField 
                onChangeText={setPassword}
                value={password}
                light 
                placeholder="Lösenord" 
                style={styles.textInput} 
                icon={<AntDesign name="lock1" size={18} color="#A0A3BD" />} 
            />
            <StandardTextField 
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                light 
                placeholder="Upprepa lösenord" 
                style={styles.textInput} 
                icon={<AntDesign name="lock1" size={18} color="#A0A3BD" />} 
            />
            <PrimaryButton light text="Registrera dig" onPress={ validateAndProceed } />
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

export default RegisterCredentials