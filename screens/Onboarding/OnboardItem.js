import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Dimensions, Image } from "react-native";


export default function OnboardItem({item}) {
     const { width } = useWindowDimensions();

    return (
      <View style={[styles.container, { width }]}>
          <Image
            source={item.image}
            style={[styles.image, { width, resizeMode: "contain" }]}
          />

        <View style={{ flex: 0.3 }}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      </View>
    );
}


  const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    // width,
    justifyContent: "center",
  },

  itemText: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
  text: {
    color: "#1C215D",
    fontWeight: "800",
    paddingHorizontal: 34,
    fontSize: 15,
    textAlign: "center",
  },
  image: {
    flex: 0.55,
    justifyContent: "center",
      // borderColor: "#1C215D",
  },
  itemTitle: {
    fontWeight: "800",
    fontSize: 18,
    marginBottom: 10,
    // marginTop: 20,
    color: "#493d8a",
    textAlign: "center",
    paddingHorizontal: 44,
  },

  itemText: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    lineHeight: 19,
    paddingHorizontal: 64,
  },

  child: {},
  text: { fontSize: width * 0.5, textAlign: "center" },
});




