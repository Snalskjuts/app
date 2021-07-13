import React, { useState, useEffect } from "react"
import * as Location from "expo-location"

const useCurrentLocation = () => {
    const [currentLocation, setCurrentLocation] = useState({
        longitude: 1,
        latitude: 1,
        longitudeDelta: .01,
        latitudeDelta: .01
    })

    useEffect(() => {
        updateCurrentLocation()
    }, [])

    const updateCurrentLocation = async () => {
        const location = await fetchCurrentLocation()
        setCurrentLocation({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            longitudeDelta: .01,
            latitudeDelta: .01,
        })
    }

    const fetchCurrentLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status === "granted") {
            return (await Location.getCurrentPositionAsync())
        }
    }

    return [currentLocation, updateCurrentLocation]
}

export { useCurrentLocation }