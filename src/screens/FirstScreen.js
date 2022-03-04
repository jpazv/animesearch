import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native-web';
import { AnimeCard } from '../Animes/AnimeCard';
import SearchInput from '../Animes/searchInput';
const api = "https://kitsu.io/api/edge/"



export default function Home({ navigation: { navigate } }) {

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
            <View style={{ flex: 1 }}>
                <ImageBackground source={{ uri: "https://1.bp.blogspot.com/-YZxv1NclCoc/YX6c68gTfSI/AAAAAAAAi0o/WGrPfFTj_Nor2DAQJUbquzvPhCeanHTJwCNcBGAsYHQ/s1334/melhores-wallpapers-de-naruto-4k%2B%25281%2529.jpg" }} resizeMode="cover" style={StyleSheet.absoluteFillObject} blurRadius={5} >
                    <SearchInput value={text} onChange={(str) => setText(str)} />

                    {info.data && (
                        <View>
                            <Image style={StyleSheet.absoluteFillObject} source={{ uri: "https://1.bp.blogspot.com/-YZxv1NclCoc/YX6c68gTfSI/AAAAAAAAi0o/WGrPfFTj_Nor2DAQJUbquzvPhCeanHTJwCNcBGAsYHQ/s1334/melhores-wallpapers-de-naruto-4k%2B%25281%2529.jpg" }} blurRadius={5} />
                            {info.data.map((anime) => {
                                return (
                                    <>
                                        <SearchInput value={text} onChange={(str) => setText(str)} />
                                        <View style={styles.card}>
                                            <ScrollView key={anime.id}>
                                                <TouchableOpacity onPress={() => navigate('Sinopse', { id: anime.attributes.synopsis })}>
                                                    <AnimeCard anime={anime} />
                                                </TouchableOpacity>
                                            </ScrollView>
                                        </View>
                                    </>
                                )
                            })}
                        </View>
                    )}
                </ImageBackground>

            </View>
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
