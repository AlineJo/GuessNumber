import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Card from '../Componenets/Card';


const FirstScreen = props => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Start a New Game!</Text>

            <Card style={styles.card}>
                
                <Text >Select a Number:</Text>
                <TextInput placeholder="enter a number" style={styles.input} />

                <View style={styles.buttonsHolder}>

                    <View style={styles.button} >
                        <TouchableOpacity >
                            <View style={[styles.buttonRed]}>
                                <Text style={[styles.buttonText]}>Reset</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity style={styles.button}>
                        <View style={[styles.buttonGreen]}>
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
        padding: 10,
        alignItems: 'center',
    },

    title: {
        marginTop: 16,
        fontSize: 18,
    },

    card: {
        marginTop: 32,
        width: '95%',
        paddingHorizontal: 16,
        paddingVertical: 32,
       
    },

    input: {
        height: 36,
        width: '100%',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#c3c3c3'
    },

    buttonsHolder: {
        width: "100%",
        paddingHorizontal:4,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },

    button: {
        marginTop: 32,
        width: "40%",
    },

    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },

    buttonRed: {
        paddingVertical: 8,
        backgroundColor: "#EE5555"
    },

    buttonGreen: {
        paddingVertical: 8,
        backgroundColor: "#34EE99"
    },

});


export default FirstScreen;