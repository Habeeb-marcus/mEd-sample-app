import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Platform,
  SafeAreaView,
  Image,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Editor from "../../components/shared/Editor";
import { useFonts } from "expo-font";
import NoteImgs from "../../components/shared/NoteImgs";
import BitIcon from "../../components/shared/BitIcon";
import Bitcoin from "../../assets/icons/Bitcoin.svg";
import Header from "../../components/shared/Header";
import CardImg3 from "../../assets/icons/CardImg3";
import CardIcon from "../../assets/icons/CardIcon.svg";
import FolderIcon from "../../assets/icons/FolderIcon.svg";
import Card from "../../components/card/index";
import FolderIc from "../../assets/icons/FolderIc.svg";
import NoteImg from "../../assets/images/NoteImg.svg";
import Thumb from "../../assets/icons/Thumb.svg";
import Popup from "../../components/shared/Popup";
import Close from "../../assets/icons/Close.svg";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

const StopWatch = require("../../assets/icons/StopWatch.png");
const { width, height } = Dimensions.get("window");

const Note = ({ navigation }) => {
  //   const [visible, setVisible] = React.useState(false);
  const richText = React.useRef();
  const back = () => navigation.goBack();

  const [visible, setVisible] = useState(false);
  const closeJotter = () => setVisible(false);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Popup visible={visible} setVisible={setVisible}>
          {/* Jotter and cancel button */}
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}>
            <Text
              style={{
                fontFamily: "InterExtraBold",
                fontSize: 16.9,
                // lineHeight: 17,
                height: 24,
              }}>
              Jotter
            </Text>
            {/* <Close  size={59} /> */}
            {/* <Ionicons name="close" size={29} color="#b5b5b5" /> */}
            <TouchableOpacity onPress={() => setVisible(false)}>
              <AntDesign name="close" size={23} color="#b5b5b5" />
            </TouchableOpacity>
          </View>
          {/* End of Jotter and cancel button */}

          <ScrollView>
            {/* <Editor closeJotter={closeJotter} setVisible={setVisible} /> */}
            {/* THE RAW EDITOR STARTING */}
            {/* <View> */}
            <ScrollView>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}>
                {/* <Text>Description</Text> */}
                <View style={{ flex: 1, paddingTop: 5 }}>
                  <RichEditor
                    // disabled={false}
                    initialFocus={true}
                    autoCorrect={false}
                    style={{
                      // minHeight: 52,
                      flex: 1,
                      // paddingTop: 15,
                      // minHeight:65,
                      // maxHeight: 900
                    }}
                    // useContainer={false}
                    // disabled={false}
                    editorStyle={{
                      backgroundColor: "#f5f5f5",
                      placeholderColor: "#252525",
                      paddingVertical: 30,
                      // minHeight: 460,
                    }}
                    // containerStyle={{ minHeight: 290, flex: 1 }}
                    initialHeight={61}
                    placeholder={"Enter jotter text"}
                    // style={{ backgroundColor: "#b5b5b5" }}
                    ref={richText}
                  />
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
            {/* </View> */}

            {/* END OF THE RAW EDITOR FILE */}
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}>
            <RichToolbar
              style={{ backgroundColor: "#fff" }}
              editor={richText}
              iconSize={22}
              iconTint="#000"
              disabled={false}
              selectedIconTint="#000"
              unselectedButtonStyle={{
                backgroundColor: "#f5f5f5",
                marginRight: 10,
                borderRadius: 4.4,
                padding: 0.25,
              }}
              selectedButtonStyle={{
                backgroundColor: "#f5f5f5",
                marginRight: 10,
                borderRadius: 4.4,
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
                        fontSize: 22,
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
        </Popup>
      </TouchableWithoutFeedback>

      {/* BEGINGING OF NOTE PAGE */}

      <StatusBar />
      <Header back={back} setVisible={setVisible} />
      <ScrollView>
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingVertical: 14,
              paddingLeft: 5,
              paddingRight: 14,
            }}>
            <View style={{}}>
              {/* <CardImg3 style={{}} /> */}
              {/* <FolderIcon /> */}
              <View
                style={{
                  backgroundColor: "#F05454",
                  width: 42,
                  height: 42,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                  shadowColor: "#e43131",
                  shadowOffset: { width: 0, height: 3 },
                  shadowRadius: 2,
                  shadowOpacity: 0.8,
                  elevation: 2,
                }}>
                <Bitcoin />
              </View>
            </View>

            <View style={{ width: "80%", marginLeft: 12 }}>
              <Text
                // numberOfLines={3}
                ellipsizeMode="tail"
                style={{
                  fontFamily: "InterMedium", //fontSize: 13
                }}>
                <Text
                  style={{
                    color: "#2AA893",
                    lineHeight: 19.5,
                    marginTop: 12,
                    fontFamily: "InterMedium",
                    // fontSize: 15,
                  }}>
                  Note
                </Text>{" "}
                • Introduction to the Startup sfd Eco-tec system
              </Text>
              {/* STREAKS */}
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}>
                <Image
                  source={StopWatch}
                  style={{ width: 14, height: 15, alignSelf: "center" }}
                />
                <Text>🔥</Text>
                <Text
                  style={{
                    color: "#b5b5b5",
                    marginLeft: 3,
                    fontFamily: "InterRegular",
                  }}>
                  230k study streak{" "}
                </Text>
              </View>
            </View>

            <View style={{ width: "5%", marginRight: 10 }}>
              <CardIcon style={{ width: 48, height: 21 }} />
            </View>
          </View>
        </Card>
        <Text
          style={{
            lineHeight: 19.5,
            // fontSize: 14,
            color: "#252525",
            marginTop: 10,
            fontFamily: "InterRegular",
          }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
          <Text style={{ fontFamily: "InterBold" }}>
            {" "}
            Exercitation veniam consequat
          </Text>{" "}
          sunt nostrud amet.
        </Text>

        <Text
          style={{
            lineHeight: 19.5,
            fontSize: 14,
            color: "#252525",
            marginTop: 15,
            fontFamily: "InterRegular",
            // fontWeight: "400",
          }}>
          <Text style={{ fontFamily: "InterBold" }}>Amet minim mollit </Text>{" "}
          non deserunt ullamco est sit aliqua dolor do amet sint.
          <Text style={{ fontStyle: "italic" }}> Velit officia consequat </Text>
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </Text>
        <View style={{ height: 220, marginBottom: 10 }}>
          <NoteImg width="100%" height="100%" style={{ marginTop: 10 }} />
        </View>

        {/* <NoteImgs/> */}

        <Text
          style={{
            lineHeight: 19.5,
            fontSize: 14,
            color: "#252525",
            marginTop: 10,
            fontFamily: "InterRegular",
          }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>

        <Text
          style={{
            lineHeight: 19.5,
            fontSize: 14,
            color: "#252525",
            marginTop: 10,
            fontFamily: "InterRegular",
          }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>

        <Text
          style={{
            lineHeight: 19.5,
            fontSize: 14,
            color: "#252525",
            marginTop: 10,
            fontFamily: "InterRegular",
          }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>

        <Text
          style={{
            fontFamily: "InterBold",
            textDecorationLine: "underline",
            marginTop: 10,
          }}>
          Footnotes
        </Text>

        <View
          style={{
            backgroundColor: "#664EFF",
            borderRadius: 8,
            padding: 16,
            marginTop: 19,
            marginBottom: 93,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}>
          <Thumb />
          <Text
            style={{
              fontFamily: "InterExtraBold",
              color: "#fff",
              marginLeft: 9,
            }}>
            Attempt Questions
          </Text>
        </View>
      </ScrollView>
      {/* Button next and prev */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 20,
          width: "100%",
          left: 16,
        }}>
        <View style={styles.noteBtn}>
          <Text
            style={{
              fontFamily: "InterExtraBold",
              color: "#2AA893",
            }}>
            Last note
          </Text>
        </View>

        {/* <TouchableOpacity onPress={() => setVisible(true)}> */}
        <View style={styles.noteBtn}>
          <Text style={{ fontFamily: "InterExtraBold", color: "#2AA893" }}>
            Next note
          </Text>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbfbfb",
    flex: 1,
    paddingHorizontal: 18,
  },
  noteBtn: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#2AA893",
    borderStyle: "solid",
    paddingVertical: 14,
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: "#fff",
    // position: 'absolute'
  },
});
