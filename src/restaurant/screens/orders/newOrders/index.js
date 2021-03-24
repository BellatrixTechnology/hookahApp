import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  BackHandler,
  Text,
} from 'react-native';
import { OrdersData } from '../../../MockData';
import Container from '../../../components/Basic/Container';
import { FullRow, RightAligned, Row, RowApart, styles } from '../styles';
import {
  styles as newStyles,
  SubRow,
  TextBox,
  RowApart as NewRowApart,
} from '../../AllOrders/styles';
import { Colors } from '../../../config/Theme';
import Button from '../../../components/Buttons/Button/Button';
import RText from '../../../components/Basic/RText';
import HorizontalLine from '../../../components/Lines/HorizontalLine';
import RoundedButton from '../../../components/Buttons/RoundedButton/Button';
import VerticalLine from '../../../components/Lines/VerticalLine';
import OrderList from '../../../components/OrderList';
import RestaurantExternal from '../../../../restaurant/api/restaurants';
import { connect } from 'react-redux';
const NewOrders = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchAgain, setFetchAgain] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsIndex, setdetailIndex] = useState(0);
  useEffect(() => {
    setLoading(true);
    RestaurantExternal.GetPendingOrders(props.user.authorization)
      .then((res) => {
        setOrders(res.data.data.orders);
        setLoading(false);
        console.log(JSON.stringify(res.data.data.orders));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchAgain]);

  const cancelOrder = (orderID) => {
    let status = 'cancelled';
    RestaurantExternal.UpdateOrderStatus(orderID, status)
      .then((res) => {
        console.log('Order Cancelled');
        setShowDetails(false);
        setFetchAgain(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const acceptOrder = (orderID) => {
    let status = 'accepted';
    RestaurantExternal.UpdateOrderStatus(orderID, status)
      .then((res) => {
        console.log('Order Accepted');
        setShowDetails(false);
        setFetchAgain(Math.random());
        props.navigation.navigate('OngoingOrders');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeShowDetails = (Paramindex) => {
    setdetailIndex(Paramindex);
    setShowDetails(true);
    setLoading(true);
    setFetchAgain(Math.random());
  };

  return (
    <Container>
      {!loading ? (
        <Container>
          {showDetails ? (
            <View>
              <OrderList noAccentText orders={orders[detailsIndex]} />
              <RowApart style={styles.verticalPadding}>
                <RowApart style={styles.noPadding}>
                  <RightAligned>
                    {/* <RText style={{ ...styles.smallText }}>Discount</RText>
                    <RText style={styles.smallText}>Tax GST</RText> */}
                    <RText style={styles.smallText}>Subtotal</RText>
                    <RText>Total</RText>
                  </RightAligned>
                  <View style={styles.horizontalPadding}>
                    <VerticalLine />
                  </View>
                  <RightAligned>
                    {/* <RText style={styles.smallText}>
                      ${Math.floor(Math.random() * (1000 - 100) + 100) / 100}
                    </RText>
                    <RText style={styles.smallText}>
                      ${Math.floor(Math.random() * (1000 - 100) + 100) / 100}
                    </RText> */}
                    <RText style={styles.smallText}>
                      ${orders[detailsIndex].total}
                    </RText>
                    <RText>${orders[detailsIndex].total}</RText>
                  </RightAligned>
                </RowApart>
              </RowApart>
              <HorizontalLine />
              <Row style={{ paddingVertical: 15 }}>
                <RText style={styles.accentText}>
                  Touch the name of the product to show tooltip for speicial
                  instructions
                </RText>
              </Row>
              <Row>
                <RoundedButton
                  red
                  title={'Cancel Order'}
                  textStyle={{ color: 'white' }}
                  style={[styles.buttons, { backgroundColor: '#FF1111' }]}
                  onPress={() => cancelOrder(orders[detailsIndex]._id)}
                />
                <RoundedButton
                  title={'Accept Order'}
                  style={[styles.buttons, { backgroundColor: '#C9C9C9' }]}
                  onPress={() => acceptOrder(orders[detailsIndex]._id)}
                />
              </Row>
              <View style={{ marginLeft: 20 }}>
                <RoundedButton
                  title={'Hide Details'}
                  style={[styles.buttons, { backgroundColor: '#D27D19' }]}
                  onPress={() => setShowDetails(false)}
                />
              </View>
            </View>
          ) : (
            <Container>
              <ScrollView>
                {orders.map((item, index) => (
                  <View>
                    <NewRowApart>
                      <SubRow>
                        <TextBox>
                          <RText style={newStyles.title}>
                            ID :{orders[index].alias}
                          </RText>
                        </TextBox>
                        <SubRow>
                          <TextBox style={{ marginRight: 15 }}>
                            <RText style={{ color: Colors.Accent }}>
                              Pending
                            </RText>
                          </TextBox>
                          <TextBox>
                            <RText style={newStyles.title}>
                              Total : {orders[index].total}$
                            </RText>
                          </TextBox>
                        </SubRow>
                      </SubRow>
                      <SubRow>
                        <TextBox>
                          <RText>
                            Total Items :{orders[index].products.length}{' '}
                          </RText>
                        </TextBox>
                        <Button
                          title={'View Details'}
                          inverted
                          style={newStyles.viewButton}
                          onPress={() => changeShowDetails(index)}
                        />
                      </SubRow>
                    </NewRowApart>
                    <HorizontalLine />
                  </View>
                ))}
              </ScrollView>
            </Container>
          )}
        </Container>
      ) : (
        <View style={{ marginTop: 30 }}>
          <ActivityIndicator size='large' color='#ffffff' />
        </View>
      )}
      {orders.length === 0 && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 300,
          }}
        >
          <Text style={{ color: 'white', fontSize: 40 }}>Order Empty</Text>
        </View>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(NewOrders);
