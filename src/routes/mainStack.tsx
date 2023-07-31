import {createStackNavigator} from '@react-navigation/stack';
import {WELCOME, HOME, MUSIC} from '@app/views/';
import {routes} from '@app/routes/routes';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.WELCOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.WELCOME_SCREEN} component={WELCOME} />
      <Stack.Screen name={routes.HOME_SCREEN} component={HOME} />
      <Stack.Screen name={routes.MUSIC_SCREEN} component={MUSIC} />
    </Stack.Navigator>
  );
};

export default MainStack;
