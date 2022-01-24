import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
} from "react-native";
import Form from "../../components/shared/Form";

export default function SigninScreen({ navigation, values }) {
  const send = (values) => navigation.navigate("BottomTabs", values);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <StatusBar /> */}
        <View style={styles.container}>
          <Text style={styles.top}>Almost done entering mApp account</Text>
          <Text style={styles.intro}>
            You're now one step closer to the awesome future of learning
            on-the-go 😎
          </Text>
          <Form send={send} values={values}/>
        </View>
        {/* send={send} navigation={navigation} values={values} */}
        {/* <Button
        title="go home"
        onPress={() => navigation.navigate("BottomTabs")}
      /> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 26,
    paddingTop: 63,
    backgroundColor: "#ffffff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  top: {
    fontFamily: "InterBlack",
    // fontWeight: '800',
    fontSize: 28,
    marginBottom: 18,
  },
  intro: {
    color: "#252525",
    fontFamily: "InterMedium",
    lineHeight: 20,
    fontSize: 14,
  },
});
