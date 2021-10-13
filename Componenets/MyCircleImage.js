import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';
import Tags from '../Constants/Tags';


const MyCircleImage = props => {

    let imgSource
    if (props.uri) {
        imgSource = { uri: props.uri }
    }
    else {
        imgSource = props.src
    }

    return (
        <View style={{ ...styles.imgContainer, ...props.imgContainer }}>
            <Image
                style={{ ...styles.img, ...props.imgStyle }}
                source={imgSource} />
        </View>

    );
};


const styles = StyleSheet.create({
    imgContainer: {
        height: Spacing.space_200,
        width: Spacing.space_200,
        marginVertical: Spacing.space_16,
        backgroundColor: Colors.colorWhite,

        borderRadius: Spacing.space_100,
        borderWidth: 1,
        borderColor: Colors.colorCardBorderColor2,
        overflow: 'hidden',

        elevation: Spacing.spaceCardElevation,
        shadowColor: Colors.colorBlack,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 200,
        shadowOpacity: 0.26
    },

    img: {
        height: Spacing.spacePercent_100,
        width: Spacing.spacePercent_100,
    },
});


export default MyCircleImage;