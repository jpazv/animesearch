import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Seja bem-vindo' component={FirstScreen}/>
        <Stack.Screen name='Essa é a sinopse do anime:' component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
