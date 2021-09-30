import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import Card from './Card';
import MyButton from './MyButton';


const MyNumberContainer = props => {

    let button
    if (props.buttonVisible) {
        button = <MyButton style={{ ...styles.cardButton, ...props.styleButton }} title={props.buttonTitle} />
    }

    return (
        <Card style={{...styles.card, ...props.cardStyle}}>
            <Text style={styles.confiremedOutput}>
                {props.cardTitle}
            </Text>
            <View style={styles.numberContainer}>
                <Text style={styles.numberTextStyle}>{props.value}</Text>
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
        fontWeight: 'bold',
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
        fontSize: Spacing.fontSize_18,
        color: Colors.colorSecondary,
        fontWeight: 'bold'
    },

    cardButton: {
        marginTop: Spacing.space_24,
        width: 132,
    },



});


export default MyNumberContainer;