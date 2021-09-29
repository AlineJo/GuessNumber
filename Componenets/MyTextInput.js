import React from 'react';
import { TextInput, StyleSheet } from 'react-native'
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';



const MyTextInput = props => {
    return (
        <TextInput
            {...props}
            style={{ ...styles.input, ...props.style }} />
    )
};


const styles = StyleSheet.create({
    input: {
        height: Spacing.spaceInputHeight,
        width: Spacing.spacePercent_100,
        paddingHorizontal: Spacing.space_4,
        marginTop: Spacing.space_10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.colorInputBorder,

    },

});


export default MyTextInput;