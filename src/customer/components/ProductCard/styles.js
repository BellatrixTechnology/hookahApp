import {hp, wp} from '../../helpers/Responsiveness';
import {Colors, Fonts} from '../../config/Theme';
import styled from 'styled-components';

export const AdBox = styled.TouchableOpacity`
  width: ${wp(37)}px;
  justify-content: center;
  margin-bottom: ${wp(12)}px;
  margin-right: ${wp(15)}px;
`;
export const ProductImage = styled.Image`
  width: ${wp(38)}px;
  height: ${wp(37)}px;
  border-radius: ${wp(1.5)}px;
`;
export const Data = styled.View`
  padding-top: ${wp(2)}px;
`;

export const styles = {
  title: {
    fontFamily: Fonts.Bold,
    fontSize: 4,
    height: wp(6),
  },
  price: {
    fontSize: 3.25,
    marginTop: 5,
    color: Colors.Accent,
    height: wp(6),
  },
  stock: {
    fontSize: 3.25,
    color: 'grey'
  },
};
