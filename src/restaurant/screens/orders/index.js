import React, {Component} from 'react';
import {useRoute} from '@react-navigation/native';
import Container from '../../components/Basic/Container';
import Header from '../../components/Headers/Header';
import OrdersTopNav from '../../navigation/OrdersTopNav';

const Orders = (props) => {
  const {params} = useRoute();
  return (
    <Container>
      <Header title={'Orders'} onBackPress={() => props.navigation.goBack()} />
      <OrdersTopNav
        initialRoute={
          params && params.initialRoute ? params.initialRoute : 'newOrders'
        }
      />
    </Container>
  );
};

export default Orders;
