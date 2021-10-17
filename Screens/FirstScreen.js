import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native'
import Card from '../Componenets/Card';
import MyButton from '../Componenets/MyButton';
import MyNumberContainer from '../Componenets/MyNumberContainer';
import MyTextInput from '../Componenets/MyTextInput';
import MyText from '../Componenets/MyText';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import MyTextStyle from '../assets/styles/MyTextStyle'


const FirstScreen = props => {
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [choosenNumber, setChoosenNumber] = useState()
    const [inputValue, updateInputValue] = useState("")

    const onChangeTextListener = text => {
        updateInputValue(text.replace(/[^0-9]/g, ''));
    }

    const onResetPressed = () => {
        updateInputValue('');
        setIsConfirmed(false)
    }

    const onConfirmPressed = () => {

        const enteredNumber = parseInt(inputValue)
        if (isNaN(enteredNumber) || enteredNumber < 0 || enteredNumber > 99) {
            Alert.alert(
                "Invalid number",
                "Please enter a number between 0 and 99 (inclusive)",
                [{ text: 'Ok', style: 'distructive', onPress: onResetPressed }]);
            return;
        }
        setChoosenNumber(enteredNumber)
        updateInputValue('');
        setIsConfirmed(true);
        Keyboard.dismiss();
    }
    let confiremedOutput
    if (isConfirmed) {
        confiremedOutput =
            <MyNumberContainer cardTitle="You selected:"
                value={choosenNumber} buttonTitle="Start Game"
                buttonVisible={true}
                onButtonPressed={() => props.onStartGamePressed(choosenNumber)}
            />;
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            <View style={styles.root}>
                <MyText
                    style={{ ...styles.title, ...MyTextStyle('black').thin_24 }}
                    color='black' >
                    Start a New Game!
                 </MyText>

                <Card>
                    <MyText
                        style={MyTextStyle('black').thin_16} >
                        Select a Number: </MyText>

                    <MyTextInput
                        placeholder="enter a number"
                        onChangeText={onChangeTextListener}
                        keyboardType="number-pad"
                        blurOnSubmit
                        autoCorrect={false}
                        maxLength={2}
                        value={inputValue}
                    />
                    <View style={styles.buttonsHolder}>

                        <MyButton style={{ ...styles.button, ...styles.buttonReset }} title="Reset" onPress={onResetPressed} />
                        <MyButton style={styles.button} title="Confirm" onPress={onConfirmPressed} />

                    </View>

                </Card>

                {confiremedOutput}

            </View>

        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: Spacing.space_10,
        alignItems: 'center',
    },

    title: {
        marginTop: Spacing.space_32,
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