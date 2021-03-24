import styled from 'styled-components';
import {Colors, Fonts} from '../../config/Theme';
import {wp} from '../../helpers/Responsiveness';

export const Box = styled.View`
  height: ${wp(10)}px;
  width: ${wp(100)}px;
  padding: ${wp(2.5)}px;
  align-items: center;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`

`;

export const styles = {
  title: {
    fontFamily: Fonts.Medium,
    marginHorizontal: wp(3),
    fontSize: wp(0.8),
  },
};
