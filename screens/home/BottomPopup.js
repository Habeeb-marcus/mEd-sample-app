import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Modal, Dimensions, Animated } from 'react-native'
// import {Portal} from 'react-native-paper'
import { useRef } from 'react'
const BottomPopup = () => {

    // const [show, setShow] = useState(false)
    const bottomSheetHeight = Dimensions.get('window').height * 0.3;
    const deviceWidth = Dimensions.get('window').width;
    // const bottom = useRef(new.Animated.value(0)).current

    return (
    //   <Portal>
        <Animated.View style={([styles.root], { height: bottomSheetHeight })}>
          <Text> this is the motivation popup guy</Text>
        </Animated.View>
    //   {/* </Portal> */}
    );
}

export default BottomPopup

const styles = StyleSheet.create({
root: {
    position: 'absolute',
    left: 0,
right: 0,
// zIndex: 100,
backgroundColor: '#fff',
// elevation: 20,
borderTopLeftRadius: 8,
borderTopRightRadius: 8,

}
})
