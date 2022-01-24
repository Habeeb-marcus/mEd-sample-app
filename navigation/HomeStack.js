import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Easing,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  StatusBar,
} from "react-native";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import Onboarding from "../screens/Onboarding/Onboarding";
import MailVerf from "../screens/mail/MailVerf";
import Note from '../screens/note/Note';
import PhoneVerf from "../screens/phone/PhoneVerf";
import CodeVerf from "../screens/code/CodeVerf";
import SigninScreen from "../screens/signin/SigninScreen";
import HomeScreen from "../screens/home/HomeScreen";
import MoreScreen from "../screens/more/MoreScreen";
import SignupScreen from "../screens/signup/SignupScreen";
// import MainScreen from "./components/MainScreen";
import QuotesModal from "../screens/modals/QuotesModal";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";



enableScreens();

// different Navigators
const Stack = createSharedElementStackNavigator();
// const Tab = createBottomTabNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 400,
    easing: Easing.linear,
  },
};

// splash screen which automatically changes to sigin page
 export const FirstScreenNavigator = () => {
   return (
     <Stack.Navigator initialRouteName="Splash">
       <Stack.Screen
         name="Splash"
         component={SplashScreen}
         options={{
           headerShown: false,
           ...TransitionPresets.SlideFromRightIOS,
         }}
       />

       <Stack.Screen
         name="Signin"
         component={SigninScreen}
         options={{
           headerShown: false,
          //  ...TransitionPresets.SlideFromRightIOS,
          //  transitionSpec: {
          //    open: closeConfig,
          //    close: closeConfig,
          //  },
         }}
       />
     </Stack.Navigator>
   );
 };

// Homestack showing home page and folder or notes pages(but i will use codeverf to test)
     export const SecondScreenNavigator = ({navigation, route}) => {
       if(route.state && route.state.index > 0){
         navigation.setOptions({tabBarVisible: false })
       }else {
            navigation.setOptions({ tabBarVisible: true });
       }
      return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />

          <Stack.Screen
            name="CodeVerf"
            component={CodeVerf}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
              transitionSpec: {
                open: closeConfig,
                close: closeConfig,
              },
            }}
          />
          <Stack.Screen
            name="Note"
            component={Note}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
              transitionSpec: {
                open: closeConfig,
                close: closeConfig,
              },
            }}
          />
        </Stack.Navigator>
      );
    }


// more stack which should show more-scree and shared med app, with other things.
   export const ThirdScreenNavigator = () => {
      return (
        <Stack.Navigator initialRouteName="More">
          <Stack.Screen
            name="More"
            component={MoreScreen}
            options={{
              headerShown: false,
              // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              // gestureDirection: "horizontal ",
            }}
          />
          <Stack.Screen
            name="MailVerf"
            component={MailVerf}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
              transitionSpec: {
                open: closeConfig,
                close: closeConfig,
              },
            }}
          />
        </Stack.Navigator>
      );
    }

    



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "InterRegular",
  },
});
