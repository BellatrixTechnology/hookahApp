import React from 'react';
import {View, TextInput} from 'react-native';
import {Colors} from '../../config/Theme';
import styled from 'styled-components';
import {wp} from '../../helpers/Responsiveness';

export const InputField = (props) => {
  return (
    <Border style={[styles.border, props.border]}>
      <Input
        {...props}
        editable={props.editable}
        // ref={(ref) => (this.inputRef = ref)}
        style={props.style}
        placeholderTextColor={Colors.SecondaryText}
        onChangeText={props.onChangeText}
        value={props.value}
        onSubmitEditing={props.onSubmitEditing}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType || 'default'}
        secureTextEntry={props.secureTextEntry || false}
      />
    </Border>
  );
};

const Border = styled.View`
  width: 100%;
  justify-content: center;
`;
const Input = styled.TextInput`
  color: ${Colors.PrimaryText};
  font-size: ${wp(3)}px;
`;

const styles = {
  border: {
    width: '100%',
  },
};
