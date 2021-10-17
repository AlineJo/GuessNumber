import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import MyTextStyle from '../assets/styles/MyTextStyle';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import MyText from './MyText';


const FlatListItem = (props) => (
    <View style={styles.listItemContainer}>
        <View style={styles.listItem} >
            <MyText style={{ ...MyTextStyle('black').thin_18, ...styles.itemIndex }}>{props.index}.</MyText>

            <View style={styles.itemValue}>
                <View style={styles.circle}>
                    <MyText style={{ ...MyTextStyle(Colors.colorSecondary).light_24, ...styles.itemValueText }}>{props.title}</MyText>
                </View>
            </View>
        </View>
    </View>
);

const MyRoundsFlatList = props => {

    const renderItem = ({ item }) => (<FlatListItem index={item.id} title={item.title} />);

    return (
        <FlatList
            style={styles.flatList}
            data={props.roundsHistory}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};


const styles = StyleSheet.create({
    flatList: {
        width: Spacing.spacePercent_95,
        marginTop: 32,
        paddingBottom: 32,
    },

    listItemContainer:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    listItem: {
        width: 100,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: Colors.colorCardBorderColor2,
        borderRadius: 20,
    },

    itemIndex: {
        marginStart: 8,
        fontSize: Spacing.fontSize_Normal_18,
    },

    itemValue: {
        flex: 0.9,
        alignItems: 'flex-end',
    },


    circle: {
        padding: 0,
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