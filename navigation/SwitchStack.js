import React from 'react'
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from './AppNavigation';

const Stack = createSharedElementStackNavigator();


export default function SwitchStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AppNavigation"
          options={{ gestureEnabled: false }}
          >
          <Stack.Screen
            name="AppNavigation"
            component={AppNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

