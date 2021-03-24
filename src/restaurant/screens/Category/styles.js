import styled from 'styled-components';
import { wp } from '../../helpers/Responsiveness';
import { Colors, Fonts } from '../../config/Theme';

export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${wp(4.5)}px ${wp(5)}px;
`;
export const ProductImage = styled.Image`
  width: ${wp(10)}px;
  height: ${wp(10)}px;
  border-radius: ${wp(5)}px;
  resize-mode: cover;
`;

export const TextBox = styled.View`
  flex: 1;
  padding-horizontal: ${wp(5)}px;
`;
export const styles = {
  viewButton: {
    height: wp(10),
    paddingHorizontal: wp(5),
    borderWidth: 1,
  },
  title: {
    fontFamily: Fonts.Medium,
    textTransform: 'uppercase',
  },
  verticalPadding: {
    paddingVertical: wp(2),
  },
  noPadding: {
    paddingVertical: wp(0),
    paddingHorizontal: wp(0),
  },
  dualButton: {
    height: wp(8.5),
  },
};
