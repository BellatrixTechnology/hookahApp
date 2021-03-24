import styled from 'styled-components';
import {wp} from '../../helpers/Responsiveness';
import {Colors, Fonts} from '../../config/Theme';

export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${wp(5)}px;
`;
export const FullRow = styled.View`
  flex: 1;
`;
export const styles = {
  smallText: {
    fontSize: 3,
  },
  mediumText: {
    fontSize: 3.5,
    lineHeight: wp(4),
  },
  accentText: {
    color: Colors.Accent,
    fontSize: 3.25,
    paddingVertical: wp(2),
  },
  greyBar: {
    backgroundColor: Colors.Border,
    paddingVertical: wp(1),
    marginTop: wp(4),
  },
  rightText: {
    textAlign: 'right',
  },
  verticalPadding: {
    paddingVertical: wp(2),
  },
  noPadding: {
    paddingVertical: wp(0),
    paddingHorizontal: wp(0),
    backgroundColor: 'red',
  },
};
