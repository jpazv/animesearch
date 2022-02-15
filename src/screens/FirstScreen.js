import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Fragment, Button, FlatList, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlipInEasyX } from 'react-native-reanimated';
import SearchInput from '../Animes/searchInput';
const api = "https://kitsu.io/api/edge/"
import { useNavigation } from '@react-navigation/native';






export default function Home() {

    const [text, setText] = useState('');
    const [info, setInfo] = useState({});

    useEffect(async () => {
        if (text) {
            console.log(text);
            await fetch(`${api}anime?filter[text]=${text}&page[limit]=15`)
                .then((response) => response.json())
                .then((response) => {
                    setInfo(response)
                    console.log(info);
                });
        }

    }, [text])
    const navigation = useNavigation();
    return (
        <>
            <SearchInput value={text} onChange={(str) => setText(str)} />
            {info.data && (
                <View style={{flexDirection: 'grid', }}>
                    {info.data.map((anime) => {
                        return (
                            <View>
                                <ScrollView key={anime.id}>
                                    <Image style={styles.poster} source={{ uri: anime.attributes.posterImage.small }} />
                                    <View>
                                        <Text>
                                            {anime.attributes.canonicalTitle}
                                        </Text>
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
        borderWidth: 0.5,
        borderColor: "#f00"

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