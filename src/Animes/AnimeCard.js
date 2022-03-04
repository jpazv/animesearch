import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'

export function AnimeCard({ anime }) {
    return (
        <View style={styles.content}>
            <Image style={styles.poster} source={{ uri: anime.attributes.posterImage.small }} />
            <View style={ styles.content2}>
                <Text style={styles.title}>
                    {anime.attributes.canonicalTitle}
                </Text>
                <Text style={styles.ageRate}>
                    {anime.attributes.ageRatingGuide}
                </Text>
                <Text style={styles.rating}>
                    {anime.attributes.averageRating}
                </Text>
                <Text style={styles.clique}>
                    Clique para ver a sinopse!
                </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        padding: 10
    },

    content2: {
        paddingLeft: 7,
        marginRight: 30
    },

    poster: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 150,
        borderRadius: 10,
        borderWidth: 0.5

    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
        maxWidth: 200
    },

    ageRate: {
        fontSize: 16,
        opacity: .7,
        marginBottom: 10
    },

    rating: {
        fontSize: 12, 
        opacity: .7, 
        color: "blue", 
        maxWidth: 200
    },

    clique:{
        paddingTop: 60, 
        marginHorizontal: 30, 
        color: '#464646' 
    }
})
