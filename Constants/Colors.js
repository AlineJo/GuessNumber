import { Platform } from "react-native";

const Colors = {

    colorPrimary: '#34EE99',
    colorSecondary: '#3499EE',

    colorActionBarTitleColor: Platform.OS === 'android' ? 'white' : 'black',
    colorActionBarBackgroundColor: Platform.OS === 'android' ? '#34EE99' : 'white',
    colorActionBarBorderColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',

    colorButtonPrimary: '#34EE99',
    colorButtonSecondary: '#3499EE',
    colorButtonCancel: '#EE5555',

    colorBlack: 'black',
    colorWhite: 'white',
    colorGray: 'gray',

    colorCardBorderColor: '#f8f8f8',
    colorCardBorderColor2: '#f0f0f0',

    colorInputBorder: '#c3c3c3',
    colorPlaceholderText: '#777',

    colorRipple: '#FFFFFFAA',



};


export default Colors;