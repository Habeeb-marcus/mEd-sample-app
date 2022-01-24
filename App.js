import React from "react";
// import { SwitchStack } from "./navigation/SwitchStack";
import Navigation from "./navigation/SwitchStack";
import { useFonts } from "expo-font";



export default function App() {
   const [loaded] = useFonts({
     InterExtraBold: require("./assets/fonts/InterExtraBold.ttf"),
     InterBold: require("./assets/fonts/InterBold.ttf"),
     InterRegular: require("./assets/fonts/InterRegular.ttf"),
     InterMedium: require("./assets/fonts/InterMedium.ttf"),
     InterBlack: require("./assets/fonts/InterBlack.ttf"),
   });

   if (!loaded) {
     return null;
   }
  return (
    // <Provider store={store}>
     <Navigation/>
    // </Provider>
  );
}



