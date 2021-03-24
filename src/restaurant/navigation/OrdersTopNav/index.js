import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewOrders from '../../screens/orders/newOrders';
import OnGoingOrders from '../../screens/orders/OnGoingOrders';
import { Colors, Fonts } from '../../config/Theme';
import { wp } from '../../helpers/Responsiveness';
import { styles } from './styles';

const Tab = createMaterialTopTabNavigator();

const OrdersTopNav = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        pressColor: Colors.Divider,
        inactiveTintColor: Colors.PrimaryText,
        activeTintColor: Colors.Accent,
        style: styles.tab,
        indicatorStyle: styles.indicator,
        labelStyle: styles.label,
      }}
      initialRouteName={props.initialRoute || 'New Orders'}
    >
      <Tab.Screen
        options={{ title: 'New Orders' }}
        name="NewOrders"
        component={NewOrders}
      />
      <Tab.Screen
        options={{ title: 'Ongoing Orders' }}
        name="OngoingOrders"
        component={OnGoingOrders}
      />
    </Tab.Navigator>
  );
};

export default OrdersTopNav;
