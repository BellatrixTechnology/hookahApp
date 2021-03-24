import styled from 'styled-components';
import {Colors} from '../../config/Theme';
import {wp} from '../../helpers/Responsiveness';

export const Box = styled.View`
  flex: 1;
  flex-direction: row;
  border: 1px solid ${Colors.Border};
  border-radius: 5px;
  height: ${wp(10)}px;
  align-items: center;
  padding-right: ${wp(2)}px;
  padding-left: ${wp(0.5)}px;
`;

export const Input = styled.View`
  flex: 1;
`;
export const GPSIcon = styled.Image`
  width: ${wp(4)};
  height: ${wp(4)};
`;
