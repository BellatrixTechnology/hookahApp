import React from 'react';
import {Box, styles} from './styles';
import RText from '../Basic/RText';

const topNavigation = (props) => {
  return (
    <Box onPress={props.onPress}>
      <RText style={styles.title}>{'Classic'}</RText>
      <RText style={styles.title}>{'Herbals'}</RText>
      <RText style={styles.title}>{'Beverages '}</RText>
      <RText style={styles.title}>{'Accessories'}</RText>
    </Box>
  );
};

export default topNavigation;
