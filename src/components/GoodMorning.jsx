import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const GoodMorning = () => {
    return (
        <Text style={styles.goodMorning}>¡Buenos días,</Text>
    )
}

const styles = StyleSheet.create({
    goodMorning: {
        fontSize: 25,
    }

})