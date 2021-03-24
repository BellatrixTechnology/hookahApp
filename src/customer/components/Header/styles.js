import {Fonts} from '../../config/Theme';
import styled from 'styled-components';
import {wp} from '../../helpers/Responsiveness';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-horizontal: ${wp(5)};
  margin-bottom: ${wp(10)};
  margin-top :  ${wp(5)};
`;
export const Icon = styled.Image`
  width: ${wp(5.5)};
  height: ${wp(5.5)};
  resize-mode: contain;
`;
export const CartIcon = styled.Image`
  width: ${wp(7)};
  height: ${wp(7)};
  resize-mode: contain;
`;
export const styles = {
  title: {
    fontFamily: Fonts.Medium,
    flex: 1,
    marginHorizontal: wp(5),
    fontSize: 4,
  },
};
