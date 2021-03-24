import { hp, wp } from '../../helpers/Responsiveness';
import { Colors, Fonts } from '../../config/Theme';
import styled from 'styled-components';

export const AdBox = styled.TouchableOpacity`
  width: ${wp(40)};
  justify-content: center;
  margin-bottom: ${wp(8)};
  margin-right: ${wp(10)};
  ${({ horizontal }) => `flex-direction: ${horizontal ? 'row' : 'column'}`};
  ${({ horizontal }) => `margin-top: ${horizontal ? `${wp(2.5)}px` : '0px'}`};
`;
export const ProductImage = styled.Image`
  ${({ horizontal }) =>
    ` width: ${horizontal ? `${wp(28)}px` : `${wp(40)}px`}`};
  ${({ horizontal }) => ` margin-left: ${horizontal ? `${wp(30)}px` : '0px'}`};
  height: ${wp(28)}px;
  border-radius: ${wp(1.5)}px;
`;
export const Data = styled.View`
  padding: ${wp(2)}px;
  ${({ horizontal }) =>
    `margin-left: ${horizontal ? `${wp(4)}px` : `${wp(0)}px`}`};
`;

export const LocationHolder = styled.View`
  flex-direction: row;
  margin-left: -8;
`;
export const LocationIcon = styled.Image`
  width: ${wp(4)}px;
  height: ${wp(4)}px;
  margin-right: 1px;
  resize-mode: contain;
`;

export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: -5;
`;
export const Star = styled.Image`
  flex-direction: row;
  width: ${wp(2)}px;
  height: ${wp(2)}px;
  margin-right: 1px;
`;

export const Breaker = styled.View`
  background-color: grey;
  width: ${wp(200)}px;
  height: ${wp(0.15)}px;
  position: absolute;
  bottom: -15;
  opacity: 0.5px;
`;

export const styles = {
  title: {
    fontFamily: Fonts.Medium,
    fontSize: 3.5,
    marginLeft: -6,
    marginBottom: 10
  },
  location: {
    fontSize: 3,
    color: Colors.Accent,
    height: wp(7),
    marginLeft: 3,
  },
  rating: {
    marginTop: 2,
    fontSize: 2,
    paddingLeft: wp(1),
  },
};
