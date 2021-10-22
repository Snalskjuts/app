import React, { useContext } from "react"
import ThemeContext from "../../context/theme"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

const Drive = ({ from, to, name, age, seats, time, style }) => {
    const theme = useContext(ThemeContext)
    const styles = themedStyles(theme)

    return (
        <View style={[styles.wrapper, style]}>
            <Text style={styles.time}>{ time }</Text>
            <Text style={styles.title}>{from} - {to}</Text>
            <View style={styles.information}>
                <AntDesign name="user" size={16} color={theme.text} />
                <Text style={styles.informationText}>{ name }, { age } år</Text>
            </View>
            <View style={[styles.information, { marginBottom: 0 }]}>
                <MaterialCommunityIcons name="van-passenger" size={18} color={theme.text} />
                <Text style={styles.informationText}>{ seats } platser</Text>
            </View>
        </View>
    )
}

const themedStyles = theme => StyleSheet.create({
    wrapper: {
        flex: 1,
        width: Dimensions.get('window').width - 64,
        borderRadius: 24,
        justifyContent: "center",
        backgroundColor: theme.background,
        paddingHorizontal: 24,
        paddingVertical: 24,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: {
            height: 6,
            width: 0
        },
        //android
        elevation: 8,
    },
    title: {
        fontSize: 18,
        color: theme.text,
        fontFamily: "Poppins-SemiBold",
        marginBottom: 12
    },
    information: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    informationText: {
        marginLeft: 8,
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        color: theme.text
    },  
    time: {
        position: "absolute",
        backgroundColor: theme.key,
        color: theme.background,
        bottom: 18,
        right: 18,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 16,
        overflow: "hidden"
    }
})

export default Drive