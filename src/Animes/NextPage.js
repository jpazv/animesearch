// import React from 'react';
// import { View, StyleSheet,ImageBackground, TouchableOpacity } from 'react-native';

// export function NextPage({info}, text){

//     useEffect(async () => {
//         if (text) {
//             await fetch(info.links.next)
//                 .then((response) => response.json())
//                 .then((response) => {
//                     setInfo(response)
//                     console.log(response)
//                 });
//         }

//     }, [text])

//     return(
//         <>
//         <View style={{ flex: 1 }}>
//             <ImageBackground source={{ uri: "https://1.bp.blogspot.com/-YZxv1NclCoc/YX6c68gTfSI/AAAAAAAAi0o/WGrPfFTj_Nor2DAQJUbquzvPhCeanHTJwCNcBGAsYHQ/s1334/melhores-wallpapers-de-naruto-4k%2B%25281%2529.jpg" }} resizeMode="cover" style={{ flex: 1 }} style={StyleSheet.absoluteFillObject} blurRadius={5} >
//                 <SearchInput value={text} onChange={(str) => setText(str)} />
//                 {info.data && (
//                     <View>
//                         <ImageBackground style={StyleSheet.absoluteFillObject} source={{ uri: "https://1.bp.blogspot.com/-YZxv1NclCoc/YX6c68gTfSI/AAAAAAAAi0o/WGrPfFTj_Nor2DAQJUbquzvPhCeanHTJwCNcBGAsYHQ/s1334/melhores-wallpapers-de-naruto-4k%2B%25281%2529.jpg" }} blurRadius={5} />
//                         {info.data.map((anime) => {
//                             return (
//                                 <View style={styles.card}>
//                                     <ScrollView key={anime.id}>
//                                         <TouchableOpacity onPress={() => navigate('Sinopse', { id: anime.attributes.synopsis, link: info.links.next })}>
//                                             <AnimeCard anime={anime} />
//                                         </TouchableOpacity>
//                                     </ScrollView>
//                                 </View>
//                             )
//                         })}
//                     </View>
//                 )}
//             </ImageBackground>

//         </View>
//     </>
//     )
// }