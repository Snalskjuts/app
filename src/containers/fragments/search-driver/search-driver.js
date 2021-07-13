import React, { useState } from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import { PrimaryButton, TertiaryButton } from "../../../components/buttons"
import { StandardTextField } from "../../../components/textfields"
import Logo from "../../../components/logo"
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const SearchDriver = ({ onSearch, onCancel }) => {
    return (
        <View style={styles.wrapper}>
            <Logo style={ styles.logo }/>
            <StandardTextField placeholder="Nu" style={styles.textInput} icon={<MaterialIcons name="access-time" size={18} color="#A0A3BD" />} />
            <StandardTextField placeholder="Från" style={styles.textInput} icon={<Feather name="map-pin" size={18} color="#A0A3BD" />} />
            <StandardTextField placeholder="Till" style={styles.textInput} icon={<Feather name="map-pin" size={18} color="#A0A3BD" />} />
            <PrimaryButton text="Hitta förare" />
            <TertiaryButton text="Avbryt" onPress={ onCancel } />
        </View>
    )
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