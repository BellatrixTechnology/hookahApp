import styled from 'styled-components';
import {wp} from '../../helpers/Responsiveness';
import {Colors, Fonts} from '../../config/Theme';

export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${wp(5)}px;
  padding-bottom: ${wp(3.5)}px;
`;
export const Row = styled.View`
  flex-direction: row;
  padding-horizontal: ${wp(5)}px;
`;
export const RightAligned = styled.View`
  align-items: flex-end;
`;

export const styles = {
  buttons: {
    width: wp(37),
    marginRight: wp(4),
  },
  printBtn: {
    alignSelf: 'flex-start',
    width: wp(25),
    height: wp(8),
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 3,
    paddingVertical: wp(1),
    textAlign: 'center',
  },
  smallRightText: {
    fontSize: 3,
    textAlign: 'right',
    paddingVertical: wp(1),
  },
  mediumText: {
    fontSize: 3.5,
    lineHeight: wp(4),
  },
  accentText: {
    color: Colors.Accent,
    fontSize: 3,
    paddingVertical: wp(2),
  },
  greyBar: {
    backgroundColor: Colors.Border,
    paddingVertical: wp(1),
    marginTop: wp(5),
  },
  rightText: {
    textAlign: 'right',
  },
  verticalPadding: {
    paddingVertical: wp(2),
  },
  horizontalPadding: {
    paddingHorizontal: wp(4),
  },
  noPadding: {
    paddingVertical: wp(0),
    paddingHorizontal: wp(0),
  },
};
