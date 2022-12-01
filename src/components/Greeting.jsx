import React from 'react'
import { View, StyleSheet } from 'react-native'
import { GoodMorning } from './GoodMorning';
import GradientName from './GradientName';

export const Greeting = ({ name }) => {
    return (
        <View style={styles.containerGreeting}>
            <GoodMorning />
            <GradientName style={styles.textStyle}>{name}</GradientName>

        </View>

    )
}

const styles = StyleSheet.create({
    containerGreeting: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    greeting: {
        position: 'relative',


    }
});
