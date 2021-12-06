import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Alert, ScrollView, Dimensions } from 'react-native'
import Card from '../Componenets/Card';
import MyButton from '../Componenets/MyButton';
import MyNumberContainer from '../Componenets/MyNumberContainer'
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import { Ionicons } from '@expo/vector-icons'
import MyRoundsFlatList from '../Componenets/MyRoundsFlatList';
import * as ScreenOrientation from 'expo-screen-orientation'

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
            currentLow.current = currentGuess + 1
            setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current, currentGuess))
            props.upadateNumberOfRounds();
        }
        else {
            Alert.alert('Common !!!', "Please be honset!!!", [{ text: 'Sorry', style: 'cancel' }]);
        }
    }

    const { chosenNumber, onNPCCorrectGuess } = props



    useEffect(() => {
        const subcribeToOrientationListener = ScreenOrientation.addOrientationChangeListener((listener) => {
            console.log(listener.orientationInfo);

        })

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

        return () => { subcribeToOrientationListener.remove }

    }, [currentGuess, chosenNumber, onNPCCorrectGuess])


    const layoutPortrait =
        <View style={styles.root}>

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

        </View>


    const layoutLandscape =
        <View style={styles.root}>

            <View style={{ width: "100%", background: '#F00', flexDirection: 'row', alignContent: 'space-between', justifyContent: 'center' }} >
                <MyButton style={{ ...styles.button, ...styles.buttonLower, ...styles.buttonHorizontal }} onPress={onLowerPressed}>
                    <Ionicons name="md-remove" size={32} color={Colors.colorWhite} />
                </MyButton>

                <MyNumberContainer
                    cardStyle={styles.numberContainer}
                    cardTitle="NPC guessed :" value={currentGuess} />

                <MyButton style={{ ...styles.button, ...styles.buttonGreater, ...styles.buttonHorizontal }} onPress={onGreaterPressed}>
                    <Ionicons name="md-add" size={32} color={Colors.colorWhite} />
                </MyButton>

            </View>

            <MyRoundsFlatList roundsHistory={props.roundsHistory} />

        </View>


    const getOrientation = () => {


        if (Dimensions.get('window').width <
            Dimensions.get('window').height) {
            setLayoutState('portrait')
        } else {
            setLayoutState('landscape')
        }

    }

    const [layoutState, setLayoutState] = useState('portrait');

    let currentLayout = layoutPortrait


    useEffect(() => {
        const onScreenRotation = () => {
            console.log(layoutState + "....");
            getOrientation()

        }
        const subscribeToAddEventListener = Dimensions.addEventListener('change', onScreenRotation);
        console.log("subscribeToAddEventListener Added");

        return () => {
            if (typeof (subscribeToAddEventListener) !== 'undefined'
                && subscribeToAddEventListener != null) {
                console.log("subscribeToAddEventListener Removed");
                subscribeToAddEventListener.remove();
            }
        }
    }
    );


    if (layoutState == 'portrait') {
        return (
            <View style={{ flex: 1 }}>
                {layoutPortrait}
            </View>
        );
    } else {
        return (
            <View style={{ flex: 1 }}>
                {layoutLandscape}
            </View>
        );
    }

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
        marginTop: 16,
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


    buttonHorizontal: {
        marginHorizontal: 16,
        height: Spacing.space_104,
        justifyContent: 'center'
    },

});


export default GameScreen; 