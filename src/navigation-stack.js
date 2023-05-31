import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing, Login } from './pages';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='landing'
        screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen
          name='landing'
          component={Landing}
        />
        <Stack.Screen
          name='login'
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
