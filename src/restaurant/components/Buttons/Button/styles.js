import styled from 'styled-components';
import {Colors} from '../../../config/Theme';
import {wp} from '../../../helpers/Responsiveness';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${Colors.Accent};
  border: 2px solid ${Colors.Accent};
  padding-horizontal: ${wp(3)}px;
  margin-vertical: ${wp(3)}px;
  justify-content: center;
  align-items: center;
`;
export const InvertedButton = styled.TouchableOpacity`
  background-color: ${Colors.Background};
  border: 2px solid ${Colors.Accent};
  padding-horizontal: ${wp(3)}px;
  margin-vertical: ${wp(3)}px;
  justify-content: center;
  align-items: center;
`;

export const styles = {
  title: {
    fontSize: 3,
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
};
