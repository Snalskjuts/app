import React, { useState } from "react"
import { StyleSheet, Dimensions } from "react-native"
import { PrimaryButton, TertiaryButton } from "../../../components/buttons"
import { PasswordTextField, EmailTextField } from "../../../components/textfields"
import Logo from "../../../components/logo"
import { AntDesign } from '@expo/vector-icons'

const Login = ({ onLogin, onRegister }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <>
            <Logo style={ styles.logo } light/>
            <EmailTextField 
                light 
                placeholder="E-post" 
                style={styles.textInput} 
                icon={<AntDesign name="user" size={18} color="#A0A3BD" />}
                onChangeText={setEmail}
            />
            <PasswordTextField 
                light 
                placeholder="Lösenord" 
                style={styles.textInput} 
                icon={<AntDesign name="lock1" size={18} color="#A0A3BD" />} 
                onChangeText={setPassword}
            />
            <PrimaryButton light text="Logga in" onPress={ () => onLogin(email, password) } />
            <TertiaryButton light text="Registrera dig" onPress={ onRegister } />
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

export default Login