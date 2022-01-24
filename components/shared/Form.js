import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import Eye from "../../assets/icons/Eye.svg";
// import {Icon} from 'react-native-vector-icons'
import { MaterialCommunityIcons } from "@expo/vector-icons";
// const formSchema = yup.object({
//   username: yup
//   .string()
//   .required.min(4, "Name is required."),

//   password: yup
//     .string()
//     .min(3, "Password can not be less than 3 characters.")
//     .max(8, "Password can not be more than 12 characters long.")
//     .required(),
// });

export default function Form({ send, navigation }) {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.form}>
      <Formik
        // validationSchema={formSchema}
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, action) => {
          action.resetForm();
          send(values);
        }}>
        {(props) => (
          <View>
            <View>
              <Text style={styles.label}>Enter your preferred username</Text>
              <Text style={styles.description}>
                (use only letters, numbers, underscore... and within 2 to 30
                characters. may the force be with you lol)
              </Text>

              <TextInput
                style={styles.input}
                selectionColor={"black"}
                selectionColor={"black"}
                //   placeholder="Username"
                onChange={props.handleChange("username")}
              />
            </View>

            <View style={styles.field2}>
              <Text style={styles.label}>Enter your password</Text>
              <Text style={styles.description}>
                (use at least 6 characters)
              </Text>
              <View>
                <TextInput
                  style={styles.input}
                  secureTextEntry={visible}
                  textContentType="password"
                  selectionColor={"black"}
                  //   placeholder="Password"
                  onChange={props.handleChange("username")}
                />
                <TouchableOpacity
                  style={styles.btnEye}
                  onPress={() => {
                    setVisible(!visible);
                    setShow(!show);
                  }}>
                  <MaterialCommunityIcons
                    name={show === false ? "eye-outline" : "eye-off-outline"}
                    size={26}
                    color={"#040921"}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={props.handleSubmit}
              style={styles.button}>
              <Text style={styles.buttonText}>Done with this</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>
              By selecting the “create mApp account” button above, you agree to
              our {""}
              {/* <TouchableOpacity
                style={{
                  //   flex: 1,
                  //   flexDirection: "row",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  //   paddingTop: 12,
                  //   alignSelf: "center",
                  //   padding: 0,
                //   borderStyle: "solid",
                //   // fontFamily: "InterRegular",
                //   color: "#505050",
                //   borderColor: "#505050",
                //   borderBottomWidth: 1,
                  //   marginTop: 20,
                }}> */}
              <Text
                style={{
                  fontSize: 12.4,
                  lineHeight: 19,
                  // fontFamily: "InterMedium",
                  color: "#505050",
                  textDecorationLine: "underline",
                }}>
                privacy policy and terms of use
              </Text>
              {/* </View> */}
              {/* </TouchableOpacity> */}
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  label: {
    fontFamily: "InterBold",
    color: "#252525",
    fontSize: 14,
  },
  description: {
    color: "#b7b7b7",
    fontFamily: "InterMedium",
    fontSize: 11.8,
    lineHeight: 17.3,
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#2AA893",
    marginTop: 22,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "InterExtraBold",
    fontSize: 14,
  },
  footer: {
    textAlign: "center",
    color: "#505050",
    marginTop: 22,
    fontFamily: "InterMedium",
    fontSize: 12.4,
    lineHeight: 19,
  },
  input: {
    height: 45,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    fontSize: 14,
    fontFamily: "InterRegular",
  },
  field2: {
    marginTop: 30,
  },

  btnEye: {
    position: "absolute",
    right: 25,
    top: 15,
  },

  //   searchSection: {
  //     flex: 1,
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "#fff",
  //   },
  //   searchIcon: {
  //     padding: 10,
  //   },
  //   input: {
  //     flex: 1,
  //     paddingTop: 10,
  //     paddingRight: 10,
  //     paddingBottom: 10,
  //     paddingLeft: 0,
  //     backgroundColor: "#fff",
  //     color: "#424242",
  //   },
});
