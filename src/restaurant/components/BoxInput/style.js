import styled from 'styled-components';
import { wp } from '../../helpers/Responsiveness';
import { Colors, Fonts } from '../../config/Theme';

export const Box = styled.View`
  justify-content: center;
  padding-horizontal: ${wp(1.5)}px;
  border: 1px solid ${Colors.Border};
  border-radius: ${wp(1)}px;
  height: ${wp(11)}px;
  margin-top: ${wp(2.5)}px;
  margin-bottom: ${wp(4)}px;
`;
export const styles = {
  title: {
    fontSize: 3.5,
    paddingLeft: wp(2),
  },
};
