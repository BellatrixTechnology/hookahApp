import {hp, wp} from '../../helpers/Responsiveness';
import styled from 'styled-components';
import {Colors, Fonts} from '../../config/Theme';

export const Scroll = styled.ScrollView`
  flex: 1;
  padding-bottom: ${wp(5)}px;
`;
export const Content = styled.ScrollView`
  flex: 1;
  padding: ${wp(5)}px;
`;
export const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const EmptyCart = styled.Image`
  width: ${wp(30)}px;
  height: ${wp(30)}px;
  resize-mode: contain;
`;
export const CartText = styled.Text`
  font-size: ${wp(4.5)}px;
  color: grey;
  font-family: ${Fonts.Regular};
  margin-top: ${wp(5)}px;
  margin-bottom: ${wp(18)}px;
`;
export const CartItem = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${Colors.Border};
  padding: ${wp(2)}px ${wp(2)}px;
  padding-right: 0;
  margin-bottom: ${wp(5)}px;
`;
export const ItemImage = styled.Image`
  width: ${wp(18)}px;
  height: ${wp(18)}px;
  border-radius: ${wp(9)}px;
  margin-top: ${wp(2)}px;
  margin-right: ${wp(1)}px;
`;
export const Details = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: ${wp(3)}px ${wp(2)}px;
`;

export const ItemRight = styled.View`
  justify-content: space-between;
  align-items: flex-end;
`;

export const DeleteBox = styled.TouchableOpacity`
  top: -${wp(2)};
  width: ${wp(7)}
  height: ${wp(7)}
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Border};
`;
export const Delete = styled.Image`
  width: ${wp(4)}px;
  height: ${wp(4)}px;
  resize-mode: contain;
`;
export const QuantityBox = styled.View`
  flex-direction: row;
  border: 1px solid #fff;
  margin-bottom: ${wp(2)}px;
  height: ${wp(8)}px;
  width: ${wp(24)}px;
  justify-content: space-around;
  align-items: center;
`;
export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalBox = styled.View`
  border: 1px solid ${Colors.Border};
  margin-top: ${wp(3)}px;
`;
export const TotalBoxText = styled.Text`
  font-size: ${wp(3.5)};
  color: ${Colors.PrimaryText};
  font-family: ${Fonts.Regular};
  padding-vertical: ${wp(1.5)};
`;
export const TotalBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #1a1a1a;
  padding: ${wp(2)}px ${wp(5)}px;
  border: 1px solid ${Colors.Border};
`;
export const SubView = styled.View`
  padding-top: ${wp(1.5)}px;
  padding-horizontal: ${wp(5)}px;
`;

export const styles = {
  minusPlus: {
    fontSize: 6,
    paddingTop: 6,
  },
  quantityText: {
    fontSize: 3.5,
    width: wp(5),
    textAlign: 'center',
    paddingTop: 3,
  },
  price: {
    color: Colors.Accent,
  },
  clear: {
    color: Colors.Accent,
    fontSize: 3.5,
    textDecorationLine: 'underline',
  },
};
