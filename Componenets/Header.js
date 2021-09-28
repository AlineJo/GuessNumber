import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';



const Header = props => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>

    );


}

const styles = StyleSheet.create({
    header: {
        width: Spacing.spacePercent_100,
        height: Spacing.spaceActionBarHeight,
        paddingTop: Spacing.spaceActionBarPaddingTop,
        paddingBottom: Spacing.spaceActionBarPaddingBottom,
        backgroundColor: Colors.colorPrimary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerTitle: {
        color: Colors.colorActionBarTitleColor,
        fontSize: 18,
        fontWeight: 'bold', 
    }
});

export default Header;