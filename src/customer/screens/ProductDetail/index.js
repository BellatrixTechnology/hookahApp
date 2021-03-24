import React, { useState, useEffect } from 'react';
import BackgroundImage from '../../assets/images/homeBackground.jpg';
import Container from '../../components/Basic/Container';
import {
  CheckoutBar,
  CheckoutBtn,
  Details,
  ExtraBox,
  ExtraItem,
  ExtraText,
  FullView,
  InstructionBox,
  MinusPlusBtn,
  ProductImage,
  Row,
  RowApart,
  Scroll,
  SizeBtn,
  styles,
} from './styles';
import Header from '../../components/Header';
import Item from '../../assets/images/background.jpg';
import RText from '../../components/Basic/RText';
import HorizontalLine from '../../components/HorizontalLine';
import { Colors } from '../../config/Theme';
import { InputField } from '../../components/Basic/InputField';
import Button from '../../components/Button/Button';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { Extras } from '../../MockData';
import { connect } from 'react-redux';
import { socket } from '../../../config/Sockets';
import { onPlus, userCart } from '../../../redux/user/actions';
import index from '../Home';

const options = ['Classic', 'Khaloud', 'Brouhd'];

const ProductDetail = (props) => {
  const { data, _restaurant } = props.route.params;
  const [activeOption, setActiveOption] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [cartAdded, setCartAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [pricePrivacy, setPricePrivacy] = useState(false);

  useEffect(() => {
    socket.emit('TOGGLE_PRICE', { restaurant_id: _restaurant });
    socket.on('TOGGLE_PRICE', (restaurant) => {
      // console.log('Privacy is', restaurant.prices);
      setPricePrivacy(restaurant.prices);
    });
  }, []);

  const onExtraPress = (item) => {
    if (!selectedExtras.includes(item)) {
      setSelectedExtras([...selectedExtras, item]);
    } else {
      setSelectedExtras(selectedExtras.filter((e) => e !== item));
    }
  };
  const onPlus = (item) => {
    setQuantity(quantity + 1);
  };
  const onMinus = (item) => {
    setQuantity(quantity != 1 ? quantity - 1 : 1);
  };
  const onCheckoutPress = async (item) => {
    let AddCart = {
      // ...props.state.userCart,
      [data._id]: {
        ...data,
        quantity: quantity,
        _restaurant: _restaurant,
        specialInstructions: specialInstructions,
      },
    };
    props.userCart(AddCart);
    setCartAdded(false);
    props.navigation.navigate('MyCart', {
      extras: selectedExtras,
      specialInstructions: specialInstructions,
      variant: activeOption,
    });
  };

  const addToCart = async (data, _restaurant, specialInstructions) => {
    setCartAdded(true);
  };

  return (
    <Container background={BackgroundImage} translucent>
      <Header
        style={styles.header}
        onBackPress={props.navigation.goBack}
        onRightPress={() =>
          props.navigation.navigate('MyCart', {
            extras: '',
            specialInstructions: 'none',
            variant: 'not selected',
          })
        }
      />
      <Scroll>
        <ProductImage
          source={{ uri: data.avatar }}
          style={{ resizeMode: 'contain' }}
        />

        <Details>
          <View>
            <RowApart>
              {/*<RText style={styles.title}>Hookah decorated with a orange</RText>*/}
              <RText style={styles.title}>{data.name}</RText>
              {pricePrivacy ? (
                <RText style={styles.price}>${data.price}</RText>
              ) : null}
            </RowApart>

            <RText
              style={{ fontWeight: 'bold', fontSize: 4.5, marginBottom: 3.5 }}
            >
              Detail
            </RText>
            {/*<RText style={styles.greyText}>*/}
            {/*  A large serving of 160 grams of ice-cream, with a base and middle*/}
            {/*  layer of brownie, Hershey's syrup and chocolate shavings.*/}
            {/*</RText>*/}

            <RText style={styles.greyText}>{data.description}</RText>
          </View>

          <>
            <HorizontalLine style={styles.line} />

            <Row>
              {options.map((item) => {
                const isActive = item === activeOption;
                return (
                  <SizeBtn
                    style={{ width: 80 }}
                    isActive={isActive}
                    onPress={() => setActiveOption(item)}
                    disabled={cartAdded}
                  >
                    <RText
                      style={{
                        ...styles.sizeText,
                        ...{
                          color: isActive ? Colors.Accent : 'white',
                        },
                      }}
                    >
                      {item}
                    </RText>
                  </SizeBtn>
                );
              })}
            </Row>
            <RText style={styles.extraText}>Extras</RText>
            <ExtraBox>
              {Extras.map((item, index) => {
                const selected = selectedExtras.includes(item);
                return (
                  <ExtraItem
                    selected={selected}
                    onPress={() => onExtraPress(item)}
                    disabled={cartAdded}
                  >
                    <ExtraText selected={selected}>{item}</ExtraText>
                  </ExtraItem>
                );
              })}
            </ExtraBox>
            <RText
              style={{ fontWeight: 'bold', fontSize: 4.5, marginBottom: 4 }}
            >
              SPECIAL INSTRUCTIONS
            </RText>
            <RText style={styles.greyText}>
              Please let us know if you are allergic to anything of if we need
              to avoid anything
            </RText>
            <InstructionBox>
              <InputField
                multiline={true}
                placeholder={'Write here'}
                style={styles.inputField}
                value={specialInstructions}
                editable={!cartAdded}
                onChangeText={(e) => setSpecialInstructions(e)}
              />
            </InstructionBox>
            <RowApart>
              <View />
              {cartAdded ? (
                <View style={{ flex: 1 }}>
                  <CheckoutBar>
                    <FullView />
                    <FullView>
                      <TouchableWithoutFeedback
                        onPress={() => setCartAdded(false)}
                      >
                        <Image
                          tintColor={'#000'}
                          style={{
                            width: 26,
                            height: 26,
                            resizeMode: 'contain',
                            position: 'absolute',
                            left: -90,
                          }}
                          source={require('../../../customer/assets/icons/closeIcon.png')}
                        />
                      </TouchableWithoutFeedback>
                      <CheckoutBtn onPress={onCheckoutPress}>
                        <RText style={styles.checkoutText}>Check Out</RText>
                      </CheckoutBtn>
                    </FullView>
                    <FullView>
                      <Row>
                        <MinusPlusBtn onPress={onMinus}>
                          <RText style={styles.minusPlus}>-</RText>
                        </MinusPlusBtn>
                        <RText style={styles.quantityText}>{quantity}</RText>
                        <MinusPlusBtn onPress={onPlus}>
                          <RText style={styles.minusPlus}>+</RText>
                        </MinusPlusBtn>
                      </Row>
                    </FullView>
                  </CheckoutBar>
                </View>
              ) : (
                <Button
                  title={'Add to cart'}
                  // onPress={() => setCartAdded(true);}
                  onPress={() =>
                    addToCart(
                      data,
                      _restaurant,
                      specialInstructions,
                      props.state.userCart
                    )
                  }
                />
              )}
            </RowApart>
          </>
        </Details>
      </Scroll>
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
    userCart: (data) => dispatch(userCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
