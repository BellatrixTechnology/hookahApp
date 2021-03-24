import {hp, wp} from '../../../helpers/Responsiveness';
import styled from 'styled-components';
import {Colors, Fonts} from '../../../config/Theme';

export const ModalContent = styled.View`
  width: 100%;
  background-color: ${Colors.PrimaryText};
  justify-content: center;
  align-items: center;
`;
export const Background = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #000000e6;
  padding: ${wp(5)}px;
`;
export const Smiley = styled.Image`
  width: ${wp(10)}px;
  height: ${wp(10)}px;
  margin-top: ${wp(8)}px;
  margin-bottom: ${wp(2)}px;
  resize-mode: contain;
`;
export const Star = styled.Image`
  width: ${wp(6)}px;
  height: ${wp(6)}px;
  margin-horizontal: ${wp(1)}px;
  margin-top: ${wp(2)}px;
  margin-bottom: ${wp(8)}px;
  resize-mode: contain;
`;
export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const styles = {
  rateUs: {
    color: Colors.Accent,
    fontSize: 6.5,
    fontFamily: Fonts.Medium,
    textTransform: 'uppercase',
  },
  question: {
    color: Colors.SecondaryText,
    marginTop: wp(5),
  },
};
