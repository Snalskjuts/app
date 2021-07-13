import React from "react"
import { PrimaryButton, SecondaryButton } from "../../../components/buttons"
import { StyleSheet, Text } from "react-native"
import Logo from "../../../components/logo"

const SelectRouteType = ({ onSelectPassenger, onSelectDriver }) => {
    return (
        <>
            <Logo style={ styles.logo } />
            <PrimaryButton text="Hitta passagerare" onPress={onSelectPassenger} style={ styles.button } />
            <SecondaryButton text="Hitta förare" onPress={onSelectDriver} style={ styles.button } />
        </>
    )
}


const styles = StyleSheet.create({
    button: {
        marginTop: 16
    },
    logo: {
        marginBottom: 16
    },
})

export default SelectRouteType