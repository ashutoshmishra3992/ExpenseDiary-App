import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import Screens from './Screens.ts';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.SPLASH}
    >
      <Stack.Screen options={{ headerShown: false }} name={Screens.SPLASH} component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
