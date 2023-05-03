import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './pages';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='index'
        screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen
          name='index'
          component={Index}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
