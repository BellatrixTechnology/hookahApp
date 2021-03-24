import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Products from '../screens/Products';
import AllOrders from '../screens/AllOrders/index';
import Orders from '../screens/orders';
import Sidebar from '../components/Sidebar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductDetail from '../screens/ProductDetail';
import LogIn from '../screens/Auth/LogIn/index';
import SignUp from '../screens/Auth/SignUp/index';
import ForgotPassword from '../screens/Auth/ForgotPassword/index';
import { connect } from 'react-redux';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(dcProps) => <Sidebar {...dcProps} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name='Home' component={Home} />
    </Drawer.Navigator>
  );
};

const MemberRestaurant = () => {
  return (
    <Stack.Navigator initialRouteName='Dashboard' headerMode={'none'}>
      <Stack.Screen name='Dashboard' component={DrawerNavigator} />
      <Stack.Screen name='Category' component={Category} />
      <Stack.Screen name='Products' component={Products} />
      <Stack.Screen name='ProductDetail' component={ProductDetail} />
      <Stack.Screen name='Orders' component={Orders} />
      <Stack.Screen name='AllOrders' component={AllOrders} />
    </Stack.Navigator>
  );
};

const GuestRestaurant = () => {
  return (
    <Stack.Navigator initialRouteName='LogIn' headerMode={'none'}>
      <Stack.Screen name='LogIn' component={LogIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const RestaurantDecider = (props) => {
  return (
    <Stack.Navigator headerMode={'none'}>
      {!props.user.type ? (
        <Stack.Screen name='GuestRestaurant' component={GuestRestaurant} />
      ) : (
        <Stack.Screen name='MemberRestaurant' component={MemberRestaurant} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const RootDecider = connect(mapStateToProps, null)(RestaurantDecider);

const RestaurantHomeStack = () => {
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
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode={'none'}
    >
      <Stack.Screen name='RootDecider' component={RootDecider} />
    </Stack.Navigator>
  );
};

export default RestaurantHomeStack;
