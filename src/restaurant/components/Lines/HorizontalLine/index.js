import React from 'react';
import {Line} from './styles';

const HorizontalLine = (props) => {
  return <Line style={[props.style, props.style]} dark={props.dark} />;
};

export default HorizontalLine;
