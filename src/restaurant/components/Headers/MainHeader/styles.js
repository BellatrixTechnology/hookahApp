import {Colors, Fonts} from '../../../config/Theme';
import styled from 'styled-components';
import {wp} from '../../../helpers/Responsiveness';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${wp(5)}px;
  margin-bottom: ${wp(10)}px;
  background-color: ${Colors.Header};
`;
export const Icon = styled.Image`
  width: ${wp(4)};
  height: ${wp(4)};
  resize-mode: contain;
`;
export const Bell = styled.Image`
  width: ${wp(6)};
  height: ${wp(6)};
  resize-mode: contain;
`;
export const styles = {
  title: {
    fontFamily: Fonts.Medium,
    textAlign: 'center',
    flex: 1,
    marginHorizontal: wp(5),
    fontSize: 4,
  },
};
