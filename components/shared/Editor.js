import React from "react";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

const Editor = ({ closeJotter, setVisible }) => {
  const richText = React.useRef();
  const [loaded] = useFonts({
    InterExtraBold: require("../../assets/fonts/InterExtraBold.ttf"),
    InterBold: require("../../assets/fonts/InterBold.ttf"),
    InterRegular: require("../../assets/fonts/InterRegular.ttf"),
    InterMedium: require("../../assets/fonts/InterMedium.ttf"),
    InterBlack: require("../../assets/fonts/InterBlack.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView>
      {/* <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}> */}
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}>
          {/* <Text>Description</Text> */}
          <View style={{ flex: 1, paddingTop: 5 }}>
            <RichEditor
              // disabled={false}
              autoCorrect={false}
              //   useContainer={false}
              editorStyle={{
                backgroundColor: "#f5f5f5",
                placeholderColor: "#252525",
                marginVertical: 30,
              }}
              // containerStyle={{ height: 80, flex: 1 }}
              // initialHeight={51}
              placeholder="Enter jotter text"
              // style={{ backgroundColor: "#b5b5b5" }}
              ref={richText}
            //   onChange={(descriptionText) => {
            //     // this is where we console log the content of the text editor in order for us to be able to use it
            //     console.log("descriptionText:", descriptionText);
            //   }}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}>
        <RichToolbar
          editor={richText}
          iconTint="#000"
          disabled={false}
          selectedIconTint="#000"
          unselectedButtonStyle={{
            backgroundColor: "#f5f5f5",
            marginRight: 10,
            borderRadius: 3.4,
          }}
          selectedButtonStyle={{
            backgroundColor: "#f5f5f5",
            marginRight: 10,
            borderRadius: 3.4,
          }}
          actions={[
            actions.setBold,
            actions.setItalic,
            // actions.setUnderline,
            // actions.heading1,
          ]}
          iconMap={{
            [actions.setBold]: ({ tintColor }) => (
              <Text
                style={[
                  {
                    color: "#000",
                    fontFamily: "InterExtraBold",
                    fontSize: 20,
                  },
                ]}>
                B
              </Text>
            ),
          }}
        />
        <TouchableOpacity
          onPress={closeJotter}
          // onPress={() => setVisible(false)}
          style={{
            backgroundColor: "#2AA893",
            paddingVertical: 11.9,
            // lineHeight: 19.5,
            // height: 38,
            paddingHorizontal: 38,
            borderRadius: 8,
            fontSize: 15,
            alignItems: "center",
          }}>
          <Text
            style={{
              fontFamily: "InterExtraBold",
              color: "#FFF",
              fontSize: 16,
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

export default Editor;
