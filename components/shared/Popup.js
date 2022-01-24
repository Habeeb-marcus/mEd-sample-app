import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Animated,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { scale, Button } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

export default function Popup({ visible, children }) {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(translateY, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContainer,
            //   { transform: [{ scale: scaleValue }], },
            {
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-600, 0],
                  }),
                },
              ],
            },
          ]}>
          {children}
        </Animated.View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  modalContainer: {
    width: width - scale(30),
    backgroundColor: "white",
    paddingHorizontal: scale(10),
    paddingVertical: scale(17),
    borderRadius: scale(12),
    elevation: scale(20),
    margin: 30,
  },
});
