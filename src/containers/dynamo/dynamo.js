import React, { useState, useEffect } from "react"
import { Animated, Dimensions, Easing } from "react-native"

const Dynamo = ({ component }) => {
    const [dynamo, setDynamo] = useState(null)
    
    useEffect(() => {
        if (!dynamo) {
            setDynamo({
                component,
                offsetX: new Animated.Value(0),
            })
            return
        }
        Animated.timing(
            dynamo.offsetX,
            {
                toValue: -Dimensions.get('window').width,
                duration: 400,
                easing: Easing.back(2),
                useNativeDriver: true,
            }
        ).start(() => {
            console.log("done.")
            setDynamo({
                component, 
                offsetX: new Animated.Value(Dimensions.get('window').width)
            })
        })
    }, [component])

    useEffect(() => {
        if (!dynamo) return
        Animated.timing(
            dynamo.offsetX,
            {
                toValue: 0,
                duration: 400,
                easing: Easing.elastic(1),
                useNativeDriver: true,
            }
        ).start()
    }, [dynamo])

    return dynamo ? (
        <Animated.View style={{ alignItems: "center", transform: [{translateX: dynamo.offsetX}] }}>
            {dynamo.component}
        </Animated.View>
    ) : null
}

export default Dynamo