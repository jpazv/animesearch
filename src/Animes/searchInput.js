import React, { Component, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useDebounce from './useDebounce'

const SearchInput = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debounceChange = useDebounce(onChange, 500);

    function handleChange(event) {
        setDisplayValue(event.target.value);
        debounceChange(event.target.value);
    }

    return (
        <>
        
        <TextInput
            placeholder='Busque pelo seu anime favorito'
            value={displayValue}
            onChange={handleChange}
            style={styles.card}
        />
        </>
    );
}


export default SearchInput;
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