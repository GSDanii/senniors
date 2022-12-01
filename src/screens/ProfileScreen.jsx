import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BoxInfo } from '../components/BoxInfo'
import { BoxRecomendation } from '../components/BoxRecomendation'
import { BoxServices } from '../components/BoxServices'
import { Greeting } from '../components/Greeting'
import { Title } from '../components/Title'
import AgeAxios from '../services/ageAxios'


export const ProfileScreen = () => {

    const name = `Claudia`
    const ageAxios = new AgeAxios()
    const [user, setUser] = useState(null)

    useEffect(() => {
        ageAxios
            .getAgebyName(name)
            .then(user => setUser(user))
            .catch(err => console.log(err))
    }, [])


    return (

        !user
            ? <Text>Loading...</Text>
            : <View>
                <Title />
                <Greeting name={`${user.name}!`} />
                <Text>¿Como te sientes a tus {user.age} años</Text>
                <BoxInfo />
                <BoxRecomendation />
                <BoxServices />
            </View>

    )
}


