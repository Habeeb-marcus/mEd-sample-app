import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

 function MailVerf({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Enter your mail to confirm if you have an account</Text>
      <Button
        title="submit mail"
        // onPress={() => navigation.navigate("HomeScreen")} 
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

export default MailVerf;