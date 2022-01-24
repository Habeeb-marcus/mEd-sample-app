import React, { useState, useRef } from "react";
import {
  Image,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  View,
  Button,
  TouchableOpacity,
  Text,
  // Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import slides from '../../components/shared/SlidesData'
import { SwiperFlatList } from "react-native-swiper-flatlist";

import OnboardItem from "./OnboardItem";


export default function Onboarding({navigation}) {
return (
  <View style={styles.container}>
    {/* <Text>you are welcome to on boarding screen</Text> */}
    <View style={{ flex: 4 }}>
      <SwiperFlatList
        paginationStyleItem={{
          height: 10,
          width: 10,
        }}
        paginationDefaultColor="#f4f3f3"
        paginationActiveColor="#b5b5b5"
        showPagination
        data={slides}
        paginationStyle={{ marginBottom: 30 }}
        index={1}
        renderItem={({ item }) => <OnboardItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>

    <View style={{ marginBottom: 10, flex: 2, }}>

      <TouchableOpacity onPress={() => navigation.navigate("MailVerf")}>
        <View style={[styles.item, { backgroundColor: "#1C215D" }]}>
          <MaterialIcons name="mail" size={20} color="#fff" />
          <Text style={[styles.text, { color: "#fff" }]}>
            Continue to with Email
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
        <View style={[styles.item, { alignItems: "center" }]}>
          <MaterialCommunityIcons name="google" size={24} color="black" />
          <Text style={styles.text}>Continue to with Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
        <Text
          style={{ textAlign: "center", marginTop: 30,  }}>
          What is our app account?
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
     color: '#fff'
  },
  image: {
    flex: 0.55,
    justifyContent: "center",
  },

  text: {
    color: "#1C215D",
    fontWeight: "800",
    paddingHorizontal: 34,
    fontSize: 15,
    textAlign: "center",
    letterSpacing: 1
  },

  item: {
    padding: 16,
    borderColor: "#bbb",
    marginTop: 16,
    width: 300,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
  },
});