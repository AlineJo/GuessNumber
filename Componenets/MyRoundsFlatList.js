import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import MyTextStyle from '../assets/styles/MyTextStyle';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import MyText from './MyText';


const FlatListItem = props => (
    <View style={{ ...styles.listItemContainer, ...props.style}}>
        <View style={styles.listItem} >
            <MyText style={{ ...MyTextStyle('black').thin_18, ...styles.itemIndex }}>{props.item.id}.</MyText>

            <View style={styles.itemValue}>
                <View style={{ ...styles.circle, ...{ marginEnd: 8 } }}>
                    <MyText style={{ ...MyTextStyle(Colors.colorPrimary).light_24, ...styles.itemValueText }}>{props.item.numberOfRounds}</MyText>
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
        flatListHeader = <FlatListItem style={{ marginTop: 16, marginBottom: 8 }} item={headerItem} />
    }

    return (

        <View style={{flex:1, width: 300, justifyContent: 'center' }}>

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
        flex:1,
        height: 350,
        width: 300,
        alignContent: "center"
    },

    flatList: {
        width: Spacing.spacePercent_100,
        marginTop: 4,
        paddingBottom: 32,
    },

    listItemContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    listItem: {
        width: 156,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: Colors.colorCardBorderColor2,
        borderRadius: 20,
    },

    itemIndex: {
        marginStart: 8,
        fontSize: Spacing.fontSize_Normal_18,
    },

    itemValue: {
        flex: 0.9,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },


    circle: {
        height: 36,
        width: 36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.colorWhite,
        borderRadius: 50,
    },

    itemValueText: {
        textAlign: 'center'
    },


});


export default MyRoundsFlatList;