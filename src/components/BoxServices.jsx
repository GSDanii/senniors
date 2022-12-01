import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxServices = () => {
    return (
        <View style={styles.container}>
            <Text>¿Que mas podemos ofrecerte?</Text>
            <View style={styles.flex}>
                <View style={styles.boxs}>
                    <View style={styles.service}>
                    </View>
                    <Text>Cuidadoras</Text>
                </View>
                <View style={styles.boxs}>
                    <View style={styles.service}>
                    </View>
                    <Text>T. Ocupacional</Text>
                </View>
                <View style={styles.boxs}>
                    <View style={styles.service}>
                    </View>
                    <Text>Otros prof.</Text>
                </View>
                <View style={styles.boxs}>
                    <View style={styles.service}>
                    </View>
                    <Text>Asistencia</Text>
                </View>
                <View style={styles.boxs}>
                    <View style={styles.service}>
                    </View>
                    <Text>Servicios</Text>
                </View>
                <View style={styles.boxs}>
                    <View style={styles.service}>
                    </View>
                    <Text>Emergencia</Text>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    boxs: {
        paddingRight: 10
    },
    service: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 100,
        height: 100,
        marginTop: 10
    }

})

