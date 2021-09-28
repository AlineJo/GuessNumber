
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';


const MyButton = props => {
    return (<View>

        <TouchableOpacity style={{...styles.button, ...props.style}} onPress={props.onPress} >
            <View>
                <Text style={{...styles.buttonText, ...styles.textStyle}}>{props.title}</Text>
            </View>
        </TouchableOpacity>

    </View>);
};


const styles = StyleSheet.create({
    button: {
        width:Spacing.spacePercent_100,
        backgroundColor: Colors.colorButtonPrimary,
        paddingVertical: Spacing.space_8,
        paddingHorizontal: Spacing.space_16

    },

    buttonText: {
        color: Colors.colorWhite,
        textAlign: "center",
        fontWeight: "bold"
    },

});


export default MyButton;