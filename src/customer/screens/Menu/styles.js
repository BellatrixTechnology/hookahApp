import {hp, wp} from '../../helpers/Responsiveness';
import styled from 'styled-components';
import {Colors, Fonts} from '../../config/Theme';

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
`;
export const List = styled.FlatList`
  padding-horizontal: ${wp(5)};
`;

export const Title = styled.Text`
  font-size: ${wp(4)};
  color: ${Colors.PrimaryText};
  font-family: ${Fonts.Medium};
  margin-bottom: ${wp(8)};
`;
export const TopBar = styled.View`
  flex-direction: row;
  margin-bottom: ${wp(10)};
`;
export const OptionBtn = styled.TouchableOpacity`
  margin-right: ${wp(3)};
`;

export const styles = {
  overlay: {
    height: hp(100),
    width: wp(100),
  },
  topLabelActive: {
    color: '#FF9821',
    fontFamily: Fonts.Medium,
  },
  topLabel: {
    color: '#737476',
    marginRight: wp(3),
    fontSize: 3.5,
  },
  optionsContainer: {
    paddingHorizontal: wp(5),
    marginBottom: wp(8),
  },
};
