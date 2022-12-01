import React from "react";
import { Text, StyleSheet } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from 'expo-linear-gradient'

const GradientName = (props) => {
    return (
        <MaskedView maskElement={<Text {...props} />}>
            <LinearGradient
                colors={["#61EEF6", "#945AEF", '#DA69B1']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text {...props} style={[props.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    );
};

export default GradientName;

const styles = StyleSheet.create({
    moveGradient: {
        position: 'relative',
        top: -300
    }
})

