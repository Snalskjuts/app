import React, { useState, useContext, useEffect } from "react"
import { View, StyleSheet, Dimensions, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Login, RegisterInformation, RegisterCredentials } from "../../containers/fragments"
import Dynamo from "../../containers/dynamo"
import { authenticateUserCredentials, registerUser } from "../../api/users"
import UserContext from "../../context/user"
import ThemeContext from "../../context/theme"
import Modal from "../../components/modal"

const Start = ({ navigation }) => {
    const { logIn } = useContext(UserContext)
    const theme = useContext(ThemeContext)
    const [userInformation, setUserInformation] = useState({})
    const [userCredentials, setUserCredentials] = useState({})
    const [shouldRegister, setShouldRegister] = useState(false)

    useEffect(() => {
        if (shouldRegister) {
            finalizeUserRegistration()
        }
    }, [shouldRegister])

    const finalizeUserRegistration = async () => {
        try {
            await registerUser({...userInformation, ...userCredentials})
            alert("Yay!")
            setShouldRegister(false)
        } catch (err) {
            alert(err)
        }
    }

    const registerInformation = (
        <RegisterInformation 
            onNext={(firstName, lastName, birthYear) => {
                setUserInformation({ firstName, lastName, birthYear })
                setCurrentView(registerCredentials)
            }} 
            onCancel={() => setCurrentView(login)} 
        />
    )
    const registerCredentials = (
        <RegisterCredentials 
            onRegister={(email, password) => {
                setUserCredentials({email, password})
                setShouldRegister(true)
                setCurrentView(login)
            }}
            onCancel={() => setCurrentView(login)} 
        />
    )
    const login = (
        <Login 
            onRegister={() => setCurrentView(registerInformation)} 
            onLogin={async (email, password) => {
                try {
                    const user = await authenticateUserCredentials(email, password)
                    logIn(user)
                    navigation.navigate("Search")
                } catch (err) {
                    alert(err)
                }
            }} 
        />
    )
        
    const [currentView, setCurrentView] = useState(login)

    return (
        <View style={styles.wrapper}>
            <LinearGradient 
                colors={[ theme.keyGradientTo, theme.key ]}
                style={styles.background}
                start={{x: 0, y: 0}}
                end={{x: 2.5, y: 1}}
            />
            <Modal title="Hiya!" open>
                <Text>Hello world</Text>
            </Modal>
            <Dynamo component={currentView} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 32,
    },
})

export default Start