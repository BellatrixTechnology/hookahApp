import styled from 'styled-components';
import {wp} from '../../helpers/Responsiveness';
import {Colors, Fonts} from '../../config/Theme';

export const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${Colors.PrimaryText};
`;
export const Logo = styled.Image`
  width: ${wp(50)}px;
  height: ${wp(30)}px;
  resize-mode: contain;
  margin-horizontal: ${wp(3)}px;
`;

export const styles = {
  text: {
    fontSize: 4.5,
    color: Colors.Background,
    fontFamily: Fonts.Medium,
    opacity: 0.6,
    margin: wp(3.5),
    paddingLeft: wp(2),
  },
  accent: {
    color: Colors.Accent,
    opacity: 1,
  },
};
