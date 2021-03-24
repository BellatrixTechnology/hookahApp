import React from 'react';
import RText from '../Basic/RText';
import StarIcon from '../../assets/icons/star.png';
import StarInactiveIcon from '../../assets/icons/star-inactive.png';
import Location from '../../assets/icons/location.png';
import {
  AdBox,
  Data,
  LocationHolder,
  LocationIcon,
  ProductImage,
  Rating,
  Star,
  styles,
  Breaker,
} from './styles';

const LocationCard = (props) => {
  return (
    <AdBox
      activeOpacity={0.9}
      onPress={props.onPress}
      horizontal={props.horizontal}
    >
      <ProductImage
        horizontal={props.horizontal}
        source={{
          uri: 'https://picsum.photos/id/588/200/300' || props.item.image,
        }}
      />
      <Data horizontal={props.horizontal}>
        <RText style={styles.title}>{props.item.brandName}</RText>
        <LocationHolder>
          <LocationIcon source={Location} />
          <RText horizontal={props.horizontal} style={styles.location}>
            Chicago
          </RText>
        </LocationHolder>
        <Rating>
          {[...Array(3)].map((item, index) => (
            <Star source={StarIcon} />
          ))}
          {[...Array(5 - 3)].map((item, index) => (
            <Star source={StarInactiveIcon} />
          ))}
          <RText style={styles.rating}>3</RText>
        </Rating>
      </Data>
      {props.horizontal && <Breaker />}
    </AdBox>
  );
};

export default LocationCard;
