import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import AbsoluteHeader from '../../components/AbsoluteHeader';
import HorizontalLine from '../../components/HorizontalLine';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import {
  ActiveButton,
  ImageView,
  ItemsView,
  OrderIdView,
  ParentView,
  SmallText,
  StyledText,
  TitleText,
  TitleView,
} from './styles';
import PastOrders from '../../components/PastOrders';
import Container from '../../components/Basic/Container';
import ValidateOrder from '../../../customer/api/validateOrder';

const OrderHistory = (props) => {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ValidateOrder.GetAllProductsCustomer(props.user.authorization)
      .then((res) => {
        setArr(res.data.data.orders);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Header
        title='Past Orders'
        righticondisable
        logout
        onBackPress={props.navigation.goBack}
      />
      {loading ? (
        <ActivityIndicator size='large' color='#ffffff' />
      ) : (
          <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
            <ParentView>
              {/*<OrderIdView>*/}
              {/*  <StyledText>*/}
              {/*    Order id: {arr.length > 2 ? arr[0].alias : null}*/}
              {/*  </StyledText>*/}
              {/*  <StyledText>*/}
              {/*    Today at:{' '}*/}
              {/*    {arr.length > 2 ? arr[0].createdAt.substring(11, 16) : null}*/}
              {/*  </StyledText>*/}
              {/*</OrderIdView>*/}
              {/*<HorizontalLine />*/}
              {arr.map((item, index) => {
                return <PastOrders navigation={props.navigation} data={item} />;
              })}
            </ParentView>
          </ScrollView>
        )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(OrderHistory);
