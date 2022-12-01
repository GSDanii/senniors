import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import logo from '../assets/logoSenniors.jpg'

export const Title = () => {

    return (
        <View style={styles.border}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.title}>Senniors</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 30,
        height: 30,
        paddingBottom: 5
    },
    title: {
        fontSize: 25,
        paddingBottom: 5
    },
    border: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: '#F1F1F8',
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    }

})
