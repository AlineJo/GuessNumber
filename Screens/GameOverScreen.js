import React from 'react';
import { View, StyleSheet } from 'react-native'
import Card from '../Componenets/Card';
import MyNumberContainer from '../Componenets/MyNumberContainer';
import Spacing from '../Constants/Spacing';


const GameOverScreen = props => {
    return (<View style={styles.root}>

        <MyNumberContainer
            cardStyle={styles.card}
            cardTitle="Number of tries it took NPC to guess the correct number is"
            value={props.numberOfTries}
            buttonVisible={true}
            buttonTitle="Try Again"
            onButtonPressed={props.onGameRestart}
        />

    </View>);
};


const styles = StyleSheet.create({

    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        marginTop: 0,
        height: Spacing.space_200,
        alignItems: 'center',
    },
});


export default GameOverScreen;