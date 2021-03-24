import React, { useEffect } from 'react';
import { View } from 'react-native';
import LogoImage from '../../assests/images/splash_logo.png';
import BackgroundImage from '../../assests/images/background.jpg';
import { styles, Logo, Background } from './styles';
import SelectSide from '../SelectSide';
import Container from '../../customer/components/Basic/Container';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      console.log(props.user);
      if (props.user.type === 'restaurant') {
        // props.navigation.navigate('RestaurantHomeStack');
        props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'RestaurantHomeStack' }],
          })
        );
      } else if (props.user.type === 'customer') {
        // props.navigation.navigate('CustomerHomeStack');
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'CustomerHomeStack' }],
          })
        );
      } else {
        props.navigation.navigate('SelectSide');
      }
    }, 2000);
  });

  return (
    <Container style={styles.container} translucent={true}>
      <Background source={BackgroundImage}>
        <Logo source={LogoImage} />
      </Background>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Splash);
