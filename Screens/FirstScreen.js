import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Card from '../Componenets/Card';
import Colors from '../Constants/Colors';
import Spacing from '../Constants/Spacing';


const FirstScreen = props => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Start a New Game!</Text>

            <Card style={styles.card}>
                
                <Text >Select a Number:</Text>
                <TextInput placeholder="enter a number" style={styles.input} />

                <View style={styles.buttonsHolder}>

                    
                        <TouchableOpacity style={styles.button} onPress={()=>console.log('Reset')} >
                            <View style={[styles.buttonCancel]}>
                                <Text style={[styles.buttonText]}>Reset</Text>
                            </View>
                        </TouchableOpacity>
                  


                    <TouchableOpacity style={styles.button} onPress={()=>console.log('Confirm')} >
                        <View style={[styles.buttonPrimary]}>
                            <Text style={[styles.buttonText]}>Confirm</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </Card>



        </View>);
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: Spacing.space_10,
        alignItems: 'center',
    },

    title: {
        marginTop: Spacing.space_10,
        fontSize: Spacing.fontSize_18,
    },

    card: {

       
    },

    input: {
        height: Spacing.spaceInputHeight,
        width: Spacing.spacePercent_100,
        marginTop: Spacing.space_10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.colorInputBorder,
    },

    buttonsHolder: {
        width: Spacing.spacePercent_100,
        paddingHorizontal:Spacing.space_4,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },

    button: {
        marginTop: Spacing.space_32,
        width: Spacing.spacePercent_40,
    },

    buttonText: {
        color: Colors.colorWhite,
        textAlign: "center",
        fontWeight: "bold"
    },

    buttonCancel: {
        paddingVertical: Spacing.space_8,
        backgroundColor: Colors.colorButtonCancel
    },

    buttonPrimary: {
        paddingVertical: Spacing.space_8,
        backgroundColor: Colors.colorButtonPrimary
    },

});


export default FirstScreen;