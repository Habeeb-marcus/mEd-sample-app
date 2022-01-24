import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Card from "../../components/card/index"
import CardImg3 from "../../assets/icons/CardImg3.svg";
import CardIcon from "../../assets/icons/CardIcon.svg";
import FolderIcon from "../../assets/icons/FolderIcon.svg";
import SvgUri from "react-native-svg-uri";
// import cardIcon from "../assets/images/icons/cardIcon.svg";

// const FolderItem = ({item}) => {
//   return (
//     // <ScrollView>
//     <Card style={{ justifyContent: "top" }}>
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "row",
//           justifyContent: "space-around",
//           alignItems: "center",
//         }}>
//         <View style={{}}>
//           {/* flex: 1  */}
//           <Image
//             source={item.image}
//           />
//           {/* <SvgUri width="200" height="200" svgXmlData={CardImg3} /> */}
//         </View>

//         <View style={{ flex: 4 }}>
//           <Text
//             numberOfLines={4}
//             ellipsizeMode="tail"
//             style={{ fontFamily: "InterMedium" }}>
//             <Text style={{ color: "#2AA893" }}>{item.name}</Text>
//             {/* • "Introduction to
//             DAOs, DeFi, Bit, Bitcoin, Crypto, Decentralised Internet, Bitcoin,
//             Ethereum, ADA, Aave, Compound Finance, Copyright, Coinbase, NFTs" */}
//             {item.title}
//           </Text>
//           {/* STREAKS */}
//           <View style={{ flex: 1, marginTop: 10 }}>
//             <Text>⏱🔥 210k study streak</Text>
//           </View>
//         </View>
//         <View>
//           {/* <Image source={CardIcon} /> */}
//           <Image
//             source={require("../../assets/images/splashscreen/mEdLogo.png")}
//           />

//           {/* <SvgUri width="200" height="200" svgXmlData={CardIcon} /> */}

//           {/* <CardIcon /> */}
//         </View>
//       </View>
//     </Card>
//     // </ScrollView>
//   );
// };


const FolderItem = () => {
  return (
    // <ScrollView>
    <Card style={{ justifyContent: "top" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        {/* <View style={{ flex: 1 }}> */}
          {/* <CardImg3 /> */}
          <Image
            source={require("../../assets/images/splashscreen/mEdLogo.png")}
          />
        {/* </View> */}

        <View style={{ flex: 4 }}>
          <Text
            numberOfLines={4}
            ellipsizeMode="tail"
            style={{ fontFamily: "InterMedium" }}>
            <Text style={{ color: "#2AA893" }}>Folder</Text>• "Introduction to
            DAOs, DeFi, Bit, Bitcoin, Crypto, Decentralised Internet, Bitcoin,
            Ethereum, ADA, Aave, Compound Finance, Copyright, Coinbase, NFTs"
            {/* {item.description} */}
          </Text>
          {/* STREAKS */}
          <View style={{ flex: 1, marginTop: 10 }}>
            <Text>⏱🔥 210k study streak</Text>
          </View>
        </View>
        <View>
          <Image
            source={require("../../assets/images/splashscreen/mEdLogo.png")}
          />
        </View>
      </View>
    </Card>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default FolderItem;
