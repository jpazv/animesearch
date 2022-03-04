import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Anime Search' component={FirstScreen}/>
        <Stack.Screen name='Sinopse' component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
