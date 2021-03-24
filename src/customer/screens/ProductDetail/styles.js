import { hp, wp } from '../../helpers/Responsiveness';
import styled from 'styled-components';
import { Colors, Fonts } from '../../config/Theme';
import { getStatusBarHeight } from '../../helpers/iPhoneXHelper';

export const Scroll = styled.ScrollView`
  flex: 1;
  padding-bottom: ${wp(5)}px;
`;
export const ProductImage = styled.Image`
  width: 100%;
  height: ${wp(80)}px;
`;
export const Details = styled.View`
  padding: ${wp(5)}px;
`;
export const CheckoutBar = styled.View`
  background-color: ${Colors.Accent};
  padding: ${wp(5)}px;
  flex-direction: row;
  border-top-left-radius: ${wp(5)};
  border-top-right-radius: ${wp(5)};
`;
export const FullView = styled.View`
  flex: 1;
  margin-bottom: 5;
  margin-right: 15
  justify-content: center
`;
export const CheckoutBtn = styled.TouchableOpacity`
  background-color: ${Colors.PrimaryText};
  align-items: center;
  width: ${wp(23.5)};
  height: 35;
  border-radius: ${wp(5)}px;
  justify-content: center;
`;
export const MinusPlusBtn = styled.TouchableOpacity`
  background-color: #e5891e;
  width: ${wp(10)}px;
  align-items: center;
  margin-horizontal: ${wp(1)}px;
`;

export const Title = styled.Text`
  font-size: ${wp(4)}px;
  color: ${Colors.PrimaryText};
  font-family: ${Fonts.Medium};
  margin-bottom: ${wp(8)}px;
`;
export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Row = styled.View`
  flex-direction: row;
`;
export const SizeBtn = styled.TouchableOpacity`
  margin-right: ${wp(3)}px;
  ${({ isActive }) =>
    ` border: ${isActive ? '3px solid ' + Colors.Accent : '1.5px solid #FFF'}`};
  width: ${wp(10)}px;
  height: ${wp(10)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${wp(6)}px;
`;
export const InstructionBox = styled.View`
  height: ${wp(20)};
  border: 1px solid ${Colors.Border};
  margin-bottom: 13px;
`;
export const ExtraBox = styled.View`
  margin-bottom: ${wp(5)}px;
  padding-vertical: ${wp(2.5)}px;
  flex-direction: row;
  border: 1px solid ${Colors.Border};
  padding-horizontal: ${wp(1.2)};
`;
export const ExtraItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 60px;
  border-radius: ${wp(3)};
  margin-horizontal: ${wp(1)};
  ${({ selected }) =>
    `background-color: ${selected ? Colors.PrimaryText : Colors.Border}`};
`;
export const ExtraText = styled.Text`
  font-size: ${wp(3.25)}px;
  ${({ selected }) => `color: ${selected ? 'black' : 'grey'}`};
  font-family: ${Fonts.Medium};
`;
export const styles = {
  title: {
    flex: 0.8,
    fontFamily: Fonts.Medium,
    marginBottom: wp(4),
    fontWeight: 'bold',
    fontSize: wp(1.3),
  },
  price: {
    color: Colors.Accent,
  },
  greyText: {
    color: Colors.SecondaryText,
    fontSize: '3.3',
    marginTop: wp(0.5),
    marginBottom: wp(1),
  },
  sizeText: {
    fontSize: 3,
  },
  checkoutText: {
    fontSize: 3.8,
    color: Colors.Text,
  },
  extraText: {
    fontSize: 3.5,
    marginLeft: wp(2),
    marginTop: wp(6),
    marginBottom: wp(2),
    fontWeight: 'bold',
  },
  extraIem: {
    fontSize: 3,
  },
  minusPlus: {
    fontSize: 5,
    color: Colors.Text,
  },
  quantityText: {
    color: Colors.Text,
    width: wp(8),
    textAlign: 'center',
    alignSelf: 'center',
  },
  line: {
    marginVertical: wp(5),
    marginHorizontal: wp(-5),
  },
  header: {
    // position: 'absolute',
    paddingTop: getStatusBarHeight(false) + 10,
    zIndex: 1000,
    // marginTop: 15,
  },
  overlay: {
    height: hp(100),
    width: wp(100),
  },
  inputField: {
    textAlignVertical: 'top',
    paddingLeft: wp(4),
  },
};
