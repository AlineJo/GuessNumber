import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native'
import Card from '../Componenets/Card';
import MyButton from '../Componenets/MyButton';
import MyNumberContainer from '../Componenets/MyNumberContainer'
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import { Ionicons } from '@expo/vector-icons'
import MyRoundsFlatList from '../Componenets/MyRoundsFlatList';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    // math randow generate random number between 0 - 1
    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    if (randomNumber == exclude) {
        return generateRandomBetween(min, max, exclude)
    } else
        return randomNumber
}

const GameScreen = props => {
    const currentLow = useRef(0)
    const currentHigh = useRef(100)

    const [currentGuess, setCurrentGuess] =
        useState(generateRandomBetween(currentLow.current, currentHigh.current, -1))


    const onLowerPressed = () => {
        if (currentGuess > props.chosenNumber) {
            currentHigh.current = currentGuess
            setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current, currentGuess))
            props.upadateNumberOfRounds();

        } else {
            Alert.alert('Common !!!', "Please be honset!!!", [{ text: 'Sorry', style: 'cancel' }]);
        }


    }

    const onGreaterPressed = () => {
        if (currentGuess < props.chosenNumber) {
            currentLow.current = currentGuess
            setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current, currentGuess))
            props.upadateNumberOfRounds();
        }
        else {
            Alert.alert('Common !!!', "Please be honset!!!", [{ text: 'Sorry', style: 'cancel' }]);
        }
    }

    const { chosenNumber, onNPCCorrectGuess } = props



    useEffect(() => {
        if (currentGuess == chosenNumber) {
            Alert.alert(
                "NPC",
                "Yay, I guessed the number hahaaa!!!",
                [
                    {
                        text: "wow",
                        onPress: () => onNPCCorrectGuess(),
                    }
                ]);
        }
    }, [currentGuess, chosenNumber, onNPCCorrectGuess])



    return (<View style={styles.root}>

        <MyNumberContainer
            cardStyle={styles.numberContainer}
            cardTitle="NPC guessed :" value={currentGuess} />
        <Card style={styles.card}>
            <MyButton style={{ ...styles.button, ...styles.buttonLower }} onPress={onLowerPressed}>
                <Ionicons name="md-remove" size={32} color={Colors.colorWhite} />
            </MyButton>
            <MyButton style={{ ...styles.button, ...styles.buttonGreater }} onPress={onGreaterPressed}>
                <Ionicons name="md-add" size={32} color={Colors.colorWhite} />
            </MyButton>
        </Card>

        <MyRoundsFlatList roundsHistory={props.roundsHistory} />

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

    card: {
        width: Spacing.spacePercent_95,
        height: Spacing.space_96,
        paddingVertical: Spacing.space_4,

        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },

    button: {
        width: Spacing.space_132,
    },

    buttonLower: {
        backgroundColor: Colors.colorButtonPrimary
    },
    buttonGreater: {
        backgroundColor: Colors.colorButtonSecondary
    },

});


export default GameScreen;