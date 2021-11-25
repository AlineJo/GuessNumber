import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'
import MyTextStyle from '../assets/styles/MyTextStyle';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import MyText from './MyText';


const ui = props => {
    const content = <MyText
        style={{
            ...styles.buttonText,
            ...styles.textStyle,
            ...MyTextStyle(Colors.colorWhite).big_16
        }}>
        {props.title} {props.children}</MyText>;

    let myButton = <TouchableOpacity style={{ ...styles.button, ...props.style }} onPress={props.onPress} >
        <View>
            {content}
        </View>
    </TouchableOpacity>;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        myButton = <TouchableNativeFeedback onPress={props.onPress}
            background={TouchableNativeFeedback.Ripple(Colors.colorRipple, false)}>

            <View style={{ ...styles.button, ...props.style }}>
                {content}
            </View>
        </TouchableNativeFeedback>;
    }

    return myButton

}



const MyButton = props => {
    return (<View>{ui(props)}</View>);
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.colorButtonPrimary,
        paddingVertical: Spacing.space_8,
        paddingHorizontal: Spacing.space_16

    },

    buttonText: {
        color: Colors.colorWhite,
        textAlign: "center",
    },

});


export default MyButton;