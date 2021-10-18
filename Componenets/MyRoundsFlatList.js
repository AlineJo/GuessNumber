import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import MyTextStyle from '../assets/styles/MyTextStyle';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import MyText from './MyText';


const FlatListItem = props => (
    <View style={{ ...styles.listItemContainer, ...props.style }}>
        <View style={styles.listItem} >
            <MyText style={
                {
                    ...MyTextStyle('black').thin_18,
                    ...styles.itemIndex
                }}>
                {props.item.id}.
                </MyText>

            <View style={styles.itemValue}>
                <View style={{ ...styles.circle, ...{ marginEnd: Spacing.space_8 } }}>
                    <MyText style={
                        {
                            ...MyTextStyle(Colors.colorPrimary).light_24,
                            ...styles.itemValueText
                        }}>
                        {props.item.numberOfRounds}
                    </MyText>
                </View>

                <View style={styles.circle}>
                    <MyText
                        style={{
                            ...MyTextStyle(Colors.colorSecondary).light_24,
                            ...styles.itemValueText
                        }}>
                        {props.item.chosenNumber}
                    </MyText>
                </View>
            </View>
        </View>
    </View>
);

const MyRoundsFlatList = props => {

    const renderItem = ({ item }) => (<FlatListItem item={item} />);

    const headerItem = {
        id: "i",
        numberOfRounds: "NR",
        chosenNumber: "CN"
    }

    let flatListHeader

    if (props.roundsHistory) {
        flatListHeader = <FlatListItem style={{ marginTop: Spacing.space_16, marginBottom: Spacing.space_8 }} item={headerItem} />
    }

    return (

        <View style={{ flex: 1, width: Spacing.space_300, justifyContent: 'center' }}>

            {flatListHeader}
            <View style={styles.flatListContainer}>
                <FlatList
                    style={styles.flatList}
                    data={props.roundsHistory}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>

    );
};


const styles = StyleSheet.create({

    flatListContainer: {
        flex: 1,
        width: Spacing.space_300,
        alignContent: "center"
    },

    flatList: {
        width: Spacing.spacePercent_100,
        marginTop: Spacing.space_4,
        paddingBottom: Spacing.space_4,
    },

    listItemContainer: {
        width: Spacing.spacePercent_100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    listItem: {
        width: Spacing.space_156,
        height: Spacing.space_42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Spacing.space_10,
        backgroundColor: Colors.colorCardBorderColor2,
        borderRadius: Spacing.space_20,
    },

    itemIndex: {
        marginStart: Spacing.space_8,
        fontSize: Spacing.fontSize_Normal_18,
    },

    itemValue: {
        flex: 0.9,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },


    circle: {
        height: Spacing.space_36,
        width: Spacing.space_36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.colorWhite,
        borderRadius: Spacing.space_50,
    },

    itemValueText: {
        textAlign: 'center'
    },


});


export default MyRoundsFlatList;