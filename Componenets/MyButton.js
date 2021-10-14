
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import MyTextStyle from '../assets/styles/MyTextStyle';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import MyText from './MyText';


const MyButton = props => {
    return (<View>

        <TouchableOpacity style={{ ...styles.button, ...props.style }} onPress={props.onPress} >
            <View>
                <MyText
                    style={{
                        ...styles.buttonText,
                        ...styles.textStyle,
                        ...MyTextStyle(Colors.colorWhite).big_16
                    }}>
                    {props.title} {props.children}</MyText>
            </View>
        </TouchableOpacity>

    </View>);
};


const styles = StyleSheet.create({
    button: {
        width: Spacing.spacePercent_100,
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