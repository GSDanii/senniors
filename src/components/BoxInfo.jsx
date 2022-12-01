import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import granny from '../assets/boxOne.jpg'


export const BoxInfo = () => {
    return (
        <View style={styles.box}>
            <ImageBackground source={granny} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 25 }} >
                <View style={styles.bgBlue}>
                    <Text style={styles.textOne}>Mama</Text>
                </View>
                <Text style={styles.textTwo}>Antonia Lopez</Text>
                <View style={styles.flex}>
                    <View style={styles.bgGrease}>
                        <Text style={styles.center}>Ánimo:</Text>
                        <Text style={styles.center}>Contenta</Text>
                    </View>
                    <View style={styles.bgGrease}>
                        <Text style={styles.center}>Métricas:</Text>
                        <Text style={styles.center}>Estables</Text>
                    </View>
                </View>
                <View style={styles.bgGrease2}>
                    <Text style={styles.text}>Rutina diaria:</Text>
                    <Text style={styles.text}>Sin problemas</Text>
                </View>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginTop: 25
    },
    image: {
        width: 330,
        height: 150,
    },
    bgBlue: {
        width: 50,
        borderRadius: 50,
        backgroundColor: '#55B9EC',
        marginTop: 20,
        marginLeft: 20
    },
    textOne: {
        fontSize: 15,
        marginLeft: 4,
    },
    textTwo: {
        fontSize: 15,
        marginLeft: 4,
        marginLeft: 20,
    },
    flex: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20
    },
    bgGrease: {
        textAlign: 'center',
        width: 100,
        borderRadius: 10,
        backgroundColor: '#D3D3D3',
        marginRight: 10,
        opacity: 0.9
    },
    center: {
        marginLeft: 20,
        textAlign: 'left'
    },
    bgGrease2: {
        backgroundColor: '#D3D3D3',
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 10,
        width: 211,
        opacity: 0.9
    },
    text: {
        marginLeft: 20
    }

})