import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NextPageTouchable= ()=>{
  //use navigation hook shown as below
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      title="Naigate to next page"
      onPress={() => {
        navigation.navigate('SecondScreen'); 
      }}
    />
  );
}

export default NextPageTouchable