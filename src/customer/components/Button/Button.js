import React from 'react';
import RText from '../Basic/RText';
import {ButtonContainer} from './styles';
import {styles} from './styles';

const Button = (props) => {
  return (
    <ButtonContainer onPress={props.onPress}>
      <RText style={styles.title}>{props.title}</RText>
    </ButtonContainer>
  );
};

export default Button;
