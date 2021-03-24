import React, { Component } from 'react';
import { Box, GPSIcon, Input } from './styles';
import GpsIcon from '../../assets/icons/gps.png';
import { InputField } from '../Basic/InputField';

const SearchBar = (props) => {
  return (
    <Box>
      <Input>
        <InputField
          placeholder={'Use my current location'}
          onChangeText={props.onChangeText}
        />
      </Input>
    </Box>
  );
};

export default SearchBar;
