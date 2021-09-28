import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Card from '../Componenets/Card';
import MyButton from '../Componenets/MyButton';
import MyTextInput from '../Componenets/MyTextInput';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';



const FirstScreen = props => {

    const [inputValue, updateInputValue] = useState("")

    const onChangeTextListener = (text) => { updateInputValue(text); }

    const onConfirmPressed = () => {
        console.log(inputValue)
    }
    const onResetPressed = () => {
        console.log("*Reset")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Start a New Game!</Text>

            <Card>
                <Text >Select a Number:</Text>
                <MyTextInput placeholder="enter a number" onChangeText={onChangeTextListener} keyboardType="number-pad"/>
                <View style={styles.buttonsHolder}>

                    <MyButton style={{ ...styles.button, ...styles.buttonReset }} title="Reset" onPress={onResetPressed} />
                    <MyButton style={styles.button} title="Confirm" onPress={onConfirmPressed} />

                </View>

            </Card>



        </View>);
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: Spacing.space_10,
        alignItems: 'center',
    },

    title: {
        marginTop: Spacing.space_10,
        fontSize: Spacing.fontSize_18,
    },

    buttonsHolder: {
        width: Spacing.spacePercent_100,
        paddingHorizontal: Spacing.space_4,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },

    button: {
        marginTop: Spacing.space_32,
        width: 132,
    },

    buttonReset: {
        backgroundColor: Colors.colorButtonCancel
    },

});


export default FirstScreen;