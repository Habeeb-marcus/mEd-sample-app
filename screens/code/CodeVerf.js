import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function CodeVerf({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>enter the code sent to your code</Text>
      <Button
        title="submit code sent to your number"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Text> {route.params.msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
