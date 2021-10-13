import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import MyNumberContainer from '../Componenets/MyNumberContainer';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';


const GameOverScreen = props => {
    return (<View style={styles.root}>

        <View style={styles.imgContainer}>
            <Image
                style={styles.img} source={require('../assets/imgs/happyPC.png')} />

        </View>

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
        alignItems: 'center'
    },

    card: {
        marginTop: 0,
        height: Spacing.space_200,
        alignItems: 'center',
    },

    imgContainer: {
        height: Spacing.space_200,
        width: Spacing.space_200,
        marginVertical: Spacing.space_16,
        backgroundColor: Colors.colorWhite,

        borderRadius: Spacing.space_100,
        borderWidth: 1,
        borderTopColor: Colors.colorCardBorderColor,
        borderStartColor: Colors.colorCardBorderColor,
        borderEndColor: Colors.colorCardBorderColor2,
        borderBottomColor: Colors.colorCardBorderColor2,
        overflow: 'hidden',

        elevation: Spacing.spaceCardElevation,
        shadowColor: Colors.colorBlack,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 200,
        shadowOpacity: 0.26
    },

    img: {
        height: Spacing.spacePercent_100,
        width: Spacing.spacePercent_100,
    },
});


export default GameOverScreen;