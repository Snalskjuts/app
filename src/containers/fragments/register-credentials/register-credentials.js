import React, { useState, useContext } from "react"
import { StyleSheet, Dimensions } from "react-native"
import { PrimaryButton, TertiaryButton } from "../../../components/buttons"
import { EmailTextField, PasswordTextField, StandardTextField } from "../../../components/textfields"
import Logo from "../../../components/logo"
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import ThemeContext from "../../../context/theme"

const MINIMUM_PASSWORD_LENGTH = 6

const RegisterCredentials = ({ onRegister, onCancel }) => {
    const theme = useContext(ThemeContext) 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const validateAndProceed = () => {
        const validateEmailRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
        const emailIsValid = validateEmailRegex.test(email.toLowerCase())
        const passwordLengthIsValid = password.length >= MINIMUM_PASSWORD_LENGTH
        const passwordsMatch = password === confirmPassword
        if (!emailIsValid) {
            alert("Vänligen fyll i en korrekt e-post adress")
            return
        } else if (!passwordLengthIsValid) {
            alert("Vänligen använd ett lösenord som är minst 6 karaktärer långt")
            return
        } else if (!passwordsMatch) {
            alert("Lösenorden är inte samma, vänligen försök igen")
            return
        }
        onRegister(email, password)
    }

    return (
        <>
            <Logo style={ styles.logo } light/>
            <EmailTextField
                onChangeText={setEmail}
                value={email}
                light 
                placeholder="E-post" 
                style={styles.textInput} 
                icon={<MaterialIcons name="alternate-email" size={18} color={theme.icon} />} 
            />
            <PasswordTextField 
                onChangeText={setPassword}
                value={password}
                light 
                placeholder="Lösenord" 
                style={styles.textInput} 
                icon={<AntDesign name="lock1" size={18} color={theme.icon} />} 
            />
            <PasswordTextField 
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                light 
                placeholder="Upprepa lösenord" 
                style={styles.textInput} 
                icon={<AntDesign name="lock1" size={18} color={theme.icon} />} 
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