import React from 'react';
import { View, Text, StyleSheet } from "react-native";



const Header = props => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>

    );


}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 76,
        paddingTop: 42,
        paddingBottom: 16,
        backgroundColor: '#34EE99',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold', 
    }
});

export default Header;