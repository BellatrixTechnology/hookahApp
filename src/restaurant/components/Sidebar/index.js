import React from 'react';
import Container from './../Basic/Container';
import RText from './../Basic/RText';
import { TouchableOpacity, View } from 'react-native';
import LogoImage from '../../../assests/images/splash_logo.png';
import { Content, Logo, styles } from './styles';
import HorizontalLine from '../Lines/HorizontalLine';

const Sidebar = (props) => {
  const onHomePress = () => {
    props.navigation.navigate('Home');
  };
  const onOrdersPress = () => {
    props.navigation.closeDrawer();
    props.navigation.navigate('AllOrders');
  };
  const onCategoryPress = () => {
    props.navigation.closeDrawer();
    props.navigation.navigate('Category');
  };
  const onProductsPress = () => {
    props.navigation.closeDrawer();
    props.navigation.navigate('Products');
  };

  return (
    <Container>
      <Content>
        <Logo source={LogoImage} />
        <View>
          <HorizontalLine dark />
          <TouchableOpacity onPress={onHomePress}>
            <RText style={{ ...styles.text, ...styles.accent }}>Home</RText>
          </TouchableOpacity>
          <HorizontalLine dark />
          <TouchableOpacity onPress={onOrdersPress}>
            <RText style={styles.text}>Orders</RText>
          </TouchableOpacity>
          <HorizontalLine dark />
          <TouchableOpacity onPress={onCategoryPress}>
            <RText style={styles.text}>Category</RText>
          </TouchableOpacity>
          <HorizontalLine dark />
          <TouchableOpacity onPress={onProductsPress}>
            <RText style={styles.text}>Products</RText>
          </TouchableOpacity>
          <HorizontalLine dark />
        </View>
      </Content>
    </Container>
  );
};

export default Sidebar;
