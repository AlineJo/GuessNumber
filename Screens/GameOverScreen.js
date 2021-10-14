import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import MyCircleImage from '../Componenets/MyCircleImage';
import MyNumberContainer from '../Componenets/MyNumberContainer';
import Spacing from '../Constants/Spacing';
import Tags from '../Constants/Tags';


const GameOverScreen = props => {
    return (<View style={styles.root}>

        <MyCircleImage imgContainer={styles.imgContainer} src={Tags.img_happyPC} />
        <MyNumberContainer
            cardStyle={styles.card}
            cardTitle="Number of rounds it took NPC to guess the correct number is"
            value={props.numberOfRounds}
            buttonVisible={true}
            buttonTitle="Try Again"
            onButtonPressed={props.onGameRestart}
        />

    </View>);
};


const styles = StyleSheet.create({

    root: {
        flex: 1,
        alignItems: 'center'
    },

    card: {
        marginTop: 0,
        height: Spacing.space_200,
        alignItems: 'center',
    },

    imgContainer:{
        marginTop:Spacing.space_32,
    },


});


export default GameOverScreen;