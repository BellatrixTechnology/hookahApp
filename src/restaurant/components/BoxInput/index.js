import React, {Component} from 'react';
import {View} from 'react-native';
import {InputField} from '../Basic/InputField';
import RText from '../Basic/RText';
import {Box, styles} from './style';

const BoxInput = (props) => {
  return (
    <View>
      {props.title && <RText style={styles.title}>{props.title}</RText>}
      <Box style={props.style}>
        <InputField {...props} />
      </Box>
    </View>
  );
};

export default BoxInput;
