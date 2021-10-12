import React from 'react';
import { Text } from 'react-native'

const MyText = props => {

    return (<Text style={props.style }>{props.children}</Text>);
};



export default MyText;