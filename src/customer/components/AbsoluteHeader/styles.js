import {Fonts} from '../../config/Theme';
import styled from 'styled-components';
import {wp} from '../../helpers/Responsiveness';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${wp(10)};
  position: absolute;
`;
export const Icon = styled.Image`
  width: ${wp(4)};
  height: ${wp(4)};
`;

export const styles = {
  title: {
    fontFamily: Fonts.Medium,
    flex: 1,
    marginHorizontal: wp(5),
    fontSize: 4,
  },
};
