import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';

const VerticalLine = (props) => {
  return <View style={[styles.verticalLine, props.style]} />;
};

export default VerticalLine;
