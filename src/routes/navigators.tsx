import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from '@app/routes/mainStack';
import {routes} from '@app/routes/routes';

const Stack = createStackNavigator();

const AppNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.MAIN_STACK} component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigations;
