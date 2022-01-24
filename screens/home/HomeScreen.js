import React, {useState} from "react";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {verticalScale, moderateScale, scale, Button} from 'react-native-size-matters'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
  Modal, TouchableWithoutFeedback, ScrollView
} from "react-native";
import Shape from "../../assets/icons/Shape.svg";
import CardIcon from "../../assets/icons/CardIcon.svg";
import CardImg1 from "../../assets/icons/CardImg1.svg";
import CardImg2 from "../../assets/icons/CardImg2.svg";
import CardImg3 from "../../assets/icons/CardImg3.svg";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Card from "../../components/card/index";
import Ellipse10 from "../../assets/images/home/Ellipse10.svg";
import MotivationItem from "./MotivationItem";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Items from "../../components/shared/Data";
import Refresh from "../../assets/icons/Refresh.svg";
import FolderData from "../../components/shared/FolderData";
import FolderItem from "../home/FolderItem";
import BottomPopup  from "./BottomPopup";
// import Modal from 'react-native-modal'
// import Animated, { color } from "react-native-reanimated";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";


 
const Data = [
  {
    key: 1,
    name: "Folder",
    streaks: "50k",
    title:
      "• Introduction to Nigerian Legal System I & II, Constitutional Law I & II, Law of Arbitration I&II,	Equity and Trusts 1 & 11",
    image: require("../../assets/images/splashscreen/mEdLogo.png"),

    // svg: <CardImg1 />,
  },
  {
    key: 2,
    name: "Folder",
    streaks: "110k",
    title:
      "• Introduction to Astronomical Atoms, Logical Reasoning, Decentralised Internet, Bitcoin, Ethereum, Compound Finance, Copyright, Coinbase, NFTs",
    image: require("../../assets/images/splashscreen/mEdLogo.png"),
  },
  {
    key: 3,
    name: "Folder",
    streaks: "230k",
    title:
      "• Introduction to DAOs, DeFi, Bit, Bitcoin, Crypto, Decentralised Internet, Bitcoin, Ethereum, ADA, Aave, Compound Finance, Copyright, Coinbase, NFTs",
    image: require("../../assets/images/splashscreen/mEdLogo.png"),
  },
];
 
// Modal Popup 
const ModalPopup = ({visible, children, setVisible}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current
  const [username, setUsername] = React.useState('user')
  React.useEffect(()=> { 
    toggleModal() 
  }, [visible])
  const toggleModal = () => {
    if(visible) {
      setShowModal(true)
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      setTimeout(() =>  setShowModal(false), 200)
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }
  return (
    <Modal transparent visible={showModal}>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}
      >
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContainer, {transform: [{scale: scaleValue}]} ]}>{children}</Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
 
}

const { width } = Dimensions.get("window");
export default function HomeScreen({ navigation }) {

  // const [isModalVisible, setIsModalVisible] = React.useState(false);
  // const handleModal = () => setIsModalVisible(() => !isModalVisible);


  const [show, SetShow] = useState(true)
  const [visible, setVisible] = React.useState(false);


  return (
    <View style={styles.container}>
      <ModalPopup visible={visible} setVisible={setVisible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <FontAwesome
              name="undo"
              size={14}
              color="#252525"
              style={{
                // marginRight: 4.25,
                height: scale(12),
                width: scale(15),
              }}
            />
            <Text style={{ fontFamily: "InterBold", fontSize: scale(13) }}>
              Refresh Memory (RM)
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: "InterRegular",
                lineHeight: 20,
                marginTop: scale(12),
              }}>
              We would help you refresh your memory of all the concepts you've
              learnt in{" "}
              <Text style={{ fontFamily: "InterBold" }}>all of mEd</Text> with a
              quick test.{" "}
            </Text>
            <Text
              style={{
                fontFamily: "InterRegular",
                lineHeight: 20,
                marginTop: scale(18),
              }}>
              To learn better, if you don't get a question right at first
              attempt, after you eventually discover the right answer, check the
              note that the question came from and revise that note before
              proceeding to the next question
            </Text>

            <TouchableOpacity onPress={() => setVisible(false)}>
              <View style={[styles.item, { backgroundColor: "#2AA893" }]}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontFamily: "InterExtraBold" },
                  ]}>
                  Hmm... Okay. Let’s get started.
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPopup>

      <View style={styles.body}>
        <View
          style={{
            marginLeft: 14,
            marginRight: 16,
          }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFValue(23),
              justifyContent: "space-between",
            }}>
            <Text
              style={{
                fontSize: 17.4,
                lineHeight: RFPercentage(10),
                fontFamily: "InterExtraBold",
              }}>
              Hi, abypunk 😇
              {/* {navigation.getParam("username")} */}
            </Text>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#b5b5b5",
                borderRadius: 100 / 2,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Shape style={{}} />
            </View>
          </View>

          <Text
            style={{
              fontFamily: "InterExtraBold",
              fontSize: 15,
              marginBottom: 10,
            }}>
            Some motivation to learn now
          </Text>
        </View>
        <ScrollView>
          <View style={styles.swipeContainer}>
            <SwiperFlatList
              paginationStyleItem={{
                height: 8,
                width: 8,
              }}
              paginationDefaultColor="#f4f3f3"
              paginationActiveColor="#b5b5b5"
              showPagination
              data={Items}
              paginationStyle={{ marginTop: 30 }}
              index={2}
              renderItem={({ item }) => <MotivationItem item={item} />}
            />
          </View>

          <View style={{ marginLeft: 14, marginRight: 16 }}>
            <View
              style={{
                flexDirection: "row",
                marginTop: scale(5),
                marginBottom: scale(5),
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Text
                style={{
                  fontFamily: "InterExtraBold",
                  color: "#000000",
                  lineHeight: 14,
                  fontSize: 15,
                }}>
                Select Folder to study
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setVisible(true)}>
                  <Refresh
                    style={{ marginRight: 7.25, height: 12, width: 15 }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#664EFF",
                    fontFamily: "InterMedium",
                    fontSize: 12.3,
                  }}>
                  Refresh Memory (RM)
                </Text>
              </View>
            </View>

            {/* <Image source={Refresh}/> */}

            {/* <FlatList
            data={FolderData}
            renderItem={({ item }) => (
              // <Text style={{ color: "red" }}>{item.name}</Text>
              // <Text style={{ color: "red" }}>{item.title}</Text>
              <FolderItem item={item} />
            )}
          /> */}
            {/* <View> */}
            {/* <FlatList
            data={Data}
            renderItem={(item) => (
                <Text>{item.name}</Text>
          )}
            /> */}
            {/* </View> */}

            <Card style={{}}>
              <View
                style={{
                  // flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  // alignItems: "center",
                  width: "100%",
                }}>
                <View style={{ width: "5%" }}>
                  <CardImg3 style={{}} />
                </View>

                <View style={{ width: "70%", marginLeft: 12, marginRight: 14 }}>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={{ fontFamily: "InterMedium", lineHeight: 22 }}>
                    <Text style={{ color: "#2AA893" }}>Folder</Text>•
                    Introduction to DAOs, DeFi, Bit, Bitcoin, Crypto,
                    Decentralised Internet, Bitcoin, Ethereum, ADA, Aave,
                    Compound Finance, Copyright, Coinbase, NFTs
                  </Text>
                  {/* STREAKS */}
                  <View style={{ marginTop: 10 }}>
                    <Text>⏱🔥 230k study streak</Text>
                  </View>
                </View>
                <View style={{ width: "5%" }}>
                  <CardIcon />
                </View>
              </View>
            </Card>
            <TouchableOpacity onPress={() => navigation.navigate("Note")}>
              <Card style={{}}>
                <View
                  style={{
                    // flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    // alignItems: "center",
                    width: "100%",
                  }}>
                  <View style={{ width: "5%" }}>
                    <CardImg3 style={{}} />
                  </View>

                  <View
                    style={{ width: "70%", marginLeft: 12, marginRight: 14 }}>
                    <Text
                      // numberOfLines={3}
                      ellipsizeMode="tail"
                      style={{ fontFamily: "InterMedium", lineHeight: 22 }}>
                      <Text style={{ color: "#2AA893" }}>Folder</Text>•
                      Introduction to Corporate and Property Law Practices
                    </Text>
                    {/* STREAKS */}
                    <View style={{ marginTop: 10 }}>
                      <Text>⏱🔥 230k study streak</Text>
                    </View>
                  </View>
                  <View style={{ width: "5%" }}>
                    <CardIcon />
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
            <Card style={{}}>
              <View
                style={{
                  // flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  // alignItems: "center",
                  width: "100%",
                }}>
                <View style={{ width: "5%" }}>
                  <CardImg3 style={{}} />
                </View>

                <View style={{ width: "70%", marginLeft: 12, marginRight: 14 }}>
                  <Text
                    // numberOfLines={3}
                    ellipsizeMode="tail"
                    style={{ fontFamily: "InterMedium", lineHeight: 22 }}>
                    <Text style={{ color: "#2AA893" }}>Folder</Text>•
                    Introduction to Corporate and Property Law Practices
                  </Text>
                  {/* STREAKS */}
                  <View style={{ marginTop: 10 }}>
                    <Text>⏱🔥 230k study streak</Text>
                  </View>
                </View>
                <View style={{ width: "5%" }}>
                  <CardIcon />
                </View>
              </View>
            </Card>

            <Card style={{}}>
              <View
                style={{
                  // flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  // alignItems: "center",
                  width: "100%",
                }}>
                <View style={{}}>
                  <CardImg3 style={{ width: "10%" }} />
                </View>

                <View style={{ width: "75%" }}>
                  <Text
                    // numberOfLines={4}
                    ellipsizeMode="tail"
                    style={{ fontFamily: "InterMedium", lineHeight: 22 }}>
                    <Text style={{ color: "#2AA893" }}>Folder</Text>• Folder • A
                    Beginner’s Guide to Transfer Pricing
                  </Text>
                  {/* STREAKS */}
                  <View style={{ marginTop: 10 }}>
                    <Text>⏱🔥 170k study streak</Text>
                  </View>
                </View>
                <View style={{}}>
                  <CardIcon />
                </View>
              </View>
            </Card>

            {/* route from here to mail verf screen */}
            {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate("MailVerf", {
                msg: "i came from home screen",
              })
            }>
            <Card
              style={{
                // flex: 1,
                // flexDirection: "row",
                // justifyContent: "space-around",
                alignItems: "center",
              }}>
              <CardImg3 />
              <Text>
                welcome on board charlie my guy. shey you no one dey crack your
                brain school subject. you don land for the right place. lorem
              </Text>
            </Card>
          </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>

      {/* <BottomPopup/> */}
      {/* <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={handleModal} />
        </View>
      </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    backgroundColor: "#fafafa",
    // marginHorizontal: 14,
    // marginRight: 16,
    // marginTop: 25,
  },
  swipeContainer: { minHeight: 180, maxHeight: 230, width: "100%" },
  child: { width, justifyContent: "center" },
  cardMotivation: {
    width: width - 30,
    height: 140,
    marginLeft: 14,
    marginRight: 16,
  },
  modalContainer: {
    width: width - scale(30),
    backgroundColor: "white",
    paddingHorizontal: scale(20),
    paddingVertical: scale(17),
    borderRadius: scale(12),
    elevation: scale(20),
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  item: {
    padding: scale(12),
    justifyContent: 'center',
    marginTop: scale(10),
    borderRadius: scale(8),
    borderStyle: "solid",
    flexDirection: "row",
  },
});
