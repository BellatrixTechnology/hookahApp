import styled from 'styled-components';
import {wp} from '../../helpers/Responsiveness';
import {Colors, Fonts} from '../../config/Theme';

export const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const CalendarButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${wp(27)}px;
  height: ${wp(8)}px;
  align-self: flex-end;
  background-color: ${Colors.PrimaryText};
  border-radius: ${wp(1)}px;
  margin-horizontal: ${wp(5)}px;
`;
export const CalendarIcon = styled.Image`
  width: ${wp(4)}px;
  height: ${wp(4)}px;
  margin: ${wp(1)}px;
  resize-mode: contain;
`;
export const OpenCloseIcon = styled.Image`
  width: ${wp(2)}px;
  height: ${wp(2)}px;
  margin: ${wp(1)}px;
  resize-mode: contain;
`;
export const StatsIcon = styled.Image`
  width: ${wp(6)}px;
  height: ${wp(6)}px;
  resize-mode: contain;
`;
export const TextBox = styled.View`
  flex: 1;
  padding-horizontal: ${wp(5)}px;
`;
export const Stats = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${wp(5)}px;
`;
export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${wp(5)}px;
`;
export const FullRow = styled.View`
  flex: 1;
`;
export const ProductImage = styled.Image`
  width: ${wp(9)}px;
  height: ${wp(9)}px;
  border-radius: ${wp(5)}px;
  resize-mode: cover;
`;

export const styles = {
  editButton: {
    width: wp(23),
    height: wp(9),
    borderColor: `${Colors.PrimaryText}fff77`,
  },
  darkText: {
    flex: 1,
    fontSize: 3,
    color: Colors.Background,
  },
  darkButton: {
    backgroundColor: Colors.Border,
  },
  whiteText: {
    color: Colors.PrimaryText,
  },
  editText: {
    fontSize: 3,
    color: `${Colors.PrimaryText}fff77`,
  },
  smallText: {
    fontSize: 2.5,
  },
  mediumText: {
    fontSize: 3.5,
    lineHeight: wp(4),
    fontWeight: 'bold',
  },
  greyText: {
    fontSize: 3.5,
    opacity: 0.75,
  },
  title: {
    fontFamily: Fonts.Medium,
    fontSize: 5.5,
  },
  accentText: {
    color: Colors.Accent,
    fontSize: 3.25,
    paddingVertical: wp(2),
    textDecorationLine: 'underline',
  },
  greyBar: {
    backgroundColor: Colors.Border,
    paddingVertical: wp(1),
  },
  rightText: {
    textAlign: 'right',
  },
  verticalPadding: {
    paddingTop: wp(6),
    paddingBottom: wp(0.5),
  },
  noPadding: {
    paddingVertical: wp(0),
    paddingHorizontal: wp(0),
  },
};
