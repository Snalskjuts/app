import React, { useState, useContext } from "react"
import Protected from "../../hoc/protected"
import { View, StyleSheet, Text, Dimensions } from "react-native"
import MapView from "react-native-maps"
import { useCurrentLocation } from "../../hooks/location"
import { SelectRouteType, SearchDriver } from "../../containers/fragments"
import Dynamo from "../../containers/dynamo"
import { TertiaryButton } from "../../components/buttons"
import UserContext from "../../context/user"

const Search = () => {
    const { logOut, isLoggedIn } = useContext(UserContext)
    const [currentLocation] = useCurrentLocation()
    const searchDriverFragment = (
        <SearchDriver onCancel={() => setDynamoComponent(selectRouteFragment)} />
    )
    const selectRouteFragment = (<SelectRouteType 
        onSelectDriver={() => setDynamoComponent(searchDriverFragment)}
    />)
    const [dynamoComponent, setDynamoComponent] = useState(selectRouteFragment)

    return (
        <Protected>
            <View>
                <MapView style={ styles.map } region={currentLocation} />
                <View style={ styles.overlay }>
                    <Dynamo component={ dynamoComponent } />
                    <Text style={styles.version}>v1.0.0</Text>
                </View>
            </View>
        </Protected>
    )
}

const styles = StyleSheet.create({
    map: {
        position: "relative",
        zIndex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 24,
    },
    overlay: {
        position: "absolute",
        zIndex: 100,
        backgroundColor: "rgba(255,255,255, .9)",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 24,
        justifyContent: "center",
        alignItems: "center",
    },
    version: {
        fontFamily: "Poppins",
        position: "absolute",
        bottom: 42,
        color: "#B0B0C3"
    }
})

export default Search