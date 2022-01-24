import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    // elevation: 2,
    backgroundColor: "#fff",
    // marginVertical: 8,
    // minHeight: RFValue(98),
    // maxHeight: RFValue(173),
    borderRadius: RFValue(12),
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(10),
    marginVertical: RFValue(4),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#f5f5f5'
  },

//   cardContent: {
//     margin: 10,
//   },
});
