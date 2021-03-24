import {hp, wp} from '../../helpers/Responsiveness';
// import {Fonts} from '../../config/Theme';
import styled from 'styled-components';

export const Logo = styled.Image`
  width: ${wp(70)}px;
  height: ${wp(40)}px;
  right: ${wp(5)}px;
  resize-mode: contain;
`;

export const Background = styled.ImageBackground`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Overlay = styled.ImageBackground`
  height: ${hp(100)}px;
  width: ${wp(100)}px;
  justify-content: center;
  align-items: center;
`;

export const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    height: hp(100),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
};
