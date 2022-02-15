import React, { Component, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import useDebounce from './useDebounce'

const SearchInput = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debounceChange = useDebounce(onChange, 500);

    function handleChange(event) {
        setDisplayValue(event.target.value);
        debounceChange(event.target.value);
    }

    return (
        <TextInput
            value={displayValue}
            onChange={handleChange} />
    );
}

export default SearchInput;