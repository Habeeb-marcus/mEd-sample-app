import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Surface } from 'react-native-paper'
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import LeftArrow from '../../assets/icons/LeftArrow.svg'
import ShareIcon from "../../assets/icons/ShareIcon.svg";
import { useFonts } from "expo-font";
import { SimpleLineIcons } from "@expo/vector-icons";
import JotterIcon from '../../assets/icons/JotterIcon.svg'

const Header = ({back, setVisible}) => {

    const [loaded] = useFonts({
      InterExtraBold: require("../../assets/fonts/InterExtraBold.ttf"),
      InterBold: require("../../assets/fonts/InterBold.ttf"),
      InterRegular: require("../../assets/fonts/InterRegular.ttf"),
      InterMedium: require("../../assets/fonts/InterMedium.ttf"),
    });

    if (!loaded) {
      return null;
    }
    const IconSize = 24
    return (
      <Surface style={styles.header}>
        <View>
          <TouchableOpacity onPress={back}>
            <Entypo name="chevron-left" size={IconSize} color="#040921" />
            {/* <LeftArrow /> */}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',alignItems: 'center'}}>

        <TouchableOpacity onPress={() => setVisible(true)}>
            {/* <SimpleLineIcons name="note" size={29} color="black" /> */}
            <JotterIcon style={{marginRight: 12}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#2AA893",
                borderRadius: 8,
                paddingHorizontal: 8,
                paddingVertical: 11,
                alignItems: "center",
                fontFamily: "InterExtraBold",
                flexDirection: "row",
                color: "white",
                // marginTop: 14,
                // marginBottom: 10
              }}>
              <ShareIcon />
              <Text
                style={{
                  //   backgroundColor: "#2AA893",
                  //   borderRadius: 8,
                  //   paddingHorizontal: 8,
                  //   paddingVertical: 11,
                  marginLeft: 6.2,
                  alignItems: "center",
                  fontFamily: "InterExtraBold",
                  color: "white",
                  fontSize: 13,
                }}>
                Share Note 🤗
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Surface>
    );
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 63,
    paddingTop: 13,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fbfbfb",
  },
});
