import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../common/Splash/index';
import SelectSide from '../common/SelectSide';
import RestaurantHomeStack from '../restaurant/navigation/HomeStack';
import CustomerHomeStack from '../customer/navigation/HomeStack';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode={'none'}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name="SelectSide" component={SelectSide} />
        <Stack.Screen
          name="RestaurantHomeStack"
          component={RestaurantHomeStack}
        />
        <Stack.Screen name="CustomerHomeStack" component={CustomerHomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const NavigatorAlias = Navigation;

export default NavigatorAlias;
