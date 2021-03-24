import {Colors} from '../../../config/Theme';
import styled from 'styled-components';

export const Line = styled.View`
  height: 1px;
  ${({dark}) => `background-color: ${dark ? Colors.Divider : Colors.Border};`}
`;
