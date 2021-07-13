import React, { useEffect, useState } from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import * as Font from "expo-font"
import { UserProvider } from './src/context/user';

import { Search, Start } from './src/screens'

const Stack = createStackNavigator();

export default function App() {
  const [resourcesLoaded, setResourcesLoaded] = useState(false)

  useEffect(() => {
    loadFonts()
  }, [])

  const loadFonts = async () => {
    await Font.loadAsync({
      "Poppins": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    })
    setResourcesLoaded(true)
  }

  return (
      resourcesLoaded ?
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen 
              options={{ headerShown: false}}
              name="Start" 
              component={ Start } 
            />
            <Stack.Screen 
              options={{ headerShown: false}}
              name="Search" 
              component={ Search } 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
      : null
  )
}