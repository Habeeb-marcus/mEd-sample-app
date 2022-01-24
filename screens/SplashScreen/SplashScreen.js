import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  // starting animation after 3000ms
    setTimeout(() => {
      navigation.replace("Signin");
    }, 3000);

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#2AA893",
      }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Image
          source={require("../../assets/images/splashscreen/Vector4.png")}
          style={{
            top: 0,
            position: "absolute",
          }}
        />
        <Image
          source={require("../../assets/images/splashscreen/mEd.png")}
          style={{
            marginBottom: 40,
            transform: [{ scale: 0.78 }],
          }}></Image>
        <View style={styles.button}>
          <Text style={styles.buttonText}>usemApp.com/mEd</Text>
        </View>

        <Image
          source={require("../../assets/images/splashscreen/Vector5.png")}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "35%",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // position: "absolute",
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    // backgroundColor: "#2AA893",
    // transform: [{ translateY: StartAnimation }],
  },
  button: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#1E9884",
    borderRadius: 30,
    width: 164,
    height: 37,
    // marginTop: 50,
    marginBottom: 70,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
