import React from 'react';
import { Text, StyleSheet } from 'react-native'
import MyTextStyle from '../assets/styles/MyTextStyle';
import Spacing from '../Constants/Spacing';
import Tags from '../Constants/Tags';



const MyText = props => {

    return (<Text style={{...MyTextStyle(props.color).thin_12, ...props.style }}>{props.children}</Text>);
};




export default MyText;