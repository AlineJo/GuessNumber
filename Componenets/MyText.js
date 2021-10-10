import React from 'react';
import { Text, StyleSheet } from 'react-native'


const MyText = props => {
    return (<Text style={{ ...styles.text, ...props.style }}>Hello World{props.childern}</Text>);
};


const styles = StyleSheet.create({
    text: {
        fontFamily: 'font-robot-light',
        fontSize:20,
    },
});


export default MyText;