import React, { useState, useContext } from "react"
import Protected from "../../hoc/protected"
import { View, StyleSheet, Dimensions } from "react-native"
import MapView from "react-native-maps"
import { useCurrentLocation } from "../../hooks/location"
import { SelectRouteType, SearchDriver } from "../../containers/fragments"
import Dynamo from "../../containers/dynamo"
import Drives from "../../containers/fragments/drives"

const Search = () => {
    const [currentLocation] = useCurrentLocation()
    const drivesFragment = (
        <Drives />
    )
    const searchDriverFragment = (
        <SearchDriver
            onSearch={() => setDynamoComponent(drivesFragment)}
            onCancel={() => setDynamoComponent(selectRouteFragment)}
        />
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
    }
})

export default Search