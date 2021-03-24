import styled from 'styled-components';
import {Colors} from '../../config/Theme';
import {wp} from '../../helpers/Responsiveness';

export const Box = styled.TouchableOpacity`
  border: 1px solid ${Colors.Border};
  border-radius: 5px;
  height: ${wp(10)}px;
  width: ${wp(15)}px;
  padding: ${wp(2.5)}px;
  margin-left: ${wp(3.5)}px;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.Image`
  width: ${wp(3)};
  height: ${wp(3)};
`;
