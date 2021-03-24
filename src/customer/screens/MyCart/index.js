import React, { Component, useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Switch,
  BackHandler,
} from 'react-native';
import Container from '../../components/Basic/Container';
import Header from '../../components/Header';
import RText from '../../components/Basic/RText';
import DeleteIcon from '../../assets/icons/delete.png';
import ShoppingBag from '../../assets/icons/shoppingBag.png';
import {
  CartItem,
  Content,
  DeleteBox,
  Delete,
  Details,
  ItemImage,
  ItemRight,
  QuantityBox,
  RowApart,
  Scroll,
  styles,
  TotalBar,
  TotalBox,
  TotalBoxText,
  Centered,
  EmptyCart,
  CartText,
  SubView,
} from './styles';
import Button from '../../components/Button/Button';
import { Cart } from '../../MockData';
import { connect } from 'react-redux';
import {
  deleteCartItem,
  onPlus,
  deleteNotAvailable,
} from '../../../redux/user/actions';
import ValidateOrder from '../../api/validateOrder';
import { socket } from '../../../config/Sockets';
import { log } from 'react-native-reanimated';

const MyCart = (props) => {
  const { extras, specialInstructions, variant } = props.route.params;
  const extrasPrice = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
  const [cartItems, setCartItems] = useState(Cart);
  const [isEnabled, setIsEnabled] = useState(false);
  const [productPrice, setProductPrice] = useState(
    Object.values(props.state.userCart)
  );
  const [subtotal, setSubtotal] = useState(
    productPrice.length > 0 ? productPrice[0].price : 0
  );
  const [pricePrivacy, setPricePrivacy] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Object.values(props.state.userCart).length);
    let temp = Object.values(props.state.userCart);

    if (temp.length > 0) {
      socket.emit('TOGGLE_PRICE', { restaurant_id: temp[0]._restaurant });
      socket.on('TOGGLE_PRICE', (restaurant) => {
        // console.log('Privacy is', restaurant.prices);
        setPricePrivacy(restaurant.prices);
      });
    }
  }, []);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onPlus = (item) => {
    // let tempCart = cartItems;
    // tempCart[index].quantity += 1;
    // setCartItems([...tempCart]);
    props.onPlus(item._id);
  };
  const onMinus = (index) => {
    let tempCart = cartItems;
    tempCart[index].quantity -= tempCart[index].quantity !== 1 ? 1 : 0;
    setCartItems([...tempCart]);
  };
  const onDelete = (item) => {
    props.deleteCartItem(item._id);
    setCount(count - 1);
    console.log('On delete', count);
  };
  const onCheckout = () => {
    ValidateOrder.validation(props.state.userCart)
      .then((res) => res.data.data)
      .then((res) => {
        isEnabled
          ? props.deleteNotAvailable(res)
          : Object.values(res).every((e) => e === true);
      })
      .then((res) =>
        res === true
          ? props.navigation.navigate('Home')
          : console.warn('Some of your items are not available')
      )
      .catch((error) => console.log('error >>>', error.response.data));

    let temp = Object.values(props.state.userCart);
    let myCartRestuarant = [];
    let myCartProducts = [
      {
        cartProducts: '',
        cartExtras: '',
      },
    ];
    let myCartQuantity = 0;

    temp.map((item, index) => {
      myCartRestuarant.push(temp[index]._restaurant);
      myCartProducts.push({
        cartProducts: temp[index]._id,
        cartExtras: temp[index].extras,
      });
      myCartQuantity = myCartQuantity + temp[index].quantity;
    });
    ValidateOrder.CheckoutProducts(
      myCartRestuarant,
      temp[0]._id,
      props.state.user._id,
      myCartQuantity,
      variant,
      specialInstructions
    )
      .then((res) => {
        console.log('Checked Out');
        props.navigation.navigate('Home');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onBackToShopping = (item) => {
    props.navigation.navigate('Home');
  };

  return (
    <Container noBackground={cartItems.length !== 0}>
      {count > 0 ? (
        <Content>
          <Scroll>
            <Header title={'My Cart'} onBackPress={props.navigation.goBack} />
            {Object.values(props.state.userCart).map((item, index) => {
              return (
                <CartItem>
                  <ItemImage source={{ uri: item.avatar }} />
                  <Details>
                    <RText>{item.name}</RText>
                    {pricePrivacy ? (
                      <RText style={styles.price}>$ {item.price}.00</RText>
                    ) : null}
                    {extras.length > 0 ? (
                      <>
                        <RText>With extras</RText>
                        {extras.map((item, index) => (
                          <RText>
                            {extras[index]}
                            {','}
                          </RText>
                        ))}
                      </>
                    ) : (
                      <RText>With no extras</RText>
                    )}
                  </Details>
                  <ItemRight>
                    <DeleteBox onPress={() => onDelete(item)}>
                      <Delete source={DeleteIcon} />
                    </DeleteBox>
                    <QuantityBox>
                      <TouchableOpacity onPress={() => onMinus(index)}>
                        <RText style={styles.minusPlus}>-</RText>
                      </TouchableOpacity>
                      <RText style={styles.quantityText}>{item.quantity}</RText>
                      <TouchableOpacity onPress={() => onPlus(item)}>
                        <RText style={styles.minusPlus}>+</RText>
                      </TouchableOpacity>
                    </QuantityBox>
                  </ItemRight>
                </CartItem>
              );
            })}
          </Scroll>
          <TotalBox>
            <SubView>
              {/* <RowApart>
                <TotalBoxText>Total</TotalBoxText>
                <TotalBoxText>$15.00</TotalBoxText>
              </RowApart>
              <RowApart>
                <TotalBoxText>Discount</TotalBoxText>
                <TotalBoxText>${discount}</TotalBoxText>
              </RowApart>
              <RowApart>
                <TotalBoxText>Tax</TotalBoxText>
                <TotalBoxText>${tax}</TotalBoxText>
              </RowApart>
              <RowApart>
                <TotalBoxText style={styles.price}>Subtotal</TotalBoxText>
                {pricePrivacy ? (
                  <TotalBoxText style={styles.price}>${subtotal}</TotalBoxText>
                ) : null}
              </RowApart> */}
              <RowApart>
                <TotalBoxText>Extras Price</TotalBoxText>
                {extras.length > 0 ? (
                  <TotalBoxText>${extrasPrice}</TotalBoxText>
                ) : (
                  <TotalBoxText>$0</TotalBoxText>
                )}
              </RowApart>
            </SubView>
          </TotalBox>
          <TotalBar>
            <TotalBoxText>Total</TotalBoxText>
            {pricePrivacy ? (
              <TotalBoxText>${subtotal + extrasPrice}</TotalBoxText>
            ) : null}
          </TotalBar>
          <RowApart style={{ marginTop: 25, marginBottom: 5 }}>
            <RText>Delete product if not available</RText>
            <View>
              <Switch
                trackColor={{ false: '#767577', true: '#FF9821' }}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </RowApart>
          <RowApart style={{ marginTop: 15, marginBottom: 60 }}>
            <TouchableOpacity onPress={() => setCartItems([])}>
              <RText style={styles.clear}>Clear Cart</RText>
            </TouchableOpacity>
            <Button title={'Check Out'} onPress={onCheckout} />
          </RowApart>
        </Content>
      ) : (
        <Content>
          <Header title={'My Cart'} onBackPress={props.navigation.goBack} />
          <Centered>
            <EmptyCart source={ShoppingBag} />
            <CartText>Cart is empty</CartText>
            <RowApart>
              <Button title={'Back to Shopping'} onPress={onBackToShopping} />
            </RowApart>
          </Centered>
        </Content>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCartItem: (data) => dispatch(deleteCartItem(data)),
    onPlus: (data) => dispatch(onPlus(data)),
    deleteNotAvailable: (data) => dispatch(deleteNotAvailable(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
