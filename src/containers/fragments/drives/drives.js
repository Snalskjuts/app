import React, { useState, useContext } from "react"
import { FlatList, View, StyleSheet, Dimensions, StatusBar } from "react-native"
import Drive from "../../../components/drive"
import Logo from "../../../components/logo"

const test = [
    {
        id: "1",
        name: "Rasmus",
        age: 23,
        from: "Varberg",
        to: "Göteborg",
        time: "22:15",
        seats: 3,
    },
    {
        id: "2",
        name: "Rasmus",
        age: 23,
        from: "Varberg",
        to: "Göteborg",
        time: "22:15",
        seats: 3,
    },
    {
        id: "3",
        name: "Rasmus",
        age: 23,
        from: "Varberg",
        to: "Göteborg",
        time: "22:15",
        seats: 3,
    },
    {
        id: "4",
        name: "Rasmus",
        age: 23,
        from: "Varberg",
        to: "Göteborg",
        time: "22:15",
        seats: 3,
    },
]

const Drives = ({ criteria }) => {
    const renderDrive = ({ item }) => (
        <Drive
            name={item.name}
            age={item.age}
            from={item.from}
            to={item.to}
            time={item.time}
            seats={item.seats}
            style={{marginBottom: 24, alignSelf: "center"}}
        />
    )

    return (
        <View style={styles.wrapper}>
            <Logo style={styles.logo} />
            <FlatList
                data={test}
                renderItem={renderDrive}
                keyExtractor={drive => drive.id}
                style={styles.list}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: Dimensions.get("window").height - StatusBar.currentHeight || 0,
        alignItems: "center",
    },
    logo: {
        marginTop: StatusBar.currentHeight || 0 + 64, 
        marginBottom: 16,
    },
    list: {
        width: Dimensions.get("window").width,
    },
    contentContainer: {
        paddingTop: 18,
    }
})

export default Drives