import React, {useState} from 'react';
import {Modal} from 'react-native';
import Container from '../../components/Basic/Container';
import Header from '../../components/Header';
import ShoppingBag from '../../assets/icons/shoppingBag.png';
import TimeBarImage from '../../assets/icons/timeBar.png';
import {
  Content,
  Centered,
  EmptyCart,
  RowApart,
  Time,
  LightText,
  AccentText,
  TimeBar,
  ModalContent,
  Smiley,
} from './styles';
import Button from '../../components/Button/Button';
import RText from '../../components/Basic/RText';
import RateUs from '../../components/Modals/RateUs';

const YourOrder = (props) => {
  const [rateUsModal, setRateUsModal] = useState(false);

  const onBackToShopping = (item) => {
    setRateUsModal(true);
  };
  const onSubmitFeedback = (item) => {
    setRateUsModal(false);
    props.navigation.navigate('Home');
  };
  return (
    <Container>
      <Content>
        <Header
          title={'Your Order'}
          rightText={'Help'}
          onRightPress={() => null}
          onBackPress={props.navigation.goBack}
        />
        <Centered>
          <AccentText>
            Your order has been placed & will be served after 14:10 PM
          </AccentText>
          <LightText>Estimated time for your order</LightText>
          <Time>14:00 - 14:00</Time>
          <EmptyCart source={ShoppingBag} />
          <TimeBar source={TimeBarImage} />
          <RText style={{fontWeight: 'bold'}}>Please wait for your order</RText>
          <RText style={{fontWeight: 'bold'}}>Thank you</RText>
          <RowApart style={{marginTop: 10}}>
            <Button title={'Back to Shopping'} onPress={onBackToShopping} />
          </RowApart>
        </Centered>
      </Content>
      <RateUs visible={rateUsModal} onClose={onSubmitFeedback}/>
    </Container>
  );
};

export default YourOrder;
