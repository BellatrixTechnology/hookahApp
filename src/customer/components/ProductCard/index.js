import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import RText from '../Basic/RText';
import { AdBox, Data, ProductImage, styles } from './styles';
import HorizontalLine from '../HorizontalLine';
import { socket } from '../../../config/Sockets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProductCard = (props) => {
  const [inStock, setInStock] = useState(false);
  const [compareRestaurant, setCompareRestaurant] = useState('');
  const [pricePrivacy, setPricePrivacy] = useState(false);
  useEffect(() => {
    if (props.item.quantity > 0) {
      setInStock(true);
    } else {
      setInStock(false);
    }
    console.log('Testing socket -------->>>>>>>>>>');
    socket.emit('TOGGLE_PRICE', { restaurant_id: props.restaurant });
    socket.on('TOGGLE_PRICE', (restaurant) => {
      console.log('Privacy is', restaurant.prices);
      setPricePrivacy(restaurant.prices);
    });
  }, []);
  return (
    // <AdBox onPress={props.onPress}>
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: wp(37),
        justifyContent: 'center',
        marginBottom: wp(12),
        marginRight: wp(15),
      }}
      onPress={props.onPress}
    >
      <ProductImage source={{ uri: props.item.avatar }} />
      <Data>
        <RText style={styles.title}>{props.item.title}</RText>
        {pricePrivacy ? (
          <RText style={styles.price}>${props.item.price}</RText>
        ) : null}
        <RText style={styles.stock}>{inStock ? 'In' : 'Out of'} Stock</RText>
      </Data>
      <HorizontalLine style={{ opacity: 0.5 }} />
    </TouchableOpacity>
  );
};

export default ProductCard;
