import React from 'react';
import RText from '../../Basic/RText';
import { ButtonContainer } from './styles';
import { styles } from './styles';

const RoundedButton = (props) => {
  return (
    <ButtonContainer
      disabled={props.diabled}
      onPress={props.onPress}
      style={props.style}
      red={props.red}
    >
      <RText
        style={{
          ...styles.title,
          ...props.textStyle,
        }}
      >
        {props.title}
      </RText>
    </ButtonContainer>
  );
};

export default RoundedButton;
