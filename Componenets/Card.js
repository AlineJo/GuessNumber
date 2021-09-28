import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../Constants/Colors'
import Spacing from '../Constants/Spacing';

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>);
};


const styles = StyleSheet.create({
    card: {
        marginTop: Spacing.space_32,
        width: Spacing.spacePercent_95,
        paddingHorizontal: Spacing.space_16,
        paddingVertical: Spacing.space_32,
        backgroundColor: Colors.colorWhite,

        borderRadius: Spacing.spaceCardRaduis,
        borderTopColor: Colors.colorCardBorderColor,
        borderStartColor: Colors.colorCardBorderColor,
        borderEndColor: Colors.colorCardBorderColor2,
        borderBottomColor: Colors.colorCardBorderColor2,
        borderWidth: 1,

        elevation: Spacing.spaceCardElevation,
        shadowColor: Colors.colorBlack,
        shadowOffset: {
            width: Spacing.space_4,
            height: Spacing.space_4
        },
        shadowRadius: Spacing.spaceCardRaduis,
        shadowOpacity: 0.26
    },

});


export default Card;