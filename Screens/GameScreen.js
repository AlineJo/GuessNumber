import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import Card from '../Componenets/Card';
import MyButton from '../Componenets/MyButton';
import MyNumberContainer from '../Componenets/MyNumberContainer'
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';

const generateRandomBetween = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    // math randow generate random number between 0 - 1
    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    return randomNumber
}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(0, 100))


    const onLowerPressed = () => {

    }

    const onGreaterPressed = () => {

    }

    return (<View style={styles.root}>

        <MyNumberContainer
            cardStyle={styles.numberContainer}
            cardTitle="NPC guessed :" value={currentGuess} />
        <Card style={styles.buttonsHolder}>
            <MyButton style={{ ...styles.button, ...styles.buttonReset }} title="Lower" onPress={onLowerPressed} />
            <MyButton style={styles.button} title="Greater" onPress={onGreaterPressed} />
        </Card>

    </View>);
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: Spacing.space_10,
        alignItems: 'center',
    },

    numberContainer: {
        height: Spacing.space_104,
    },

    buttonsHolder: {
        width: Spacing.spacePercent_100,
        height: Spacing.space_104,
        paddingVertical: Spacing.space_8,

        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },

    button: {
        width: Spacing.space_132,
    },

    buttonReset: {
        backgroundColor: Colors.colorButtonSecondary
    },
});


export default GameScreen;