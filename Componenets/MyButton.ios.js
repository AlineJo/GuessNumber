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

    const myButton = <TouchableOpacity style={{ ...styles.button, ...props.style }} onPress={props.onPress} >
        <View>
            {content}
        </View>
    </TouchableOpacity>;


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