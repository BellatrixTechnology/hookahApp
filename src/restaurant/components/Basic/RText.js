import React from 'react';
import {Text} from 'react-native';
import {wp} from '../../helpers/Responsiveness';
import {Colors} from '../../config/Theme';
import {Fonts} from '../../config/Theme';
import styled from 'styled-components/native/dist/styled-components.native.esm';

const RText = (props) => {
  let fontSize = wp(4);
  const {style, children} = props;
  if (style && style.fontSize) {
    fontSize = wp(style.fontSize);
  }

  return <Title style={[style, {fontSize}]}>{children}</Title>;
};

export default RText;

const Title = styled.Text`
  color: ${Colors.PrimaryText};
  font-family: ${Fonts.Regular};
`;
