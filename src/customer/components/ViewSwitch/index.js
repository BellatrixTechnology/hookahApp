import React from 'react';
import {Box, Icon} from './styles';
import GridIcon from '../../assets/icons/grid.png';
import ListIcon from '../../assets/icons/list.png';
import {InputField} from '../Basic/InputField';
import {Image, View} from 'react-native';

const ViewSwitch = (props) => {
  return (
    <Box onPress={props.onPress}>
      <Icon source={props.view ? GridIcon : ListIcon} />
    </Box>
  );
};

export default ViewSwitch;
