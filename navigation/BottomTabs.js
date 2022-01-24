import * as  React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import MoreScreen from "../screens/more/MoreScreen";
import Note from "../screens/note/Note";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome5";
import { SecondScreenNavigator } from "./HomeStack";
import { ThirdScreenNavigator } from "./HomeStack";


import { NavigationContainer } from "@react-navigation/native";


// icons
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import { scale } from "react-native-size-matters";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      // initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // let rn = route.name;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            color = focused ? "#2AA893" : "gray";
            size = 20;
          } else if (route.name === "More") {
            iconName = focused ? "reorder-three" : "reorder-three-outline";
            color = focused ? "#2AA893" : "gray";
            size = 20;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          position: "absolute",
          flex: 1,
          bottom: 9,
          left: 120,
          right: 120,
          elevation: 0,
          backgroundColor: "#f5f5f5",
          borderRadius: 60,
          height: 66,
          paddingVertical: 10,
          paddingBottom: 8,
          alignItems: "center",
        },
        tabStyle: {
          // height: 73,
          // ALI
          //  position: 'absolute'
        },
        labelStyle: {
          fontSize: scale(13),
          fontFamily: "InterExtraBold",
          color: "#000000",
        },
      }}>
      <Tab.Screen
        name="Home"
        component={SecondScreenNavigator}
        options={{
          headerShow: false,
        }}
      />

      <Tab.Screen
        name="More"
        component={ThirdScreenNavigator}
        options={{
          headerShow: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
  shadow: {
    shadowColor: "#f5f5f5",
    shadowOffset: {
      width: 0,
      height: 1.5
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 5
  },
});