import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
;
const api = "https://kitsu.io/api/edge/"


export default function SecondScreen({ route }) {

    const { id } = route.params;

    return ( 
        <>
        <ImageBackground source={{ uri: "https://1.bp.blogspot.com/-YZxv1NclCoc/YX6c68gTfSI/AAAAAAAAi0o/WGrPfFTj_Nor2DAQJUbquzvPhCeanHTJwCNcBGAsYHQ/s1334/melhores-wallpapers-de-naruto-4k%2B%25281%2529.jpg" }} resizeMode="cover" style={StyleSheet.absoluteFillObject} blurRadius={5}>
            <View style={styles.card}>
                <Text>{id}</Text>
            </View>
        </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    card:{
        padding: 10,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        margin: 20
    }
})