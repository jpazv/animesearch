import React from "react";
import { View, Image, Text, StyleSheet} from 'react-native'

export function AnimeCard({anime}) {
    return (
        <View style={{ flexDirection: "row", padding: 10 }}>
            <Image style={styles.poster} source={{ uri: anime.attributes.posterImage.small }} />
            <View style={{ paddingLeft: 7, marginRight: 30 }}>
                <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 10, maxWidth: 200}}>
                    {anime.attributes.canonicalTitle}
                </Text>
                <Text style={{ fontSize: 16, opacity: .7, marginBottom: 10 }}>
                    {anime.attributes.ageRatingGuide}
                </Text>
                <Text style={{ fontSize: 12, opacity: .7, color: "blue", maxWidth: 200 }}>
                    {anime.attributes.averageRating}
                </Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    poster: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 150,
        borderRadius: 10,
        borderWidth: 0.5
    }})
