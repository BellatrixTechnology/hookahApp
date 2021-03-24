import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import ProductDetail from '../screens/ProductDetail';
import MyCart from '../screens/MyCart';
import YourOrder from '../screens/YourOrder';
import OrderHistory from '../screens/OrderHistory';

const Stack = createStackNavigator();

const CustomerHomeStack = () => {
  // useEffect(() => {
  //   const backAction = () => {
  //     BackHandler.exitApp();
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <Stack.Navigator initialRouteName='Home' headerMode={'none'}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Menu' component={Menu} />
      <Stack.Screen name='ProductDetail' component={ProductDetail} />
      <Stack.Screen name='MyCart' component={MyCart} />
      <Stack.Screen name='YourOrder' component={YourOrder} />
      <Stack.Screen name='OrderHistory' component={OrderHistory} />
    </Stack.Navigator>
  );
};

export default CustomerHomeStack;
