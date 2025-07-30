import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import AuthScreen from '../screens/auth';
import HomeScreen from '../screens/home';
import Screens from './Screens.ts';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.SPLASH}
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen 
        name={Screens.SPLASH} 
        component={SplashScreen} 
      />
      <Stack.Screen 
        name={Screens.AUTH} 
        component={AuthScreen} 
      />
      <Stack.Screen 
        name={Screens.HOME} 
        component={HomeScreen} 
      />
    </Stack.Navigator>
  );
};

export default RootStack;
