import React from 'react'
import { StyleSheet, Text, View,Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Card from '../../components/card';
import Ellipse10 from '../../assets/images/home/Ellipse10.svg'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const { width } = Dimensions.get("window");


export default function MotivationItem({item, navigation}) {
    return (
      // <TouchableWithoutFeedback>
        <View style={styles.child}>
          <View style={{ height: 190 }}>
            <TouchableOpacity>
              <Card style={styles.cardMotivation}>
                <Text
                  style={{
                    justifyContent: "center",
                    color: "#252525",
                    fontFamily: "InterRegular",
                    lineHeight: 19.5,
                    textAlign: "center",
                    fontSize: 14.2
                  }}>
                  {item.description}
                </Text>

                {/* </View> */}

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 8,
                    marginBottom: 7,
                    alignItems: 'center'
                  }}>
                  {/* <CardImg1 style={{ borderRadius: RFPercentage(50) }} /> */}
                  <Ellipse10
                    style={{
                      borderRadius: RFPercentage(50),
                      marginRight: 4,
                    }}
                  />
                  <Text style={{ fontFamily: "InterBold", color: "#505050", fontSize: 13.3 }}>
                    {item.author}
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        </View>
      // {/* </TouchableWithoutFeedback> */}
    );
}

const styles = StyleSheet.create({
  child: { width, justifyContent: "center", alignItems: 'center' },
  cardMotivation: {
    width: width - 30,
    minHeight: 140,
    maxHeight: 200,
    marginLeft: 14,
    marginRight: 16,
  },
});
