import React from 'react';
import { View, StyleSheet, Platform } from "react-native";
import MyTextStyle from '../assets/styles/MyTextStyle';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import Tags from '../Constants/Tags';
import MyText from './MyText';



const Header = props => {

    const headerTitleStyle = Platform.select({
        ios: MyTextStyle(Colors.colorActionBarTitleColor).light_18,
        android: MyTextStyle(Colors.colorActionBarTitleColor).big_18,
    })

    return (
        <View style={styles.header}>
            <MyText
                style={
                    headerTitleStyle} >
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
        backgroundColor: Colors.colorActionBarBackgroundColor,
        borderBottomColor: Colors.colorActionBarBorderColor,
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerTitle: {
        color: Colors.colorActionBarTitleColor,
        fontSize: 28,
    }
});

export default Header;