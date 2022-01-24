import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SharedElement } from "react-native-shared-element";
import BottomTabs from "../../navigation/BottomTabs";

export default function PhoneVerf({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>please verify your phone number to verify</Text>
      <Button
        title="submit Phone number"
        onPress={() => navigation.navigate("CodeVerf")}
      />

      <View style={{ marginTop: 15 }}>
        <SharedElement id={1}>
          <Button title="go back to mailVerf" onPress={() => navigation.goBack()} />
        </SharedElement>
      </View>

    </View>
  );
}

PhoneVerf.SharedElements;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'green'
  },
});
