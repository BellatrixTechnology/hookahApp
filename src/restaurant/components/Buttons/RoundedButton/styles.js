import styled from 'styled-components';
import {Colors, Fonts} from '../../../config/Theme';
import {wp} from '../../../helpers/Responsiveness';

export const ButtonContainer = styled.TouchableOpacity`
  ${({red}) => `background-color: ${red ? '#FF1111' : '#C9C9C9'}`};
  border-radius: ${wp(1)}px;
  padding-vertical: ${wp(1.5)}px;
  margin-vertical: ${wp(3)}px;
  padding-top: ${wp(2)}px;
  justify-content: center;
  align-items: center;
`;

export const styles = {
  title: {
    color: Colors.Background,
    fontFamily: Fonts.Medium,
    fontSize: 3.5,
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
};
