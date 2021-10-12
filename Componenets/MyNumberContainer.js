import React from 'react';
import { View, StyleSheet } from 'react-native'
import MyTextStyle from '../assets/styles/MyTextStyle';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import Card from './Card';
import MyButton from './MyButton';
import MyText from './MyText';


const MyNumberContainer = props => {

    let button
    if (props.buttonVisible) {
        button = 
        <MyButton 
        style={{ ...styles.cardButton, ...props.styleButton }}
        title={props.buttonTitle} 
        onPress={props.onButtonPressed}
        />
    }

    return (
        <Card style={{...styles.card, ...props.cardStyle}}>
            <MyText style={{...styles.confiremedOutput, ...MyTextStyle(Colors.colorGray).big_16}}>
                {props.cardTitle}
            </MyText>
            <View style={styles.numberContainer}>
                <MyText style={{...styles.numberTextStyle, ...MyTextStyle(Colors.colorSecondary).big_18}}>{props.value}</MyText>
            </View>

            {button}

        </Card>);
};


const styles = StyleSheet.create({

    card: {
        height: 156,
        width: 200,
        paddingVertical: Spacing.space_8,
        alignItems: 'center',

    },

    confiremedOutput: {
        color: Colors.colorGray,
        textAlign: "center"
    },


    numberContainer: {
        height: Spacing.space_40,
        width: Spacing.space_40,
        borderRadius: Spacing.space_32,
        marginTop: Spacing.space_16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.colorWhite,

        elevation: Spacing.spaceCardElevation,
        shadowColor: Colors.colorBlack,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: Spacing.spaceCardRaduis,
        shadowOpacity: 0.26
    },
    numberTextStyle: {
        textAlign: "center",
    },

    cardButton: {
        marginTop: Spacing.space_24,
        width: 132,
    },



});


export default MyNumberContainer;