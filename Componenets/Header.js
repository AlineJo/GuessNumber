import React from 'react';
import { View, StyleSheet } from "react-native";
import MyTextStyle from '../assets/styles/MyTextStyle';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import MyText from './MyText';



const Header = props => {

    return (
        <View style={styles.header}>
            <MyText
                style={
                    MyTextStyle(Colors.colorActionBarTitleColor).big_18
                } >
                {props.title}
            </MyText>
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
        fontSize: 28,
        fontWeight: 'bold',
    }
});

export default Header;