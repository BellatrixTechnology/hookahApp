import { hp, wp } from '../../helpers/Responsiveness';
// import {Fonts} from '../../config/Theme';
import styled from 'styled-components';
import { Colors, Fonts } from '../../config/Theme';

export const Background = styled.ImageBackground`
  height: ${hp(100)};
  width: ${wp(100)};
`;
export const Overlay = styled.View`
  height: ${hp(100)};
  width: ${wp(100)};
  background-color: #000000d5;
`;
export const Scroll = styled.ScrollView`
  flex:1
  padding-top: ${wp(8)};
  padding-bottom: ${wp(5)};
  padding-horizontal: ${wp(5)};
`;

export const Title = styled.Text`
  font-size: ${wp(4)};
  color: ${Colors.PrimaryText};
  font-family: ${Fonts.Bold};
  margin-bottom: ${wp(6)};
  margin-top: ${wp(10)};
`;
export const TopBar = styled.View`
  flex-direction: row;
  margin-bottom: ${wp(7)};
`;
export const styles = {
  container: {
    backgroundColor: 'black',
  },
  overlay: {
    height: hp(100),
    width: wp(100),
  },
};
