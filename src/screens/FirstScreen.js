import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlipInEasyX } from 'react-native-reanimated';
import SearchInput from '../Animes/searchInput';
const api = "https://kitsu.io/api/edge/"







export default function Home() {

    const [text, setText] = useState('');
    const [info, setInfo] = useState({});

    useEffect(async () => {
        if (text) {
            console.log(text);
            await fetch(`${api}anime?filter[text]=${text}&page[limit]=14`)
                .then((response) => response.json())
                .then((response) => {
                    setInfo(response)
                    console.log(info);
                });
        }

    }, [text])
    return (
        <>
            <SearchInput value={text} onChange={(str) => setText(str)} />
            {info.data && (
                <View>
                    <Image style={StyleSheet.absoluteFillObject} source={{ uri: "https://1.bp.blogspot.com/-YZxv1NclCoc/YX6c68gTfSI/AAAAAAAAi0o/WGrPfFTj_Nor2DAQJUbquzvPhCeanHTJwCNcBGAsYHQ/s1334/melhores-wallpapers-de-naruto-4k%2B%25281%2529.jpg" }} blurRadius={40} />
                    {info.data.map((anime) => {
                        return (
                            <View style={{
                                 padding: 10, backgroundColor: 'rgba(255,255,255, 0.7)', borderRadius: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 10
                                },
                                shadowOpacity: .3,
                                shadowRadius: 20, margin: 20
                            }}>
                                <ScrollView key={anime.id}>
                                    <View style={{ flexDirection: "row", padding: 10 }}>
                                        <Image style={styles.poster} source={{ uri: anime.attributes.posterImage.small }} />
                                        <View style={{ paddingLeft: 7, marginRight: 30 }}>
                                            <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 10, maxWidth: 250 }}>
                                                {anime.attributes.canonicalTitle}
                                            </Text>
                                            <Text style={{ fontSize: 16, opacity: .7, marginBottom: 10 }}>
                                                {anime.attributes.ageRatingGuide}
                                            </Text>
                                            <Text style={{ fontSize: 12, opacity: .7, color: "#464646", maxWidth: 200 }}>
                                                {anime.attributes.synopsis}
                                            </Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        )
                    })}
                </View>
            )}
        </>
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

    },
    header: {
        width: 100,
        height: 100
    },
    animes: {
        display: 'flex',
        flexDirection: 'columm',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: "#000"

    }
})