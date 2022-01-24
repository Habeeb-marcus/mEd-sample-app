import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { enableScreens } from "react-native-screens";
import { FirstScreenNavigator } from "./HomeStack";
import BottomTabs from './BottomTabs'
enableScreens();


const RootStack = createSharedElementStackNavigator();


export default function AppNavigation() {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name="Splash"
          component={FirstScreenNavigator}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    );
}

const styles = StyleSheet.create({})
