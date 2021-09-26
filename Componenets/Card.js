import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Card = props => {
    return (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>);
}; 


const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',

        borderRadius: 8,
        borderTopColor: '#f8f8f8',
        borderStartColor: '#f8f8f8',
        borderEndColor: '#f0f0f0',
        borderBottomColor: '#f0f0f0',
        borderWidth: 1,

        elevation: 8,
        shadowColor: "black",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowRadius: 8,
        shadowOpacity: 0.26
    },

});


export default Card;