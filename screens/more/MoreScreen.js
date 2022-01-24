import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import MoreTop from "../../assets/icons/MoreTop.svg";
import MoreMid from "../../assets/icons/MoreMid.svg";
import Card from "../../components/card/index";
import { scale } from "react-native-size-matters";
import Gold from "../../assets/icons/Gold.svg";
import MorePattern from "../../assets/icons/MorePattern.svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const image = { uri: "https://reactjs.org/logo-og.png" };
export default function MoreScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Image
        source={require('../../assets/icons/MorePattern.png') }
        // style={{ width: "100%" }}
        resizeMode="repeat"> */}
        {/* <View style={styles.container}>
        <ImageBackground source={require('../../assets/icons/MorePattern.png')} resizeMode="repeat" style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View> */}
        <View
          style={{
            paddingVertical: scale(17),
            paddingHorizontal: scale(21),
            width: "100%",
            backgroundColor: "#2aa893",
            borderRadius: 8,
            marginTop: scale(21),
          }}>
          {/* <View style={{position: 'absolute'}}>
    {        [1,2,3,4,5,6,7].map((el,index)=>{
          return <Svg  />}}
</View> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: scale(26.5),
              alignItems: "center",
            }}>
            <Text style={{ color: "#fff", fontFamily: "InterExtraBold" }}>
              ⏱🔥Study Streak
            </Text>
            <Text
              style={{
                alignItems: "center",
                color: "#fff",
                fontFamily: "InterExtraBold",
                fontSize: 11.5,
              }}>
              {" "}
              <Gold style={{ marginTop: 9 }} /> TOP 87.00000000001%😬
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}>
            <Text style={styles.button}>Notes</Text>
            <Text style={[styles.button, { marginLeft: 14 }]}>Files</Text>
            <Text style={[styles.button, { marginLeft: 14 }]}>Folder</Text>
          </View>
        </View>
        {/* </Image> */}
        {/* <MoreTop style={{ flex: 0.5 }} /> */}
        <View style={{ width: "100%" }}>
          <MoreMid
            style={{ marginTop: scale(8), width: "100%", flex: 1, height: 200 }}
          />
        </View>

        <Card
          style={{
            backgroundColor: "rgba(102, 78, 255, 0.05)",
            // padding: 10,
            flex: 1,
            marginTop: scale(8),
            marginBottom: scale(15),
            width: width - 30,
          }}>
          <Text
            style={{
              color: "#664eff",
              textAlign: "center",
              fontFamily: "InterRegular",
              lineHeight: 17,
              paddingVertical: 10,
              paddingHorizontal: 4.5,
              fontSize: 13,
              // width: width - 60,
            }}>
            You’re currently eligible to get 2 free month(s) of mEd. However,
            only subscribers can redeem free months from referrals. So you need
            to subscribe now or save your card Info to subscribe later, and
            you’d instantly get your 2 free month(s) upfront
          </Text>
        </Card>

        <Card style={{ flex: 2, paddingTop: 17.6, paddingBottom: scale(91) }}>
          <View style={styles.moreBottom}>
            {/* <View style={styles.box}> */}
            {/* <TouchableOpacity onPress={() => navigation.navigate('CodeVerf', {msg: 'i came from morescreen'})}> */}
            <Text style={[styles.box, { color: "#2AA893" }]}>
              Share Referral Link
            </Text>
            {/* </TouchableOpacity> */}

            {/* </View> */}

            {/* <View style={styles.box}> */}
            <Text style={styles.box}>Subscribe to mEd</Text>
            {/* </View> */}

            {/* <View style={styles.box}> */}
            <Text style={styles.box}>Contact Support</Text>
            {/* </View> */}

            {/* <View style={styles.box}> */}
            <Text style={styles.box}>Share mEd</Text>
            {/* </View> */}

            {/* <View style={styles.box}> */}
            <Text style={styles.box}>More Options</Text>
            {/* </View> */}

            {/* <View style={styles.box}> */}
            <Text style={styles.box}>About Us</Text>
            {/* </View> */}

            {/* <View style={styles.box}> */}
            <Text style={styles.box}>Policy & Terms</Text>
            {/* </View> */}

            {/* <View style={styles.box}> */}
            <Text style={[styles.box, { color: "#b5b5b5" }]}>Log Out</Text>
            {/* </View> */}
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // backgroundColor: "#fafafa",
    paddingHorizontal: scale(15),
    paddingTop: scale(27),
    paddingBottom: scale(11.6),

    alignItems: "center",
  },

  moreBottom: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    marginBottom: scale(8),
    paddingHorizontal: scale(17),
    marginTop: scale(10),
    fontFamily: "InterMedium",
  },
  button: {
    backgroundColor: "#33BCA5",
    borderRadius: 50,
    //  height: 74,
    // width: 60,
    paddingVertical: 5,
    paddingHorizontal: 17,
    //  marginLeft: 14,
    color: "white",
  },

  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});
