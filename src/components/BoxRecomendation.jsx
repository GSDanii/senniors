import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxRecomendation = () => {
    return (
        <View style={styles.boxReco}>
            <Text style={styles.text}>Recomendacion Sanitaria:</Text>
            <Text style={styles.textReco}>En función a los resultados obtenidos,{"\n"}
                valoraremos este servicio como lorem{"\n"}
                ipsum in dolor set...
            </Text>
            <Text style={styles.textFisio}> Fisioterapia</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxReco: {
        marginTop: 25,
        width: 330,
        borderColor: '#65D5F1',
        borderWidth: 1,
        borderRadius: 10
    },
    text: {
        marginTop: 25,
        marginLeft: 25,
        color: 'pink',
        fontWeight: 'bold'
    },
    textReco: {
        marginTop: 10,
        marginLeft: 25,
        borderBottomWidth: 5,
        borderBottomColor: 'grease',
    },
    textFisio: {
        margin: 25,
        fontSize: 20,
        borderTopColor: 'black',
        borderTopWidth: 5


    }


})

