import styled from 'styled-components';
import {Colors} from '../../config/Theme';
import {wp} from '../../helpers/Responsiveness';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #FF9821;
  padding: ${wp(2.5)}px;
  justify-content: center;
  align-items: center;
  width : ${wp(50)}px
`;

export const styles = {
  title: {
    fontSize: 4.5,
    color: 'black',
    textTransform: 'uppercase',

  },
};
