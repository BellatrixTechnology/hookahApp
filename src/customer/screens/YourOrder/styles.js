import {hp, wp} from '../../helpers/Responsiveness';
import styled from 'styled-components';
import {Colors, Fonts} from '../../config/Theme';

export const Content = styled.View`
  flex: 1;
  padding: ${wp(5)}px;
`;
export const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const EmptyCart = styled.Image`
  width: ${wp(30)}px;
  height: ${wp(30)}px;
  margin-top: ${wp(8)}px;
  resize-mode: contain;
`;
export const TimeBar = styled.Image`
  width: ${wp(75)}px;
  height: ${wp(5)}px;
  margin-vertical: ${wp(8)}px;
  resize-mode: contain;
`;
export const Time = styled.Text`
  font-size: ${wp(9.5)}px;
  color: grey;
  font-family: ${Fonts.Regular};
  margin-vertical: ${wp(2)}px;
  opacity: 0.7;
`;
export const AccentText = styled.Text`
  font-size: ${wp(4)}px;
  font-family: ${Fonts.Regular};
  text-align: center;
  color: ${Colors.Accent};
  margin-vertical: ${wp(2)}px;
  padding-horizontal: ${wp(5)}px;
`;
export const LightText = styled.Text`
  font-size: ${wp(4.5)}px;
  color: grey
  opacity: 0.7;
  font-family: ${Fonts.Regular};
  margin-vertical: ${wp(2)}px;
  font-weight: bold
`;
export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const styles = {};
