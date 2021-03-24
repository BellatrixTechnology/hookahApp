import React from 'react';
import RText from '../../Basic/RText';
import { ButtonContainer, InvertedButton } from './styles';
import { styles } from './styles';
import { Colors } from '../../../config/Theme';
import { ActivityIndicator } from 'react-native';

const Button = (props) => {
  const Content = () =>
    props.loading ? (
      <ActivityIndicator size="large" color="#ffffff" />
    ) : (
      <RText
        style={{
          ...styles.title,
          ...{ color: props.inverted ? Colors.Accent : Colors.Text },
          ...props.textStyle,
        }}
      >
        {props.title}
      </RText>
    );

  if (props.inverted) {
    return (
      <InvertedButton onPress={props.onPress} style={props.style}>
        <Content />
      </InvertedButton>
    );
  } else {
    return (
      <ButtonContainer onPress={props.onPress} style={props.style}>
        <Content props />
      </ButtonContainer>
    );
  }
};

export default Button;
