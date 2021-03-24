import {hp, wp} from '../../../helpers/Responsiveness';
import styled from 'styled-components';
import {Colors, Fonts} from '../../../config/Theme';

export const ModalContent = styled.View`
  width: 100%;
  background-color: ${Colors.PrimaryText};
  justify-content: center;
  padding: ${wp(4)}px;
`;
export const CancelButton = styled.TouchableOpacity`
  align-self: flex-end;
`;
export const CancelImage = styled.Image`
  height: 15px;
  width: 15px;
`;
export const Background = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #000000e6;
  padding: ${wp(5)}px;
`;
export const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding-top: 35px;
  margin-left: 15px;
`;
export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 18px;
  margin-top: 7px;
`;
export const ProductImage = styled.Image`
  width: ${wp(14)}px;
  height: ${wp(14)}px;
  border-radius: ${wp(7)}px;
  resize-mode: cover;
  margin-right: ${wp(4)}px;
`;

export const styles = {
  title: {
    color: Colors.Text,
    fontSize: 4.5,
  },
  description: {
    color: Colors.Text,
    fontSize: 3,
  },
  question: {
    color: 'black',
    marginTop: wp(5),
    marginLeft: 15,
    fontSize: 3.5,
  },
  button: {
    width: wp(30),
  },
};
